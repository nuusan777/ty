"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import KeyboardDisplay from "./KeyboardDisplay";

interface TypingPracticeProps {
  text: string;
  onComplete: () => void;
}

export default function TypingPractice({ text, onComplete }: TypingPracticeProps) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // 問題が変わったらリセット
  useEffect(() => {
    setInput("");
    setStartTime(null);
    setEndTime(null);
    setErrors(0);
    inputRef.current?.focus();
  }, [text]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      // 開始時刻を記録
      if (startTime === null && value.length > 0) {
        setStartTime(Date.now());
      }

      // エラーチェック
      if (value.length > input.length) {
        const lastChar = value[value.length - 1];
        const expectedChar = text[value.length - 1];
        if (lastChar !== expectedChar) {
          setErrors((prev) => prev + 1);
        }
      }

      setInput(value);

      // 完了チェック
      if (value === text) {
        setEndTime(Date.now());
      }
    },
    [input, text, startTime]
  );

  const getCharClass = (index: number): string => {
    if (index >= input.length) {
      return "text-gray-400";
    }
    return input[index] === text[index]
      ? "text-green-500"
      : "text-red-500 bg-red-100";
  };

  const calculateWPM = (): number => {
    if (!startTime || !endTime) return 0;
    const timeInMinutes = (endTime - startTime) / 60000;
    const words = text.length / 5; // 5文字 = 1ワード
    return Math.round(words / timeInMinutes);
  };

  const calculateAccuracy = (): number => {
    if (input.length === 0) return 100;
    const correctChars = input
      .split("")
      .filter((char, i) => char === text[i]).length;
    return Math.round((correctChars / input.length) * 100);
  };

  const isComplete = input === text;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 練習テキスト表示 */}
      <div
        className="bg-gray-900 rounded-lg p-6 mb-6 font-mono text-xl tracking-wider cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="leading-relaxed break-all">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${getCharClass(index)} ${
                index === input.length
                  ? "border-l-2 border-yellow-400 animate-pulse"
                  : ""
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      {/* 入力フィールド（非表示） */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInput}
        className="opacity-0 absolute -z-10"
        autoFocus
        disabled={isComplete}
      />

      {/* 統計情報 */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-gray-400 text-sm mb-1">進捗</div>
          <div className="text-2xl font-bold text-white">
            {input.length} / {text.length}
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-gray-400 text-sm mb-1">正確性</div>
          <div className="text-2xl font-bold text-white">
            {calculateAccuracy()}%
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-gray-400 text-sm mb-1">ミス</div>
          <div className="text-2xl font-bold text-red-400">{errors}</div>
        </div>
      </div>

      {/* キーボード表示 */}
      {!isComplete && (
        <KeyboardDisplay
          pressedKey=""
          nextKey={text[input.length]}
        />
      )}

      {/* 完了メッセージ */}
      {isComplete && (
        <div className="bg-green-900/50 border border-green-500 rounded-lg p-6 text-center">
          <div className="text-green-400 text-2xl font-bold mb-2">
            完了！
          </div>
          <div className="text-gray-300 mb-4">
            WPM: <span className="font-bold text-white">{calculateWPM()}</span> |
            正確性: <span className="font-bold text-white">{calculateAccuracy()}%</span> |
            ミス: <span className="font-bold text-red-400">{errors}</span>
          </div>
          <button
            onClick={onComplete}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            次の問題へ
          </button>
        </div>
      )}

      {/* 入力のヒント */}
      {!isComplete && (
        <p className="text-gray-500 text-center text-sm">
          画面をクリックしてタイピングを開始してください
        </p>
      )}
    </div>
  );
}
