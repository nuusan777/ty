"use client";

import Link from "next/link";
import { useState } from "react";
import InteractiveKeyboardPractice from "@/components/InteractiveKeyboardPractice";

const sections = [
  {
    id: "posture",
    title: "正しい姿勢",
    icon: "🪑",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          タイピングを長時間行う場合、正しい姿勢は疲労軽減と効率向上に不可欠です。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">ポイント</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">背筋を伸ばす</span>
                <p className="text-gray-400 text-sm">椅子に深く腰掛け、背筋をまっすぐに保ちます</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">肘は90度</span>
                <p className="text-gray-400 text-sm">肘が直角になる高さにキーボードを配置します</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">手首は浮かせる</span>
                <p className="text-gray-400 text-sm">手首を机に付けず、軽く浮かせた状態を保ちます</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">画面との距離</span>
                <p className="text-gray-400 text-sm">画面から40〜70cm程度離れ、目線は画面の上端に</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <span className="text-white font-medium">足は床につける</span>
                <p className="text-gray-400 text-sm">両足を床にしっかりとつけ、安定した姿勢を保ちます</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "homeposition",
    title: "ホームポジション",
    icon: "⌨️",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          ホームポジションはタイピングの基本となる指の位置です。常にこの位置に指を戻すことで、
          キーボードを見ずに入力できるようになります。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">基本の指配置</h4>
          
          {/* キーボード図 */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* 上段 */}
              <div className="flex gap-1 mb-1 justify-center">
                {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key, i) => (
                  <div
                    key={key}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold border-2 ${
                      i < 5 ? "border-blue-500 bg-blue-900/30" : "border-orange-500 bg-orange-900/30"
                    }`}
                  >
                    {key}
                  </div>
                ))}
              </div>
              
              {/* ホームポジション（中段） */}
              <div className="flex gap-1 mb-1 justify-center">
                {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"].map((key, i) => (
                  <div
                    key={key}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold border-2 ${
                      ["F", "J"].includes(key)
                        ? "border-yellow-400 bg-yellow-900/50 text-yellow-300"
                        : i < 5
                        ? "border-blue-500 bg-blue-900/30"
                        : "border-orange-500 bg-orange-900/30"
                    }`}
                  >
                    {key}
                    {["F", "J"].includes(key) && (
                      <span className="absolute text-[8px] mt-6 text-yellow-400">▲</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* 下段 */}
              <div className="flex gap-1 justify-center">
                {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((key, i) => (
                  <div
                    key={key}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold border-2 ${
                      i < 5 ? "border-blue-500 bg-blue-900/30" : "border-orange-500 bg-orange-900/30"
                    }`}
                  >
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
              <h5 className="font-bold text-blue-300 mb-2">左手</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><span className="text-white">小指:</span> A</li>
                <li><span className="text-white">薬指:</span> S</li>
                <li><span className="text-white">中指:</span> D</li>
                <li><span className="text-white">人差し指:</span> F（突起あり）</li>
              </ul>
            </div>
            <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-4">
              <h5 className="font-bold text-orange-300 mb-2">右手</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><span className="text-white">人差し指:</span> J（突起あり）</li>
                <li><span className="text-white">中指:</span> K</li>
                <li><span className="text-white">薬指:</span> L</li>
                <li><span className="text-white">小指:</span> ;</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            💡 FキーとJキーには小さな突起があります。これを頼りに手元を見ずにホームポジションに戻れます。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "fingers",
    title: "指の担当範囲",
    icon: "🖐️",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          各指には担当するキーが決まっています。この担当を守ることで、
          効率的かつ正確なタイピングが可能になります。
        </p>
        
        {/* キーボード図 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">キーボードの指配置図</h4>
          <div className="overflow-x-auto">
            <div className="min-w-[700px] space-y-1">
              {/* 数字行 */}
              <div className="flex gap-1 justify-center">
                {[
                  { key: "1", color: "bg-pink-600" },
                  { key: "2", color: "bg-orange-500" },
                  { key: "3", color: "bg-yellow-500" },
                  { key: "4", color: "bg-green-500" },
                  { key: "5", color: "bg-green-500" },
                  { key: "6", color: "bg-cyan-500" },
                  { key: "7", color: "bg-cyan-500" },
                  { key: "8", color: "bg-blue-500" },
                  { key: "9", color: "bg-purple-500" },
                  { key: "0", color: "bg-pink-500" },
                  { key: "-", color: "bg-pink-500" },
                  { key: "=", color: "bg-pink-500" },
                ].map(({ key, color }) => (
                  <div
                    key={key}
                    className={`w-11 h-11 ${color} rounded flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {key}
                  </div>
                ))}
              </div>
              
              {/* 上段 QWERTY */}
              <div className="flex gap-1 justify-center ml-4">
                {[
                  { key: "Q", color: "bg-pink-600" },
                  { key: "W", color: "bg-orange-500" },
                  { key: "E", color: "bg-yellow-500" },
                  { key: "R", color: "bg-green-500" },
                  { key: "T", color: "bg-green-500" },
                  { key: "Y", color: "bg-cyan-500" },
                  { key: "U", color: "bg-cyan-500" },
                  { key: "I", color: "bg-blue-500" },
                  { key: "O", color: "bg-purple-500" },
                  { key: "P", color: "bg-pink-500" },
                  { key: "[", color: "bg-pink-500" },
                  { key: "]", color: "bg-pink-500" },
                ].map(({ key, color }) => (
                  <div
                    key={key}
                    className={`w-11 h-11 ${color} rounded flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {key}
                  </div>
                ))}
              </div>
              
              {/* ホーム行 ASDF */}
              <div className="flex gap-1 justify-center ml-6">
                {[
                  { key: "A", color: "bg-pink-600", home: false },
                  { key: "S", color: "bg-orange-500", home: false },
                  { key: "D", color: "bg-yellow-500", home: false },
                  { key: "F", color: "bg-green-500", home: true },
                  { key: "G", color: "bg-green-500", home: false },
                  { key: "H", color: "bg-cyan-500", home: false },
                  { key: "J", color: "bg-cyan-500", home: true },
                  { key: "K", color: "bg-blue-500", home: false },
                  { key: "L", color: "bg-purple-500", home: false },
                  { key: ";", color: "bg-pink-500", home: false },
                  { key: "'", color: "bg-pink-500", home: false },
                ].map(({ key, color, home }) => (
                  <div
                    key={key}
                    className={`w-11 h-11 ${color} rounded flex items-center justify-center text-white font-bold text-sm shadow-lg relative ${home ? "ring-2 ring-white" : ""}`}
                  >
                    {key}
                    {home && <span className="absolute -bottom-0.5 text-[8px]">▬</span>}
                  </div>
                ))}
              </div>
              
              {/* 下段 ZXCV */}
              <div className="flex gap-1 justify-center ml-10">
                {[
                  { key: "Z", color: "bg-pink-600" },
                  { key: "X", color: "bg-orange-500" },
                  { key: "C", color: "bg-yellow-500" },
                  { key: "V", color: "bg-green-500" },
                  { key: "B", color: "bg-green-500" },
                  { key: "N", color: "bg-cyan-500" },
                  { key: "M", color: "bg-cyan-500" },
                  { key: ",", color: "bg-blue-500" },
                  { key: ".", color: "bg-purple-500" },
                  { key: "/", color: "bg-pink-500" },
                ].map(({ key, color }) => (
                  <div
                    key={key}
                    className={`w-11 h-11 ${color} rounded flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {key}
                  </div>
                ))}
              </div>
              
              {/* スペースバー */}
              <div className="flex gap-1 justify-center mt-1">
                <div className="w-64 h-10 bg-gray-500 rounded flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  Space（親指）
                </div>
              </div>
            </div>
          </div>
          
          {/* 凡例 */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-600 rounded"></div>
              <span className="text-gray-300">左小指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-gray-300">左薬指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-300">左中指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-300">左人差し指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan-500 rounded"></div>
              <span className="text-gray-300">右人差し指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-gray-300">右中指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-gray-300">右薬指</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <span className="text-gray-300">右小指</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            💡 白い枠のキー（F と J）がホームポジションです。突起を目印に指を置きます。
          </p>
        </div>
        
        {/* 詳細テーブル */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">指の担当キー一覧</h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-3 text-gray-400">指</th>
                  <th className="text-left py-2 px-3 text-gray-400">左手</th>
                  <th className="text-left py-2 px-3 text-gray-400">右手</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-3 font-medium text-white">人差し指</td>
                  <td className="py-3 px-3">
                    <span className="bg-green-900/50 px-2 py-1 rounded">R F V T G B 4 5</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="bg-cyan-900/50 px-2 py-1 rounded">Y H N U J M 6 7</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-3 font-medium text-white">中指</td>
                  <td className="py-3 px-3">
                    <span className="bg-yellow-900/50 px-2 py-1 rounded">E D C 3</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="bg-blue-900/50 px-2 py-1 rounded">I K , 8</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-3 font-medium text-white">薬指</td>
                  <td className="py-3 px-3">
                    <span className="bg-orange-900/50 px-2 py-1 rounded">W S X 2</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="bg-purple-900/50 px-2 py-1 rounded">O L . 9</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-3 font-medium text-white">小指</td>
                  <td className="py-3 px-3">
                    <span className="bg-pink-900/50 px-2 py-1 rounded">Q A Z 1 Tab Shift Ctrl</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="bg-pink-900/50 px-2 py-1 rounded">P ; / 0 - = Enter</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-white">親指</td>
                  <td className="py-3 px-3" colSpan={2}>
                    <span className="bg-gray-600/50 px-2 py-1 rounded">スペースキー</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* インタラクティブ練習 */}
        <InteractiveKeyboardPractice />
      </div>
    ),
  },
  {
    id: "tips",
    title: "上達のコツ",
    icon: "💡",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          タイピングは繰り返し練習することで確実に上達します。以下のポイントを意識して練習しましょう。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-bold text-white mb-2">正確性を優先</h4>
            <p className="text-gray-400 text-sm">
              速さよりも正確性を優先しましょう。正確に打てるようになれば、速度は自然と上がります。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">👀</div>
            <h4 className="font-bold text-white mb-2">画面を見る</h4>
            <p className="text-gray-400 text-sm">
              キーボードを見ずに画面を見て打つことを意識しましょう。最初は難しくても慣れます。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-bold text-white mb-2">ホームポジションに戻る</h4>
            <p className="text-gray-400 text-sm">
              キーを打った後は必ずホームポジションに指を戻す習慣をつけましょう。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-bold text-white mb-2">毎日少しずつ</h4>
            <p className="text-gray-400 text-sm">
              1日10〜15分でも良いので、毎日継続して練習することが大切です。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">😌</div>
            <h4 className="font-bold text-white mb-2">力を抜く</h4>
            <p className="text-gray-400 text-sm">
              キーは軽く叩くだけで十分です。力を入れすぎると疲れやすくなります。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5">
            <div className="text-2xl mb-2">⏸️</div>
            <h4 className="font-bold text-white mb-2">休憩を取る</h4>
            <p className="text-gray-400 text-sm">
              30分に一度は手を休め、ストレッチをしましょう。長時間の練習は逆効果です。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "programming",
    title: "プログラマー向けのポイント",
    icon: "💻",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          プログラミングでは通常の文章入力とは異なるキーを多用します。
          特に以下の記号に慣れることが重要です。
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-4">よく使う記号</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">{ }</span>
                <span className="text-gray-300">ブロック、オブジェクト</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">( )</span>
                <span className="text-gray-300">関数呼び出し、グループ化</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">[ ]</span>
                <span className="text-gray-300">配列、インデックス</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">;</span>
                <span className="text-gray-300">文の終端</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">:</span>
                <span className="text-gray-300">キーと値の区切り</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">=</span>
                <span className="text-gray-300">代入</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">== ===</span>
                <span className="text-gray-300">比較演算子</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">=&gt;</span>
                <span className="text-gray-300">アロー関数</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">&& ||</span>
                <span className="text-gray-300">論理演算子</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded font-mono">" ' `</span>
                <span className="text-gray-300">文字列</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-5">
          <h4 className="font-bold text-white mb-2">🚀 効率的なショートカットキー</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + C</kbd>
              <span className="text-gray-300">コピー</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + V</kbd>
              <span className="text-gray-300">ペースト</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + Z</kbd>
              <span className="text-gray-300">元に戻す</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + S</kbd>
              <span className="text-gray-300">保存</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + /</kbd>
              <span className="text-gray-300">コメントアウト</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Tab</kbd>
              <span className="text-gray-300">インデント</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function BasicsPage() {
  const [activeSection, setActiveSection] = useState("posture");

  const currentSection = sections.find((s) => s.id === activeSection);

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
              <span className="text-green-400 text-sm font-medium">入門</span>
              <h1 className="text-xl font-bold text-white">タイピングの基礎</h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* サイドバー */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-white mb-4">📚 目次</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </nav>

            {/* 練習開始ボタン */}
            <div className="mt-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-700/50 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">
                基礎を理解したら練習を始めましょう！
              </p>
              <Link
                href="/chapter/1"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-medium transition-colors"
              >
                練習を開始する →
              </Link>
            </div>
          </div>

          {/* コンテンツエリア */}
          <div className="lg:col-span-3">
            {currentSection && (
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{currentSection.icon}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {currentSection.title}
                  </h2>
                </div>
                {currentSection.content}
              </div>
            )}

            {/* ナビゲーションボタン */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(
                    (s) => s.id === activeSection
                  );
                  if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                  }
                }}
                disabled={sections.findIndex((s) => s.id === activeSection) === 0}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                前へ
              </button>
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(
                    (s) => s.id === activeSection
                  );
                  if (currentIndex < sections.length - 1) {
                    setActiveSection(sections[currentIndex + 1].id);
                  }
                }}
                disabled={
                  sections.findIndex((s) => s.id === activeSection) ===
                  sections.length - 1
                }
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                次へ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
