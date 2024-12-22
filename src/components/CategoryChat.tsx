import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Message } from '../types';
import { categories } from '../data/categories';

export default function CategoryChat() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      userId: '1',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="h-12 px-4 flex items-center border-b border-[#1f2023] bg-[#313338]">
        <span className="text-lg text-[#949ba4] mr-2">#</span>
        <h2 className="text-white font-medium">{category.name}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.userId === '1' ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-[80%] bg-[#2b2d31] text-white rounded-lg p-3">
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#313338]">
        <div className="flex items-center bg-[#383a40] rounded-lg">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message #${category.name}`}
            className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder-[#949ba4] focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 text-[#949ba4] hover:text-white"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}