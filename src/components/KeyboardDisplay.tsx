"use client";

import { useState, useEffect } from "react";

interface KeyboardDisplayProps {
  pressedKey: string;
  nextKey?: string;
}

const keyboardLayout = [
  // 数字行
  [
    { key: "`", shift: "~", width: "w-10" },
    { key: "1", shift: "!", width: "w-10" },
    { key: "2", shift: "@", width: "w-10" },
    { key: "3", shift: "#", width: "w-10" },
    { key: "4", shift: "$", width: "w-10" },
    { key: "5", shift: "%", width: "w-10" },
    { key: "6", shift: "^", width: "w-10" },
    { key: "7", shift: "&", width: "w-10" },
    { key: "8", shift: "*", width: "w-10" },
    { key: "9", shift: "(", width: "w-10" },
    { key: "0", shift: ")", width: "w-10" },
    { key: "-", shift: "_", width: "w-10" },
    { key: "=", shift: "+", width: "w-10" },
    { key: "Backspace", display: "⌫", width: "w-16" },
  ],
  // 上段
  [
    { key: "Tab", display: "Tab", width: "w-14" },
    { key: "q", width: "w-10" },
    { key: "w", width: "w-10" },
    { key: "e", width: "w-10" },
    { key: "r", width: "w-10" },
    { key: "t", width: "w-10" },
    { key: "y", width: "w-10" },
    { key: "u", width: "w-10" },
    { key: "i", width: "w-10" },
    { key: "o", width: "w-10" },
    { key: "p", width: "w-10" },
    { key: "[", shift: "{", width: "w-10" },
    { key: "]", shift: "}", width: "w-10" },
    { key: "\\", shift: "|", width: "w-12" },
  ],
  // ホーム行
  [
    { key: "CapsLock", display: "Caps", width: "w-16" },
    { key: "a", width: "w-10", home: true },
    { key: "s", width: "w-10" },
    { key: "d", width: "w-10" },
    { key: "f", width: "w-10", home: true },
    { key: "g", width: "w-10" },
    { key: "h", width: "w-10" },
    { key: "j", width: "w-10", home: true },
    { key: "k", width: "w-10" },
    { key: "l", width: "w-10" },
    { key: ";", shift: ":", width: "w-10", home: true },
    { key: "'", shift: '"', width: "w-10" },
    { key: "Enter", display: "Enter", width: "w-18" },
  ],
  // 下段
  [
    { key: "Shift", display: "Shift", width: "w-20", isLeft: true },
    { key: "z", width: "w-10" },
    { key: "x", width: "w-10" },
    { key: "c", width: "w-10" },
    { key: "v", width: "w-10" },
    { key: "b", width: "w-10" },
    { key: "n", width: "w-10" },
    { key: "m", width: "w-10" },
    { key: ",", shift: "<", width: "w-10" },
    { key: ".", shift: ">", width: "w-10" },
    { key: "/", shift: "?", width: "w-10" },
    { key: "Shift", display: "Shift", width: "w-24", isRight: true },
  ],
  // スペース行
  [
    { key: "Control", display: "Ctrl", width: "w-14" },
    { key: "Meta", display: "Win", width: "w-12" },
    { key: "Alt", display: "Alt", width: "w-12" },
    { key: " ", display: "Space", width: "w-64" },
    { key: "Alt", display: "Alt", width: "w-12" },
    { key: "Meta", display: "Win", width: "w-12" },
    { key: "Control", display: "Ctrl", width: "w-14" },
  ],
];

// キーの指担当色
const getFingerColor = (key: string): string => {
  const lowerKey = key.toLowerCase();
  
  // 左小指
  if (["q", "a", "z", "1", "`", "tab", "capslock", "shift"].includes(lowerKey)) {
    return "bg-pink-600/20 border-pink-500";
  }
  // 左薬指
  if (["w", "s", "x", "2"].includes(lowerKey)) {
    return "bg-orange-500/20 border-orange-400";
  }
  // 左中指
  if (["e", "d", "c", "3"].includes(lowerKey)) {
    return "bg-yellow-500/20 border-yellow-400";
  }
  // 左人差し指
  if (["r", "f", "v", "t", "g", "b", "4", "5"].includes(lowerKey)) {
    return "bg-green-500/20 border-green-400";
  }
  // 右人差し指
  if (["y", "h", "n", "u", "j", "m", "6", "7"].includes(lowerKey)) {
    return "bg-cyan-500/20 border-cyan-400";
  }
  // 右中指
  if (["i", "k", ",", "8"].includes(lowerKey)) {
    return "bg-blue-500/20 border-blue-400";
  }
  // 右薬指
  if (["o", "l", ".", "9"].includes(lowerKey)) {
    return "bg-purple-500/20 border-purple-400";
  }
  // 右小指
  if (["p", ";", "'", "/", "[", "]", "\\", "0", "-", "=", "enter", "backspace"].includes(lowerKey)) {
    return "bg-pink-500/20 border-pink-400";
  }
  // スペース（親指）
  if (lowerKey === " ") {
    return "bg-gray-500/20 border-gray-400";
  }
  
  return "bg-gray-700/50 border-gray-600";
};

export default function KeyboardDisplay({ pressedKey, nextKey }: KeyboardDisplayProps) {
  const [currentPressed, setCurrentPressed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setCurrentPressed((prev) => new Set(prev).add(e.key.toLowerCase()));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setCurrentPressed((prev) => {
        const newSet = new Set(prev);
        newSet.delete(e.key.toLowerCase());
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
    if (currentPressed.has(lowerKey)) return true;
    if (key === " " && currentPressed.has(" ")) return true;
    if (key === "Shift" && (currentPressed.has("shift"))) return true;
    if (key === "Control" && currentPressed.has("control")) return true;
    if (key === "Alt" && currentPressed.has("alt")) return true;
    return false;
  };

  const isNextKey = (key: string, shift?: string): boolean => {
    if (!nextKey) return false;
    const lowerKey = key.toLowerCase();
    const lowerNext = nextKey.toLowerCase();
    
    if (lowerKey === lowerNext) return true;
    if (shift && shift === nextKey) return true;
    if (key === " " && nextKey === " ") return true;
    
    return false;
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-400">キーボード</h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-400">押下中</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500/50 rounded ring-2 ring-yellow-400"></div>
            <span className="text-gray-400">次のキー</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-1">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((keyData, keyIndex) => {
              const pressed = isKeyPressed(keyData.key);
              const next = isNextKey(keyData.key, keyData.shift);
              const fingerColor = getFingerColor(keyData.key);
              const isHome = "home" in keyData && keyData.home;
              
              return (
                <div
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    ${keyData.width} h-10 rounded-md border-2 flex items-center justify-center
                    text-xs font-medium transition-all duration-75
                    ${pressed 
                      ? "bg-blue-500 border-blue-400 text-white scale-95 shadow-lg shadow-blue-500/50" 
                      : next
                        ? `${fingerColor} ring-2 ring-yellow-400 ring-offset-1 ring-offset-gray-800`
                        : `${fingerColor} text-gray-300 hover:brightness-125`
                    }
                    ${isHome ? "border-b-4" : ""}
                  `}
                >
                  <span className={pressed ? "text-white" : ""}>
                    {keyData.display || keyData.key.toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <p className="text-gray-500 text-xs text-center mt-3">
        ホームポジション（A S D F / J K L ;）は下線で表示
      </p>
    </div>
  );
}
