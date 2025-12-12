import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="group bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <div className="aspect-square bg-gray-50 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="h-40 object-contain group-hover:scale-105 transition" />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold">₹{(product.price * 83).toFixed(0)}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">★ {product.rating.toFixed(1)}</span>
                </div>
            </div>
        </Link>
    )
}
