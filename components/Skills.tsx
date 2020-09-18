import React from 'react';

import Title from './Title';
import List from './List';

const backend = ['NodeJs', 'Next.js', 'Nuxt.js', 'TypeScript', 'PHP'];
const frontend = [
  'React',
  'Vue.js',
  'Next.js',
  'Nuxt.js',
  'TypeScript',
  'HTML',
  'CSS',
];

const others = [
  'Chai',
  'Jest',
  'Mocha',
  'Shell',
  'Firebase',
  'MySQL',
  'Linux',
  'jenkins',
  'Git',
  'vim',
  'tmux',
];

const Skills = () => {
  return (
    <section>
      <Title>スキル</Title>
      <section className="">
        <div className="container mt-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <List title="バックエンド" items={backend} />
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <List title="フロントエンド" items={frontend} />
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <List title="その他" items={others} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
