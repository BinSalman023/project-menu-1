import React, { useState, useEffect } from 'react';
import { X, MapPin, Truck, ChevronRight } from 'lucide-react';

// Fictional restaurant coordinates (Istanbul Example)
const RESTAURANT_COORD = { lat: 41.0082, lon: 28.9784 };
const COST_PER_KM = 20;

// Haversine formula to calculate distance between two lat/lon points in km
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function CheckoutDrawer({ isOpen, onClose, cart }) {
    const [address, setAddress] = useState({ name: '', building: '', flat: '' });
    const [deliveryFee, setDeliveryFee] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState('');

    // Reset state when drawer opens/closes or cart empties
    useEffect(() => {
        if (!isOpen) {
            setAddress({ name: '', building: '', flat: '' });
            setDeliveryFee(null);
            setLocationError('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const finalTotal = cartTotal + (deliveryFee || 0);

    const handleGetLocation = () => {
        setIsLocating(true);
        setLocationError('');

        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser");
            setIsLocating(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;

                const distanceKm = calculateDistance(RESTAURANT_COORD.lat, RESTAURANT_COORD.lon, userLat, userLon);
                // Minimum fee rule or strict calculation
                const calculatedFee = Math.max(20, Math.ceil(distanceKm * COST_PER_KM));

                setDeliveryFee(calculatedFee);
                setIsLocating(false);
            },
            (error) => {
                setIsLocating(false);
                if (error.code === 1) {
                    setLocationError("Please allow location access to calculate delivery fee.");
                } else {
                    setLocationError("Unable to retrieve your location. We will use a flat rate.");
                    setDeliveryFee(50); // Fallback flat rate
                }
            }
        );
    };

    const handleCheckout = () => {
        if (deliveryFee === null) {
            alert('Please detect your location first for delivery fee calculation.');
            return;
        }
        alert('Order placed successfully! Total: ' + finalTotal + ' TRY');
        onClose();
        // Normally we would clear cart here via a prop like `onClearCart()`
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            <div className="fixed bottom-0 left-0 right-0 max-h-[95vh] bg-white rounded-t-3xl z-50 flex flex-col overflow-hidden animate-slide-up shadow-2xl max-w-2xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                    <h2 className="text-2xl font-medium text-gray-900">Your Order</h2>
                    <button
                        onClick={onClose}
                        className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">

                    {/* Order Items */}
                    <section className="space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded shrink-0 bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                                        {item.quantity}x
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                                        <p className="text-sm text-gray-500 font-light max-w-[200px] sm:max-w-xs line-clamp-2">
                                            {item.selectedBase === 'white' ? 'Steamed White Rice' : item.selectedBase === 'brown' ? 'Brown Rice' : 'Mixed Greens'}
                                            {item.addons.length > 0 && `, ${item.addons.map(a => a.name).join(', ')}`}
                                        </p>
                                        {item.notes && <p className="text-xs text-orange-500 mt-1 flex items-center gap-1">Note: {item.notes}</p>}
                                    </div>
                                </div>
                                <span className="font-medium text-gray-900 shrink-0">{item.totalPrice} TRY</span>
                            </div>
                        ))}
                    </section>

                    <hr className="border-gray-100" />

                    {/* Logistics & Location */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                            <Truck size={20} className="text-orange-500" />
                            Delivery Details
                        </h3>

                        {/* Location Button */}
                        {!deliveryFee ? (
                            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                                <p className="text-sm text-orange-800 mb-3">
                                    We need your location to calculate the exact delivery fee (20 TRY per km).
                                </p>
                                <button
                                    onClick={handleGetLocation}
                                    disabled={isLocating}
                                    className="w-full bg-white text-orange-600 border border-orange-200 font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors disabled:opacity-50"
                                >
                                    <MapPin size={18} />
                                    {isLocating ? 'Detecting Location...' : 'Detect My Location'}
                                </button>
                                {locationError && <p className="text-xs text-red-500 mt-2">{locationError}</p>}
                            </div>
                        ) : (
                            <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-green-800">
                                    <MapPin size={18} />
                                    <span className="font-medium text-sm">Location Detected</span>
                                </div>
                                <button onClick={handleGetLocation} className="text-xs text-green-600 underline">Update</button>
                            </div>
                        )}

                        {/* Optional Address Fields */}
                        <div className="space-y-3 mt-4">
                            <input
                                type="text"
                                placeholder="Full Name (Optional)"
                                value={address.name}
                                onChange={(e) => setAddress({ ...address, name: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            />
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Building No. (Optional)"
                                    value={address.building}
                                    onChange={(e) => setAddress({ ...address, building: e.target.value })}
                                    className="w-1/2 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Flat No. (Optional)"
                                    value={address.flat}
                                    onChange={(e) => setAddress({ ...address, flat: e.target.value })}
                                    className="w-1/2 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-100" />

                    {/* Receipt */}
                    <section className="space-y-3 pt-2">
                        <div className="flex justify-between text-gray-500 font-light">
                            <span>Subtotal</span>
                            <span>{cartTotal} TRY</span>
                        </div>
                        <div className="flex justify-between text-gray-500 font-light">
                            <span>Delivery Fee</span>
                            <span>{deliveryFee !== null ? `${deliveryFee} TRY` : 'Calculated next'}</span>
                        </div>
                        <div className="flex justify-between text-xl font-medium text-gray-900 pt-2 border-t border-gray-100">
                            <span>Total</span>
                            <span>{deliveryFee !== null ? finalTotal : '---'} TRY</span>
                        </div>
                    </section>
                </div>

                {/* Footer actions */}
                <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <button
                        onClick={handleCheckout}
                        disabled={deliveryFee === null}
                        className="w-full bg-slate-900 text-white rounded-xl h-14 font-medium flex items-center justify-center gap-2 hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                        <span>Confirm Order • {deliveryFee !== null ? finalTotal : '---'} TRY</span>
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </>
    );
}
