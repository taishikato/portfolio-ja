import React from 'react';

import Title from './Title';
import Card from './Card';

const Oss = () => {
  return (
    <section>
      <Title>OSSコントリビューション</Title>
      <section className="">
        <div className="container mt-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Card
              classes="p-4 lg:w-1/3"
              description="Nuxt.jsをHerokuで使用するため調査していた際に、不要なドキュメントを発見したため修正しました（日本語ドキュメント）"
              title="ja: document delete heroku-postbuild section by taishikato · Pull Request #1799 · nuxt/docs"
              url="https://github.com/nuxt/docs/pull/1799"
            />
            <Card
              classes="p-4 lg:w-1/3"
              description="Nuxt.jsをHerokuで使用するため調査していた際に、不要なドキュメントを発見したため修正しました（英語ドキュメント）。"
              title="en: document delete heroku-deployment section by taishikato · Pull Request #1797 · nuxt/docs"
              url="https://github.com/nuxt/docs/pull/1797"
            />
            <Card
              classes="p-4 lg:w-1/3"
              description="Node FestというイベントにてNodeJs本体に対してPull Requestを送ってみました。"
              title="lib: chenged anonymous function to arrow function by taishikato · Pull Request #24589 · nodejs/node"
              url="https://github.com/nodejs/node/pull/24589"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Oss;
