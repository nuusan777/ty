"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { chapters } from "@/data/chapters";
import TypingPractice from "@/components/TypingPractice";
import LessonCard from "@/components/LessonCard";

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const chapterId = Number(params.id);
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  const chapter = chapters.find((c) => c.id === chapterId);

  useEffect(() => {
    if (!chapter) {
      router.push("/");
    }
  }, [chapter, router]);

  if (!chapter) {
    return null;
  }

  const currentLesson = chapter.lessons[currentLessonIndex];
  const currentText = currentLesson?.texts[currentTextIndex];
  const totalTextsInLesson = currentLesson?.texts.length || 0;

  const handleComplete = () => {
    // 次の問題へ
    if (currentTextIndex < totalTextsInLesson - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      // レッスン完了
      setCompletedLessons((prev) => new Set(prev).add(currentLessonIndex));
      
      // 次のレッスンへ
      if (currentLessonIndex < chapter.lessons.length - 1) {
        setCurrentLessonIndex(currentLessonIndex + 1);
        setCurrentTextIndex(0);
      }
    }
  };

  const handleLessonSelect = (lessonIndex: number) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentTextIndex(0);
  };

  const goToNextChapter = () => {
    const nextChapterId = chapterId + 1;
    if (chapters.find((c) => c.id === nextChapterId)) {
      router.push(`/chapter/${nextChapterId}`);
    }
  };

  const goToPrevChapter = () => {
    const prevChapterId = chapterId - 1;
    if (chapters.find((c) => c.id === prevChapterId)) {
      router.push(`/chapter/${prevChapterId}`);
    }
  };

  const isChapterComplete = completedLessons.size === chapter.lessons.length;
  const hasNextChapter = chapters.find((c) => c.id === chapterId + 1);
  const hasPrevChapter = chapters.find((c) => c.id === chapterId - 1);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                ホームへ
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <div>
                <span className="text-blue-400 text-sm font-medium">第{chapter.id}章</span>
                <h1 className="text-xl font-bold text-white">{chapter.title}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevChapter}
                disabled={!hasPrevChapter}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors ${
                  hasPrevChapter
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                前の章
              </button>
              <button
                onClick={goToNextChapter}
                disabled={!hasNextChapter}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors ${
                  hasNextChapter
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                次の章
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* サイドバー: レッスン一覧 */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-white mb-4">📝 レッスン一覧</h2>
            <div className="space-y-2">
              {chapter.lessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  lessonNumber={index + 1}
                  title={lesson.title}
                  textsCount={lesson.texts.length}
                  isActive={index === currentLessonIndex}
                  isCompleted={completedLessons.has(index)}
                  onClick={() => handleLessonSelect(index)}
                />
              ))}
            </div>

            {/* 進捗表示 */}
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">章の進捗</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(completedLessons.size / chapter.lessons.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-sm text-gray-300">
                {completedLessons.size} / {chapter.lessons.length} レッスン完了
              </div>
            </div>
          </div>

          {/* メイン: タイピング練習エリア */}
          <div className="lg:col-span-3">
            {/* 現在のレッスン情報 */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-blue-400 text-sm">レッスン {currentLessonIndex + 1}</span>
                  <h3 className="text-xl font-bold text-white">{currentLesson?.title}</h3>
                </div>
                <div className="text-gray-400 text-sm">
                  問題 {currentTextIndex + 1} / {totalTextsInLesson}
                </div>
              </div>
              {/* 問題進捗バー */}
              <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
                <div
                  className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentTextIndex + 1) / totalTextsInLesson) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* タイピング練習 */}
            {currentText && (
              <TypingPractice text={currentText} onComplete={handleComplete} />
            )}

            {/* 章完了メッセージ */}
            {isChapterComplete && (
              <div className="mt-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  第{chapter.id}章 完了！
                </h3>
                <p className="text-gray-300 mb-6">
                  おめでとうございます！この章のすべてのレッスンを完了しました。
                </p>
                {hasNextChapter && (
                  <button
                    onClick={goToNextChapter}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    次の章へ進む →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
