import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your exercise program access will be 
          sent to your email shortly.
        </p>
        
        <div className="space-y-3">
          <Link
            href="/programs"
            className="block w-full bg-[#D84795] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#c43d82] transition-colors"
          >
            Browse More Programs
          </Link>
          
          <Link
            href="/"
            className="block w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
          >
            Back to Home
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}


