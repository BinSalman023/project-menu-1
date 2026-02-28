import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Crosshair, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon path issues in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Restaurant Coordinates (مطعم قلعة الشام)
const RESTAURANT_LOC = {
    lat: 41.00134562745214,
    lng: 28.8420208
};
const RESTAURANT_PHONE = '+905526599976';
const FEE_PER_KM = 20;

// Haversine formula
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export default function CheckoutDrawer({ isOpen, onClose, cart, onClearCart }) {
    const { lang, t } = useLanguage();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [building, setBuilding] = useState('');
    const [flat, setFlat] = useState('');
    const [userLoc, setUserLoc] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setLocationError('');
        }
    }, [isOpen]);

    const handleLocateUser = () => {
        setIsLocating(true);
        setLocationError('');
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLoc({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setIsLocating(false);
                },
                (error) => {
                    setIsLocating(false);
                    setLocationError(t('locationError'));
                },
                { enableHighAccuracy: true }
            );
        } else {
            setIsLocating(false);
            setLocationError(t('locationError'));
        }
    };

    // Map click handler component
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setUserLoc(e.latlng);
            },
        });

        return userLoc === null ? null : (
            <Marker position={userLoc}></Marker>
        );
    };

    // Custom rounding: 21->25, 23->25, 26->30, 29->30, 20->20
    const calculateRoundedFee = (distanceKm) => {
        const exactFee = distanceKm * FEE_PER_KM;
        if (exactFee % 5 === 0) return exactFee;
        return Math.ceil(exactFee / 5) * 5;
    };

    const deliveryFee = userLoc ? calculateRoundedFee(getDistanceFromLatLonInKm(RESTAURANT_LOC.lat, RESTAURANT_LOC.lng, userLoc.lat, userLoc.lng)) : 0;
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const total = subtotal + deliveryFee;

    const generateWhatsAppMessage = () => {
        let text = `*طلب جديد من مطعم قلعة الشام*\n`;
        if (name) text += `\n*العميل:* ${name}`;
        if (building || flat) {
            text += `\n*رقم المبنى:* ${building || '-'}, *رقم الشقة:* ${flat || '-'}`;
        }

        if (userLoc) {
            text += `\n*موقع التوصيل:* https://www.google.com/maps/search/?api=1&query=${userLoc.lat},${userLoc.lng}`;
        }

        text += `\n\n*تفاصيل الطلب:*`;
        cart.forEach((item, index) => {
            text += `\n\n${index + 1}. ${item.quantity}x ${item.name['ar']} - ${item.totalPrice} TRY`;
            if (item.selections && item.selections.length > 0) {
                text += `\n   الإضافات/الخيارات:`;
                item.selections.forEach(sel => {
                    text += `\n   - ${sel.optionName['ar']}`;
                });
            }
            if (item.notes) {
                text += `\n   ملاحظات: ${item.notes}`;
            }
        });

        text += `\n\n*المجموع الفرعي:* ${subtotal} TRY`;
        text += `\n*رسوم التوصيل:* ${deliveryFee} TRY`;
        text += `\n*الإجمالي المطلوب:* ${total} TRY`;

        return encodeURIComponent(text);
    };

    const handleConfirmOrder = () => {
        if (!userLoc) {
            alert(t('locationError'));
            return;
        }

        const message = generateWhatsAppMessage();
        window.open(`https://wa.me/${RESTAURANT_PHONE.replace('+', '')}?text=${message}`, '_blank');
        onClearCart();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
                onClick={onClose}
            />

            <div className={`fixed bottom-0 left-0 right-0 h-[90vh] bg-gray-50 rounded-t-3xl z-[60] flex flex-col overflow-hidden animate-slide-up shadow-2xl max-w-2xl mx-auto ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-5 bg-white border-b border-gray-100 shrink-0">
                    <h2 className="text-xl font-bold tracking-wide text-gray-900">{t('yourOrder')}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    {cart.length === 0 ? (
                        <div className="p-8 text-center text-gray-500 font-light mt-10">
                            {t('cartEmpty')}
                        </div>
                    ) : (
                        <div className="p-5 space-y-6">
                            {/* Items List */}
                            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex gap-4 p-3 border-b border-gray-50 last:border-0 relative group">
                                        <div className="w-8 h-8 rounded bg-gray-50 text-gray-900 border border-gray-100 flex items-center justify-center font-bold text-sm shrink-0">
                                            {item.quantity}x
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-gray-900 text-sm">{item.name[lang]}</h4>
                                                <span className="font-bold text-gray-900 text-sm whitespace-nowrap">{item.totalPrice} {t('currency')}</span>
                                            </div>

                                            {item.selections && item.selections.length > 0 && (
                                                <div className="text-sm font-medium text-gray-500 mt-1">
                                                    {item.selections.map(s => s.optionName[lang]).join(', ')}
                                                </div>
                                            )}

                                            {item.notes && (
                                                <p className="text-xs text-gray-400 mt-1 italic">"{item.notes}"</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map & Location Selection */}
                            <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                                <h3 className="font-bold text-gray-900">{t('detectLocation')}</h3>
                                <p className="text-sm text-gray-500">{t('locationRequiredMsg')}</p>

                                {!userLoc && (
                                    <button
                                        onClick={handleLocateUser}
                                        disabled={isLocating}
                                        className="w-full flex items-center justify-center gap-2 bg-orange-50 text-orange-600 border border-orange-100 py-3 rounded-xl font-medium transition-all hover:bg-orange-100 active:scale-95 disabled:opacity-50"
                                    >
                                        <Crosshair size={18} className={isLocating ? 'animate-spin' : ''} />
                                        {isLocating ? t('detectingLocation') : t('detectLocation')}
                                    </button>
                                )}

                                {locationError && <p className="text-sm text-red-500 mt-2">{locationError}</p>}

                                {userLoc && (
                                    <div className="space-y-3">
                                        <div className="h-48 w-full rounded-xl overflow-hidden border border-gray-200 z-0">
                                            <MapContainer center={userLoc} zoom={15} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                                                <TileLayer
                                                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                                />
                                                <LocationMarker />
                                            </MapContainer>
                                        </div>
                                        <p className="text-xs text-gray-500 text-center">Click the map to adjust exactly where you are</p>
                                    </div>
                                )}
                            </section>

                            {/* Customer Details Form */}
                            <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                                <h3 className="font-bold text-gray-900 mb-2">Customer Details</h3>

                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder={t('optionalName')}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none focus:ring-orange-500 focus:bg-white transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            placeholder={t('optionalBuilding')}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none focus:ring-orange-500 focus:bg-white transition-all"
                                            value={building}
                                            onChange={(e) => setBuilding(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder={t('optionalFlat')}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none focus:ring-orange-500 focus:bg-white transition-all"
                                            value={flat}
                                            onChange={(e) => setFlat(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>

                {/* Fixed Footer */}
                {cart.length > 0 && (
                    <div className="bg-white border-t border-gray-100 p-5 shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pb-8 relative z-20">
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600 text-sm">
                                <span>{t('subtotal')}</span>
                                <span className="font-medium text-gray-900">{subtotal} {t('currency')}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 text-sm">
                                <span>{t('deliveryFee')}</span>
                                {userLoc ? (
                                    <span className="font-medium text-gray-900">{deliveryFee} {t('currency')}</span>
                                ) : (
                                    <span className="text-orange-500 italic">Select location</span>
                                )}
                            </div>
                            <div className="pt-3 flex justify-between items-center border-t border-gray-100">
                                <span className="font-bold text-gray-900">{t('total')}</span>
                                <span className="text-xl tracking-tight font-bold text-gray-900">{total} {t('currency')}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleConfirmOrder}
                            disabled={!userLoc}
                            className={`w-full h-14 rounded-xl font-bold flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all shadow-xl shadow-orange-500/20
                                ${userLoc
                                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                                    : 'bg-gray-100 text-gray-400'}`}
                        >
                            <span>{t('confirmOrder')}</span>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
