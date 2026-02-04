// TRANSLATIONS FOR GEORGE ELIOT BANK
const Translations = {
    en: {
        // App
        'app.title': 'George Eliot Bank',
        'app.tagline': 'Secure Banking Solutions Since 2012',
        
        // Navigation
        'nav.home': 'Home',
        'nav.dashboard': 'Dashboard',
        'nav.account': 'Account'
    },
    
    ar: {
        'app.title': 'بنك جورج إليوت',
        'app.tagline': 'حلول مصرفية آمنة منذ 2012',
        
        'nav.home': 'الصفحة الرئيسية',
        'nav.dashboard': 'لوحة التحكم',
        'nav.account': 'الحساب'
    },
    
    fr: {
        'app.title': 'Banque George Eliot',
        'app.tagline': 'Solutions Bancaires Sécurisées Depuis 2012',
        
        'nav.home': 'Accueil',
        'nav.dashboard': 'Tableau de Bord',
        'nav.account': 'Compte'
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
        
        return true;
    }
    return false;
}

// Export for browser
if (typeof window !== 'undefined') {
    window.loadTranslations = loadTranslations;
    window.setLanguage = setLanguage;
}
