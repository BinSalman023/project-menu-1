import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';

export default function ProductDrawer({ isOpen, item, onClose, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedRadio, setSelectedRadio] = useState('white');
    const [selectedAddons, setSelectedAddons] = useState({});
    const [notes, setNotes] = useState('');

    // Reset state when a new item is opened
    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
            setSelectedRadio('white');
            setSelectedAddons({});
            setNotes('');
        }
    }, [isOpen, item]);

    if (!isOpen || !item) return null;

    const addonsList = [
        { id: 'cheese', name: 'Extra Cheese', price: 15 },
        { id: 'mushroom', name: 'Sautéed Mushrooms', price: 20 },
        { id: 'truffle', name: 'Truffle Oil Splash', price: 35 },
    ];

    const handleAddonToggle = (id) => {
        setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const calculateTotal = () => {
        let total = item.price;
        addonsList.forEach(addon => {
            if (selectedAddons[addon.id]) total += addon.price;
        });
        return total * quantity;
    };

    const handleAddToCart = () => {
        const finalItem = {
            ...item,
            quantity,
            selectedBase: selectedRadio,
            addons: addonsList.filter(a => selectedAddons[a.id]),
            notes,
            totalPrice: calculateTotal()
        };
        onAddToCart(finalItem);
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed bottom-0 left-0 right-0 max-h-[90vh] bg-white rounded-t-3xl z-50 flex flex-col overflow-hidden animate-slide-up shadow-2xl max-w-2xl mx-auto">
                {/* Header Image */}
                <div className="relative h-48 sm:h-64 w-full bg-gray-100 shrink-0">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 h-10 w-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <div>
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-medium text-gray-900">{item.name}</h2>
                            <span className="text-xl font-medium text-gray-900">{item.price} TRY</span>
                        </div>
                        <p className="text-gray-500 mt-2 font-light leading-relaxed">{item.description}</p>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Mandatory Choice: Radio */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Choose Base</h3>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600 font-medium">Required</span>
                        </div>
                        <div className="space-y-3">
                            {[{ id: 'white', label: 'Steamed White Rice' }, { id: 'brown', label: 'Brown Rice' }, { id: 'salad', label: 'Mixed Greens' }].map(base => (
                                <label key={base.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">{base.label}</span>
                                    <input
                                        type="radio"
                                        name="base"
                                        checked={selectedRadio === base.id}
                                        onChange={() => setSelectedRadio(base.id)}
                                        className="w-5 h-5 accent-orange-500"
                                    />
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Optional Addons: Checkboxes */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Add Extras</h3>
                            <span className="text-gray-400 text-sm">Optional</span>
                        </div>
                        <div className="space-y-3">
                            {addonsList.map(addon => (
                                <label key={addon.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-gray-700">{addon.name}</span>
                                        <span className="text-gray-500 text-sm">+{addon.price} TRY</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={!!selectedAddons[addon.id]}
                                        onChange={() => handleAddonToggle(addon.id)}
                                        className="w-5 h-5 accent-orange-500 rounded"
                                    />
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Notes area */}
                    <section>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Special Instructions</h3>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="e.g. No onions, extra spicy..."
                            className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-[100px] resize-none text-gray-700 placeholder-gray-400"
                        />
                    </section>
                </div>

                {/* Footer actions */}
                <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center bg-gray-100 rounded-xl h-14">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-12 h-full flex items-center justify-center text-gray-600 hover:text-black active:scale-90 transition-transform"
                            >
                                <Minus size={20} />
                            </button>
                            <span className="w-8 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-12 h-full flex items-center justify-center text-gray-600 hover:text-black active:scale-90 transition-transform"
                            >
                                <Plus size={20} />
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-orange-500 text-white rounded-xl h-14 font-medium flex items-center justify-between px-6 hover:bg-orange-600 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/25"
                        >
                            <span>Add to Order</span>
                            <span>{calculateTotal()} TRY</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
