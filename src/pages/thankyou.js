import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-4">
      <Head>
        <title>Thank You</title>
      </Head>
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center transform transition-all duration-300 hover:scale-105">
        <div className="w-16 h-16 mx-auto mb-4 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="text-green-500">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6.414l7.707-7.707a1 1 0 0 0-1.414-1.414l-6.293 6.293-2.293-2.293a1 1 0 1 0-1.414 1.414L11 15.586z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Your submission was successful. We appreciate your time and will be in touch soon!
        </p>
        <Link href="/">
          <button className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
