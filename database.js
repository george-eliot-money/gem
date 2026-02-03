// ==============================================
// GEORGE ELIOT BANK - DATABASE
// ==============================================

const BankDatabase = {
    // Accounts Database
    ACCOUNTS: {
        '5673918346243120': {
            name: 'Noah Perso',
            type: 'Premium Checking',
            balance: 2000.00,
            accountNumber: '3120',
            pin: '6458',
            email: 'noahbernocco@gmail.com',
            phone: '+212 665-937383',
            address: 'not saying it',
            transactions: [
                { null },
               
            ],
            lastLogin: null
        },
        '3586005802344415': {
            name: 'Laaroussi',
            type: 'Savings Account',
            balance: 2000.00,
            accountNumber: '4415',
            pin: '2003',
            email: 'noting ...',
            phone: 'didnt remember',
            address: 'IDK',
            transactions: [
                { null }
            ],
            lastLogin: null
        },
        '0753245061559459': {
            name: 'nour18',
            type: 'Student Account',
            balance: 5000.00,
            accountNumber: '9459',
            pin: '2011',
            email: 'sorry',
            phone: 'i want to swear on all of the acounts',
            address: ' le transport ',
            transactions: [
                { null }
            ],
            lastLogin: null
        },
        '4132993413947692': {
            name: 'Skibidi',
            type: 'Business Account',
            balance: 0.00,
            accountNumber: '7692',
            pin: 'FVNE SHYT',
            email: ' BITCH SHAKALAKA',
            phone: ' YES GOD',
            address: 'YES GOD',
            transactions: [
                { null }
            ],
            lastLogin: null
        }
    },

    // Barcode Mappings
    BARCODES: {
        '5673918346243120': '5673 9183 4624 3120',
        '3586005802344415': '3586 0058 0234 4415',
        '0753245061559459': '0753 2450 6155 9459',
        '4132993413947692': '4132 9934 1394 7692'
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
