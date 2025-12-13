export const categories = [
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
