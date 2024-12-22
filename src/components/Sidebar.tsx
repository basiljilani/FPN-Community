import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { subCategories } from '../data/subCategories';
import { iconMap } from '../utils/icons';
import SubMenu from './SubMenu';

export default function Sidebar() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleChatroomSelect = (categoryId: string, chatroomName: string) => {
    navigate(`/chat/${categoryId}/${chatroomName}`);
  };

  const selectedCategoryData = selectedCategory ? subCategories[selectedCategory] : null;

  return (
    <div 
      className={`flex will-change-[width] ${
        selectedCategory ? 'w-[480px]' : 'w-60'
      } transition-[width] duration-300 ease-in-out overflow-hidden`}
    >
      <div className="flex-shrink-0 w-60 bg-[#2b2d31] flex flex-col min-h-screen">
        <div className="h-14 px-4 flex items-center border-b border-[#1f2023] shadow-sm">
          <h1 className="text-white font-medium text-lg">FPN Community</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-2 py-4">
            <div className="px-2 mb-2">
              <h2 className="text-[#949ba4] font-semibold text-xs uppercase tracking-wider">Categories</h2>
            </div>
            {categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full px-3 py-2 mb-1 text-left text-[#949ba4] hover:text-white hover:bg-[#35373c] rounded-lg transition-all duration-200 flex items-center ${
                    isSelected ? 'bg-[#35373c] text-white' : ''
                  }`}
                >
                  <span className="text-lg mr-3">#</span>
                  <span className="text-base font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="px-2 py-4">
            <div className="px-2 mb-2">
              <h2 className="text-[#949ba4] font-semibold text-xs uppercase tracking-wider">Community</h2>
            </div>
            <button
              onClick={() => navigate('/members')}
              className="w-full px-3 py-2 flex items-center space-x-3 text-[#949ba4] hover:text-white hover:bg-[#35373c] rounded-lg transition-all duration-200"
            >
              {iconMap.Users && <iconMap.Users className="w-5 h-5" />}
              <span className="text-base font-medium">Members</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        {selectedCategoryData && (
          <SubMenu
            isOpen={!!selectedCategory}
            title={selectedCategoryData.name}
            chatrooms={selectedCategoryData.items}
            onClose={() => setSelectedCategory(null)}
            onSelectChatroom={(chatroom) => handleChatroomSelect(selectedCategory, chatroom)}
          />
        )}
      </div>
    </div>
  );
}