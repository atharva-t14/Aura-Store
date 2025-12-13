import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchProductById, addReview } from '../../redux/slices/productsSlice.js'
import { addToCart } from '../../redux/slices/cartSlice.js'
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaUser } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(s => s.products.selected)
    const user = useSelector(s => s.auth.user)
    const productReviews = useSelector(s => s.products.reviews[id] || [])
    const [qty, setQty] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [showZoom, setShowZoom] = useState(false)
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [newReview, setNewReview] = useState({ rating: 5, comment: '' })

    useEffect(() => {
        dispatch(fetchProductById(id))
        setSelectedImage(0)
        setQty(1)
    }, [id, dispatch])

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty
        }))
        toast.success(`Added ${qty} item(s) to cart`)
    }

    const imageRef = useRef(null)

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<FaStar key={i} className="text-brand" />)
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-brand" />)
            } else {
                stars.push(<FaRegStar key={i} className="text-[var(--bg-muted)]" />)
            }
        }
        return stars
    }

    const handleSubmitReview = (e) => {
        e.preventDefault()
        if (!user) {
            toast.error('Please login to submit a review')
            return
        }
        if (!newReview.comment.trim()) {
            toast.error('Please write a review comment')
            return
        }

        const review = {
            id: Date.now(),
            userName: user.name || user.email,
            rating: newReview.rating,
            comment: newReview.comment,
            date: new Date().toLocaleDateString()
        }

        dispatch(addReview({ productId: id, review }))
        setNewReview({ rating: 5, comment: '' })
        setShowReviewForm(false)
        toast.success('Review submitted successfully!')
    }

    const lensSize = 120
    const lensStyle = (() => {
        if (!imageRef.current) return { width: lensSize, height: lensSize }
        const rect = imageRef.current.getBoundingClientRect()
        const left = Math.min(Math.max(zoomPos.x - lensSize / 2, 0), rect.width - lensSize)
        const top = Math.min(Math.max(zoomPos.y - lensSize / 2, 0), rect.height - lensSize)
        return { width: lensSize, height: lensSize, left, top }
    })()

    const zoomWindowStyle = (() => {
        if (!imageRef.current) return {}
        const { width, height } = imageRef.current.getBoundingClientRect()
        const bgX = (zoomPos.x / width) * 100
        const bgY = (zoomPos.y / height) * 100
        return {
            backgroundImage: `url(${product?.images?.[selectedImage] || ''})`,
            backgroundSize: '200% 200%',
            backgroundPosition: `${bgX}% ${bgY}%`
        }
    })()

    if (!product) {
        return (
            <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-lg shadow p-6">
                <div className="animate-pulse grid md:grid-cols-2 gap-6">
                    <div className="aspect-square bg-[var(--bg-muted)] rounded" />
                    <div className="space-y-4">
                        <div className="h-8 bg-[var(--bg-muted)] rounded w-3/4" />
                        <div className="h-4 bg-[var(--bg-muted)] rounded" />
                        <div className="h-4 bg-[var(--bg-muted)] rounded w-5/6" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-lg shadow overflow-hidden text-[var(--text-primary)]">
            <div className="p-6 grid md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div>
                    <div
                        ref={imageRef}
                        className="relative aspect-square bg-[var(--bg-base)] rounded-lg flex items-center justify-center overflow-visible group cursor-crosshair border border-[var(--bg-muted)]"
                        onMouseEnter={() => setShowZoom(true)}
                        onMouseLeave={() => setShowZoom(false)}
                        onMouseMove={(e) => {
                            if (!imageRef.current) return
                            const rect = imageRef.current.getBoundingClientRect()
                            const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width)
                            const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height)
                            setZoomPos({ x, y })
                        }}
                    >
                        <img
                            src={product.images[selectedImage]}
                            alt={product.title}
                            className="max-h-96 object-contain transition-transform duration-300"
                            loading="lazy"
                        />

                        {/* Lens overlay */}
                        {showZoom && (
                            <div
                                className="absolute pointer-events-none border-2 border-brand/70 bg-[var(--bg-base)]/40 rounded"
                                style={lensStyle}
                            />
                        )}

                        {/* Zoom window */}
                        {showZoom && imageRef.current && (
                            <div
                                className="hidden md:block absolute top-2 left-full ml-4 w-64 h-64 border border-[var(--bg-muted)] rounded-lg overflow-hidden shadow-lg bg-[var(--bg-base)] z-20"
                                style={zoomWindowStyle}
                            />
                        )}
                    </div>

                    {/* Thumbnails */}
                    {product.images.length > 1 && (
                        <div className="mt-4 grid grid-cols-5 gap-2">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`aspect-square border-2 rounded-lg overflow-hidden transition ${selectedImage === i ? 'border-brand' : 'border-[var(--bg-muted)] hover:border-brand/60'
                                        }`}
                                >
                                    <img src={img} alt={`${product.title} ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-[var(--text-primary)]">{product.title}</h1>

                        {/* Category */}
                        <p className="text-sm text-brand font-medium mt-2 uppercase">{product.category}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex gap-1">
                                {renderStars(product.rating)}
                            </div>
                            <span className="text-sm text-[var(--text-muted)]">
                                {product.rating.toFixed(1)} ({product.ratingCount} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-4 flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-[var(--text-primary)]">₹{(product.price * 83).toFixed(0)}</span>
                            <span className="text-lg text-[var(--text-muted)] line-through">₹{(product.price * 83 * 1.2).toFixed(0)}</span>
                            <span className="text-sm bg-emerald-500/15 text-emerald-200 px-2 py-1 rounded font-semibold">17% OFF</span>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Product Details</h3>
                            <p className="text-[var(--text-muted)] leading-relaxed">{product.description}</p>
                        </div>
                    </div>

                    {/* Add to Cart Section */}
                    <div className="mt-6 border-t border-[var(--bg-muted)] pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <label className="text-sm font-medium">Quantity</label>
                            <div className="flex items-center border-2 border-[var(--bg-muted)] rounded-lg overflow-hidden bg-[var(--bg-base)]">
                                <button
                                    className="px-4 py-2 hover:bg-[var(--bg-muted)]/60 transition font-semibold"
                                    onClick={() => setQty(q => Math.max(1, q - 1))}
                                >
                                    -
                                </button>
                                <span className="px-6 py-2 border-x-2 border-[var(--bg-muted)] font-semibold">{qty}</span>
                                <button
                                    className="px-4 py-2 hover:bg-[var(--bg-muted)]/60 transition font-semibold"
                                    onClick={() => setQty(q => q + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                className="flex-1 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition flex items-center justify-center gap-2"
                                onClick={handleAddToCart}
                            >
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                            <button
                                className="px-6 py-3 border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-white transition"
                                onClick={() => navigate('/cart')}
                            >
                                Go to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="border-t border-[var(--bg-muted)] p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <button
                        onClick={() => setShowReviewForm(!showReviewForm)}
                        className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition"
                    >
                        {showReviewForm ? 'Cancel' : 'Write a Review'}
                    </button>
                </div>

                {/* Review Form */}
                {showReviewForm && (
                    <div className="bg-[var(--bg-base)]/50 border border-[var(--bg-muted)] rounded-lg p-6 mb-6">
                        <h3 className="font-semibold mb-4">Submit Your Review</h3>
                        <form onSubmit={handleSubmitReview}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Your Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className="focus:outline-none transition"
                                        >
                                            <FaStar
                                                className={`text-3xl ${star <= newReview.rating ? 'text-brand' : 'text-[var(--bg-muted)]'}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Your Review</label>
                                <textarea
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    placeholder="Share your thoughts about this product..."
                                    className="w-full border border-[var(--bg-muted)] bg-[var(--bg-base)] text-[var(--text-primary)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                                    rows="4"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault()
                                            e.currentTarget.form?.requestSubmit()
                                        }
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                )}

                {/* Reviews List */}
                <div className="space-y-4">
                    {productReviews.length === 0 ? (
                        <div className="text-center py-12 text-[var(--text-muted)]">
                            <p>No reviews yet. Be the first to review this product!</p>
                        </div>
                    ) : (
                        productReviews.map(review => (
                            <div key={review.id} className="border border-[var(--bg-muted)] bg-[var(--bg-base)]/50 rounded-lg p-4 hover:border-brand/60 transition">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center">
                                            <FaUser />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{review.userName}</p>
                                            <p className="text-xs text-[var(--text-muted)]">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <p className="text-[var(--text-primary)] mt-2">{review.comment}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
