import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/slices/productsSlice.js'
import ProductCard from '../../components/Product/ProductCard.jsx'
import ProductCardSkeleton from '../../components/Skeletons/ProductCardSkeleton.jsx'
import { FaStar, FaFilter, FaTimes } from 'react-icons/fa'
import { categories } from '../../data/products.js'

export default function Products() {
    const dispatch = useDispatch()
    const { list, status } = useSelector(s => s.products)
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState('')
    const [selectedCategories, setSelectedCategories] = useState(['All'])
    const [rating, setRating] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [page, setPage] = useState(1)
    const pageSize = 9
    const [useInfinite, setUseInfinite] = useState(true)
    const [itemsToShow, setItemsToShow] = useState(pageSize)
    const [sortBy, setSortBy] = useState('featured') // featured | price-asc | price-desc | rating-desc
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    useEffect(() => { if (status === 'idle') dispatch(fetchProducts()) }, [status, dispatch])

    // Set category and search from URL params
    useEffect(() => {
        const category = searchParams.get('category')
        const urlSearch = searchParams.get('search')
        if (category) setSelectedCategories(category === 'All' ? ['All'] : [category])
        if (urlSearch) setSearch(urlSearch)
    }, [searchParams])

    // Debounce search
    const [debounced, setDebounced] = useState('')
    useEffect(() => { const id = setTimeout(() => setDebounced(search), 300); return () => clearTimeout(id) }, [search])

    useEffect(() => { setPage(1) }, [debounced, rating, minPrice, maxPrice, selectedCategories])

    // Reset visible items when filters change or toggle changes
    useEffect(() => {
        if (useInfinite) {
            setItemsToShow(pageSize)
        }
    }, [debounced, rating, minPrice, maxPrice, selectedCategories, useInfinite])

    const filtered = useMemo(() => {
        return list.filter(p => {
            const priceInr = p.price * 83
            return (!debounced || p.title.toLowerCase().includes(debounced.toLowerCase())) &&
                (selectedCategories.includes('All') || selectedCategories.includes(p.category)) &&
                (p.rating >= rating) &&
                (priceInr >= minPrice && priceInr <= maxPrice)
        })
    }, [list, debounced, rating, minPrice, maxPrice, selectedCategories])

    const sorted = useMemo(() => {
        const arr = [...filtered]
        switch (sortBy) {
            case 'price-asc':
                arr.sort((a, b) => (a.price - b.price))
                break
            case 'price-desc':
                arr.sort((a, b) => (b.price - a.price))
                break
            case 'rating-desc':
                arr.sort((a, b) => (b.rating - a.rating))
                break
            default:
                break
        }
        return arr
    }, [filtered, sortBy])

    const totalPages = useMemo(() => Math.max(1, Math.ceil(sorted.length / pageSize)), [sorted.length])
    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize
        return sorted.slice(start, start + pageSize)
    }, [sorted, page])

    const items = useMemo(() => {
        return useInfinite ? sorted.slice(0, itemsToShow) : paginated
    }, [useInfinite, sorted, itemsToShow, paginated])

    const handlePrev = () => setPage(p => Math.max(1, p - 1))
    const handleNext = () => setPage(p => Math.min(totalPages, p + 1))

    const closeMobileSidebar = () => setShowMobileSidebar(false)

    const handleCategoryToggle = (cat) => {
        if (cat === 'All') {
            setSelectedCategories(['All'])
        } else {
            const newSelected = selectedCategories.includes(cat)
                ? selectedCategories.filter(c => c !== cat)
                : [...selectedCategories.filter(c => c !== 'All'), cat]
            setSelectedCategories(newSelected.length === 0 ? ['All'] : newSelected)
        }
    }

    // Infinite scroll: load more when near bottom
    useEffect(() => {
        if (!useInfinite) return
        const onScroll = () => {
            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
            if (nearBottom) {
                setItemsToShow(prev => Math.min(prev + pageSize, filtered.length))
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [useInfinite, sorted.length])

    return (
        <div className="flex gap-6 bg-[var(--bg-base)] min-h-screen p-4 md:p-6 rounded-lg">
            {/* Sidebar Filters */}
            <aside className={`fixed lg:static inset-0 lg:inset-auto w-64 bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl shadow-sm p-4 h-screen lg:h-fit lg:sticky top-20 lg:top-20 z-40 lg:z-auto transform transition-transform duration-300 overflow-y-auto lg:overflow-y-visible ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg text-[var(--text-primary)]">Filters</h3>
                    <button className="lg:hidden text-[var(--text-primary)] hover:text-brand" onClick={closeMobileSidebar}>
                        <FaTimes className="text-xl" />
                    </button>
                </div>
                {/* Category Filter */}
                <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        <label className="flex items-center gap-2 cursor-pointer hover:text-brand transition">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes('All')}
                                onChange={() => handleCategoryToggle('All')}
                                className="w-4 h-4 accent-brand rounded"
                            />
                            <span className="text-sm">All Categories</span>
                        </label>
                        {categories.map(cat => (
                            <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-brand transition">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => handleCategoryToggle(cat)}
                                    className="w-4 h-4 accent-brand rounded"
                                />
                                <span className="text-sm">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Sort By</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full border border-[var(--bg-muted)] rounded px-3 py-2 text-sm bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-brand/60"
                    >
                        <option value="featured">Featured</option>
                        <option value="rating-desc">Rating: High to Low</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
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
                                    className={`text-2xl ${star <= rating ? 'text-amber-400' : 'text-[var(--bg-muted)]'}`}
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
                    <label className="text-sm font-medium mb-2 block text-[var(--text-primary)]">Price Range (₹)</label>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[var(--text-muted)]">₹{minPrice}</span>
                        <span className="text-xs text-[var(--text-muted)]">₹{maxPrice}</span>
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
                            style={{ zIndex: minPrice > maxPrice - 1000 ? 6 : 5 }}
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
                    className="w-full text-sm text-brand hover:underline mt-2 mb-6"
                >
                    Clear All Filters
                </button>

                {/* Display Mode */}
                <div className="mb-4 pt-4 border-t border-[var(--bg-muted)]">
                    <label className="text-sm font-medium mb-2 block">Display Mode</label>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-[var(--text-muted)]">Pagination</span>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={useInfinite} onChange={e => setUseInfinite(e.target.checked)} />
                            <div className="w-11 h-6 bg-[var(--bg-muted)] peer-focus:outline-none rounded-full peer peer-checked:bg-brand transition relative">
                                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-[var(--bg-base)] rounded-full transition-transform peer-checked:translate-x-5" />
                            </div>
                        </label>
                        <span className="text-xs text-[var(--text-muted)]">Infinite</span>
                    </div>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {showMobileSidebar && (
                <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={closeMobileSidebar} />
            )}

            {/* Main Content */}
            <div className="flex-1 space-y-4">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden flex items-center gap-3 mb-4">
                    <button
                        onClick={() => setShowMobileSidebar(true)}
                        className="flex items-center gap-2 bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition"
                    >
                        <FaFilter />
                        Filters
                    </button>
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="flex-1 border border-[var(--bg-muted)] rounded px-3 py-2 text-sm bg-[var(--bg-base)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand/60"
                    />
                </div>

                {status === 'loading' ? (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {Array.from({ length: 9 }).map((_, i) => <ProductCardSkeleton key={i} />)}
                    </div>
                ) : (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {items.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                )}

                {status === 'succeeded' && filtered.length > 0 && !useInfinite && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6">
                        <div className="text-sm text-[var(--text-muted)]">
                            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handlePrev} disabled={page === 1} className="px-3 py-1 border border-[var(--bg-muted)] rounded disabled:opacity-60 bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)]">Prev</button>
                            <span className="text-sm text-[var(--text-primary)]">Page {page} / {totalPages}</span>
                            <button onClick={handleNext} disabled={page === totalPages} className="px-3 py-1 border border-[var(--bg-muted)] rounded disabled:opacity-60 bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)]">Next</button>
                        </div>
                    </div>
                )}

                {status === 'succeeded' && filtered.length > 0 && useInfinite && (
                    <div className="flex items-center justify-center py-4 text-xs text-[var(--text-muted)]">
                        {itemsToShow < filtered.length ? 'Scroll to load more…' : 'You\'ve reached the end'}
                    </div>
                )}

                {status === 'succeeded' && filtered.length === 0 && (
                    <div className="text-center py-12 text-[var(--text-muted)]">
                        No products found matching your filters.
                    </div>
                )}
            </div>
        </div>
    )
}
