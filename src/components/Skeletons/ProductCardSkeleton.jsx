export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow p-3 animate-pulse">
            <div className="h-40 bg-gray-200 rounded" />
            <div className="mt-3 h-4 bg-gray-200 rounded w-3/4" />
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/2" />
            <div className="mt-4 h-6 bg-gray-200 rounded w-1/3" />
        </div>
    )
}
