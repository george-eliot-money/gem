// ==============================================
// GEORGE ELIOT BANK - TRANSLATIONS
// ==============================================

const Translations = {
    en: {
        // Login Page
        'login.title': 'Bank Account Login',
        'login.account_id': 'Account ID',
        'login.pin': 'PIN Code',
        'login.login_button': 'Login to Account',
        'login.demo_accounts': 'Demo Accounts',
        
        // Footer
        'footer.copyright': '© 2023 George Eliot Bank. All rights reserved.',
        'footer.security': 'Secure Banking System | No Camera Required'
    },
    
    ar: {
        'login.title': 'تسجيل دخول الحساب المصرفي',
        'login.account_id': 'رقم الحساب',
        'login.pin': 'رمز PIN',
        'login.login_button': 'تسجيل الدخول إلى الحساب',
        'login.demo_accounts': 'حسابات تجريبية',
        
        'footer.copyright': '© 2023 بنك جورج إليوت. جميع الحقوق محفوظة.',
        'footer.security': 'نظام مصرفي آمن | لا يتطلب كاميرا'
    },
    
    fr: {
        'login.title': 'Connexion au Compte Bancaire',
        'login.account_id': 'ID du Compte',
        'login.pin': 'Code PIN',
        'login.login_button': 'Se Connecter au Compte',
        'login.demo_accounts': 'Comptes de Démonstration',
        
        'footer.copyright': '© 2023 Banque George Eliot. Tous droits réservés.',
        'footer.security': 'Système Bancaire Sécurisé | Pas de Caméra Requise'
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    if (Translations[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (Translations[lang][key]) {
                element.textContent = Translations[lang][key];
            }
        });
        
        // Update placeholder texts
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (Translations[lang][key]) {
                element.placeholder = Translations[lang][key];
            }
        });
        
        return true;
    }
    return false;
}

function t(key) {
    return Translations[currentLanguage][key] || Translations.en[key] || key;
}
