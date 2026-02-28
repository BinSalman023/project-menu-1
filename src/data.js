export const MENU_CATEGORIES = [
    { id: 'porsiyon_doner', label: { ar: 'وجبات الشاورما', tr: 'Porsiyon Döner', en: 'Shawarma Meals' } },
    { id: 'doner_sandvic', label: { ar: 'ساندويش الشاورما', tr: 'Döner Sandviçler', en: 'Shawarma Sandwiches' } },
    { id: 'bati_porsiyon', label: { ar: 'وجبات الغربي', tr: 'Batı Porsiyonlar', en: 'Western Meals' } },
    { id: 'bati_sandvic', label: { ar: 'ساندويش الغربي', tr: 'Batı Sandviçler', en: 'Western Sandwiches' } },
    { id: 'dogu_porsiyon', label: { ar: 'وجبات الشرقي', tr: 'Doğu Porsiyonlar', en: 'Eastern Meals' } },
    { id: 'pilic_mansaf', label: { ar: 'الفروج والمناسف', tr: 'Tavuk ve Mansaf', en: 'Chicken and Mansaf' } },
    { id: 'mezeler', label: { ar: 'المقبلات', tr: 'Mezeler', en: 'Appetizers' } },
    { id: 'icecekler', label: { ar: 'المشروبات', tr: 'İçecekler', en: 'Beverages' } },
];

export const MENU_ITEMS = [
    // 1. وجبات الشاورما (Porsiyon Döner)
    {
        id: 101, categoryId: 'porsiyon_doner', price: 265,
        image: '/images/arabic-shawarma-meal.png',
        name: { ar: 'وجبة شاورما دجاج عربي', tr: 'Arap Tavuk Döner Porsiyon', en: 'Arabic Chicken Shawarma Meal' },
        description: { ar: 'أصالة المذاق الدمشقي؛ قطع شاورما الدجاج المحمرة بخبز الصاج، تقدم مع بطاطا مقرمشة، مخلل، وكريم الثوم الغني.', tr: 'Otantik Şam lezzeti; lavaş ekmeği ile tavuk döner, yanında çıtır patates, turşu ve zengin sarımsak sosu.', en: 'Authentic Damascus taste; roasted chicken shawarma in saj bread, served with crispy fries, pickles, and rich garlic sauce.' },
        optionGroups: [
            {
                id: 'size', name: { ar: 'الطلب الرئيسي (الحجم والنوع)', tr: 'Boyut Seçimi', en: 'Main Selection' }, options: [
                    { id: 'normal', name: { ar: 'عادي', tr: 'Normal', en: 'Regular' }, price: 0 },
                    { id: 'double', name: { ar: 'دبل', tr: 'Çift', en: 'Double' }, price: 100 },
                    { id: 'extra', name: { ar: 'اكسترا (شاورما إضافي)', tr: 'Ekstra', en: 'Extra shawarma' }, price: 100 }
                ]
            },
            {
                id: 'adds', name: { ar: 'إضافات اختيارية', tr: 'Ekstralar', en: 'Optional Adds' }, options: [
                    { id: 'none', name: { ar: 'بدون إضافات', tr: 'Sade', en: 'No Adds' }, price: 0 },
                    { id: 'cheese', name: { ar: 'إضافة جبنة', tr: 'Kaşarlı', en: 'With Cheese' }, price: 20 }
                ]
            }
        ]
    },
    { id: 102, categoryId: 'porsiyon_doner', price: 285, image: '/images/arabic-shawarma-meal.png', name: { ar: 'وجبة شاورما عربي صمون', tr: 'Ekmek Porsiyon Döner', en: 'Shawarma Portion in Baguette' }, description: { ar: 'قطع شاورما الدجاج الشهية تقدم داخل خبز الصمون الطازج مع صوص الثوم والبطاطا المقلية المقرمشة.', tr: 'Somun ekmeği içinde servis edilen tavuk döner, sarımsak sosu ve patates kızartması ile.', en: 'Chicken shawarma served in fresh baguette bread with garlic sauce and crispy fries.' } },
    { id: 104, categoryId: 'porsiyon_doner', price: 395, image: '/images/shawarma-breading-meal.png', name: { ar: 'وجبة شاورما بانية', tr: 'Baneh Tavuk Döner', en: 'Pane Chicken Shawarma' }, description: { ar: 'شاورما دجاج مغطاة بطبقة مقرمشة ومقلية لتعطي طعماً مميزاً، تقدم مع البطاطا والثوم.', tr: 'Çıtır kaplamalı tavuk döner porsiyon, patates ve sarımsak sosu ile.', en: 'Breading coated chicken shawarma, served with fries and garlic sauce.' } },
    { id: 105, categoryId: 'porsiyon_doner', price: 395, image: '/images/marina-Shawarma-Meal.jpg', name: { ar: 'وجبة شاورما مارينا', tr: 'Marina Döner', en: 'Marina Shawarma' }, description: { ar: 'شرائح شاورما دجاج بتتبيلة مارينا الخاصة الغنية بالنكهات، تقدم مع المقبلات الشامية.', tr: 'Özel Marina soslu tavuk döner porsiyon.', en: 'Chicken shawarma with special Marina seasoning, served with appetizers.' } },
    { id: 106, categoryId: 'porsiyon_doner', price: 365, image: '/images/shawarma-slices-meal.png', name: { ar: 'وجبة شاورما شرائح', tr: 'Yaprak Döner', en: 'Shawarma Slices (Yaprak)' }, description: { ar: 'شاورما دجاج مقطعة على الطريقة التركية التقليدية (شرائح عريضة) مع نكهة الشواء.', tr: 'Yaprak kesim tavuk döner porsiyon.', en: 'Traditional Turkish style wide-cut chicken shawarma slices.' } },
    { id: 107, categoryId: 'porsiyon_doner', price: 415, image: '/images/arabic-shawarma-meal.png', name: { ar: 'وجبة شاورما مبرومة', tr: 'Burma Döner', en: 'Rolled Shawarma (Burma)' }, description: { ar: 'رول شاورما دجاج عملاق مقطع لدوائر ومحمر بالفرن، يقدم مع صوص الثوم والبطاطا.', tr: 'Rulo şeklinde sarılmış ve kızartılmış tavuk döner.', en: 'Giant rolled chicken shawarma sliced into rounds and roasted.' } },
    { id: 108, categoryId: 'porsiyon_doner', price: 415, image: '/images/arabic-shawarma-meal.png', name: { ar: 'وجبة شاورما وربات', tr: 'Havuç Dilimi Döner', en: 'Shawarma Wedges' }, description: { ar: 'شاورما دجاج مقطعة بأسلوب فني مثلثي مع طبقة خارجية مقرمشة ونكهة مدخنة.', tr: 'Üçgen dilimlenmiş özel tavuk döner.', en: 'Shawarma sliced in a triangular wedge style with a crispy outer layer.' } },
    { id: 109, categoryId: 'porsiyon_doner', price: 425, image: '/images/shawarma-slices-meal.png', name: { ar: 'وجبة نص كيلو شاورما', tr: 'Yarım Kilo Tavuk Döner', en: 'Half Kilo Chicken Shawarma' }, description: { ar: 'كمية وفيرة من شاورما الدجاج الصافية (500 جم) تكفي للمشاركة، مع الخبز والمقبلات.', tr: '500 gram saf tavuk döner, ekmek ve mezelerle birlikte.', en: 'Generous portion of pure chicken shawarma (500g) perfect for sharing.' } },
    { id: 110, categoryId: 'porsiyon_doner', price: 345, image: '/images/shawarma-meal-with-kabsa-rice.png', name: { ar: 'وجبة شاورما مع رز كبسة', tr: 'Porsiyon Tavuk Döner + Kabseh', en: 'Shawarma with Kabsa Rice' }, description: { ar: 'مزيج رائع من شاورما الدجاج والأرز المتبل ببهارات الكبسة الخليجية الأصلية.', tr: 'Baharatlı Kabse pilavı üzerinde tavuk döner.', en: 'A great combination of chicken shawarma and rice seasoned with authentic Kabsa spices.' } },
    { id: 111, categoryId: 'porsiyon_doner', price: 900, image: '/images/shawarma-Kato.png', name: { ar: 'وجبة كاتو شاورما', tr: 'Pasta Döner', en: 'Shawarma Cake' }, description: { ar: 'تنسيق فني فاخر لقطع الشاورما على شكل كعكة للمناسبات والجمعات الكبيرة.', tr: 'Özel günler için pasta şeklinde hazırlanmış döner sunumu.', en: 'Luxury artistic arrangement of shawarma pieces in a cake shape for special events.' }, optionGroups: [{ id: 'size', name: { ar: 'اختر الحجم', tr: 'Boyut Seç', en: 'Select Size' }, options: [{ id: '1layer', name: { ar: 'طبق واحد (900₺)', tr: '1 Kat', en: '1 Layer' }, price: 0 }, { id: '2layers', name: { ar: 'طبقين (1300₺)', tr: '2 Kat', en: '2 Layers' }, price: 400 }] }] },
    { id: 112, categoryId: 'porsiyon_doner', price: 950, image: '/images/family-Arabic-Shawarma-Meal(5 people).png', name: { ar: 'وجبة شاورما عربي عائلي (5 أشخاص)', tr: 'Aile Arap döner 5 Kişi', en: 'Family Arabic Shawarma (5 People)' }, description: { ar: 'سدر عائلي ضخم يحتوي على قطع الشاورما العربي والبطاطا والمقبلات تكفي لـ 5 أشخاص.', tr: '5 kişilik aile boyu Arap döner tepsisi.', en: 'Huge family tray containing Arabic shawarma pieces and appetizers for 5 people.' } },
    { id: 113, categoryId: 'porsiyon_doner', price: 650, image: '/images/Western-Box-Meal.jpg', name: { ar: 'وجبة بوكس شاورما (قلعة الشام)', tr: 'Şam Kalesi Porsiyon', en: 'Shawarma Box (Qalaat Al-Sham)' }, description: { ar: 'بوكس متكامل يضم شاورما دجاج، بطاطا، مقبلات متنوعة وصوصات قلعة الشام المميزة.', tr: 'Şam Kalesi özel karışık döner kutusu.', en: 'Complete box including chicken shawarma, fries, and various appetizers.' } },

    // 2. وجبات الغربي (Batı Porsiyonlar)
    { id: 201, categoryId: 'bati_porsiyon', price: 345, image: '/images/crispy-meal.png', name: { ar: 'وجبة كريسبي', tr: 'Krispy Porsiyon', en: 'Crispy Chicken Meal' }, description: { ar: 'قطع دجاج مقلية بطبقة بريدنج مقرمشة جداً، تقدم مع البطاطا المقلية والمايونيز.', tr: 'Çıtır tavuk parçaları, patates ve mayonez ile.', en: 'Fried chicken pieces with extra crispy breading, served with fries and mayo.' } },
    { id: 202, categoryId: 'bati_porsiyon', price: 345, image: '/images/scallop-meal.png', name: { ar: 'وجبة اسكالوب', tr: 'Eskalop Porsiyon', en: 'Escalope Meal' }, description: { ar: 'صدر دجاج مخلي ومقلي بلمسة دمشقية، يقدم مع السلطة والبطاطا والثوم.', tr: 'Geleneksel usul tavuk şnitzel porsiyon.', en: 'Fried boneless chicken breast, served with salad, fries, and garlic sauce.' } },
    { id: 203, categoryId: 'bati_porsiyon', price: 345, image: '/images/Zinger-meal--.png', name: { ar: 'وجبة زنجر', tr: 'Zencer Porsiyon', en: 'Zinger Meal' }, description: { ar: 'قطع دجاج سبايسي حار ومقرمش، تقدم مع البطاطا وسلطة الملفوف المميزة.', tr: 'Acılı ve çıtır tavuk parçaları porsiyon.', en: 'Spicy and crispy chicken pieces, served with fries and coleslaw.' } },
    { id: 204, categoryId: 'bati_porsiyon', price: 345, image: '/images/Fahita-meal.png', name: { ar: 'وجبة فاهيتا', tr: 'Fahita Porsiyon', en: 'Fajita Meal' }, description: { ar: 'شرائح دجاج مطبوخة مع الفلفل الرومي الملون والبصل والبهارات المكسيكية، تقدم مع الأرز أو الخبز.', tr: 'Meksika usulü sebzeli tavuk sote.', en: 'Chicken slices cooked with bell peppers, onions, and Mexican spices.' } },
    { id: 205, categoryId: 'bati_porsiyon', price: 345, image: '/images/Mexicano-meal.png', name: { ar: 'وجبة مكسيكانو', tr: 'Mexicano Tavuk Porsiyon', en: 'Mexicano Meal' }, description: { ar: 'قطع دجاج بتتبيلة مكسيكانو الحارة مع الخضروات، تقدم مع المقبلات الغربية.', tr: 'Acı soslu Meksika tarzı tavuk porsiyon.', en: 'Chicken pieces with spicy Mexicano seasoning and vegetables.' } },
    { id: 206, categoryId: 'bati_porsiyon', price: 395, image: '/images/Supreme-meal.jpg', name: { ar: 'وجبة سوبريم', tr: 'Supreme Porsiyon', en: 'Supreme Meal' }, description: { ar: 'صدر دجاج محشو بالجبن والمرتديلا، يقدم بصلصة كريمة بيضاء فاخرة والبطاطا.', tr: 'Peynir ve salam dolgulu tavuk göğsü, krema soslu.', en: 'Chicken breast stuffed with cheese and mortadella, served with white cream sauce.' } },
    {
        id: 207, categoryId: 'bati_porsiyon', price: 315, image: '/images/Chicken-burger-meal.jpg', name: { ar: 'وجبة همبرغر دجاج', tr: 'Tavuk Burger Porsiyon', en: 'Chicken Burger Meal' }, description: { ar: 'برغر دجاج مشوي يقدم داخل خبز البرغر الطازج مع الخس والطماطم والبطاطا.', tr: 'Tavuk burger menü, patates kızartması ile.', en: 'Grilled chicken burger served in fresh bun with lettuce, tomato, and fries.' },
        optionGroups: [
            { id: 'main', name: { ar: 'الطلب الرئيسي', tr: 'Ana Seçim', en: 'Main Selection' }, options: [{ id: 'reg', name: { ar: 'عادي', tr: 'Normal', en: 'Regular' }, price: 0 }] },
            { id: 'cheese', name: { ar: 'إضافة جبنة', tr: 'Peynir', en: 'Extra Cheese' }, options: [{ id: 'no', name: { ar: 'بدون جبنة', tr: 'Peynirsiz', en: 'No Cheese' }, price: 0 }, { id: 'yes', name: { ar: 'مع جبنة', tr: 'Kaşarlı', en: 'With Cheese' }, price: 20 }] }
        ]
    },
    {
        id: 210, categoryId: 'bati_porsiyon', price: 345, image: '/images/Beef-burger-meal.jpg', name: { ar: 'وجبة همبرغر لحم', tr: 'Et Burger Porsiyon', en: 'Beef Burger Meal' }, description: { ar: 'برغر لحم بقري صافي مشوي على اللهب، يقدم مع صوص البرغر الخاص والبطاطا المقلية.', tr: 'Dana eti burger menü, patates kızartması ile.', en: 'Flame-grilled pure beef burger, served with special burger sauce and fries.' },
        optionGroups: [
            { id: 'main', name: { ar: 'الطلب الرئيسي', tr: 'Ana Seçim', en: 'Main Selection' }, options: [{ id: 'reg', name: { ar: 'عادي', tr: 'Normal', en: 'Regular' }, price: 0 }] },
            { id: 'cheese', name: { ar: 'إضافة جبنة', tr: 'Peynir', en: 'Extra Cheese' }, options: [{ id: 'no', name: { ar: 'بدون جبنة', tr: 'Peynirsiz', en: 'No Cheese' }, price: 0 }, { id: 'yes', name: { ar: 'مع جبنة', tr: 'Kaşarlı', en: 'With Cheese' }, price: 20 }] }
        ]
    },
    { id: 208, categoryId: 'bati_porsiyon', price: 650, image: '/images/Western-Box-Meal.jpg', name: { ar: 'وجبة بوكس غربي', tr: 'Karışık Porsiyon', en: 'Mixed Western Box' }, description: { ar: 'تشكيلة من أفضل أصناف الدجاج الغربي (كريسبي، زنجر، فاهيتا) في بوكس عائلي واحد.', tr: 'Karışık batı usulü tavuk kutusu (Krispy, Zencer, Fahita).', en: 'Selection of the best western chicken (Crispy, Zinger, Fajita) in one box.' } },

    // 3. ساندويش الغربي (Batı Sandviçler)
    { id: 301, categoryId: 'bati_sandvic', price: 180, image: '/images/Mexicano-sandwich.jpg', name: { ar: 'ساندويش مكسيكانو', tr: 'Mexicano Sandviç', en: 'Mexicano Sandwich' }, description: { ar: 'ساندويش دجاج مكسيكانو حار مع صوص الفليفلة والجبن الذائب والذرة.', tr: 'Acı soslu tavuk Meksikano sandviç.', en: 'Spicy Mexicano chicken sandwich with pepper sauce and melted cheese.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },
    { id: 306, categoryId: 'bati_sandvic', price: 180, image: '/images/Fahita-sandwich.jpg', name: { ar: 'ساندويش فاهيتا', tr: 'Fahita Sandviç', en: 'Fajita Sandwich' }, description: { ar: 'شرائح الفاهيتا المتبلة والمطبوخة مع الخضار الطازجة داخل خبز الصمون أو الصاج.', tr: 'Sebzeli tavuk fahit sandviç.', en: 'Marinated fajita chicken strips cooked with vegetables in fresh bread.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },
    { id: 307, categoryId: 'bati_sandvic', price: 180, image: '/images/Crispy-sandwich.jpg', name: { ar: 'ساندويش كريسبي', tr: 'Krispy Sandviç', en: 'Crispy Sandwich' }, description: { ar: 'قطع دجاج كريسبي مقرمشة مع صوص الثوم والمخلل والخس الطازج.', tr: 'Çıtır tavuklu krispy sandviç.', en: 'Crispy fried chicken pieces with garlic sauce, pickles, and lettuce.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },
    { id: 302, categoryId: 'bati_sandvic', price: 190, image: '/images/Supreme-Sandwich.jpg', name: { ar: 'ساندويش سوبريم', tr: 'Supreme Sandviç', en: 'Supreme Sandwich' }, description: { ar: 'ساندويش دجاج سوبريم غني بالجبن وصوص المشروم الكريمي الفاخر.', tr: 'Mantar soslu ve peynirli supreme sandviç.', en: 'Supreme chicken sandwich with extra cheese and creamy mushroom sauce.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },
    { id: 303, categoryId: 'bati_sandvic', price: 200, image: '/images/Beef-burger.jpg', name: { ar: 'ساندويش همبرغر لحم', tr: 'Et Hamburger Sandviç', en: 'Beef Burger Sandwich' }, description: { ar: 'ساندويش همبرغر لحم بقري محضر يدوياً مع الخضروات الطازجة وصوصنا الخاص.', tr: 'Ev yapımı dana burger sandviç.', en: 'Handmade beef burger sandwich with fresh vegetables and special sauce.' }, optionGroups: [{ id: 'cheese', name: { ar: 'إضافة جبنة', tr: 'Peynir', en: 'Cheese' }, options: [{ id: 'no', name: { ar: 'بدون جبنة', tr: 'Peynirsiz', en: 'No Cheese' }, price: 0 }, { id: 'yes', name: { ar: 'مع جبنة', tr: 'Kaşarlı', en: 'With Cheese' }, price: 20 }] }] },
    { id: 304, categoryId: 'bati_sandvic', price: 180, image: '/images/Chicken-burger.jpg', name: { ar: 'ساندويش همبرغر دجاج', tr: 'Tavuk Burger Sandviç', en: 'Chicken Burger Sandwich' }, description: { ar: 'ساندويش برغر دجاج كلاسيكي مع صوص المايونيز والجبن والخضروات.', tr: 'Tavuk burger sandviç.', en: 'Classic chicken burger sandwich with mayo, cheese, and vegetables.' }, optionGroups: [{ id: 'cheese', name: { ar: 'إضافة جبنة', tr: 'Peynir', en: 'Cheese' }, options: [{ id: 'no', name: { ar: 'بدون جبنة', tr: 'Peynirsiz', en: 'No Cheese' }, price: 0 }, { id: 'yes', name: { ar: 'مع جبنة', tr: 'Kaşarlı', en: 'With Cheese' }, price: 20 }] }] },
    {
        id: 305, categoryId: 'bati_sandvic', price: 140, image: '/images/potato-sandwich.jpg', name: { ar: 'ساندويش بطاطا', tr: 'Patates Sandviç', en: 'Potato Sandwich' }, description: { ar: 'ساندويش بطاطا مقلية ساخنة مع صوص الثوم والكاتشب في خبز الصاج أو الصمون.', tr: 'Sarımsak soslu patates sandviç.', en: 'Hot fries sandwich with garlic sauce and ketchup in saj or baguette bread.' },
        optionGroups: [
            { id: 'size', name: { ar: 'الحجم والنوع (رئيسي)', tr: 'Boyut Seçimi', en: 'Select Size' }, options: [{ id: 'normal', name: { ar: 'عادي', tr: 'Normal', en: 'Regular' }, price: 0 }, { id: 'double', name: { ar: 'دبل', tr: 'Çift', en: 'Double' }, price: 10 }] },
            { id: 'bread', name: { ar: 'نوع الخبز', tr: 'Ekmek Türü', en: 'Bread Type' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Saj Bread' }, price: 0 }, { id: 'somun', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 30 }] }
        ]
    },
    { id: 308, categoryId: 'bati_sandvic', price: 180, image: '/images/scallop-meal.png', name: { ar: 'ساندويش اسكالوب', tr: 'Eskalop Sandviç', en: 'Escalope Sandwich' }, description: { ar: 'صدر دجاج اسكالوب مقلي يقدم مع الثوم والبطاطا بخبز طازج.', tr: 'Taze ekmekte sarımsak ve turşu ile servis edilen tavuk şnitzel.', en: 'Fried chicken escalope served with garlic, pickles, and fries in fresh bread.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },
    { id: 309, categoryId: 'bati_sandvic', price: 180, image: '/images/Zinger-meal--.png', name: { ar: 'ساندويش زنجر', tr: 'Zencer Sandviç', en: 'Zinger Sandwich' }, description: { ar: 'قطع زنجر حارة ومقرمشة مع صوص الجبن والخس بخبز الصمون أو الصاج.', tr: 'Peynir soslu ve marullu acılı çıtır tavuk sandviç.', en: 'Spicy crispy zinger pieces with cheese sauce and lettuce in fresh bread.' }, optionGroups: [{ id: 'bread', name: { ar: 'نوع الخبز (رئيسي)', tr: 'Ekmek', en: 'Bread' }, options: [{ id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 }, { id: 'ekmek', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 0 }] }] },

    // 4. وجبات الشرقي (Doğu Porsiyonlar)
    {
        id: 401, categoryId: 'dogu_porsiyon', price: 325, image: '/images/Yabraq-meal.jpg', name: { ar: 'وجبة يبرق', tr: 'Yaprak Sarması Porsiyon', en: 'Vine Leaves Meal' }, description: { ar: 'ورق عنب محشو بالأرز والبهارات الشامية (يبرق)، مطبوخ ببطء بمرق اللحم أو مع الدجاج.', tr: 'Tavuk veya et eşliğinde yaprak sarması tabağı.', en: 'Vine leaves stuffed with rice and spices (Yabrak), slow-cooked in broth.' },
        optionGroups: [{ id: 'side', name: { ar: 'نوع الوجبة (رئيسي)', tr: 'Eklenti', en: 'Select Side' }, options: [{ id: 'chicken', name: { ar: 'مع فروج', tr: 'Tavuklu', en: 'With Chicken' }, price: 0 }, { id: 'meat', name: { ar: 'مع لحم', tr: 'Etli', en: 'With Meat' }, price: 175 }] }]
    },
    { id: 402, categoryId: 'dogu_porsiyon', price: 325, image: '/images/Rice-and-molokhia-meal.jpg', name: { ar: 'وجبة رز وملوخية', tr: 'Muluhiye + Pilav', en: 'Molokhia with Rice' }, description: { ar: 'ملوخية خضراء محضرة على الطريقة الشامية التقليدية مع الأرز الأبيض بالشعيرية والدجاج.', tr: 'Tavuklu mülhiye ve şehriyeli pilav.', en: 'Green Molokhia prepared in traditional Damascene style with vermicelli rice and chicken.' } },
    { id: 403, categoryId: 'dogu_porsiyon', price: 325, image: '/images/Fajita-meal-with-rice.jpg', name: { ar: 'وجبة رز وفاهيتا', tr: 'Fahita + Pilav', en: 'Fajita with Rice' }, description: { ar: 'أرز بسمتي فاخر يقدم مع شرائح الفاهيتا المتبلة والمطبوخة مع الخضروات الملونة.', tr: 'Pilav eşliğinde tavuk fahit.', en: 'Premium basmati rice served with seasoned fajita chicken strips.' } },
    { id: 404, categoryId: 'dogu_porsiyon', price: 325, image: '/images/Mexicano-meal.png', name: { ar: 'وجبة رز ومكسيكانو', tr: 'Mexicano Tavuk + Pilav', en: 'Mexicano Chicken with Rice' }, description: { ar: 'قطع دجاج مكسيكانو بتتبيلة حارة تقدم مع أرز بسمتي فاخر وسلطة.', tr: 'Acı soslu Meksika tarzı tavuk ve pilav.', en: 'Spicy Mexicano chicken pieces served with premium basmati rice.' } },

    // 8. قسم الفروج والمناسف (Tavuk ve Mansaf)
    {
        id: 801, categoryId: 'pilic_mansaf', price: 300,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=400&q=80',
        name: { ar: 'فروج مشوي + سرفيس', tr: 'Izgara Tavuk + Servis', en: 'Grilled Chicken + Service' },
        description: { ar: 'فروج مشوي على الفحم بتتبيلة مميزة، يقدم مع البطاطا، الثوم، السلطة والخبز.', tr: 'Kömür ateşinde ızgara tavuk, yanında patates, sarımsak, salata ve ekmek ile.', en: 'Charcoal-grilled chicken with special seasoning, served with fries, garlic, salad, and bread.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'half', name: { ar: 'نصف فروج (300₺)', tr: 'Yarım Tavuk', en: 'Half Chicken' }, price: 0 }, { id: 'full', name: { ar: 'فروج كامل (530₺)', tr: 'Bütün Tavuk', en: 'Whole Chicken' }, price: 230 }] }]
    },
    {
        id: 803, categoryId: 'pilic_mansaf', price: 355,
        image: '/images/Broasted-chicken+service.jpg',
        name: { ar: 'فروج بروستد + سرفيس', tr: 'Brosted Tavuk + Servis', en: 'Broasted Chicken + Service' },
        description: { ar: 'فروج مقلي بالضغط بخلطة بروستد المقرمشة، يقدم مع بطاطا وسلطة ثوم ومخلل.', tr: 'Çıtır kaplamalı broasted tavuk, patates ve sarımsak sosu ile.', en: 'Crispy pressure-fried broasted chicken, served with fries, garlic sauce, and pickles.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'half', name: { ar: 'نصف فروج (355₺)', tr: 'Yarım Tavuk', en: 'Half Chicken' }, price: 0 }, { id: 'full', name: { ar: 'فروج كامل (710₺)', tr: 'Bütün Tavuk', en: 'Whole Chicken' }, price: 355 }] }]
    },
    {
        id: 805, categoryId: 'pilic_mansaf', price: 175,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=400&q=80',
        name: { ar: 'فروج مشوي سادة', tr: 'Sade Izgara Tavuk', en: 'Plain Grilled Chicken' },
        description: { ar: 'فروج مشوي على الفحم بدون إضافات سرفيس.', tr: 'Mezesiz sadece ızgara tavuk.', en: 'Charcoal-grilled chicken without additional side service.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'half', name: { ar: 'نصف فروج (175₺)', tr: 'Yarım Tavuk', en: 'Half Chicken' }, price: 0 }, { id: 'full', name: { ar: 'فروج كامل (350₺)', tr: 'Bütün Tavuk', en: 'Whole Chicken' }, price: 175 }] }]
    },
    { id: 807, categoryId: 'pilic_mansaf', price: 285, image: '/images/Rice meal+a-quarter-chicken.jpg', name: { ar: 'وجبة رز + ربع فروج', tr: 'Porsiyon Pilav + Tavuk But', en: 'Rice + Chicken Leg Portion' }, description: { ar: 'طبق أرز شرقي يقدم مع ربع فروج (فخذ) وسلطة طازجة.', tr: 'Tavuk but ve pilav porsiyon.', en: 'Oriental rice plate served with a chicken leg quarter and salad.' } },
    { id: 808, categoryId: 'pilic_mansaf', price: 345, image: '/images/Chicken-Kabsa-or-Mandi-meal.jpg', name: { ar: 'وجبة كبسة أو مندي دجاج', tr: 'Porsiyon Tavuklu Pilav', en: 'Chicken Kabsa or Mandi' }, description: { ar: 'أرز كبسة أو مندي متبل يقدم مع ربع فروج وصوص الدقوس الحار.', tr: 'Tavuklu özel baharatlı pilav porsiyon.', en: 'Spiced Kabsa or Mandi rice served with a chicken quarter and sauce.' } },
    { id: 809, categoryId: 'pilic_mansaf', price: 550, image: '/images/Kabsa-or-Mandi-meat-meal.jpeg', name: { ar: 'وجبة كبسة أو مندي لحم', tr: 'Porsiyon Etli Pilav', en: 'Meat Kabsa or Mandi' }, description: { ar: 'أرز كبسة أو مندي يقدم مع قطع لحم ضأن طرية ومكسرات محمصة.', tr: 'Etli özel baharatlı pilav porsiyon.', en: 'Kabsa or Mandi rice served with tender lamb pieces and nuts.' } },
    {
        id: 810, categoryId: 'pilic_mansaf', price: 900,
        image: '/images/Chicken-Mansaf.jpg',
        name: { ar: 'منسف دجاج', tr: 'Tavuklu Mansaf', en: 'Chicken Mansaf' },
        description: { ar: 'منسف دجاج عائلي يقدم على سدر أرز كبير مع المكسرات واللبن.', tr: 'Aile boyu tavuklu pilav tepsisi.', en: 'Chicken mansaf served on a large rice tray with nuts.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: '2p', name: { ar: 'شخصين (900₺)', tr: '2 Kişi', en: '2 Persons' }, price: 0 }, { id: '4p', name: { ar: '4 أشخاص (1600₺)', tr: '4 Kişi', en: '4 Persons' }, price: 700 }] }]
    },
    {
        id: 811, categoryId: 'pilic_mansaf', price: 1100,
        image: '/images/Mansaf-meat.jpeg',
        name: { ar: 'منسف لحم', tr: 'Etli Mansaf', en: 'Meat Mansaf' },
        description: { ar: 'منسف لحم ضأن فاخر يكفي للمشاركة مع الأرز والبهارات والمكسرات.', tr: 'Etli pilav tepsisi.', en: 'Luxury lamb mansaf with rice, spices, and nuts.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: '2p', name: { ar: 'شخصين (1100₺)', tr: '2 Kişi', en: '2 Persons' }, price: 0 }, { id: '4p', name: { ar: '4 أشخاص (2200₺)', tr: '4 Kişi', en: '4 Persons' }, price: 1100 }] }]
    },

    // 5. ساندويش الشاورما (Döner Sandviçler)
    {
        id: 501, categoryId: 'doner_sandvic', price: 140, image: '/images/Shawarma.jpg', name: { ar: 'ساندويش شاورما دجاج', tr: 'Tavuk Döner Sandviç', en: 'Chicken Shawarma Wrap' }, description: { ar: 'لفائف الشاورما التقليدية بخبز الصاج أو الصمون مع صوص الثوم والمخلل والبطاطا.', tr: 'Lavaş veya somun ekmeğinde tavuk döner dürüm.', en: 'Traditional shawarma wraps in saj or baguette bread with garlic sauce and pickles.' },
        optionGroups: [
            {
                id: 'main', name: { ar: 'نوع الساندويش (رئيسي)', tr: 'Tür', en: 'Type' }, options: [
                    { id: 'normal', name: { ar: 'عادي', tr: 'Normal', en: 'Regular' }, price: 0 },
                    { id: 'double', name: { ar: 'دبل', tr: 'Çift', en: 'Double' }, price: 10 },
                    { id: 'extra', name: { ar: 'اكسترا', tr: 'Ekstra', en: 'Extra Meat' }, price: 30 }
                ]
            },
            {
                id: 'bread', name: { ar: 'نوع الخبز', tr: 'Ekmek', en: 'Bread' }, options: [
                    { id: 'lavash', name: { ar: 'خبز صاج', tr: 'Lavaş', en: 'Tortilla' }, price: 0 },
                    { id: 'somun', name: { ar: 'صمون', tr: 'Somun', en: 'Baguette' }, price: 30 },
                    { id: '3loaves', name: { ar: '3 رغيف', tr: '3 Ekmek', en: '3 Loaves' }, price: 30 }
                ]
            },
            {
                id: 'adds', name: { ar: 'إضافات مجانية', tr: 'Ekstralar (Bedava)', en: 'Free Extras' }, options: [
                    { id: 'none', name: { ar: 'بدون إضافات', tr: 'Sade', en: 'No Extras' }, price: 0 },
                    { id: 'fries', name: { ar: 'بطاطا', tr: 'Patates', en: 'Fries' }, price: 0 }
                ]
            }
        ]
    },
    { id: 502, categoryId: 'doner_sandvic', price: 100, image: '/images/Yabraq-Shawarma-Sandwich.jpg', name: { ar: 'ساندويش يبرق شاورما', tr: 'Minik Döner', en: 'Mini Shawarma' }, description: { ar: 'سندويشات شاورما صغيرة محشوة بقطع اليبرق (ورق العنب) لنكهة مبتكرة وفريدة.', tr: 'Özel yaprak sarmalı mini döner sandviç.', en: 'Mini shawarma sandwiches stuffed with vine leaves for an innovative flavor.' } },

    // 6. قسم المقبلات (Mezeler)
    { id: 601, categoryId: 'mezeler', price: 80, image: '/images/lentils.jpg', name: { ar: 'شوربة عدس', tr: 'Mercimek Çorbası', en: 'Lentil Soup' }, description: { ar: 'شوربة عدس دافئة ومغذية تقدم مع الخبز المحمص والليمون الطازج.', tr: 'Limon ve kıtır ekmekli mercimek çorbası.', en: 'Warm and nutritious lentil soup served with toasted bread and fresh lemon.' } },
    { id: 602, categoryId: 'mezeler', price: 80, image: '/images/Kabsa-rice-dish.jpg', name: { ar: 'طبق رز كبسة', tr: 'Kabseh Pilavı', en: 'Kabsa Rice Plate' }, description: { ar: 'طبق من الأرز البسمتي طويل الحبة المتبل ببهارات الكبسة الخليجية العطرة.', tr: 'Özel baharatlı Kabse pilavı tabağı.', en: 'Plate of long-grain basmati rice seasoned with fragrant Gulf Kabsa spices.' }, optionGroups: [{ id: 'size', name: { ar: 'الحجم', tr: 'Boyut', en: 'Size' }, options: [{ id: 'small', name: { ar: 'صغير', tr: 'Küçük', en: 'Small' }, price: 0 }, { id: 'large', name: { ar: 'كبير', tr: 'Büyük', en: 'Large' }, price: 70 }] }] },
    { id: 611, categoryId: 'mezeler', price: 80, image: '/images/Mandi-rice-dish.jpg', name: { ar: 'طبق رز مندي', tr: 'Mandi Pilavı', en: 'Mandi Rice Plate' }, description: { ar: 'أرز مندي حضرمي مطهو بالبخار مع نكهة التدخين المميزة والبهارات الأصلية.', tr: 'İsli aromalı Mandi pilavı tabağı.', en: 'Steamed Mandi rice with a distinctive smoky flavor and authentic spices.' }, optionGroups: [{ id: 'size', name: { ar: 'الحجم', tr: 'Boyut', en: 'Size' }, options: [{ id: 'small', name: { ar: 'صغير', tr: 'Küçük', en: 'Small' }, price: 0 }, { id: 'large', name: { ar: 'كبير', tr: 'Büyük', en: 'Large' }, price: 70 }] }] },
    { id: 603, categoryId: 'mezeler', price: 80, image: '/images/potato-dish.jpg', name: { ar: 'طبق بطاطا', tr: 'Patates Tabağı', en: 'Fries Plate' }, description: { ar: 'أصابع بطاطا مقلية ذهبية ومقرمشة ومملحة بدقة.', tr: 'Çıtır patates kızartması tabağı.', en: 'Golden, crispy, and perfectly salted french fries plate.' }, optionGroups: [{ id: 'size', name: { ar: 'الحجم', tr: 'Boyut', en: 'Size' }, options: [{ id: 'small', name: { ar: 'صغير', tr: 'Küçük', en: 'Small' }, price: 0 }, { id: 'large', name: { ar: 'كبير', tr: 'Büyük', en: 'Large' }, price: 70 }] }] },
    { id: 604, categoryId: 'mezeler', price: 180, image: '/images/Eastern-salad.jpg', name: { ar: 'سلطة شرقية', tr: 'Çoban Salatası', en: 'Oriental Salad' }, description: { ar: 'سلطة من الخضروات الطازجة (طماطم، خيار، بصل، بقدونس) مع زيت الزيتون والليمون.', tr: 'Taze sebzeli Çoban salatası.', en: 'Fresh vegetable salad with olive oil and lemon dressing.' } },
    { id: 612, categoryId: 'mezeler', price: 60, image: '/images/Russian-authority.jpg', name: { ar: 'سلطة روسية (250 جم)', tr: 'Rus Salatası', en: 'Russian Salad (250g)' }, description: { ar: 'مزيج شهي من الخضروات المسلوقة والمايونيز الكريمي والذرة.', tr: 'Mayonezli Rus salatası tabağı.', en: 'Delicious mix of boiled vegetables, creamy mayonnaise, and corn.' } },
    { id: 613, categoryId: 'mezeler', price: 180, image: '/images/Tabbouleh-salad.jpg', name: { ar: 'سلطة تبولة', tr: 'Taboule', en: 'Tabbouleh' }, description: { ar: 'سلطة البرغل الناعم والبقدونس الطازج المفروم والليمون وزيت الزيتون.', tr: 'Taze maydanozlu Tabule salatası.', en: 'Fine bulgur, freshly chopped parsley, lemon, and olive oil salad.' } },
    { id: 614, categoryId: 'mezeler', price: 180, image: '/images/Fattoush-salad.jpg', name: { ar: 'سلطة فتوش', tr: 'Fattoş', en: 'Fattoush' }, description: { ar: 'سلطة متنوعة من الخضروات الموسمية مع قطع الخبز المقلي ودبس الرمان الحامض.', tr: 'Kıtır ekmekli ve nar ekşili Fattoş salatası.', en: 'Mixed seasonal vegetable salad with fried bread pieces and pomegranate molasses.' } },
    { id: 605, categoryId: 'mezeler', price: 180, image: '/images/Mutabbal-dish.jpg', name: { ar: 'متبل باذنجان', tr: 'Yoğurtlu Patlıcan', en: 'Mutabbal' }, description: { ar: 'باذنجان مشوي ومهروس مع الطحينة والزبادي والثوم وزيت الزيتون.', tr: 'Tahinli ve yoğurtlu köz patlıcan.', en: 'Grilled and mashed eggplant with tahini, yogurt, garlic, and olive oil.' } },
    { id: 615, categoryId: 'mezeler', price: 180, image: '/images/Hummus-dish.jpg', name: { ar: 'حمص', tr: 'Humus', en: 'Hummus' }, description: { ar: 'حمص بالطحينة محضر على الطريقة التقليدية ناعم وكريمي.', tr: 'Geleneksel pürüzsüz humus tabağı.', en: 'Traditionally prepared smooth and creamy hummus with tahini.' } },
    { id: 616, categoryId: 'mezeler', price: 180, image: '/images/Baba-Ghanoush-dish.jpg', name: { ar: 'بابا غنوج', tr: 'Baba Ganuj', en: 'Baba Ganoush' }, description: { ar: 'باذنجان مشوي ومهروس مع الخضروات الملونة (فليفلة، طماطم) وزيت الزيتون.', tr: 'Sebzeli köz patlıcan salatası.', en: 'Grilled eggplant mixed with colorful vegetables and olive oil.' } },
    { id: 606, categoryId: 'mezeler', price: 180, image: '/images/Yalangi-dish.jpg', name: { ar: 'يالنجي', tr: 'Zeytinyağlı Sarma', en: 'Yalangi' }, description: { ar: 'ورق عنب بارد محشو بالأرز والخضروات وزيت الزيتون ودبس الرمان.', tr: 'Zeytinyağlı yaprak sarma.', en: 'Cold vine leaves stuffed with rice, vegetables, and olive oil.' } },
    { id: 608, categoryId: 'mezeler', price: 60, image: '/images/Tripoli-Kibbeh-dish.jpg', name: { ar: 'كبة طرابلسية (قطعة واحدة)', tr: 'İçli Köfte 1 Tane', en: 'Kibbeh (1 Piece)' }, description: { ar: 'كبة برغل مقلية محشوة باللحم المفروم المتبل والبصل والمكسرات.', tr: 'Geleneksel içli köfte.', en: 'Fried bulgur kibbeh stuffed with seasoned minced meat, onions, and nuts.' } },
    {
        id: 609, categoryId: 'mezeler', price: 25, image: '/images/sauces.jpg',
        name: { ar: 'الصوصات والمقبلات الموزونة', tr: 'Soslar ve Mezeler', en: 'Sauces and Dips' },
        description: { ar: 'تشكيلة من الصوصات المنزلية الطازجة والمقبلات الخفيفة الموزونة بدقة لتكمل وجبتك.', tr: 'Yemeğinizi tamamlayan taze ev yapımı soslar.', en: 'Assortment of fresh homemade sauces and weighed appetizers to complete your meal.' },
        optionGroups: [
            {
                id: 'type', name: { ar: 'نوع الصوص (رئيسي)', tr: 'Tür', en: 'Type' }, options: [
                    { id: 'garlic', name: { ar: 'ثوم', tr: 'Sarımsak', en: 'Garlic' }, price: 0 },
                    { id: 'pickle_c', name: { ar: 'مخلل خيار', tr: 'Salatalık Turşu', en: 'Cucumber Pickle' }, price: 0 },
                    { id: 'pickle_p', name: { ar: 'مخلل فليفلة', tr: 'Biber Turşu', en: 'Chili Pickle' }, price: 0 },
                    { id: 'spicy_mayo', name: { ar: 'مايونيز أحمر', tr: 'Acı Mayonez', en: 'Spicy Mayo' }, price: 0 },
                    { id: 'ketchup', name: { ar: 'كتشب', tr: 'Ketçap', en: 'Ketchup' }, price: 0 },
                    { id: 'russian', name: { ar: 'سلطة روسية', tr: 'Rus Salatası', en: 'Russian Salad' }, price: 0 }
                ]
            },
            {
                id: 'size', name: { ar: 'الحجم / الوزن', tr: 'Boyut / Ağırlık', en: 'Size / Weight' }, options: [
                    { id: 'small', name: { ar: 'علبة صغيرة', tr: 'Küçük Kap', en: 'Small Cup' }, price: 0 },
                    { id: '250g', name: { ar: 'وزن 250 جم', tr: '250g Ağırlık', en: '250g Weight' }, price: 35 }
                ]
            }
        ]
    },

    // 7. قسم المشروبات (İçecekler)
    {
        id: 701, categoryId: 'icecekler', price: 20, image: '/images/Ayran.jpeg', name: { ar: 'عيران', tr: 'Ayran', en: 'Ayran' }, description: { ar: 'لبن عيران بارد ومنعش، الرفيق الأمثل لوجبة الشاورما.', tr: 'Taze ve soğuk ayran.', en: 'Cold and refreshing Ayran, the perfect companion for shawarma.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'small', name: { ar: 'صغير', tr: 'Küçük', en: 'Small' }, price: 0 }, { id: 'large', name: { ar: 'كبير', tr: 'Büyük', en: 'Large' }, price: 10 }, { id: '1lt', name: { ar: '1 لتر', tr: '1 Litre', en: '1 Liter' }, price: 45 }] }]
    },
    {
        id: 702, categoryId: 'icecekler', price: 50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80', name: { ar: 'كولا', tr: 'Kola', en: 'Cola' }, description: { ar: 'مشروبات غازية متنوعة باردة ومنعشة.', tr: 'Soğuk meşrubatlar.', en: 'Various cold and refreshing carbonated soft drinks.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'can', name: { ar: 'علبة', tr: 'Kutu', en: 'Can' }, price: 0 }, { id: '1lt', name: { ar: '1 لتر', tr: '1 Litre', en: '1 Liter' }, price: 20 }, { id: 'family', name: { ar: 'عائلي', tr: 'Aile', en: 'Family Size' }, price: 40 }] }]
    },
    { id: 703, categoryId: 'icecekler', price: 40, image: '/images/energy-drink.jpg', name: { ar: 'مشروب طاقة كبير', tr: 'Enerji Büyük', en: 'Energy Drink Large' }, description: { ar: 'مشروب طاقة بارد لزيادة الحيوية والنشاط.', tr: 'Büyük boy enerji içeceği.', en: 'Large cold energy drink for a boost of vitality.' } },
    {
        id: 704, categoryId: 'icecekler', price: 40, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80', name: { ar: 'عصير طبيعي', tr: 'Meyve Suyu', en: 'Natural Juice' }, description: { ar: 'عصير فواكه طبيعي طازج يتم تحضيره بعناية.', tr: 'Taze sıkılmış meyve suyu.', en: 'Fresh natural fruit juice prepared with care.' },
        optionGroups: [{ id: 'size', name: { ar: 'الحجم (رئيسي)', tr: 'Boyut', en: 'Size' }, options: [{ id: 'small', name: { ar: 'صغير', tr: 'Küçük', en: 'Small' }, price: 0 }, { id: '1lt', name: { ar: '1 لتر', tr: '1 Litre', en: '1 Liter' }, price: 25 }] }]
    },
    { id: 705, categoryId: 'icecekler', price: 10, image: '/images/su.jpeg', name: { ar: 'ماء', tr: 'Su', en: 'Water' }, description: { ar: 'مياه معدنية نقية باردة.', tr: 'Soğuk su.', en: 'Pure cold mineral water.' } }
];
