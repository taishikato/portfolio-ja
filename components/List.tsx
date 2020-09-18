import React, { FC } from 'react';

interface Props {
  title: string;
  items: string[];
}

const List: FC<Props> = ({ title, items }) => (
  <>
    <h2 className="font-medium text-lg mb-4 text-sm text-center sm:text-left">
      {title}
    </h2>
    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
      {items.map((item) => (
        <div>
          <span className="bg-teal-100 text-teal-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {item}
        </div>
      ))}
    </nav>
  </>
);

export default List;
