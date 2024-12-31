"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Stock {
  T: string;  // Ticker symbol
  c: number;  // Close price
  o: number;  // Open price
  h: number;  // High price
  l: number;  // Low price
  v: number;  // Volume
}

export default function Dashboard() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("/api/stocks");
        console.log("API Response:", response.data);
        setStocks(response.data);
      } catch (error: unknown) {
        if(error instanceof Error) {
         setError(error.message || "Error fetching stock data");
      } 
    else {
      setError("An unexpected error occurred");
    }
    }finally {
        setLoading(false);
      }
    };
    fetchStocks();
  }, []);

  if (loading) return <div className="text-center text-xl">Loading stock data...</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">Stocks</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-700">Ticker</th>
              <th className="px-4 py-2 text-left text-gray-700">Close</th>
              <th className="px-4 py-2 text-left text-gray-700">High</th>
              <th className="px-4 py-2 text-left text-gray-700">Low</th>
              <th className="px-4 py-2 text-left text-gray-700">Open</th>
              <th className="px-4 py-2 text-left text-gray-700">Volume</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} // Alternate row colors
              >
                <td className="px-4 py-2 text-center text-gray-800">{stock.T}</td>
                <td className="px-4 py-2 text-center text-gray-800">{stock.c}</td>
                <td className="px-4 py-2 text-center text-gray-800">{stock.h}</td>
                <td className="px-4 py-2 text-center text-gray-800">{stock.l}</td>
                <td className="px-4 py-2 text-center text-gray-800">{stock.o}</td>
                <td className="px-4 py-2 text-center text-gray-800">{stock.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
