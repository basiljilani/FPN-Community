import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function ServerList() {
  const navigate = useNavigate();

  return (
    <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 space-y-2">
      <button
        onClick={() => navigate('/')}
        className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center group"
      >
        <MessageSquare className="w-5 h-5 text-[#23a559] group-hover:text-white transition-colors" />
      </button>
      
      <div className="w-8 h-[2px] bg-[#35363c] rounded-lg mx-auto" />
      
      {/* Add server buttons here later */}
    </div>
  );
}