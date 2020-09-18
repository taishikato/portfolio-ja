import React, { FC } from 'react';

interface Props {
  classes: string;
  description: string;
  title: string;
  url: string;
}

const Card: FC<Props> = ({ title, url, description, classes }) => (
  <div className={classes}>
    <div className="h-full bg-gray-100 p-8 rounded-lg overflow-hidden text-center relative">
      <div className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
      <p className="leading-relaxed mb-3">{description}</p>
      <a
        className="text-teal-500 inline-flex items-center"
        href={url}
        target="_blank"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
);

export default Card;
