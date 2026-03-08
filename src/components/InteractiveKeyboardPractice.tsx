"use client";

import { useState, useEffect, useCallback } from "react";

// キーと指の色のマッピング
const fingerColors: { [key: string]: string } = {
  // 左小指 (ピンク)
  "`": "bg-pink-600", "1": "bg-pink-600", "Q": "bg-pink-600", "A": "bg-pink-600", "Z": "bg-pink-600",
  "Tab": "bg-pink-600", "CapsLock": "bg-pink-600", "Shift": "bg-pink-600",
  // 左薬指 (オレンジ)
  "2": "bg-orange-500", "W": "bg-orange-500", "S": "bg-orange-500", "X": "bg-orange-500",
  // 左中指 (黄色)
  "3": "bg-yellow-500", "E": "bg-yellow-500", "D": "bg-yellow-500", "C": "bg-yellow-500",
  // 左人差し指 (緑)
  "4": "bg-green-500", "5": "bg-green-500", "R": "bg-green-500", "T": "bg-green-500",
  "F": "bg-green-500", "G": "bg-green-500", "V": "bg-green-500", "B": "bg-green-500",
  // 右人差し指 (シアン)
  "6": "bg-cyan-500", "7": "bg-cyan-500", "Y": "bg-cyan-500", "U": "bg-cyan-500",
  "H": "bg-cyan-500", "J": "bg-cyan-500", "N": "bg-cyan-500", "M": "bg-cyan-500",
  // 右中指 (青)
  "8": "bg-blue-500", "I": "bg-blue-500", "K": "bg-blue-500", ",": "bg-blue-500",
  // 右薬指 (紫)
  "9": "bg-purple-500", "O": "bg-purple-500", "L": "bg-purple-500", ".": "bg-purple-500",
  // 右小指 (ピンク)
  "0": "bg-pink-500", "-": "bg-pink-500", "=": "bg-pink-500", "P": "bg-pink-500",
  "[": "bg-pink-500", "]": "bg-pink-500", "\\": "bg-pink-500", ";": "bg-pink-500",
  "'": "bg-pink-500", "/": "bg-pink-500", "Enter": "bg-pink-500", "Backspace": "bg-pink-500",
  // 親指 (グレー)
  " ": "bg-gray-500",
};

const fingerNames: { [key: string]: string } = {
  "bg-pink-600": "左小指",
  "bg-orange-500": "左薬指",
  "bg-yellow-500": "左中指",
  "bg-green-500": "左人差指",
  "bg-cyan-500": "右人差指",
  "bg-blue-500": "右中指",
  "bg-purple-500": "右薬指",
  "bg-pink-500": "右小指",
  "bg-gray-500": "親指",
};

// キーボードレイアウト
const keyboardLayout: Array<Array<{ key: string; width: string; home?: boolean; label?: string }>> = [
  [
    { key: "1", width: "w-10" },
    { key: "2", width: "w-10" },
    { key: "3", width: "w-10" },
    { key: "4", width: "w-10" },
    { key: "5", width: "w-10" },
    { key: "6", width: "w-10" },
    { key: "7", width: "w-10" },
    { key: "8", width: "w-10" },
    { key: "9", width: "w-10" },
    { key: "0", width: "w-10" },
    { key: "-", width: "w-10" },
    { key: "=", width: "w-10" },
  ],
  [
    { key: "Q", width: "w-10" },
    { key: "W", width: "w-10" },
    { key: "E", width: "w-10" },
    { key: "R", width: "w-10" },
    { key: "T", width: "w-10" },
    { key: "Y", width: "w-10" },
    { key: "U", width: "w-10" },
    { key: "I", width: "w-10" },
    { key: "O", width: "w-10" },
    { key: "P", width: "w-10" },
    { key: "[", width: "w-10" },
    { key: "]", width: "w-10" },
  ],
  [
    { key: "A", width: "w-10", home: true },
    { key: "S", width: "w-10", home: true },
    { key: "D", width: "w-10", home: true },
    { key: "F", width: "w-10", home: true },
    { key: "G", width: "w-10" },
    { key: "H", width: "w-10" },
    { key: "J", width: "w-10", home: true },
    { key: "K", width: "w-10", home: true },
    { key: "L", width: "w-10", home: true },
    { key: ";", width: "w-10", home: true },
    { key: "'", width: "w-10" },
  ],
  [
    { key: "Z", width: "w-10" },
    { key: "X", width: "w-10" },
    { key: "C", width: "w-10" },
    { key: "V", width: "w-10" },
    { key: "B", width: "w-10" },
    { key: "N", width: "w-10" },
    { key: "M", width: "w-10" },
    { key: ",", width: "w-10" },
    { key: ".", width: "w-10" },
    { key: "/", width: "w-10" },
  ],
  [
    { key: " ", width: "w-48", label: "Space" },
  ],
];

export default function InteractiveKeyboardPractice() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;
    
    e.preventDefault();
    const key = e.key.toUpperCase();
    
    setPressedKeys((prev) => new Set(prev).add(key));
    setLastKey(e.key === " " ? "Space" : e.key.length === 1 ? e.key.toUpperCase() : e.key);
  }, [isActive]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;
    
    const key = e.key.toUpperCase();
    setPressedKeys((prev) => {
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isActive, handleKeyDown, handleKeyUp]);

  const getKeyColor = (key: string) => {
    const upperKey = key.toUpperCase();
    return fingerColors[upperKey] || fingerColors[key] || "bg-gray-700";
  };

  const isPressed = (key: string) => {
    return pressedKeys.has(key.toUpperCase()) || pressedKeys.has(key);
  };

  const getFingerName = (key: string) => {
    const color = getKeyColor(key);
    return fingerNames[color] || "";
  };

  return (
    <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 rounded-lg p-4 border border-cyan-700/50">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <span>⌨️</span>
          インタラクティブ練習
        </h4>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            isActive
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-cyan-600 hover:bg-cyan-700 text-white"
          }`}
        >
          {isActive ? "停止" : "練習開始"}
        </button>
      </div>

      {isActive && (
        <p className="text-cyan-300 text-sm mb-4 animate-pulse">
          🎹 キーボードを押すと、対応するキーと担当する指が表示されます
        </p>
      )}

      {!isActive && (
        <p className="text-gray-400 text-sm mb-4">
          「練習開始」を押すと、キー入力が有効になります。上の図を見ながら練習できます。
        </p>
      )}

      {/* 最後に押したキー */}
      {lastKey && (
        <div className="mb-4 flex items-center gap-4">
          <div className="text-gray-400">押したキー:</div>
          <div className={`${getKeyColor(lastKey)} px-4 py-2 rounded-lg text-white font-bold text-xl`}>
            {lastKey}
          </div>
          <div className="text-gray-300">
            → <span className={`${getKeyColor(lastKey).replace('bg-', 'text-')}`}>{getFingerName(lastKey)}</span>で押す
          </div>
        </div>
      )}

      {/* キーボード表示 */}
      <div className="overflow-x-auto">
        <div className="min-w-[550px] space-y-1">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 justify-center" style={{ marginLeft: `${rowIndex * 8}px` }}>
              {row.map((keyData) => {
                const pressed = isPressed(keyData.key);
                const color = getKeyColor(keyData.key);
                const isHome = "home" in keyData && keyData.home;
                
                return (
                  <div
                    key={keyData.key}
                    className={`
                      ${keyData.width} h-10 rounded flex items-center justify-center 
                      text-white font-bold text-sm shadow-lg relative
                      transition-all duration-75
                      ${pressed ? `${color} scale-95 ring-2 ring-white` : `${color} opacity-70`}
                      ${isHome ? "ring-1 ring-yellow-400" : ""}
                    `}
                  >
                    {keyData.label || keyData.key}
                    {isHome && <span className="absolute -bottom-0.5 text-[6px] text-yellow-400">●</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* 凡例 */}
      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-pink-600 rounded"></div>
          <span className="text-gray-400">左小指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span className="text-gray-400">左薬指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-gray-400">左中指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-gray-400">左人差指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-cyan-500 rounded"></div>
          <span className="text-gray-400">右人差指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-gray-400">右中指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-gray-400">右薬指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-pink-500 rounded"></div>
          <span className="text-gray-400">右小指</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-500 rounded"></div>
          <span className="text-gray-400">親指</span>
        </div>
      </div>
    </div>
  );
}
