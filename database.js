// ==============================================
// GEORGE ELIOT BANK - DATABASE
// ==============================================

const BankDatabase = {
    // Accounts Database
    ACCOUNTS: {
        '5673918346243120': {
            name: 'Noah Perso',
            type: 'Premium Checking',
            balance: 12500.75,
            accountNumber: '3120',
            pin: '6458',
            email: 'noah@georgeeliotbank.com',
            phone: '+1 (555) 123-4567',
            address: '123 Main Street, Anytown, USA',
            transactions: [
                { date: '2023-12-28', description: 'Salary Deposit', type: 'DEPOSIT', amount: 3200.00, balance: 12500.75 },
                { date: '2023-12-27', description: 'Rent Payment', type: 'WITHDRAWAL', amount: -1500.00, balance: 9300.75 },
                { date: '2023-12-25', description: 'Online Shopping', type: 'WITHDRAWAL', amount: -250.00, balance: 10800.75 },
                { date: '2023-12-22', description: 'Bank Transfer', type: 'TRANSFER', amount: 500.00, balance: 11050.75 }
            ],
            lastLogin: null
        },
        '3586005802344415': {
            name: 'Laaroussi',
            type: 'Savings Account',
            balance: 8250.50,
            accountNumber: '4415',
            pin: '2003',
            email: 'laaroussi@georgeeliotbank.com',
            phone: '+1 (555) 234-5678',
            address: '456 Oak Avenue, Sometown, USA',
            transactions: [
                { date: '2023-12-27', description: 'Interest Earned', type: 'DEPOSIT', amount: 25.50, balance: 8250.50 },
                { date: '2023-12-24', description: 'Transfer to Checking', type: 'TRANSFER', amount: -1000.00, balance: 8225.00 },
                { date: '2023-12-20', description: 'Deposit', type: 'DEPOSIT', amount: 500.00, balance: 9225.00 }
            ],
            lastLogin: null
        },
        '0753245061559459': {
            name: 'nour18',
            type: 'Student Account',
            balance: 3400.25,
            accountNumber: '9459',
            pin: '2011',
            email: 'nour@georgeeliotbank.com',
            phone: '+1 (555) 345-6789',
            address: '789 Pine Road, Othertown, USA',
            transactions: [
                { date: '2023-12-26', description: 'ATM Withdrawal', type: 'WITHDRAWAL', amount: -200.00, balance: 3400.25 },
                { date: '2023-12-23', description: 'Online Purchase', type: 'WITHDRAWAL', amount: -89.99, balance: 3600.25 },
                { date: '2023-12-20', description: 'Part-time Job', type: 'DEPOSIT', amount: 450.00, balance: 3690.24 }
            ],
            lastLogin: null
        },
        '4132993413947692': {
            name: 'Skibidi',
            type: 'Business Account',
            balance: 18750.00,
            accountNumber: '7692',
            pin: 'FVNE SHYT',
            email: 'skibidi@georgeeliotbank.com',
            phone: '+1 (555) 456-7890',
            address: '101 Maple Drive, Newtown, USA',
            transactions: [
                { date: '2023-12-28', description: 'Business Revenue', type: 'DEPOSIT', amount: 450.00, balance: 18750.00 },
                { date: '2023-12-24', description: 'Charity Donation', type: 'WITHDRAWAL', amount: -500.00, balance: 18300.00 },
                { date: '2023-12-21', description: 'Equipment Purchase', type: 'WITHDRAWAL', amount: -1200.00, balance: 18800.00 }
            ],
            lastLogin: null
        }
    },

    // Barcode Mappings
    BARCODES: {
        '5673918346243120': 'GEB001',
        '3586005802344415': 'GEB002',
        '0753245061559459': 'GEB003',
        '4132993413947692': 'GEB004'
    },

    // Helper Functions
    getAccount: function(accountId) {
        return this.ACCOUNTS[accountId];
    },

    getAccountByBarcode: function(barcode) {
        for (const [accountId, barcodeValue] of Object.entries(this.BARCODES)) {
            if (barcodeValue === barcode) {
                return accountId;
            }
        }
        return null;
    },

    updateLastLogin: function(accountId) {
        if (this.ACCOUNTS[accountId]) {
            this.ACCOUNTS[accountId].lastLogin = new Date().toLocaleString();
            return true;
        }
        return false;
    },

    formatCurrency: function(amount) {
        return '$' + amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    },

    formatAccountId: function(accountId) {
        if (!accountId) return '';
        return accountId.replace(/(\d{4})(?=\d)/g, '$1 ');
    },

    getAllAccounts: function() {
        return this.ACCOUNTS;
    }
};

// Export for browser
if (typeof window !== 'undefined') {
    window.BankDatabase = BankDatabase;
}
