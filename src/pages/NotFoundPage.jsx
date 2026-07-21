import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-24 pb-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-8xl sm:text-9xl font-black gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
