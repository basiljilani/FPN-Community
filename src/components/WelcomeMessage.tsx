import React from 'react';
import { Building2 } from 'lucide-react';

export default function WelcomeMessage() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 bg-[#313338]">
      <div className="max-w-2xl w-full">
        <div className="flex items-center justify-center mb-6">
          <Building2 className="w-12 h-12 text-[#23a559]" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{greeting}!</h1>
        <p className="text-xl text-[#949ba4] mb-8">
          Welcome to FPN Community - Your hub for discussions about industry trends and executive insights for C-suite leaders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="p-4 bg-[#2b2d31] rounded-lg">
            <h3 className="font-semibold text-[#23a559]">Strategic Leadership</h3>
            <p className="text-[#949ba4] text-sm">Exchange insights on corporate strategy and organizational transformation</p>
          </div>
          <div className="p-4 bg-[#2b2d31] rounded-lg">
            <h3 className="font-semibold text-[#23a559]">Market Dynamics</h3>
            <p className="text-[#949ba4] text-sm">Navigate global market trends and competitive landscapes</p>
          </div>
          <div className="p-4 bg-[#2b2d31] rounded-lg">
            <h3 className="font-semibold text-[#23a559]">Innovation & Growth</h3>
            <p className="text-[#949ba4] text-sm">Explore emerging technologies and growth opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}