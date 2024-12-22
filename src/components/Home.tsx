import React from 'react';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#313338] text-center p-8">
      <div className="text-[#43B581] mb-6">
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L4 7v2h16V7l-8-4zm-6 6v8h3v-8H6zm5 0v8h2v-8h-2zm5 0v8h3v-8h-3zM4 19h16v2H4v-2z" fill="currentColor"/>
        </svg>
      </div>
      <div className="mb-2">
        <span className="text-[#43B581] text-sm font-medium tracking-wider uppercase">Financial Professional Network</span>
      </div>
      <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
        Where Leaders Discuss <br/> Tomorrow's Finance
      </h1>
      <p className="text-[#949ba4] text-lg max-w-2xl leading-relaxed">
        Join an exclusive network of C-suite executives driving innovation and excellence in the financial industry.
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
