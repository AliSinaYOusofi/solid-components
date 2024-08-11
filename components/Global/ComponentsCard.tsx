import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ComponentCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative max-w-xs mx-auto w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem]">
      <Link 
        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg hover:border-blue-500 transition-all duration-300 dark:bg-neutral-900 dark:border-neutral-800"
        href={`/display-components/${title}`}
      >
        <div className="p-4 md:p-5">
          <div className="flex flex-col items-start gap-y-3">
            <div className="text-gray-800 dark:text-neutral-200">
              {icon}
            </div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {description}
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
        <FaArrowRight
          className="text-gray-800 dark:text-neutral-200 group-hover:text-blue-600 transition-transform transform group-hover:translate-x-1"
          size={24}
        />
      </div>
    </div>
  );
};

export default ComponentCard;
