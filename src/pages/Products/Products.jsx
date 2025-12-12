import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice.js'
import ProductCard from '../../components/Product/ProductCard.jsx'
import ProductCardSkeleton from '../../components/Skeletons/ProductCardSkeleton.jsx'

export default function Products() {
    const dispatch = useDispatch()
    const { list, status } = useSelector(s => s.products)
    const [search, setSearch] = useState('')
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState(1000)
    const [page, setPage] = useState(1)
    const pageSize = 8

    useEffect(() => { if (status === 'idle') dispatch(fetchProducts()) }, [status, dispatch])

    // Debounce search
    const [debounced, setDebounced] = useState('')
    useEffect(() => { const id = setTimeout(() => setDebounced(search), 300); return () => clearTimeout(id) }, [search])

    useEffect(() => { setPage(1) }, [debounced, rating, price])

    const filtered = useMemo(() => {
        return list.filter(p =>
            (!debounced || p.title.toLowerCase().includes(debounced.toLowerCase())) &&
            (p.rating >= rating) &&
            ((p.price * 83) <= price)
        )
    }, [list, debounced, rating, price])

    const totalPages = useMemo(() => Math.max(1, Math.ceil(filtered.length / pageSize)), [filtered.length])
    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize
        return filtered.slice(start, start + pageSize)
    }, [filtered, page])

    const handlePrev = () => setPage(p => Math.max(1, p - 1))
    const handleNext = () => setPage(p => Math.min(totalPages, p + 1))

    return (
        <div>
            <div className="bg-white rounded-lg shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name" className="border rounded px-3 py-2" />
                <div>
                    <label className="text-sm">Min Rating</label>
                    <select value={rating} onChange={e => setRating(Number(e.target.value))} className="w-full border rounded px-3 py-2">
                        {[0, 1, 2, 3, 4].map(r => <option key={r} value={r}>{r}+</option>)}
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="text-sm">Max Price (₹)</label>
                    <input type="range" min="500" max="100000" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full" />
                    <div className="text-sm">₹{price}</div>
                </div>
            </div>

            {status === 'loading' ? (
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
        </div>
    )
}
