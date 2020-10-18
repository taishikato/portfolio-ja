import Skills from '../components/Skills';
import Oss from '../components/Oss';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <h1 className="font-extrabold text-6xl">加藤 大志</h1>

        <div className="my-20 flex flex-wrap items-center">
          <div className="w-6/12 sm:w-2/12 pr-4 mb-3 md:mb-0">
            <img
              src="/taishi.jpeg"
              alt="Taishiのプロフィール写真"
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <div className="font-semibold">
            <p>
              こんにちは。東京でソフトウェアエンジニアを4年経験した後、2019年よりバンクーバーを拠点に活動しています。
            </p>
            <p>
              海外の個人開発ムーブメントに惹かれ、自分も個人開発に力を入れつつ、たまに東南アジアでノマドもしています。
            </p>
            <p>
              React、Next.js、Node.js、TypeScriptを使用するフリーランス案件募集しています。ぜひ
              <a href="https://twitter.com/taishikat0_Ja" target="_blank">
                Twitter
              </a>
              までご連絡お願いします！
            </p>
          </div>
        </div>
        <div className="my-20">
          <Project />
        </div>
        <div className="my-20">
          <Skills />
        </div>
        <div className="my-20">
          <Oss />
        </div>
        <div className="my-20">
          <Blog posts={posts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://qiita.com/kanye__east/feed.atom',
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts.items,
    }, // will be passed to the page component as props
  };
}
