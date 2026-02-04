// TRANSLATIONS FOR GEORGE ELIOT BANK
const Translations = {
    en: {
        // App
        'app.title': 'George Eliot Bank',
        'app.tagline': 'Secure Banking Solutions Since 2012',
        
        // Navigation
        'nav.home': 'Home',
        'nav.dashboard': 'Dashboard',
        'nav.transactions': 'Transactions',
        'nav.account': 'Account',
        
        // Login
        'login.title': 'Account Login',
        'login.subtitle': 'Secure access to your banking dashboard',
        'login.scan_title': 'Quick Login with Barcode',
        'login.start_scan': 'Start Barcode Scanner',
        'login.stop_scan': 'Stop Scanner',
        'login.or_manual': '- OR -',
        'login.barcode_placeholder': 'Enter barcode manually (e.g., GEB001)',
        'login.account_id': 'Account ID',
        'login.pin': 'PIN Code',
        'login.login_button': 'Login to Account'
    },
    
    ar: {
        'app.title': 'بنك جورج إليوت',
        'app.tagline': 'حلول مصرفية آمنة منذ 2012',
        
        'nav.home': 'الصفحة الرئيسية',
        'nav.dashboard': 'لوحة التحكم',
        'nav.transactions': 'المعاملات',
        'nav.account': 'الحساب',
        
        'login.title': 'تسجيل دخول الحساب',
        'login.subtitle': 'وصول آمن إلى لوحة التحكم المصرفية',
        'login.scan_title': 'تسجيل دخول سريع بالباركود',
        'login.start_scan': 'بدء ماسح الباركود',
        'login.stop_scan': 'إيقاف الماسح',
        'login.or_manual': '- أو -',
        'login.barcode_placeholder': 'أدخل الباركود يدوياً (مثال: GEB001)',
        'login.account_id': 'رقم الحساب',
        'login.pin': 'رمز PIN',
        'login.login_button': 'تسجيل الدخول إلى الحساب'
    },
    
    fr: {
        'app.title': 'Banque George Eliot',
        'app.tagline': 'Solutions Bancaires Sécurisées Depuis 2012',
        
        'nav.home': 'Accueil',
        'nav.dashboard': 'Tableau de Bord',
        'nav.transactions': 'Transactions',
        'nav.account': 'Compte',
        
        'login.title': 'Connexion au Compte',
        'login.subtitle': 'Accès sécurisé à votre tableau de bord bancaire',
        'login.scan_title': 'Connexion Rapide avec Code-barres',
        'login.start_scan': 'Démarrer le Scanner de Code-barres',
        'login.stop_scan': 'Arrêter le Scanner',
        'login.or_manual': '- OU -',
        'login.barcode_placeholder': 'Entrez le code-barres manuellement (ex: GEB001)',
        'login.account_id': 'ID du Compte',
        'login.pin': 'Code PIN',
        'login.login_button': 'Se Connecter au Compte'
    }
};

// Language Management
let currentLanguage = 'en';

function loadTranslations() {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && Translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('en');
    }
}

function setLanguage(lang) {
    if (Translations[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        
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

// Export for browser
if (typeof window !== 'undefined') {
    window.loadTranslations = loadTranslations;
    window.setLanguage = setLanguage;
    window.t = t;
    window.Translations = Translations;
}
