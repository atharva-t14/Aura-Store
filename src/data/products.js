/*export const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty',
    'Sports',
    'Books',
    'Toys',
    'Automotive'
]

export const products = [
    // Electronics
    {
        id: 1,
        title: 'Apple iPhone 15 Pro Max',
        description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system. Features include 6.7-inch Super Retina XDR display, 5G capability, and up to 1TB storage.',
        price: 1199,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
            'https://images.unsplash.com/photo-1695048064595-830e56b92c67?w=400',
            'https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?w=400'
        ],
        rating: 4.8,
        ratingCount: 2847,
        stock: 45
    },
    {
        id: 2,
        title: 'Samsung Galaxy S24 Ultra',
        description: 'Premium Android smartphone with 200MP camera, S Pen, and AI-powered features. Includes 6.8-inch Dynamic AMOLED display and all-day battery life.',
        price: 1099,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
        images: [
            'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
        ],
        rating: 4.7,
        ratingCount: 1923,
        stock: 38
    },
    {
        id: 3,
        title: 'Sony WH-1000XM5 Headphones',
        description: 'Industry-leading noise canceling wireless headphones with premium sound quality, 30-hour battery life, and multipoint connection.',
        price: 349,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400',
        images: [
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400'
        ],
        rating: 4.9,
        ratingCount: 3421,
        stock: 67
    },
    {
        id: 4,
        title: 'MacBook Pro 16" M3 Max',
        description: 'Professional laptop with Apple M3 Max chip, up to 128GB unified memory, stunning Liquid Retina XDR display, and all-day battery life.',
        price: 2499,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400'
        ],
        rating: 4.9,
        ratingCount: 1567,
        stock: 23
    },
    {
        id: 5,
        title: 'iPad Air 11" M2',
        description: 'Powerful and portable tablet with M2 chip, all-day battery, and support for Apple Pencil Pro. Perfect for creativity and productivity.',
        price: 599,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
        images: [
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
            'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400'
        ],
        rating: 4.7,
        ratingCount: 892,
        stock: 54
    },
    {
        id: 6,
        title: 'Canon EOS R6 Mark II',
        description: 'Full-frame mirrorless camera with 24MP sensor, up to 40fps burst shooting, and advanced subject detection. Ideal for professionals and enthusiasts.',
        price: 2399,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1606980707831-ffe8e02d3f1f?w=400',
        images: [
            'https://images.unsplash.com/photo-1606980707831-ffe8e02d3f1f?w=400',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400'
        ],
        rating: 4.8,
        ratingCount: 743,
        stock: 18
    },

    // Fashion
    {
        id: 7,
        title: 'Levi\'s 501 Original Jeans',
        description: 'Classic straight fit jeans with button fly, made from premium denim. A timeless wardrobe essential that never goes out of style.',
        price: 89,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
        images: [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
            'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400'
        ],
        rating: 4.6,
        ratingCount: 2134,
        stock: 156
    },
    {
        id: 8,
        title: 'Nike Air Max 270',
        description: 'Iconic sneakers with Max Air cushioning, breathable mesh upper, and contemporary design. Available in multiple colorways.',
        price: 150,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400'
        ],
        rating: 4.7,
        ratingCount: 3892,
        stock: 234
    },
    {
        id: 9,
        title: 'Zara Oversized Blazer',
        description: 'Modern oversized blazer with notched lapels and flap pockets. Perfect for both professional and casual settings.',
        price: 129,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400',
        images: [
            'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400'
        ],
        rating: 4.5,
        ratingCount: 876,
        stock: 89
    },
    {
        id: 10,
        title: 'Ray-Ban Aviator Sunglasses',
        description: 'Classic aviator sunglasses with metal frame and crystal green lenses. UV protection and timeless style.',
        price: 179,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.8,
        ratingCount: 1567,
        stock: 143
    },
    {
        id: 11,
        title: 'H&M Cotton T-Shirt Pack',
        description: 'Set of 3 comfortable cotton t-shirts in classic colors. Soft, breathable, and perfect for everyday wear.',
        price: 29,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.4,
        ratingCount: 2891,
        stock: 567
    },
    {
        id: 12,
        title: 'Adidas Originals Track Jacket',
        description: 'Retro-inspired track jacket with iconic 3-stripes, ribbed cuffs, and full zip. Made from recycled materials.',
        price: 85,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.6,
        ratingCount: 1243,
        stock: 178
    },

    // Home & Kitchen
    {
        id: 13,
        title: 'Instant Pot Duo 7-in-1',
        description: 'Multi-use pressure cooker that pressure cooks, slow cooks, rice cooker, steamer, sauté, yogurt maker, and warmer. 6-quart capacity.',
        price: 99,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400',
        images: [
            'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400',
            'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=400'
        ],
        rating: 4.7,
        ratingCount: 4523,
        stock: 234
    },
    {
        id: 14,
        title: 'Ninja Professional Blender',
        description: '1000-watt blender with Total Crushing Technology. Perfect for smoothies, frozen drinks, and food prep. Includes 72oz pitcher.',
        price: 89,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400',
        images: [
            'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400',
            'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400'
        ],
        rating: 4.6,
        ratingCount: 3211,
        stock: 167
    },
    {
        id: 15,
        title: 'KitchenAid Stand Mixer',
        description: 'Iconic 5-quart tilt-head stand mixer with 10-speed control. Includes wire whip, flat beater, and dough hook.',
        price: 379,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=400',
        images: [
            'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=400',
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400'
        ],
        rating: 4.9,
        ratingCount: 2876,
        stock: 89
    },
    {
        id: 16,
        title: 'Nespresso VertuoPlus Coffee Maker',
        description: 'One-touch coffee and espresso maker with barcode reading technology. Brews 5 different cup sizes.',
        price: 189,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
        images: [
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
            'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
        ],
        rating: 4.5,
        ratingCount: 1987,
        stock: 123
    },
    {
        id: 17,
        title: 'Dyson V15 Detect Cordless Vacuum',
        description: 'Powerful cordless vacuum with laser dust detection, intelligent cleaning modes, and up to 60 minutes runtime.',
        price: 649,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
        images: [
            'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
            'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
        ],
        rating: 4.8,
        ratingCount: 1432,
        stock: 67
    },
    {
        id: 18,
        title: 'Le Creuset Dutch Oven 5.5 Qt',
        description: 'Cast iron Dutch oven with enamel coating. Perfect for slow cooking, braising, and baking. Dishwasher safe.',
        price: 379,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
        images: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
            'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400'
        ],
        rating: 4.9,
        ratingCount: 2341,
        stock: 45
    },

    // Beauty
    {
        id: 19,
        title: 'Estée Lauder Advanced Night Repair',
        description: 'Synchronized multi-recovery complex serum that helps reduce visible signs of aging. 1.7 oz bottle.',
        price: 105,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        images: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
            'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400'
        ],
        rating: 4.7,
        ratingCount: 3421,
        stock: 234
    },
    {
        id: 20,
        title: 'Dyson Airwrap Complete',
        description: 'Multi-styling hair tool that curls, waves, smooths, and dries with no extreme heat. Includes multiple attachments.',
        price: 599,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400',
        images: [
            'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400',
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400'
        ],
        rating: 4.8,
        ratingCount: 1876,
        stock: 56
    },
    {
        id: 21,
        title: 'Fenty Beauty Pro Filt\'r Foundation',
        description: 'Soft matte, longwear foundation in 50 shades. Oil-free, build able coverage that won\'t clog pores.',
        price: 39,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
        images: [
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
            'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400'
        ],
        rating: 4.6,
        ratingCount: 4231,
        stock: 567
    },
    {
        id: 22,
        title: 'The Ordinary Niacinamide 10% + Zinc 1%',
        description: 'High-strength vitamin and mineral blemish serum that balances sebum production and reduces appearance of blemishes.',
        price: 6,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
        images: [
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
            'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400'
        ],
        rating: 4.5,
        ratingCount: 5672,
        stock: 892
    },
    {
        id: 23,
        title: 'Urban Decay Naked3 Palette',
        description: '12 rose-hued neutrals eyeshadow palette. Buttery texture with insane pigmentation and blendability.',
        price: 54,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
        images: [
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
            'https://images.unsplash.com/photo-1583241800698-05d0bde6f0f8?w=400'
        ],
        rating: 4.7,
        ratingCount: 2987,
        stock: 234
    },
    {
        id: 24,
        title: 'CeraVe Moisturizing Cream',
        description: 'Daily face and body moisturizer with hyaluronic acid and ceramides. Fragrance-free, non-comedogenic. 19 oz tub.',
        price: 19,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400',
        images: [
            'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400',
            'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'
        ],
        rating: 4.8,
        ratingCount: 6783,
        stock: 1234
    },

    // Sports
    {
        id: 25,
        title: 'Bowflex SelectTech 552 Dumbbells',
        description: 'Adjustable dumbbells that replace 15 sets of weights. Range from 5 to 52.5 lbs per dumbbell.',
        price: 349,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
        images: [
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400'
        ],
        rating: 4.7,
        ratingCount: 1876,
        stock: 89
    },
    {
        id: 26,
        title: 'Peloton Bike+',
        description: 'Premium indoor exercise bike with rotating HD touchscreen, auto-resistance, and access to live and on-demand classes.',
        price: 2495,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
        images: [
            'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
            'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400'
        ],
        rating: 4.8,
        ratingCount: 2341,
        stock: 34
    },
    {
        id: 27,
        title: 'Wilson Evolution Basketball',
        description: 'Official size and weight basketball with cushion core technology. Approved for use in high school and collegiate games.',
        price: 64,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
        images: [
            'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
            'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400'
        ],
        rating: 4.9,
        ratingCount: 3214,
        stock: 456
    },
    {
        id: 28,
        title: 'Yeti Rambler 30oz Tumbler',
        description: 'Insulated stainless steel tumbler with MagSlider lid. Keeps drinks cold for 9+ hours or hot for 5+ hours.',
        price: 39,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
        images: [
            'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
            'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400'
        ],
        rating: 4.8,
        ratingCount: 4521,
        stock: 678
    },
    {
        id: 29,
        title: 'Fitbit Charge 6',
        description: 'Advanced fitness tracker with built-in GPS, heart rate monitoring, sleep tracking, and 7-day battery life.',
        price: 159,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400',
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400',
            'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=400'
        ],
        rating: 4.5,
        ratingCount: 2876,
        stock: 234
    },
    {
        id: 30,
        title: 'TRX All-In-One Suspension Trainer',
        description: 'Complete bodyweight training system with suspension trainer, anchor, door anchor, and workout guide.',
        price: 199,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
        images: [
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
            'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400'
        ],
        rating: 4.7,
        ratingCount: 1654,
        stock: 145
    },

    // Books
    {
        id: 31,
        title: 'Atomic Habits by James Clear',
        description: 'Practical guide to building good habits and breaking bad ones. #1 New York Times bestseller with proven framework.',
        price: 16,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
        images: [
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400'
        ],
        rating: 4.9,
        ratingCount: 8765,
        stock: 567
    },
    {
        id: 32,
        title: 'The Psychology of Money',
        description: 'Morgan Housel explores the strange ways people think about money and teaches you how to make better sense of it.',
        price: 18,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400',
        images: [
            'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400',
            'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400'
        ],
        rating: 4.8,
        ratingCount: 5432,
        stock: 423
    },
    {
        id: 33,
        title: 'Educated by Tara Westover',
        description: 'Memoir of a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
        price: 14,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
        images: [
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
            'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400'
        ],
        rating: 4.7,
        ratingCount: 6543,
        stock: 345
    },
    {
        id: 34,
        title: 'The Subtle Art of Not Giving a F*ck',
        description: 'Mark Manson\'s counterintuitive approach to living a good life. International bestseller.',
        price: 15,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
        images: [
            'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
            'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400'
        ],
        rating: 4.6,
        ratingCount: 7234,
        stock: 678
    },
    {
        id: 35,
        title: 'Sapiens by Yuval Noah Harari',
        description: 'A brief history of humankind exploring how Homo sapiens came to dominate the world.',
        price: 17,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
        images: [
            'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        ],
        rating: 4.8,
        ratingCount: 9876,
        stock: 456
    },
    {
        id: 36,
        title: 'Where the Crawdads Sing',
        description: 'Delia Owens\' bestselling novel about a young woman who raises herself in the marshes of North Carolina.',
        price: 16,
        category: 'Books',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
        images: [
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'
        ],
        rating: 4.7,
        ratingCount: 5678,
        stock: 389
    },

    // Toys
    {
        id: 37,
        title: 'LEGO Star Wars Millennium Falcon',
        description: 'Ultimate collector series set with 7,541 pieces. Includes detailed interior, rotating turrets, and 7 minifigures.',
        price: 849,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
        images: [
            'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
            'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400'
        ],
        rating: 4.9,
        ratingCount: 2341,
        stock: 23
    },
    {
        id: 38,
        title: 'Nintendo Switch OLED',
        description: 'Gaming console with vibrant 7-inch OLED screen, enhanced audio, and wide adjustable stand. Play at home or on the go.',
        price: 349,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400',
        images: [
            'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400',
            'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400'
        ],
        rating: 4.8,
        ratingCount: 4567,
        stock: 123
    },
    {
        id: 39,
        title: 'Barbie Dreamhouse',
        description: '3-story dollhouse with 8 rooms, working elevator, pool with slide, and 75+ accessories. Lights and sounds included.',
        price: 199,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?w=400',
        images: [
            'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?w=400',
            'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400'
        ],
        rating: 4.7,
        ratingCount: 3456,
        stock: 67
    },
    {
        id: 40,
        title: 'Hot Wheels Ultimate Garage',
        description: 'Multi-level playset with parking for 140+ cars, motorized elevator, and shark attack loop. Includes 4 Hot Wheels vehicles.',
        price: 129,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400',
        images: [
            'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400',
            'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400'
        ],
        rating: 4.6,
        ratingCount: 2876,
        stock: 145
    },
    {
        id: 41,
        title: 'Nerf Elite 2.0 Commander',
        description: 'Motorized dart blaster with 25-dart drum, tactical rail, and stock attachment point. Includes 25 Official Nerf darts.',
        price: 39,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400',
        images: [
            'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400',
            'https://images.unsplash.com/photo-1595642527925-4d41cb781653?w=400'
        ],
        rating: 4.5,
        ratingCount: 3421,
        stock: 456
    },
    {
        id: 42,
        title: 'Play-Doh Super Color Pack',
        description: 'Non-toxic modeling compound in 20 vibrant colors. Perfect for creative play and endless possibilities.',
        price: 19,
        category: 'Toys',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
        images: [
            'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
            'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400'
        ],
        rating: 4.8,
        ratingCount: 4567,
        stock: 789
    },

    // Automotive
    {
        id: 43,
        title: 'Garmin DriveSmart 65 GPS',
        description: '6.95" GPS navigator with traffic alerts, Alexa integration, and driver alerts. Lifetime map updates included.',
        price: 249,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400',
        images: [
            'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400',
            'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
        ],
        rating: 4.6,
        ratingCount: 1876,
        stock: 123
    },
    {
        id: 44,
        title: 'Michelin Defender LTX Tires (Set of 4)',
        description: 'All-season highway tires with 70,000-mile warranty. Superior comfort and quiet ride.',
        price: 699,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
        images: [
            'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
            'https://images.unsplash.com/photo-1449130015084-2dc954a6d2e5?w=400'
        ],
        rating: 4.8,
        ratingCount: 2341,
        stock: 89
    },
    {
        id: 45,
        title: 'WeatherTech FloorLiner',
        description: 'Custom-fit floor mats with raised edges to contain spills. Laser-measured for perfect fit. Set includes front and rear.',
        price: 199,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
        images: [
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
            'https://images.unsplash.com/photo-1449130015084-2dc954a6d2e5?w=400'
        ],
        rating: 4.7,
        ratingCount: 3456,
        stock: 234
    },
    {
        id: 46,
        title: 'NOCO Boost Plus Jump Starter',
        description: 'Portable 1000-amp jump starter for gas engines up to 6L and diesel up to 3L. Includes USB power bank.',
        price: 99,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400',
        images: [
            'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400',
            'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
        ],
        rating: 4.8,
        ratingCount: 4321,
        stock: 345
    },
    {
        id: 47,
        title: 'Thule Motion XT Rooftop Cargo Box',
        description: 'Aerodynamic cargo carrier with 16 cubic feet of storage. Dual-side opening and fits most vehicles.',
        price: 599,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
        images: [
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400'
        ],
        rating: 4.7,
        ratingCount: 1654,
        stock: 56
    },
    {
        id: 48,
        title: 'Armor All Ultra Shine Wash Kit',
        description: 'Complete car wash kit with soap, tire foam, spray wax, microfiber towels, and wash mitt.',
        price: 34,
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400',
        images: [
            'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400',
            'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400'
        ],
        rating: 4.5,
        ratingCount: 2876,
        stock: 567
    },

    // Additional products to reach 50
    {
        id: 49,
        title: 'Samsung 65" 4K QLED TV',
        description: 'Quantum Dot technology with 4K resolution, HDR10+, and smart TV capabilities. Includes voice control.',
        price: 1199,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
        images: [
            'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
            'https://images.unsplash.com/photo-1593359863141-a7127c7ace00?w=400'
        ],
        rating: 4.7,
        ratingCount: 2134,
        stock: 78
    },
    {
        id: 50,
        title: 'Alo Yoga High-Waist Leggings',
        description: 'Moisture-wicking, four-way stretch leggings perfect for yoga, running, or casual wear. Squat-proof fabric.',
        price: 98,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
            'https://images.unsplash.com/photo-1596786903455-8f91fe14a31e?w=400'
        ],
        rating: 4.8,
        ratingCount: 3421,
        stock: 456
    }
]
    */

export const categories = [
    'Men\'s Clothing',
    'Women\'s Clothing',
    'Footwear',
    'Accessories',
    'Sportswear',
    'Ethnic Wear',
    'Formal Wear',
    'Casual Wear',
    'Winter Collection',
    'Summer Collection',
    'Luxury Brands',
    'Bags & Luggage'
]

export const products = [
    // Men's Clothing
    {
        id: 1,
        title: 'Classic Denim Jacket',
        description: 'Premium cotton denim jacket with metal buttons and adjustable cuffs. Perfect for layering.',
        price: 89,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.7,
        ratingCount: 1243,
        stock: 156
    },
    {
        id: 2,
        title: 'Slim Fit Chinos',
        description: 'Stretch cotton chinos with modern slim fit. Available in multiple colors.',
        price: 65,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
        images: [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400'
        ],
        rating: 4.6,
        ratingCount: 892,
        stock: 234
    },
    {
        id: 3,
        title: 'Premium Oxford Shirt',
        description: '100% cotton Oxford shirt with button-down collar. Classic business casual essential.',
        price: 75,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        rating: 4.8,
        ratingCount: 1567,
        stock: 189
    },
    {
        id: 4,
        title: 'Casual Polo T-Shirt',
        description: 'Pima cotton polo shirt with embroidered logo. Breathable and comfortable for all-day wear.',
        price: 45,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400',
        images: [
            'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400',
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400'
        ],
        rating: 4.5,
        ratingCount: 2134,
        stock: 345
    },
    {
        id: 5,
        title: 'Wool Blend Blazer',
        description: 'Tailored wool blend blazer with notch lapels and two-button closure. Perfect for formal occasions.',
        price: 199,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
        images: [
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
            'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400'
        ],
        rating: 4.9,
        ratingCount: 876,
        stock: 67
    },
    {
        id: 6,
        title: 'Cargo Joggers',
        description: 'Casual cargo pants with elastic waistband and multiple pockets. Utility style with comfort.',
        price: 59,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
        images: [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
            'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400'
        ],
        rating: 4.6,
        ratingCount: 987,
        stock: 178
    },

    // Women's Clothing
    {
        id: 7,
        title: 'Floral Summer Dress',
        description: 'Lightweight chiffon dress with floral print and flowy silhouette. Perfect for summer outings.',
        price: 79,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.7,
        ratingCount: 2341,
        stock: 145
    },
    {
        id: 8,
        title: 'High-Waist Jeans',
        description: 'Stretch denim jeans with high waist and skinny fit. Flattering and comfortable.',
        price: 85,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400'
        ],
        rating: 4.8,
        ratingCount: 1890,
        stock: 234
    },
    {
        id: 9,
        title: 'Silk Blouse',
        description: 'Luxury silk blouse with delicate embroidery. Elegant for office or evening wear.',
        price: 129,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
        images: [
            'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400'
        ],
        rating: 4.9,
        ratingCount: 876,
        stock: 89
    },
    {
        id: 10,
        title: 'Knit Sweater Dress',
        description: 'Cozy ribbed knit dress with turtleneck. Perfect for winter styling.',
        price: 95,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
        ],
        rating: 4.6,
        ratingCount: 1123,
        stock: 156
    },
    {
        id: 11,
        title: 'Linen Trousers',
        description: 'Breathable linen trousers with wide leg cut. Summer essential with elegant drape.',
        price: 89,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
        images: [
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
            'https://images.unsplash.com/photo-1544441893-675973e31985?w=400'
        ],
        rating: 4.7,
        ratingCount: 765,
        stock: 123
    },
    {
        id: 12,
        title: 'Evening Gown',
        description: 'Sequined evening gown with slit and open back. Made for special occasions.',
        price: 299,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
        images: [
            'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.9,
        ratingCount: 456,
        stock: 34
    },

    // Footwear
    {
        id: 13,
        title: 'Leather Chelsea Boots',
        description: 'Premium leather Chelsea boots with elastic side panels. Timeless British style.',
        price: 149,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
        ],
        rating: 4.8,
        ratingCount: 1567,
        stock: 89
    },
    {
        id: 14,
        title: 'Running Sneakers',
        description: 'Lightweight running shoes with cushioning technology and breathable mesh upper.',
        price: 129,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
        images: [
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
        ],
        rating: 4.7,
        ratingCount: 2341,
        stock: 167
    },
    {
        id: 15,
        title: 'High Heel Sandals',
        description: 'Elegant strappy sandals with comfortable block heel. Perfect for evening wear.',
        price: 89,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400'
        ],
        rating: 4.6,
        ratingCount: 987,
        stock: 123
    },
    {
        id: 16,
        title: 'Casual Loafers',
        description: 'Leather loafers with tassel detail. Versatile for both casual and smart occasions.',
        price: 119,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
        images: [
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400'
        ],
        rating: 4.8,
        ratingCount: 876,
        stock: 156
    },
    {
        id: 17,
        title: 'Slip-on Espadrilles',
        description: 'Canvas espadrilles with jute sole. Summer essential with Mediterranean style.',
        price: 59,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400'
        ],
        rating: 4.5,
        ratingCount: 654,
        stock: 234
    },
    {
        id: 18,
        title: 'Hiking Boots',
        description: 'Waterproof hiking boots with ankle support and durable rubber sole.',
        price: 179,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400'
        ],
        rating: 4.7,
        ratingCount: 1123,
        stock: 89
    },

    // Accessories
    {
        id: 19,
        title: 'Designer Sunglasses',
        description: 'Polarized sunglasses with UV400 protection and designer logo.',
        price: 159,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.8,
        ratingCount: 2341,
        stock: 145
    },
    {
        id: 20,
        title: 'Leather Crossbody Bag',
        description: 'Genuine leather crossbody bag with adjustable strap and multiple compartments.',
        price: 199,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.9,
        ratingCount: 876,
        stock: 67
    },
    {
        id: 21,
        title: 'Wool Scarf',
        description: 'Cashmere blend scarf in classic plaid pattern. Winter essential.',
        price: 89,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.7,
        ratingCount: 567,
        stock: 189
    },
    {
        id: 22,
        title: 'Silver Jewelry Set',
        description: '925 Sterling silver necklace, earrings, and bracelet set with cubic zirconia.',
        price: 249,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
        images: [
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400'
        ],
        rating: 4.8,
        ratingCount: 432,
        stock: 56
    },
    {
        id: 23,
        title: 'Leather Belt',
        description: 'Genuine leather belt with silver buckle. Available in multiple sizes.',
        price: 49,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
        ],
        rating: 4.6,
        ratingCount: 876,
        stock: 234
    },
    {
        id: 24,
        title: 'Designer Watch',
        description: 'Automatic mechanical watch with sapphire crystal and leather strap.',
        price: 399,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
        images: [
            'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
            'https://images.unsplash.com/photo-1547996160-81caa8e82dc7?w=400'
        ],
        rating: 4.9,
        ratingCount: 321,
        stock: 34
    },

    // Sportswear
    {
        id: 25,
        title: 'Compression Leggings',
        description: 'High-compression leggings with moisture-wicking technology for intense workouts.',
        price: 79,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
            'https://images.unsplash.com/photo-1596786903455-8f91fe14a31e?w=400'
        ],
        rating: 4.7,
        ratingCount: 1567,
        stock: 234
    },
    {
        id: 26,
        title: 'Performance T-Shirt',
        description: 'Breathable athletic shirt with odor control and quick-dry fabric.',
        price: 45,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.6,
        ratingCount: 987,
        stock: 345
    },
    {
        id: 27,
        title: 'Running Shorts',
        description: 'Lightweight running shorts with built-in liner and phone pocket.',
        price: 59,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400',
        images: [
            'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400',
            'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400'
        ],
        rating: 4.8,
        ratingCount: 654,
        stock: 189
    },
    {
        id: 28,
        title: 'Yoga Mat',
        description: 'Non-slip yoga mat with alignment markings and carrying strap.',
        price: 39,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400',
        images: [
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400',
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'
        ],
        rating: 4.7,
        ratingCount: 2341,
        stock: 456
    },
    {
        id: 29,
        title: 'Gym Hoodie',
        description: 'Oversized hoodie with fleece lining for warm-ups and cool-downs.',
        price: 69,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.6,
        ratingCount: 876,
        stock: 167
    },
    {
        id: 30,
        title: 'Sports Bra',
        description: 'High-impact sports bra with adjustable straps and moisture-wicking fabric.',
        price: 55,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1601924634997-b7a69d13ab4c?w=400',
        images: [
            'https://images.unsplash.com/photo-1601924634997-b7a69d13ab4c?w=400',
            'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400'
        ],
        rating: 4.8,
        ratingCount: 987,
        stock: 234
    },

    // Ethnic Wear
    {
        id: 31,
        title: 'Silk Saree',
        description: 'Pure Kanjeevaram silk saree with zari border and intricate designs.',
        price: 299,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
        images: [
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.9,
        ratingCount: 432,
        stock: 56
    },
    {
        id: 32,
        title: 'Kurti Set',
        description: 'Printed cotton kurti with matching palazzo pants and dupatta.',
        price: 89,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
        images: [
            'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
            'https://images.unsplash.com/photo-1544441893-675973e31985?w=400'
        ],
        rating: 4.7,
        ratingCount: 765,
        stock: 123
    },
    {
        id: 33,
        title: 'Sherwani Set',
        description: 'Embroidered silk sherwani with matching churidar and stole.',
        price: 499,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
        images: [
            'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 34
    },
    {
        id: 34,
        title: 'Lehenga Choli',
        description: 'Heavy embroidered lehenga with choli and dupatta for weddings.',
        price: 599,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
        images: [
            'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 23
    },
    {
        id: 35,
        title: 'Pathani Suit',
        description: 'Cotton pathani suit with intricate embroidery and straight pants.',
        price: 129,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400',
        images: [
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 89
    },
    {
        id: 36,
        title: 'Anarkali Gown',
        description: 'Floor-length Anarkali gown with mirror work and flowy silhouette.',
        price: 199,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.8,
        ratingCount: 654,
        stock: 67
    },

    // Formal Wear
    {
        id: 37,
        title: 'Three-Piece Suit',
        description: 'Wool blend three-piece suit with notch lapels and flat-front trousers.',
        price: 399,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
        images: [
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
            'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400'
        ],
        rating: 4.9,
        ratingCount: 432,
        stock: 45
    },
    {
        id: 38,
        title: 'Cocktail Dress',
        description: 'Knee-length cocktail dress with sequin detailing and V-neck.',
        price: 159,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
        images: [
            'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.8,
        ratingCount: 567,
        stock: 78
    },
    {
        id: 39,
        title: 'French Cuff Shirt',
        description: 'Premium cotton shirt with French cuffs for formal occasions.',
        price: 99,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        rating: 4.7,
        ratingCount: 876,
        stock: 123
    },
    {
        id: 40,
        title: 'Evening Gown',
        description: 'Floor-length evening gown with lace overlay and open back.',
        price: 299,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.9,
        ratingCount: 345,
        stock: 34
    },
    {
        id: 41,
        title: 'Tuxedo',
        description: 'Classic black tuxedo with satin lapels and matching trousers.',
        price: 499,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
        images: [
            'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 23
    },
    {
        id: 42,
        title: 'Business Blouse',
        description: 'Silk blend blouse with bow detail for professional settings.',
        price: 89,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
        images: [
            'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
            'https://images.unsplash.com/photo-1544441893-675973e31985?w=400'
        ],
        rating: 4.7,
        ratingCount: 654,
        stock: 156
    },

    // Casual Wear
    {
        id: 43,
        title: 'Graphic T-Shirt',
        description: '100% cotton graphic tee with unique artwork and comfortable fit.',
        price: 35,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.6,
        ratingCount: 1234,
        stock: 345
    },
    {
        id: 44,
        title: 'Hooded Sweatshirt',
        description: 'Fleece-lined hoodie with kangaroo pocket and drawstring hood.',
        price: 65,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.7,
        ratingCount: 876,
        stock: 234
    },
    {
        id: 45,
        title: 'Denim Shorts',
        description: 'Distressed denim shorts with raw hem and comfortable fit.',
        price: 49,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400'
        ],
        rating: 4.5,
        ratingCount: 987,
        stock: 189
    },
    {
        id: 46,
        title: 'Cargo Pants',
        description: 'Utility cargo pants with multiple pockets and tapered fit.',
        price: 79,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
        images: [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
            'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400'
        ],
        rating: 4.6,
        ratingCount: 654,
        stock: 156
    },
    {
        id: 47,
        title: 'Summer Maxi Dress',
        description: 'Lightweight maxi dress with floral print and spaghetti straps.',
        price: 69,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 123
    },
    {
        id: 48,
        title: 'Linen Shirt',
        description: 'Breathable linen shirt with button-down collar and relaxed fit.',
        price: 85,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
        images: [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400'
        ],
        rating: 4.8,
        ratingCount: 432,
        stock: 167
    },

    // Winter Collection
    {
        id: 49,
        title: 'Puffer Jacket',
        description: 'Waterproof puffer jacket with down insulation and hood.',
        price: 199,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.8,
        ratingCount: 876,
        stock: 89
    },
    {
        id: 50,
        title: 'Cashmere Sweater',
        description: '100% cashmere crewneck sweater with ribbed cuffs and hem.',
        price: 249,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.9,
        ratingCount: 543,
        stock: 67
    },
    {
        id: 51,
        title: 'Thermal Leggings',
        description: 'Fleece-lined thermal leggings for extreme cold weather.',
        price: 59,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
            'https://images.unsplash.com/photo-1596786903455-8f91fe14a31e?w=400'
        ],
        rating: 4.7,
        ratingCount: 654,
        stock: 156
    },
    {
        id: 52,
        title: 'Wool Coat',
        description: 'Double-breasted wool coat with notched lapels and belt.',
        price: 299,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.8,
        ratingCount: 432,
        stock: 45
    },
    {
        id: 53,
        title: 'Fleece Jacket',
        description: 'Lightweight fleece jacket with full zip and side pockets.',
        price: 79,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.6,
        ratingCount: 987,
        stock: 123
    },
    {
        id: 54,
        title: 'Thermal Underwear Set',
        description: 'Merino wool thermal top and bottom for layering.',
        price: 89,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 189
    },

    // Summer Collection
    {
        id: 55,
        title: 'Linen Shirt Dress',
        description: 'Breathable linen dress with button front and belt.',
        price: 95,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.7,
        ratingCount: 654,
        stock: 123
    },
    {
        id: 56,
        title: 'Cotton Shorts',
        description: 'Lightweight cotton shorts with drawstring waist and pockets.',
        price: 45,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400'
        ],
        rating: 4.6,
        ratingCount: 876,
        stock: 234
    },
    {
        id: 57,
        title: 'Straw Hat',
        description: 'Wide-brim straw hat with black ribbon for sun protection.',
        price: 39,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.5,
        ratingCount: 543,
        stock: 156
    },
    {
        id: 58,
        title: 'Swim Trunks',
        description: 'Quick-dry swim trunks with mesh lining and drawstring closure.',
        price: 55,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
        images: [
            'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
            'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 189
    },
    {
        id: 59,
        title: 'Beach Cover-up',
        description: 'Knit beach cover-up with fringe detail and oversized fit.',
        price: 65,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
        ],
        rating: 4.6,
        ratingCount: 321,
        stock: 123
    },
    {
        id: 60,
        title: 'Tank Top Pack',
        description: 'Set of 3 ribbed tank tops in assorted colors.',
        price: 49,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.7,
        ratingCount: 765,
        stock: 234
    },

    // Luxury Brands
    {
        id: 61,
        title: 'Designer Handbag',
        description: 'Signature monogram handbag with leather trim and gold hardware.',
        price: 1299,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 23
    },
    {
        id: 62,
        title: 'Luxury Watch',
        description: 'Swiss automatic watch with chronograph and sapphire crystal.',
        price: 2499,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
        images: [
            'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
            'https://images.unsplash.com/photo-1547996160-81caa8e82dc7?w=400'
        ],
        rating: 5.0,
        ratingCount: 123,
        stock: 12
    },
    {
        id: 63,
        title: 'Cashmere Scarf',
        description: '100% cashmere scarf with fringed edges in classic colors.',
        price: 299,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.8,
        ratingCount: 345,
        stock: 45
    },
    {
        id: 64,
        title: 'Designer Sunglasses',
        description: 'Acetate frame sunglasses with polarized lenses and case.',
        price: 399,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 34
    },
    {
        id: 65,
        title: 'Leather Loafers',
        description: 'Italian leather loafers with horsebit detail.',
        price: 499,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
        images: [
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400'
        ],
        rating: 4.9,
        ratingCount: 187,
        stock: 23
    },
    {
        id: 66,
        title: 'Silk Scarf',
        description: 'Hermès-inspired silk scarf with hand-rolled edges.',
        price: 349,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.8,
        ratingCount: 276,
        stock: 34
    },

    // Bags & Luggage
    {
        id: 67,
        title: 'Backpack',
        description: 'Water-resistant backpack with laptop compartment and multiple pockets.',
        price: 89,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.7,
        ratingCount: 987,
        stock: 156
    },
    {
        id: 68,
        title: 'Carry-on Luggage',
        description: 'Hard-shell carry-on with 360° spinner wheels and TSA lock.',
        price: 199,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.8,
        ratingCount: 654,
        stock: 89
    },
    {
        id: 69,
        title: 'Tote Bag',
        description: 'Canvas tote bag with leather handles and interior pocket.',
        price: 59,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.6,
        ratingCount: 543,
        stock: 234
    },
    {
        id: 70,
        title: 'Weekender Bag',
        description: 'Duffel bag with shoe compartment and removable shoulder strap.',
        price: 129,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 71,
        title: 'Wallet',
        description: 'Leather bifold wallet with multiple card slots and coin pocket.',
        price: 79,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
        ],
        rating: 4.8,
        ratingCount: 765,
        stock: 189
    },
    {
        id: 72,
        title: 'Messenger Bag',
        description: 'Vintage-style messenger bag with adjustable strap and flap closure.',
        price: 109,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
        ],
        rating: 4.7,
        ratingCount: 654,
        stock: 156
    },

    // Additional products to reach 100+
    {
        id: 73,
        title: 'Bomber Jacket',
        description: 'Satin bomber jacket with ribbed cuffs and collar.',
        price: 119,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 89
    },
    {
        id: 74,
        title: 'Wrap Dress',
        description: 'Floral wrap dress with tie waist and V-neck.',
        price: 85,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.8,
        ratingCount: 654,
        stock: 123
    },
    {
        id: 75,
        title: 'Canvas Sneakers',
        description: 'Classic canvas sneakers with rubber sole.',
        price: 65,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400'
        ],
        rating: 4.6,
        ratingCount: 876,
        stock: 234
    },
    {
        id: 76,
        title: 'Fedora Hat',
        description: 'Wool felt fedora with grosgrain ribbon.',
        price: 59,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 156
    },
    {
        id: 77,
        title: 'Yoga Pants',
        description: 'High-waist yoga pants with moisture-wicking fabric.',
        price: 69,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
            'https://images.unsplash.com/photo-1596786903455-8f91fe14a31e?w=400'
        ],
        rating: 4.8,
        ratingCount: 987,
        stock: 189
    },
    {
        id: 78,
        title: 'Kurta Pajama',
        description: 'Cotton kurta with matching pajama for men.',
        price: 129,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400',
        images: [
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 89
    },
    {
        id: 79,
        title: 'Blazer Dress',
        description: 'Structured blazer dress with shoulder pads.',
        price: 149,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400',
        images: [
            'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400'
        ],
        rating: 4.8,
        ratingCount: 432,
        stock: 67
    },
    {
        id: 80,
        title: 'Jogger Set',
        description: 'Matching jogger pants and hoodie set.',
        price: 89,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.6,
        ratingCount: 654,
        stock: 156
    },
    {
        id: 81,
        title: 'Parka Jacket',
        description: 'Waterproof parka with faux fur trim hood.',
        price: 229,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 45
    },
    {
        id: 82,
        title: 'Sarong',
        description: 'Beach sarong with tropical print.',
        price: 35,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
        ],
        rating: 4.5,
        ratingCount: 543,
        stock: 189
    },
    {
        id: 83,
        title: 'Leather Briefcase',
        description: 'Professional leather briefcase with combination lock.',
        price: 349,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 34
    },
    {
        id: 84,
        title: 'Garment Bag',
        description: 'Waterproof garment bag for suit storage.',
        price: 79,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 85,
        title: 'Cardigan',
        description: 'Knit cardigan with button front.',
        price: 75,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.6,
        ratingCount: 543,
        stock: 156
    },
    {
        id: 86,
        title: 'Midi Skirt',
        description: 'Pleated midi skirt with elastic waist.',
        price: 65,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 87,
        title: 'Brogues',
        description: 'Leather brogues with perforated detailing.',
        price: 159,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
        images: [
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 89
    },
    {
        id: 88,
        title: 'Beanie',
        description: 'Knit beanie with folded brim.',
        price: 29,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.5,
        ratingCount: 654,
        stock: 234
    },
    {
        id: 89,
        title: 'Compression Top',
        description: 'Athletic compression top for training.',
        price: 55,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
        ],
        rating: 4.6,
        ratingCount: 543,
        stock: 189
    },
    {
        id: 90,
        title: 'Salwar Suit',
        description: 'Embroidered salwar suit with dupatta.',
        price: 149,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
        images: [
            'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
            'https://images.unsplash.com/photo-1544441893-675973e31985?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 67
    },
    {
        id: 91,
        title: 'Tuxedo Shirt',
        description: 'Wing collar tuxedo shirt with studs.',
        price: 89,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 89
    },
    {
        id: 92,
        title: 'Denim Jacket',
        description: 'Distressed denim jacket with patches.',
        price: 99,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 123
    },
    {
        id: 93,
        title: 'Thermal Socks',
        description: 'Wool blend thermal socks for winter.',
        price: 25,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.6,
        ratingCount: 654,
        stock: 345
    },
    {
        id: 94,
        title: 'Visor',
        description: 'Sports visor with adjustable strap.',
        price: 22,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.5,
        ratingCount: 432,
        stock: 234
    },
    {
        id: 95,
        title: 'Silk Tie',
        description: 'Italian silk tie with geometric pattern.',
        price: 89,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.7,
        ratingCount: 321,
        stock: 156
    },
    {
        id: 96,
        title: 'Packing Cubes',
        description: 'Set of 4 packing cubes for organization.',
        price: 39,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.8,
        ratingCount: 543,
        stock: 189
    },
    {
        id: 97,
        title: 'Corduroy Pants',
        description: 'Wide wale corduroy pants with straight leg.',
        price: 79,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
        images: [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400'
        ],
        rating: 4.6,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 98,
        title: 'Bodycon Dress',
        description: 'Stretch bodycon dress with scoop neck.',
        price: 69,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
        images: [
            'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 156
    },
    {
        id: 99,
        title: 'Hiking Shoes',
        description: 'Waterproof hiking shoes with ankle support.',
        price: 129,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 89
    },
    {
        id: 100,
        title: 'Leather Gloves',
        description: 'Lambskin leather gloves with cashmere lining.',
        price: 89,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
            'https://images.unsplash.com/photo-1554343981-b1f0b3cee86e?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 101,
        title: 'Gym Shorts',
        description: 'Quick-dry gym shorts with liner.',
        price: 49,
        category: 'Sportswear',
        image: 'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400',
        images: [
            'https://images.unsplash.com/photo-1594736797933-d0a0a70c7bad?w=400',
            'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400'
        ],
        rating: 4.6,
        ratingCount: 543,
        stock: 189
    },
    {
        id: 102,
        title: 'Bandhgala Suit',
        description: 'Formal bandhgala suit with embroidery.',
        price: 299,
        category: 'Ethnic Wear',
        image: 'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
        images: [
            'https://images.unsplash.com/photo-1539533016441-85b17d546b30?w=400',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
        ],
        rating: 4.9,
        ratingCount: 234,
        stock: 45
    },
    {
        id: 103,
        title: 'Evening Clutch',
        description: 'Beaded evening clutch with chain strap.',
        price: 129,
        category: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.8,
        ratingCount: 321,
        stock: 67
    },
    {
        id: 104,
        title: 'Hoodie Dress',
        description: 'Oversized hoodie dress with pocket.',
        price: 79,
        category: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
        ],
        rating: 4.7,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 105,
        title: 'Fleece Lined Leggings',
        description: 'Extra warm fleece lined leggings.',
        price: 65,
        category: 'Winter Collection',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400',
            'https://images.unsplash.com/photo-1596786903455-8f91fe14a31e?w=400'
        ],
        rating: 4.8,
        ratingCount: 543,
        stock: 156
    },
    {
        id: 106,
        title: 'Sun Hat',
        description: 'Wide brim sun hat with chin strap.',
        price: 45,
        category: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'
        ],
        rating: 4.6,
        ratingCount: 432,
        stock: 189
    },
    {
        id: 107,
        title: 'Cufflinks',
        description: 'Sterling silver cufflinks with onyx.',
        price: 149,
        category: 'Luxury Brands',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
        images: [
            'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
            'https://images.unsplash.com/photo-1547996160-81caa8e82dc7?w=400'
        ],
        rating: 4.8,
        ratingCount: 234,
        stock: 89
    },
    {
        id: 108,
        title: 'Travel Pillow',
        description: 'Memory foam travel pillow with case.',
        price: 35,
        category: 'Bags & Luggage',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 234
    },
    {
        id: 109,
        title: 'Vest',
        description: 'Quilted vest with down insulation.',
        price: 99,
        category: 'Men\'s Clothing',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400'
        ],
        rating: 4.6,
        ratingCount: 432,
        stock: 123
    },
    {
        id: 110,
        title: 'Blouse',
        description: 'Ruffled blouse with bishop sleeves.',
        price: 75,
        category: 'Women\'s Clothing',
        image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
        images: [
            'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a61?w=400',
            'https://images.unsplash.com/photo-1544441893-675973e31985?w=400'
        ],
        rating: 4.7,
        ratingCount: 543,
        stock: 156
    }
]
