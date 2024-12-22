import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Wallet } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Wallet className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              FPN Community<span className="text-indigo-600">.</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Markets
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Innovation
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Compliance
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search insights..."
              className="w-64 px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 rounded-lg text-sm focus:outline-none"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}