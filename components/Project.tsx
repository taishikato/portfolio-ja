import React from "react";

import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section>
      <Title>個人開発プロジェクト</Title>

      <div className="container mt-5 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <ProjectCard
            description="個人開発者に特化したQ&Aサイトのバージョン2。Product Huntで反響を得る。"
            image="/askmakers2.gif"
            title="AskMakers 2.0"
            url="https://www.producthunt.com/posts/askmakers-2-0"
          />
          <ProjectCard
            description="与えられた文字列を元に、URL用のslugを自動生成するnpmライブラリ。"
            image="/@taishikato-slug-generator.png"
            title="@taishikato/slug-generator"
            url="https://www.npmjs.com/package/@taishikato/slug-generator"
          />
          <ProjectCard
            description="個人開発者に特化したQ&Aサイトのバージョン1"
            image="/askmakers.gif"
            title="AskMakers"
            url="https://github.com/taishikato/AskMakers/blob/master/README.md"
          />
          <ProjectCard
            description="360°写真に特化した写真投稿サイト"
            image="/360gram.png"
            title="360gram"
            url="https://github.com/taishikato/360gram/blob/master/README.md"
          />
          <ProjectCard
            description="閲覧しているWebページをワンクリックでスクショしてPinterestに追加するChrome extension"
            image="/pinweb.png"
            title="PinWeb"
            url="https://github.com/taishikato/PinWeb-API/blob/master/README.md"
          />
          <ProjectCard
            description="すごい軽いメモアプリ"
            image="/airnote.png"
            title="Airnote"
            url="https://airnote.space/"
          />
          <ProjectCard
            description="投稿記事の良いね数に応じたランキングを生成、表示するWordPressプラグイン"
            image="/wflr.png"
            title="WordPress Facebook Like Ranking"
            url="https://wordpress.org/plugins/wp-facebook-like-ranking/"
          />
          <ProjectCard
            description="ノマドワークに適したカフェなどをみんなでシェアできるサイト"
            image="/nomadplacemap.png"
            title="NomadPlaceMap"
            url="https://github.com/taishikato/NomadPlaceMap/blob/master/README.md"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
