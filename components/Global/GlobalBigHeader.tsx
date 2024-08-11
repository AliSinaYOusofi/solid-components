import React from 'react';

type Props = {
  title: string;
  shortDescription: string;
  longDescription: string;
};

export default function GlobalBigHeader({ title, shortDescription: description, longDescription }: Props) {
  return (
    <div className="relative w-full max-w-5xl p-8 mx-auto mt-20 flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-lg dark:bg-neutral-800 dark:from-neutral-900 dark:to-neutral-700">
      <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white dark:text-neutral-100 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl  lg:text-2xl text-gray-300 dark:text-neutral-300 mt-6 p-10">
          {longDescription}
        </p>
       
      </div>
    </div>
  );
}
