'use client'

import Link from "next/link";

const Error = () => {

    return (
        <div className="h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 text-white">

            <div className="text-center px-6">

                <h1 className="text-8xl font-extrabold mb-4">404</h1>

                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    This page couldn’t load
                </h2>

                <p className="mb-6 text-lg opacity-90">
                    Reload to try again, or go back.
                </p>

                <button
                   onClick={() => window.location.reload()}
                    className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
                >

                    Reload

                </button>

                <Link
                    href="/"
                    className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
                >

                    Back
                </Link>

            </div>

        </div>
    );
};

export default Error;