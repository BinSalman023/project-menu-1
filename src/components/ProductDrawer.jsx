import React, { useState, useEffect } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function ProductDrawer({ isOpen, item, onClose, onAddToCart }) {
    const { lang, t } = useLanguage();
    const [quantity, setQuantity] = useState(1);
    const [selections, setSelections] = useState({});
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (isOpen && item) {
            setQuantity(1);
            setNotes('');

            // Set default selections based on the first option in each group
            const defaultSelections = {};
            if (item.optionGroups) {
                item.optionGroups.forEach(group => {
                    if (group.options && group.options.length > 0) {
                        defaultSelections[group.id] = group.options[0].id;
                    }
                });
            }
            setSelections(defaultSelections);
        }
    }, [isOpen, item]);

    if (!isOpen || !item) return null;

    // Calculate total price based on base price + options * quantity
    let unitPrice = item.price;
    if (item.optionGroups) {
        item.optionGroups.forEach(group => {
            const selectedOptionId = selections[group.id];
            const selectedOption = group.options.find(opt => opt.id === selectedOptionId);
            if (selectedOption && selectedOption.price) {
                unitPrice += selectedOption.price;
            }
        });
    }

    const totalPrice = unitPrice * quantity;

    const handleAddToCart = () => {
        // Prepare selected options data for cart
        const formattedSelections = [];
        if (item.optionGroups) {
            item.optionGroups.forEach(group => {
                const selectedOptionId = selections[group.id];
                const selectedOption = group.options.find(opt => opt.id === selectedOptionId);
                if (selectedOption) {
                    formattedSelections.push({
                        groupName: group.name,
                        optionName: selectedOption.name,
                        price: selectedOption.price
                    });
                }
            });
        }

        onAddToCart({
            ...item,
            quantity,
            totalPrice,
            selections: formattedSelections,
            notes
        });
        onClose();
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            <div className="fixed bottom-0 left-0 right-0 max-h-[90vh] bg-white rounded-t-3xl z-50 flex flex-col overflow-hidden animate-slide-up shadow-2xl max-w-2xl mx-auto">
                {/* Header Image */}
                <div className="relative h-64 shrink-0 bg-gray-100">
                    <img
                        src={item.image}
                        alt={item.name[lang]}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 h-10 w-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                    {/* Title & Description */}
                    <div>
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-gray-900">{item.name[lang]}</h2>
                            <span className="text-xl font-bold text-orange-600 shrink-0">{item.price} {t('currency')}</span>
                        </div>
                        <p className="text-gray-500 font-light mt-3 leading-relaxed">
                            {item.description[lang]}
                        </p>
                    </div>

                    {/* Dynamic Option Groups */}
                    {item.optionGroups && item.optionGroups.map((group) => (
                        <div key={group.id} className="space-y-4">
                            <h4 className="font-bold border-b border-gray-100 pb-2 text-gray-900">
                                {group.name[lang]}
                            </h4>
                            <div className="space-y-3">
                                {group.options.map(option => (
                                    <label key={option.id} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${selections[group.id] === option.id ? 'border-orange-500 bg-orange-50/50' : 'border-gray-200 bg-white'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selections[group.id] === option.id ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}>
                                                {selections[group.id] === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
                                            </div>
                                            <span className="font-medium text-gray-800">{option.name[lang]}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">
                                            {option.price > 0 ? `+${option.price} ${t('currency')}` : ''}
                                        </span>
                                        <input
                                            type="radio"
                                            name={`group-${group.id}`}
                                            className="hidden"
                                            checked={selections[group.id] === option.id}
                                            onChange={() => setSelections(prev => ({ ...prev, [group.id]: option.id }))}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Notes Field */}
                    <div className="space-y-4 border-t border-gray-100 pt-6">
                        <label htmlFor="notes" className="font-bold text-gray-900 block">
                            {t('notes')}
                        </label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={t('notesPlaceholder')}
                            className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-gray-50"
                            rows={3}
                        />
                    </div>
                </div>

                {/* Footer fixed */}
                <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-gray-900 font-medium">Quantity</span>
                        <div className="flex items-center gap-4 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm disabled:opacity-50"
                                disabled={quantity <= 1}
                            >
                                <Minus size={16} />
                            </button>
                            <span className="w-4 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-slate-900 text-white rounded-xl h-14 font-medium flex items-center justify-center gap-2 hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20"
                    >
                        <span>{t('addToCart')}</span>
                        <span className="mx-2 opacity-50">•</span>
                        <span>{totalPrice} {t('currency')}</span>
                    </button>
                </div>
            </div>
        </>
    );
}
