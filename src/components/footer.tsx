import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} StockTracker. All rights reserved.</p>
      <p className="mb-2">
        Powered by{' '}
        <Link href="https://polygon.io" className="text-green-500 hover:underline">
          MarketData API
        </Link>
      </p>
      <p>
        <Link href="/privacy-policy" className="text-green-500 hover:underline">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="/terms-of-service" className="text-green-500 hover:underline">
          Terms of Service
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
