import React, { FC } from 'react';

interface Props {
  description: string;
  image: string;
  title: string;
  url: string;
}

const ProjectCard: FC<Props> = ({ description, image, title, url }) => (
  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt={`${title} サムネイル`}
        className="object-cover object-center h-full w-full"
        src={image}
      />
    </div>
    <h2 className="text-xl font-medium mt-5">{title}</h2>
    <p className="text-base leading-relaxed mt-2">{description}</p>
    <a
      className="text-teal-500 inline-flex items-center mt-3"
      href={url}
      target="_blank"
    >
      Learn More
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
);

export default ProjectCard;
