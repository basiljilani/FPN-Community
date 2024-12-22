import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types';
import { iconMap } from '../../utils/icons';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div 
      onClick={() => navigate(`/category/${category.id}`)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          {Icon && <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {category.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {category.description}
      </p>
    </div>
  );
}