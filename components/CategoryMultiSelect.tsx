'use client';

import React from 'react';
import { CATEGORIES } from '@/lib/utils';

interface CategoryMultiSelectProps {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export default function CategoryMultiSelect({
  selected,
  onChange,
}: CategoryMultiSelectProps) {
  const handleToggle = (category: string) => {
    if (selected.includes(category)) {
      onChange(selected.filter((c) => c !== category));
    } else if (selected.length < 5) {
      onChange([...selected, category]);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-dark-brown mb-3">
        Select Categories (Max 5)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleToggle(category)}
            className={`p-3 rounded-lg border-2 transition font-medium text-sm ${
              selected.includes(category)
                ? 'border-brick-red bg-brick-red text-white'
                : 'border-gray-300 bg-white text-brown hover:border-brick-red'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-brown">
        {selected.length}/5 selected
      </p>
    </div>
  );
}
