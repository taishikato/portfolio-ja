import Skills from '../components/Skills';
import Oss from '../components/Oss';
import Project from '../components/Project';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="font-extrabold text-6xl">Taishi Kato</h1>

        <div className="my-20 flex flex-wrap items-center">
          <div className="w-6/12 sm:w-2/12 pr-4">
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
      </main>
      <Footer />
    </div>
  );
}
