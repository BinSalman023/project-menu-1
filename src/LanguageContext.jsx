import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    ar: {
        menu: 'قائمة الطعام',
        starters: 'المقبلات',
        mains: 'الوجبات الرئيسية',
        drinks: 'المشروبات',
        addToCart: 'إضافة للسلة',
        viewOrder: 'عرض الطلب',
        currency: 'ليرة',
        yourOrder: 'طلبك',
        subtotal: 'المجموع الفرعي',
        deliveryFee: 'رسوم التوصيل',
        total: 'الإجمالي',
        confirmOrder: 'تأكيد الطلب',
        searchPlaceholder: 'ابحث عن وجبتك المفضلة...',
        detectLocation: 'تحديد موقعي',
        detectingLocation: 'جاري التحديد...',
        locationRequiredMsg: 'نحتاج لموقعك الدقيق لحساب رسوم التوصيل الصحيحة (20 ليرة لكل كم).',
        locationError: 'عذراً، يجب السماح بالوصول للموقع لحساب التوصيل.',
        locationDetected: 'تم تحديد الموقع',
        updateLocation: 'تعديل',
        optionalName: 'الاسم الكريم (اختياري)',
        optionalBuilding: 'رقم المبنى (اختياري)',
        optionalFlat: 'رقم الشقة (اختياري)',
        close: 'إغلاق',
        requiredOptions: 'خيارات إجبارية',
        optionalAdds: 'إضافات اختيارية (اختياري)',
        notes: 'ملاحظات إضافية',
        notesPlaceholder: 'بدون بصل، محمرة زيادة...',
        selectItemsReq: 'يرجى تحديد كافة الخيارات المطلوبة أولاً.',
        none: 'لا يوجد',
        cartEmpty: 'السلة فارغة'
    },
    tr: {
        menu: 'Menü',
        starters: 'Başlangıçlar',
        mains: 'Ana Yemekler',
        drinks: 'İçecekler',
        addToCart: 'Sepete Ekle',
        viewOrder: 'Siparişi Gör',
        currency: 'TRY',
        yourOrder: 'Siparişiniz',
        subtotal: 'Ara Toplam',
        deliveryFee: 'Teslimat Ücreti',
        total: 'Toplam',
        confirmOrder: 'Siparişi Onayla',
        searchPlaceholder: 'En sevdiğiniz yemeği arayın...',
        detectLocation: 'Konumumu Bul',
        detectingLocation: 'Bulunuyor...',
        locationRequiredMsg: 'Tam teslimat ücretini hesaplamak için konumunuza ihtiyacımız var (km başına 20 TRY).',
        locationError: 'Teslimat hesaplaması için konum erişimine izin verilmelidir.',
        locationDetected: 'Konum Bulundu',
        updateLocation: 'Güncelle',
        optionalName: 'Adınız (İsteğe bağlı)',
        optionalBuilding: 'Bina No. (İsteğe bağlı)',
        optionalFlat: 'Daire No. (İsteğe bağlı)',
        close: 'Kapat',
        requiredOptions: 'Gerekli Seçenekler',
        optionalAdds: 'Ekstralar (İsteğe bağlı)',
        notes: 'Notlar',
        notesPlaceholder: 'Soğansız, az pişmiş...',
        selectItemsReq: 'Lütfen önce tüm zorunlu seçenekleri belirleyin.',
        none: 'Yok',
        cartEmpty: 'Sepetiniz boş'
    },
    en: {
        menu: 'Menu',
        starters: 'Starters',
        mains: 'Mains',
        drinks: 'Beverages',
        addToCart: 'Add to Cart',
        viewOrder: 'View Order',
        currency: 'TRY',
        yourOrder: 'Your Order',
        subtotal: 'Subtotal',
        deliveryFee: 'Delivery Fee',
        total: 'Total',
        confirmOrder: 'Confirm Order',
        searchPlaceholder: 'Search for your favorite meal...',
        detectLocation: 'Detect My Location',
        detectingLocation: 'Detecting...',
        locationRequiredMsg: 'We need your precise location to calculate exact delivery fee (20 TRY per km).',
        locationError: 'Location access must be allowed to calculate delivery.',
        locationDetected: 'Location Detected',
        updateLocation: 'Update',
        optionalName: 'Full Name (Optional)',
        optionalBuilding: 'Building No. (Optional)',
        optionalFlat: 'Flat No. (Optional)',
        close: 'Close',
        requiredOptions: 'Required Options',
        optionalAdds: 'Extras (Optional)',
        notes: 'Additional Notes',
        notesPlaceholder: 'No onions, extra spicy...',
        selectItemsReq: 'Please select all required options first.',
        none: 'None',
        cartEmpty: 'Your cart is empty'
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('ar');

    useEffect(() => {
        // Set document direction based on language
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (key) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
