import React from 'react';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#313338] text-center p-8">
      <div className="text-[#43B581] mb-4">
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
        </svg>
      </div>
      <h1 className="text-white text-3xl font-bold mb-4">Good morning!</h1>
      <p className="text-[#949ba4] text-lg max-w-2xl">
        Welcome to FPN Community - Your hub for discussions about industry trends and executive insights for C-suite leaders.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="bg-[#2b2d31] p-6 rounded-lg">
          <h3 className="text-[#43B581] font-medium mb-2">Strategic Leadership</h3>
          <p className="text-[#949ba4]">Exchange insights on corporate strategy and organizational transformation</p>
        </div>
        <div className="bg-[#2b2d31] p-6 rounded-lg">
          <h3 className="text-[#43B581] font-medium mb-2">Market Dynamics</h3>
          <p className="text-[#949ba4]">Navigate global market trends and competitive landscapes</p>
        </div>
        <div className="bg-[#2b2d31] p-6 rounded-lg">
          <h3 className="text-[#43B581] font-medium mb-2">Innovation & Growth</h3>
          <p className="text-[#949ba4]">Explore emerging technologies and growth opportunities</p>
        </div>
      </div>
    </div>
  );
}
