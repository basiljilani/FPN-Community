import React from 'react';
import { useParams } from 'react-router-dom';
import { subCategories } from '../data/subCategories';

export default function ChatRoom() {
  const { categoryId, chatroomName } = useParams();
  
  const category = categoryId ? subCategories[categoryId] : null;
  const chatroom = chatroomName?.replace(/-/g, ' ');

  if (!category || !chatroom) {
    return <div>Chatroom not found</div>;
  }

  return (
    <div className="flex-1 bg-[#313338] flex flex-col">
      <div className="h-12 px-4 flex items-center border-b border-[#1f2023] shadow-sm">
        <div className="flex items-center">
          <span className="text-lg mr-2 text-[#949ba4]">#</span>
          <h2 className="text-white font-medium">{chatroom}</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col space-y-4">
          {/* Messages will be rendered here */}
          <div className="text-[#949ba4] text-center py-8">
            Welcome to the beginning of the #{chatroom} channel
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-[#1f2023]">
        <div className="bg-[#383a40] rounded-lg p-2">
          <input
            type="text"
            placeholder={`Message #${chatroom}`}
            className="w-full bg-transparent text-white placeholder-[#949ba4] outline-none"
          />
        </div>
      </div>
    </div>
  );
}
