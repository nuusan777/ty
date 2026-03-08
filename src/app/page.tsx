import Link from "next/link";
import ChapterCard from "@/components/ChapterCard";
import { chapters } from "@/data/chapters";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-4xl">⌨️</span>
            プログラマー向けタイピング練習
          </h1>
          <p className="text-gray-400 mt-2">
            プログラミングで使用する記号やコードパターンを効率的に習得しましょう
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 初心者向け案内 */}
        <Link href="/basics">
          <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-6 border border-green-700/50 hover:border-green-500 transition-all cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">📖</span>
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    タイピングの基礎を学ぶ
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    初心者の方はまずこちらから！正しい姿勢・ホームポジション・指の配置を学びましょう
                  </p>
                </div>
              </div>
              <svg
                className="w-6 h-6 text-green-500 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* GitHub入門 */}
        <Link href="/github-basics">
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-6 mb-6 border border-orange-700/50 hover:border-orange-500 transition-all cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🐙</span>
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    Git/GitHub入門
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    バージョン管理の基礎を学ぼう！Git/GitHubの使い方をわかりやすく解説
                  </p>
                </div>
              </div>
              <svg
                className="w-6 h-6 text-orange-500 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* 概要 */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 mb-8 border border-blue-700/50">
          <h2 className="text-xl font-bold text-white mb-3">📚 学習の進め方</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <p className="text-gray-300">章を選んでレッスンを開始</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <p className="text-gray-300">表示されたテキストを正確に入力</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <p className="text-gray-300">速度と正確性を向上させましょう</p>
            </div>
          </div>
        </div>

        {/* 章一覧 */}
        <h2 className="text-xl font-bold text-white mb-4">📖 章を選択</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              id={chapter.id}
              title={chapter.title}
              description={chapter.description}
              lessonsCount={chapter.lessons.length}
            />
          ))}
        </div>

        {/* フッター */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>プログラミングに必要なタイピングスキルを身につけよう 💻</p>
        </footer>
      </main>
    </div>
  );
}
