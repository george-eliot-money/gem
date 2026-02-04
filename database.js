// GEORGE ELIOT BANK DATABASE
const BankDatabase = {
    // Accounts database
    ACCOUNTS: {
        '5673918346243120': {
            name: 'Noah Perso',
            type: 'Premium Checking',
            balance: 2000.00,
            accountNumber: '3120',
            pin: '6458',
            email: 'bicth',
            phone: 'kakala',
            address: 'my eyes only',
            transactions: [
                { null }
            ],
            lastLogin: null
        },
        '3586005802344415': {
            name: 'Laaroussi',
            type: 'Savings Account',
            balance: 2000.00,
            accountNumber: '4415',
            pin: '2003',
            email: 'laaroussi@georgeeliotbank.com',
            phone: 'son iPhone 14 couleur bleu napoleon importer du canada par son grand frère qui fait ses étude là-bas',
            address: 'Had soualem / les villas',
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
            email: 'l'ordi de sa sœur',
            phone: 'son telephone',
            address: 'le transport',
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
            email: 'sirine im ngl i wanna swear on every single account',
            phone: 'YES GOD ',
            address: 'YES GOD',
            transactions: [
                { null }
            ],
            lastLogin: null
        }
    },

    // Barcode mappings
    BARCODES: {
        '5673918346243120': 'GEB001',
        '3586005802344415': 'GEB002', 
        '0753245061559459': 'GEB003',
        '4132993413947692': 'GEB004'
    },

    // Helper methods
    getAccount: function(accountId) {
        return this.ACCOUNTS[accountId] || null;
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
        const account = this.getAccount(accountId);
        if (account) {
            account.lastLogin = new Date().toLocaleString();
            return true;
        }
        return false;
    },

    formatCurrency: function(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    },

    formatAccountId: function(accountId) {
        if (!accountId) return '';
        return accountId.match(/.{1,4}/g).join(' ');
    },

    getAllAccounts: function() {
        return this.ACCOUNTS;
    },

    // Transaction methods
    addTransaction: function(accountId, description, type, amount) {
        const account = this.getAccount(accountId);
        if (!account) return false;

        const newBalance = account.balance + amount;
        account.balance = newBalance;
        
        account.transactions.unshift({
            date: new Date().toISOString().split('T')[0],
            description: description,
            type: type,
            amount: amount,
            balance: newBalance
        });
        
        return true;
    }
};

// Make it globally available
if (typeof window !== 'undefined') {
    window.BankDatabase = BankDatabase;
}
