import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ThankYou() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation on component mount
    setFadeIn(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-l_blue via-blue to-d_blue p-4 font-spaceGrotesk">
      <Head>
        <title>Thank You</title>
      </Head>
      <div
        className={`${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transform transition-all duration-700 ease-out bg-l_black p-10 rounded-3xl shadow-2xl max-w-md w-full text-center`}
      >
        {/* Success Icon with Bounce Animation */}
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-l_blue to-blue rounded-full flex items-center justify-center animate-bounce-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6.414l7.707-7.707a1 1 0 0 0-1.414-1.414l-6.293 6.293-2.293-2.293a1 1 0 1 0-1.414 1.414L11 15.586z" />
          </svg>
        </div>

        {/* Title and Message */}
        <h1 className="text-3xl font-bold text-l_blue mb-4">Thank You!</h1>
        <p className="text-offWhite mb-8 text-lg">
          Your submission was successful. We appreciate your time and will be in touch soon!
        </p>

        {/* Back to Home Button with Hover Animation */}
        <Link href="/">
          <button className="inline-block bg-gradient-to-r from-blue to-l_blue text-l_black font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-l_blue">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
