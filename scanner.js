// BARCODE SCANNER FUNCTIONALITY
let scannerActive = false;
let videoStream = null;

function initBarcodeScanner() {
    console.log('Barcode scanner initialized');
}

function startScanner() {
    if (scannerActive) return;
    
    const scannerContainer = document.getElementById('scanner-container');
    if (!scannerContainer) {
        alert('Scanner container not found');
        return;
    }
    
    // Check if browser supports camera
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Camera access not supported by your browser. Please use manual entry.');
        return;
    }
    
    // Request camera permission
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1280 },
            height: { ideal: 720 }
        } 
    })
    .then(function(stream) {
        scannerActive = true;
        videoStream = stream;
        
        const video = document.createElement('video');
        video.srcObject = stream;
        video.setAttribute('playsinline', true);
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        
        // Clear container and add video
        scannerContainer.innerHTML = '';
        scannerContainer.appendChild(video);
        
        // Play video
        video.play();
        
        // Show stop button
        document.getElementById('start-scanner').style.display = 'none';
        document.getElementById('stop-scanner').style.display = 'inline-block';
        
        // Add scanning overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.border = '3px solid var(--secondary)';
        overlay.style.boxSizing = 'border-box';
        scannerContainer.appendChild(overlay);
        
        // Add scanning text
        const scanningText = document.createElement('div');
        scanningText.style.position = 'absolute';
        scanningText.style.bottom = '10px';
        scanningText.style.left = '0';
        scanningText.style.width = '100%';
        scanningText.style.textAlign = 'center';
        scanningText.style.color = 'white';
        scanningText.style.background = 'rgba(0,0,0,0.7)';
        scanningText.style.padding = '10px';
        scanningText.innerHTML = '<i class="fas fa-search"></i> Point camera at barcode';
        scannerContainer.appendChild(scanningText);
        
        // For demo purposes, simulate barcode detection
        setTimeout(() => {
            if (!scannerActive) return;
            simulateBarcodeDetection(video);
        }, 2000);
        
    })
    .catch(function(error) {
        console.error('Camera error:', error);
        alert('Unable to access camera. Please make sure you have granted camera permissions.');
    });
}

function stopScanner() {
    if (!scannerActive) return;
    
    // Stop video stream
    if (videoStream) {
        const tracks = videoStream.getTracks();
        tracks.forEach(track => track.stop());
        videoStream = null;
    }
    
    // Reset UI
    const scannerContainer = document.getElementById('scanner-container');
    if (scannerContainer) {
        scannerContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;"><i class="fas fa-camera" style="font-size: 3em; color: #999;"></i></div>';
    }
    
    scannerActive = false;
    document.getElementById('start-scanner').style.display = 'inline-block';
    document.getElementById('stop-scanner').style.display = 'none';
}

function simulateBarcodeDetection(video) {
    if (!scannerActive) return;
    
    // For demo, pick the first barcode from the database
    // In a real app, you'd use a barcode scanning library
    const scannerContainer = document.getElementById('scanner-container');
    const detectionOverlay = document.createElement('div');
    detectionOverlay.style.position = 'absolute';
    detectionOverlay.style.top = '0';
    detectionOverlay.style.left = '0';
    detectionOverlay.style.width = '100%';
    detectionOverlay.style.height = '100%';
    detectionOverlay.style.background = 'rgba(0, 51, 102, 0.8)';
    detectionOverlay.style.display = 'flex';
    detectionOverlay.style.flexDirection = 'column';
    detectionOverlay.style.alignItems = 'center';
    detectionOverlay.style.justifyContent = 'center';
    detectionOverlay.style.color = 'white';
    detectionOverlay.style.textAlign = 'center';
    detectionOverlay.style.padding = '20px';
    
    detectionOverlay.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 4em; color: #4CAF50; margin-bottom: 20px;"></i>
        <h2 style="margin-bottom: 10px;">Barcode Scanned!</h2>
        <p style="font-size: 1.2em; margin-bottom: 20px;">Demo barcode detected</p>
        <div class="spinner" style="margin: 20px 0;"></div>
        <p>Auto-filling account information...</p>
    `;
    
    scannerContainer.appendChild(detectionOverlay);
    
    // Auto-fill after delay
    setTimeout(() => {
        if (!scannerActive) return;
        
        // For demo, use the first account
        // In real app, this would come from actual barcode scanning
        const manualBarcodeInput = document.getElementById('manual-barcode');
        if (manualBarcodeInput) {
            // Simulate entering a barcode
            manualBarcodeInput.value = "5673 9183 4624 3120";
            manualBarcodeInput.dispatchEvent(new Event('input'));
        }
        
        // Stop scanner
        stopScanner();
        
    }, 1500);
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBarcodeScanner);
} else {
    initBarcodeScanner();
}

// Export for browser
if (typeof window !== 'undefined') {
    window.startScanner = startScanner;
    window.stopScanner = stopScanner;
    window.initBarcodeScanner = initBarcodeScanner;
}
