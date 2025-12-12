import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../redux/slices/productsSlice.js'
import { addToCart } from '../../redux/slices/cartSlice.js'

export default function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(s => s.products.selected)
    const [qty, setQty] = useState(1)

    useEffect(() => { dispatch(fetchProductById(id)) }, [id, dispatch])

    if (!product) {
        return <div className="bg-white rounded-lg shadow p-6">Loading...</div>
    }

    return (
        <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
            <div>
                <div className="aspect-square bg-gray-50 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="h-80 object-contain" />
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                    {product.images.map((img, i) => (
                        <img key={i} src={img} alt="thumb" className="h-16 object-contain border rounded" />
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-3xl font-bold">₹{(product.price * 83).toFixed(0)}</span>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">★ {product.rating.toFixed(1)} ({product.ratingCount})</span>
                    <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <label className="text-sm">Qty</label>
                    <div className="flex items-center border rounded overflow-hidden">
                        <button className="px-3 py-2" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                        <span className="px-4">{qty}</span>
                        <button className="px-3 py-2" onClick={() => setQty(q => q + 1)}>+</button>
                    </div>
                    <button
                        className="bg-brand text-white px-6 py-2 rounded"
                        onClick={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, qty }))}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
