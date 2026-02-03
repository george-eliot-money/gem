// ==============================================
// GEORGE ELIOT BANK - TRANSLATIONS
// ==============================================

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
        
        // Home Page
        'home.welcome': 'Welcome to George Eliot Bank',
        'home.description': 'Experience secure banking with our 2012-style business platform. Access your account using barcode scanning or manual entry.',
        'home.info': 'This system uses separate file storage and supports barcode scanning for quick account access.',
        
        // Login
        'login.scan_title': 'Quick Login with Barcode',
        'login.start_scan': 'Start Barcode Scanner',
        'login.stop_scan': 'Stop Scanner',
        'login.or_manual': '- OR -',
        'login.barcode_placeholder': 'Enter barcode or account ID manually',
        'login.title': 'Account Login',
        'login.account_id': 'Account ID',
        'login.pin': 'PIN Code',
        'login.login_button': 'Login to Account',
        
        // Footer
        'footer.address': '123 Banking Street, Financial District',
        'footer.phone': 'Phone: 1-800-BANK-GEB',
        'footer.hours': 'Business Hours',
        'footer.weekdays': 'Mon-Fri: 9:00 AM - 6:00 PM',
        'footer.saturday': 'Saturday: 10:00 AM - 2:00 PM',
        'footer.copyright': '© 2012-2023 George Eliot Bank. All rights reserved.',
        'footer.security': 'Secure Banking System | Barcode Scanner Enabled'
    },
    
    ar: {
        'app.title': 'بنك جورج إليوت',
        'app.tagline': 'حلول مصرفية آمنة منذ 2012',
        
        'nav.home': 'الرئيسية',
        'nav.dashboard': 'لوحة التحكم',
        'nav.transactions': 'المعاملات',
        'nav.account': 'الحساب',
        
        'home.welcome': 'مرحباً بكم في بنك جورج إليوت',
        'home.description': 'اختبر الخدمات المصرفية الآمنة مع منصتنا التجارية ذات الطراز 2012. قم بالوصول إلى حسابك باستخدام مسح الباركود أو الإدخال اليدوي.',
        'home.info': 'يستخدم هذا النظام تخزين ملفات منفصل ويدعم مسح الباركود للوصول السريع إلى الحساب.',
        
        'login.scan_title': 'تسجيل دخول سريع بالباركود',
        'login.start_scan': 'بدء ماسح الباركود',
        'login.stop_scan': 'إيقاف الماسح',
        'login.or_manual': '- أو -',
        'login.barcode_placeholder': 'أدخل الباركود أو رقم الحساب يدوياً',
        'login.title': 'تسجيل دخول الحساب',
        'login.account_id': 'رقم الحساب',
        'login.pin': 'رمز PIN',
        'login.login_button': 'تسجيل الدخول إلى الحساب',
        
        'footer.address': '123 شارع البنوك، الحي المالي',
        'footer.phone': 'الهاتف: 1-800-BANK-GEB',
        'footer.hours': 'ساعات العمل',
        'footer.weekdays': 'الإثنين-الجمعة: 9:00 صباحاً - 6:00 مساءً',
        'footer.saturday': 'السبت: 10:00 صباحاً - 2:00 مساءً',
        'footer.copyright': '© 2012-2023 بنك جورج إليوت. جميع الحقوق محفوظة.',
        'footer.security': 'نظام مصرفي آمن | ماسح الباركود مفعل'
    },
    
    fr: {
        'app.title': 'Banque George Eliot',
        'app.tagline': 'Solutions Bancaires Sécurisées Depuis 2012',
        
        'nav.home': 'Accueil',
        'nav.dashboard': 'Tableau de Bord',
        'nav.transactions': 'Transactions',
        'nav.account': 'Compte',
        
        'home.welcome': 'Bienvenue à la Banque George Eliot',
        'home.description': 'Découvrez des services bancaires sécurisés avec notre plateforme commerciale de style 2012. Accédez à votre compte en utilisant le scan de code-barres ou la saisie manuelle.',
        'home.info': 'Ce système utilise un stockage de fichiers séparé et prend en charge le scan de codes-barres pour un accès rapide au compte.',
        
        'login.scan_title': 'Connexion Rapide avec Code-barres',
        'login.start_scan': 'Démarrer le Scanner de Code-barres',
        'login.stop_scan': 'Arrêter le Scanner',
        'login.or_manual': '- OU -',
        'login.barcode_placeholder': 'Entrez le code-barres ou l\'ID du compte manuellement',
        'login.title': 'Connexion au Compte',
        'login.account_id': 'ID du Compte',
        'login.pin': 'Code PIN',
        'login.login_button': 'Se Connecter au Compte',
        
        'footer.address': '123 Rue des Banques, Quartier Financier',
        'footer.phone': 'Téléphone: 1-800-BANK-GEB',
        'footer.hours': 'Heures d\'Ouverture',
        'footer.weekdays': 'Lun-Ven: 9h00 - 18h00',
        'footer.saturday': 'Samedi: 10h00 - 14h00',
        'footer.copyright': '© 2012-2023 Banque George Eliot. Tous droits réservés.',
        'footer.security': 'Système Bancaire Sécurisé | Scanner de Code-barres Activé'
    }
};

// Language Management
let currentLanguage = 'en';

function loadTranslations() {
    // Set default language
    setLanguage('en');
}

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

// Export for browser
if (typeof window !== 'undefined') {
    window.loadTranslations = loadTranslations;
    window.setLanguage = setLanguage;
    window.t = t;
}
