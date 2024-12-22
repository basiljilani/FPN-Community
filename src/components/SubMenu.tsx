import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface SubMenuProps {
  isOpen: boolean;
  title: string;
  chatrooms: string[];
  onClose: () => void;
  onSelectChatroom: (chatroomName: string) => void;
}

const formatChatroomName = (name: string) => {
  return name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export default function SubMenu({ isOpen, title, chatrooms, onClose, onSelectChatroom }: SubMenuProps) {
  return (
    <div 
      className={`w-60 bg-[#2b2d31] flex flex-col min-h-screen border-l border-[#1f2023] will-change-transform ${
        isOpen 
          ? 'translate-x-0 opacity-100 pointer-events-auto' 
          : '-translate-x-8 opacity-0 pointer-events-none'
      } transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}
    >
      <div className="h-14 px-4 flex items-center border-b border-[#1f2023] shadow-sm">
        <button
          onClick={onClose}
          className="p-1.5 mr-3 hover:bg-[#35373c] rounded-lg transition-all duration-200 flex items-center justify-center flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-white font-medium text-base">Chatrooms</h2>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        {chatrooms.map((chatroom, index) => {
          const displayName = formatChatroomName(chatroom);
          return (
            <button
              key={index}
              onClick={() => onSelectChatroom(chatroom)}
              className="w-full px-3 py-2 mb-1 text-left text-[#949ba4] hover:text-white hover:bg-[#35373c] rounded-lg transition-all duration-200 flex items-center group"
            >
              <span className="text-lg mr-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">#</span>
              <span className="text-base font-medium whitespace-normal break-words leading-snug min-w-0">{displayName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
