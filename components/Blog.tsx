import React, { FC } from "react";

import Title from "./Title";

interface IPost {
  categories: string[];
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
  guid: string;
}

interface IProps {
  posts: IPost[];
}

const Blog: FC<IProps> = ({ posts }) => (
  <section>
    <Title>Qiita</Title>
    <div className="container mt-5 mx-auto">
      <div className="text-lg mb-5 font-semibold">最新の10記事</div>
      <div className="container mx-auto text-gray-700">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={post.guid}>
              <a
                className="block h-48 rounded overflow-hidden hover:opacity-75"
                href={post.link}
                target="_blank"
              >
                <img
                  alt={post.title}
                  className="object-cover object-center w-full h-full block"
                  src={post.thumbnail}
                  loading="lazy"
                />
              </a>
              <div className="mt-4">
                <div className="text-gray-500 text-xs tracking-widest mb-1">
                  {post.categories.join(", ").toUpperCase()}
                </div>
                <div className="text-lg font-medium">
                  <a className="text-gray-900" href={post.link} target="_blank">
                    {post.title}
                  </a>
                </div>
                <p className="mt-1">{post.pubDate.split(" ")[0]}</p>
              </div>
            </div>
          ))}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              className="block h-48 rounded overflow-hidden hover:opacity-75"
              href="https://qiita.com/kanye__east"
              target="_blank"
            >
              <picture>
                <source srcSet="/moreqiita.webp" type="image/webp" />
                <source srcSet="/moreqiita.png" type="image/jpeg" />
                <img
                  alt="More posts on Qiita"
                  className="object-cover object-center w-full h-full block"
                  loading="lazy"
                  src="/moreqiita.png"
                />
              </picture>
            </a>
            <div className="mt-4">
              <div className="text-lg font-medium">
                <a
                  className="text-gray-900"
                  href="https://qiita.com/kanye__east"
                  target="_blank"
                >
                  Check out more posts on Qiita…!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
