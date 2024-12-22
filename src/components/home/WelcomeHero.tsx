import React from 'react';
import { ArrowRight, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export default function WelcomeHero() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {greeting},<br />
            <span className="text-indigo-600">Welcome to FPN Community</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
            Where financial innovation meets industry expertise. Join leaders shaping the future of fintech.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Market Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time analysis and market trends</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <Lightbulb className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation Hub</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Latest in fintech advancement</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <Shield className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Regulatory updates and guidance</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              Explore Network
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
              View Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}