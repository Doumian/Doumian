
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownItem {
  id: string;
  label: string;
  content: string;
}

interface DropdownInfoProps {
  items: DropdownItem[];
  title: string;
}

const DropdownInfo: React.FC<DropdownInfoProps> = ({ items, title }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none"
        >
          <span className="text-fortaleny-dark">{selectedItem.label}</span>
          {isOpen ? (
            <ChevronUp size={20} className="text-fortaleny-dark" />
          ) : (
            <ChevronDown size={20} className="text-fortaleny-dark" />
          )}
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  selectedItem.id === item.id ? 'bg-gray-50 text-fortaleny-green font-medium' : 'text-fortaleny-dark'
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 animate-fade-in">
        <h3 className="text-xl font-medium text-fortaleny-green mb-2 animate-text-slide-in">{selectedItem.label}</h3>
        <p className="text-fortaleny-dark animate-text-slide-in">{selectedItem.content}</p>
      </div>
    </div>
  );
};

export default DropdownInfo;

