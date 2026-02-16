export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Logo placeholder */}
        <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-6 animate-pulse"></div>
        
        {/* Loading spinner */}
        <div className="relative w-12 h-12 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
