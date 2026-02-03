// ==============================================
// GEORGE ELIOT BANK - BARCODE SCANNER
// ==============================================

let scannerActive = false;

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
        const video = document.createElement('video');
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // Required for iOS
        video.style.width = '100%';
        video.style.height = '100%';
        
        // Clear container and add video
        scannerContainer.innerHTML = '';
        scannerContainer.appendChild(video);
        
        // Play video
        video.play();
        
        // Show stop button
        document.getElementById('start-scanner').style.display = 'none';
        document.getElementById('stop-scanner').style.display = 'inline-block';
        
        // For demo purposes, we'll simulate barcode scanning
        // In a real app, you would use a barcode scanning library like Quagga.js
        simulateBarcodeDetection(video);
        
        console.log('Camera started successfully');
    })
    .catch(function(error) {
        console.error('Camera error:', error);
        alert('Unable to access camera: ' + error.message + '\n\nPlease allow camera permissions and try again.');
    });
}

function stopScanner() {
    if (!scannerActive) return;
    
    const scannerContainer = document.getElementById('scanner-container');
    if (scannerContainer) {
        const video = scannerContainer.querySelector('video');
        if (video && video.srcObject) {
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        scannerContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;"><i class="fas fa-camera" style="font-size: 3em; color: #999;"></i></div>';
    }
    
    scannerActive = false;
    document.getElementById('start-scanner').style.display = 'inline-block';
    document.getElementById('stop-scanner').style.display = 'none';
}

function simulateBarcodeDetection(video) {
    // This is a simulation - in real app, use a barcode library
    // We'll simulate finding a barcode after 3 seconds for demo
    
    setTimeout(() => {
        if (!scannerActive) return;
        
        // For demo, randomly pick a barcode from database
        const barcodes = Object.values(BankDatabase.BARCODES);
        const randomBarcode = barcodes[Math.floor(Math.random() * barcodes.length)];
        
        // Display detected barcode
        const barcodeDiv = document.createElement('div');
        barcodeDiv.style.position = 'absolute';
        barcodeDiv.style.top = '50%';
        barcodeDiv.style.left = '50%';
        barcodeDiv.style.transform = 'translate(-50%, -50%)';
        barcodeDiv.style.background = 'rgba(0, 51, 102, 0.9)';
        barcodeDiv.style.color = 'white';
        barcodeDiv.style.padding = '20px';
        barcodeDiv.style.borderRadius = '5px';
        barcodeDiv.style.textAlign = 'center';
        barcodeDiv.style.border = '3px solid #FFCC00';
        barcodeDiv.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 2em; margin-bottom: 10px;"></i><br>
            <strong>Barcode Detected!</strong><br>
            Code: ${randomBarcode}<br>
            <small>Auto-filling account information...</small>
        `;
        
        // Add to scanner container
        const container = document.getElementById('scanner-container');
        container.appendChild(barcodeDiv);
        
        // Auto-fill the form after 2 seconds
        setTimeout(() => {
            if (!scannerActive) return;
            
            // Get account ID from barcode
            const accountId = BankDatabase.getAccountByBarcode(randomBarcode);
            if (accountId) {
                document.getElementById('manual-barcode').value = randomBarcode;
                document.getElementById('account-id').value = accountId;
                document.getElementById('pin').focus();
                
                // Show success message
                const loginMessage = document.getElementById('login-message');
                if (loginMessage) {
                    loginMessage.innerHTML = `
                        <div class="alert" style="background: #d4edda; color: #155724; border-left-color: #28a745;">
                            <i class="fas fa-check-circle"></i>
                            <span>Barcode scanned successfully! Account ID filled automatically.</span>
                        </div>
                    `;
                }
            }
            
            // Stop scanner
            stopScanner();
            
        }, 2000);
        
    }, 3000);
}

// Initialize scanner when page loads
document.addEventListener('DOMContentLoaded', initBarcodeScanner);

// Export for browser
if (typeof window !== 'undefined') {
    window.startScanner = startScanner;
    window.stopScanner = stopScanner;
    window.initBarcodeScanner = initBarcodeScanner;
}
