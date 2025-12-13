import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/slices/productsSlice.js'
import ProductCard from '../../components/Product/ProductCard.jsx'
import ProductCardSkeleton from '../../components/Skeletons/ProductCardSkeleton.jsx'
import { FaStar } from 'react-icons/fa'
import { categories } from '../../data/products.js'

export default function Products() {
    const dispatch = useDispatch()
    const { list, status } = useSelector(s => s.products)
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
    const [rating, setRating] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [page, setPage] = useState(1)
    const pageSize = 8

    useEffect(() => { if (status === 'idle') dispatch(fetchProducts()) }, [status, dispatch])

    // Set category from URL params
    useEffect(() => {
        const category = searchParams.get('category')
        if (category) setSelectedCategory(category)
    }, [searchParams])

    // Debounce search
    const [debounced, setDebounced] = useState('')
    useEffect(() => { const id = setTimeout(() => setDebounced(search), 300); return () => clearTimeout(id) }, [search])

    useEffect(() => { setPage(1) }, [debounced, rating, minPrice, maxPrice, selectedCategory])

    const filtered = useMemo(() => {
        return list.filter(p => {
            const priceInr = p.price * 83
            return (!debounced || p.title.toLowerCase().includes(debounced.toLowerCase())) &&
                (selectedCategory === 'All' || p.category === selectedCategory) &&
                (p.rating >= rating) &&
                (priceInr >= minPrice && priceInr <= maxPrice)
        })
    }, [list, debounced, rating, minPrice, maxPrice, selectedCategory])

    const totalPages = useMemo(() => Math.max(1, Math.ceil(filtered.length / pageSize)), [filtered.length])
    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize
        return filtered.slice(start, start + pageSize)
    }, [filtered, page])

    const handlePrev = () => setPage(p => Math.max(1, p - 1))
    const handleNext = () => setPage(p => Math.min(totalPages, p + 1))

    return (
        <div className="flex gap-6">
            {/* Sidebar Filters */}
            <aside className="w-64 bg-white rounded-lg shadow p-4 h-fit sticky top-20 hidden lg:block">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>

                {/* Search */}
                <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                        <option value="All">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Min Rating - Stars */}
                <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <button
                                key={star}
                                onClick={() => setRating(star === rating ? 0 : star)}
                                className="focus:outline-none transition"
                            >
                                <FaStar
                                    className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                            </button>
                        ))}
                    </div>
                    {rating > 0 && (
                        <p className="text-xs text-gray-500 mt-1">{rating}+ stars</p>
                    )}
                </div>

                {/* Price Range */}
                <div className="mb-4">
                    <label className="text-sm font-medium mb-2 block">Price Range (₹)</label>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">₹{minPrice}</span>
                        <span className="text-xs text-gray-600">₹{maxPrice}</span>
                    </div>
                    <div className="relative h-2">
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="100"
                            value={minPrice}
                            onChange={e => setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))}
                            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                            style={{ zIndex: minPrice > maxPrice - 1000 ? 5 : 3 }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="100"
                            value={maxPrice}
                            onChange={e => setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))}
                            className="absolute w-full h-2 bg-gray-200 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                            style={{ zIndex: 4 }}
                        />
                    </div>
                </div>

                {/* Clear Filters */}
                <button
                    onClick={() => { setSearch(''); setRating(0); setMinPrice(0); setMaxPrice(10000); }}
                    className="w-full text-sm text-brand hover:underline mt-2"
                >
                    Clear All Filters
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Mobile Filter Bar */}
                <div className="lg:hidden bg-white rounded-lg shadow p-4 mb-4">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                </div>

                {status === 'loading' ? (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
                    </div>
                ) : (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {paginated.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                )}

                {status === 'succeeded' && filtered.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6">
                        <div className="text-sm text-gray-600">
                            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handlePrev} disabled={page === 1} className="px-3 py-1 border rounded disabled:opacity-60">Prev</button>
                            <span className="text-sm">Page {page} / {totalPages}</span>
                            <button onClick={handleNext} disabled={page === totalPages} className="px-3 py-1 border rounded disabled:opacity-60">Next</button>
                        </div>
                    </div>
                )}

                {status === 'succeeded' && filtered.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No products found matching your filters.
                    </div>
                )}
            </div>
        </div>
    )
}
