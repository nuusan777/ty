"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const keyboardLayout = [
  // 数字行
  [
    { key: "`", shift: "~", width: "w-10", finger: "left-pinky" },
    { key: "1", shift: "!", width: "w-10", finger: "left-pinky" },
    { key: "2", shift: "@", width: "w-10", finger: "left-ring" },
    { key: "3", shift: "#", width: "w-10", finger: "left-middle" },
    { key: "4", shift: "$", width: "w-10", finger: "left-index" },
    { key: "5", shift: "%", width: "w-10", finger: "left-index" },
    { key: "6", shift: "^", width: "w-10", finger: "right-index" },
    { key: "7", shift: "&", width: "w-10", finger: "right-index" },
    { key: "8", shift: "*", width: "w-10", finger: "right-middle" },
    { key: "9", shift: "(", width: "w-10", finger: "right-ring" },
    { key: "0", shift: ")", width: "w-10", finger: "right-pinky" },
    { key: "-", shift: "_", width: "w-10", finger: "right-pinky" },
    { key: "=", shift: "+", width: "w-10", finger: "right-pinky" },
    { key: "Backspace", display: "⌫", width: "w-16", finger: "right-pinky" },
  ],
  // 上段
  [
    { key: "Tab", display: "Tab", width: "w-14", finger: "left-pinky" },
    { key: "q", width: "w-10", finger: "left-pinky" },
    { key: "w", width: "w-10", finger: "left-ring" },
    { key: "e", width: "w-10", finger: "left-middle" },
    { key: "r", width: "w-10", finger: "left-index" },
    { key: "t", width: "w-10", finger: "left-index" },
    { key: "y", width: "w-10", finger: "right-index" },
    { key: "u", width: "w-10", finger: "right-index" },
    { key: "i", width: "w-10", finger: "right-middle" },
    { key: "o", width: "w-10", finger: "right-ring" },
    { key: "p", width: "w-10", finger: "right-pinky" },
    { key: "[", shift: "{", width: "w-10", finger: "right-pinky" },
    { key: "]", shift: "}", width: "w-10", finger: "right-pinky" },
    { key: "\\", shift: "|", width: "w-12", finger: "right-pinky" },
  ],
  // ホーム行
  [
    { key: "CapsLock", display: "Caps", width: "w-16", finger: "left-pinky" },
    { key: "a", width: "w-10", finger: "left-pinky", home: true },
    { key: "s", width: "w-10", finger: "left-ring" },
    { key: "d", width: "w-10", finger: "left-middle" },
    { key: "f", width: "w-10", finger: "left-index", home: true },
    { key: "g", width: "w-10", finger: "left-index" },
    { key: "h", width: "w-10", finger: "right-index" },
    { key: "j", width: "w-10", finger: "right-index", home: true },
    { key: "k", width: "w-10", finger: "right-middle" },
    { key: "l", width: "w-10", finger: "right-ring" },
    { key: ";", shift: ":", width: "w-10", finger: "right-pinky", home: true },
    { key: "'", shift: '"', width: "w-10", finger: "right-pinky" },
    { key: "Enter", display: "Enter", width: "w-18", finger: "right-pinky" },
  ],
  // 下段
  [
    { key: "Shift", display: "Shift", width: "w-20", finger: "left-pinky" },
    { key: "z", width: "w-10", finger: "left-pinky" },
    { key: "x", width: "w-10", finger: "left-ring" },
    { key: "c", width: "w-10", finger: "left-middle" },
    { key: "v", width: "w-10", finger: "left-index" },
    { key: "b", width: "w-10", finger: "left-index" },
    { key: "n", width: "w-10", finger: "right-index" },
    { key: "m", width: "w-10", finger: "right-index" },
    { key: ",", shift: "<", width: "w-10", finger: "right-middle" },
    { key: ".", shift: ">", width: "w-10", finger: "right-ring" },
    { key: "/", shift: "?", width: "w-10", finger: "right-pinky" },
    { key: "Shift", display: "Shift", width: "w-24", finger: "right-pinky" },
  ],
  // スペース行
  [
    { key: "Control", display: "Ctrl", width: "w-14", finger: "left-pinky" },
    { key: "Meta", display: "Win", width: "w-12", finger: "left-thumb" },
    { key: "Alt", display: "Alt", width: "w-12", finger: "left-thumb" },
    { key: " ", display: "Space", width: "w-64", finger: "thumb" },
    { key: "Alt", display: "Alt", width: "w-12", finger: "right-thumb" },
    { key: "Meta", display: "Win", width: "w-12", finger: "right-thumb" },
    { key: "Control", display: "Ctrl", width: "w-14", finger: "right-pinky" },
  ],
];

const fingerColors: Record<string, { bg: string; border: string; name: string }> = {
  "left-pinky": { bg: "bg-pink-600", border: "border-pink-500", name: "左小指" },
  "left-ring": { bg: "bg-orange-500", border: "border-orange-400", name: "左薬指" },
  "left-middle": { bg: "bg-yellow-500", border: "border-yellow-400", name: "左中指" },
  "left-index": { bg: "bg-green-500", border: "border-green-400", name: "左人差し指" },
  "right-index": { bg: "bg-cyan-500", border: "border-cyan-400", name: "右人差し指" },
  "right-middle": { bg: "bg-blue-500", border: "border-blue-400", name: "右中指" },
  "right-ring": { bg: "bg-purple-500", border: "border-purple-400", name: "右薬指" },
  "right-pinky": { bg: "bg-pink-500", border: "border-pink-400", name: "右小指" },
  "thumb": { bg: "bg-gray-500", border: "border-gray-400", name: "親指" },
  "left-thumb": { bg: "bg-gray-500", border: "border-gray-400", name: "左親指" },
  "right-thumb": { bg: "bg-gray-500", border: "border-gray-400", name: "右親指" },
};

export default function KeyboardPracticePage() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [lastKey, setLastKey] = useState<string>("");
  const [keyHistory, setKeyHistory] = useState<string[]>([]);
  const [showFingerHint, setShowFingerHint] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = e.key.toLowerCase();
      setPressedKeys((prev) => new Set(prev).add(key));
      setLastKey(e.key);
      setKeyHistory((prev) => [...prev.slice(-19), e.key]);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const isKeyPressed = (key: string): boolean => {
    const lowerKey = key.toLowerCase();
    if (pressedKeys.has(lowerKey)) return true;
    if (key === " " && pressedKeys.has(" ")) return true;
    if (key === "Shift" && pressedKeys.has("shift")) return true;
    if (key === "Control" && pressedKeys.has("control")) return true;
    if (key === "Alt" && pressedKeys.has("alt")) return true;
    if (key === "Meta" && pressedKeys.has("meta")) return true;
    if (key === "Enter" && pressedKeys.has("enter")) return true;
    if (key === "Tab" && pressedKeys.has("tab")) return true;
    if (key === "Backspace" && pressedKeys.has("backspace")) return true;
    if (key === "CapsLock" && pressedKeys.has("capslock")) return true;
    return false;
  };

  const getFingerInfo = (finger: string) => {
    return fingerColors[finger] || fingerColors["thumb"];
  };

  const clearHistory = () => {
    setKeyHistory([]);
    setLastKey("");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
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
              <span className="text-purple-400 text-sm font-medium">練習</span>
              <h1 className="text-xl font-bold text-white">キーボード練習</h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 説明 */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 mb-6 border border-purple-700/50">
          <h2 className="text-lg font-bold text-white mb-2">⌨️ フリータイピング</h2>
          <p className="text-gray-300 text-sm">
            キーボードを自由に押して、どのキーがどの指で押すべきか確認できます。
            押したキーがリアルタイムでハイライトされます。
          </p>
        </div>

        {/* 現在押しているキー表示 */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">最後に押したキー</h3>
            <div className="text-5xl font-bold text-white text-center py-4">
              {lastKey === " " ? "Space" : lastKey || "-"}
            </div>
            {lastKey && (
              <div className="text-center mt-2">
                {keyboardLayout.flat().find(k => 
                  k.key.toLowerCase() === lastKey.toLowerCase() || 
                  k.shift === lastKey
                )?.finger && (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm text-white ${
                    getFingerInfo(
                      keyboardLayout.flat().find(k => 
                        k.key.toLowerCase() === lastKey.toLowerCase() || 
                        k.shift === lastKey
                      )?.finger || ""
                    ).bg
                  }`}>
                    {getFingerInfo(
                      keyboardLayout.flat().find(k => 
                        k.key.toLowerCase() === lastKey.toLowerCase() || 
                        k.shift === lastKey
                      )?.finger || ""
                    ).name}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm">入力履歴</h3>
              <button
                onClick={clearHistory}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                クリア
              </button>
            </div>
            <div className="font-mono text-lg text-white bg-gray-900 rounded p-3 min-h-[80px] break-all">
              {keyHistory.map((key, i) => (
                <span key={i} className="inline-block mr-1">
                  {key === " " ? "␣" : key}
                </span>
              ))}
              {keyHistory.length === 0 && (
                <span className="text-gray-500">キーを押してください...</span>
              )}
            </div>
          </div>
        </div>

        {/* 指ヒント表示トグル */}
        <div className="flex items-center justify-end mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={showFingerHint}
              onChange={(e) => setShowFingerHint(e.target.checked)}
              className="rounded bg-gray-700 border-gray-600"
            />
            指の色分けを表示
          </label>
        </div>

        {/* キーボード表示 */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex flex-col items-center gap-1">
            {keyboardLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1">
                {row.map((keyData, keyIndex) => {
                  const pressed = isKeyPressed(keyData.key);
                  const fingerInfo = getFingerInfo(keyData.finger);
                  const isHome = "home" in keyData && keyData.home;
                  
                  return (
                    <div
                      key={`${rowIndex}-${keyIndex}`}
                      className={`
                        ${keyData.width} h-12 rounded-lg border-2 flex flex-col items-center justify-center
                        text-xs font-medium transition-all duration-75
                        ${pressed 
                          ? "bg-blue-500 border-blue-400 text-white scale-95 shadow-lg shadow-blue-500/50" 
                          : showFingerHint
                            ? `${fingerInfo.bg}/20 ${fingerInfo.border} text-gray-300`
                            : "bg-gray-700 border-gray-600 text-gray-300"
                        }
                        ${isHome ? "border-b-4" : ""}
                      `}
                    >
                      <span className={`${pressed ? "text-white" : ""} font-bold`}>
                        {keyData.display || keyData.key.toUpperCase()}
                      </span>
                      {keyData.shift && (
                        <span className="text-[10px] text-gray-500">{keyData.shift}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* 凡例 */}
          {showFingerHint && (
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm text-gray-400 mb-3">指の担当</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {Object.entries(fingerColors).slice(0, 8).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${value.bg} rounded`}></div>
                    <span className="text-gray-300">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ヒント */}
        <div className="mt-6 bg-gray-800/50 rounded-lg p-4 text-center">
          <p className="text-gray-400 text-sm">
            💡 ホームポジション（A S D F / J K L ;）は下に太い線があります。
            常にここに指を戻すことを意識しましょう。
          </p>
        </div>

        {/* 練習開始ボタン */}
        <div className="mt-8 text-center">
          <Link
            href="/chapter/1"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            タイピング練習を始める →
          </Link>
        </div>
      </main>
    </div>
  );
}
