import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-cyan-900 text-white">
      <div className="p-10 flex flex-col justify-center gap-5 items-center">
        <h1>Stay up-todate with <span className="text-green-600">Stock Market Price Tracking</span></h1>
        <p>Track live stock prices and stay updated with market trends. Simplify your investments with real-time data and insights at your fingertips</p>
        <Link href="/prices">
      <button className="bg-green-500 text-white p-2 rounded-lg">
        View Prices
      </button>
    </Link>
      </div>
      
      <div>
        <Image src="/pexels-pixabay-534216.jpg" alt="stock market" width={500} height={500} />
      </div>
      
    </div>
    <div className="p-10">
  <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Real-time Data</h3>
      <p className="text-gray-600 text-center">
        Get real-time stock prices and market data to make informed decisions.
      </p>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Insights</h3>
      <p className="text-gray-600 text-center">
        Get insights into market trends and stock performance to optimize your investments.
      </p>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Custom Alerts</h3>
      <p className="text-gray-600 text-center">
        Set custom alerts and notifications to stay updated with market changes.
      </p>
    </div>
  </div>
</div>

<div className="p-10 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-6">Why StockTracker?</h2>
  <div className="flex flex-col items-center space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2">
      <h3 className="text-2xl font-semibold mb-4 text-center">Easy to Use</h3>
      <p className="text-gray-700 text-center">
        StockTracker is designed to be user-friendly and intuitive for all users.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}
