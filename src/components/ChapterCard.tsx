import Link from "next/link";

interface ChapterCardProps {
  id: number;
  title: string;
  description: string;
  lessonsCount: number;
}

export default function ChapterCard({
  id,
  title,
  description,
  lessonsCount,
}: ChapterCardProps) {
  return (
    <Link href={`/chapter/${id}`}>
      <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all duration-200 cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
            第{id}章
          </span>
          <span className="text-gray-400 text-sm">
            {lessonsCount} レッスン
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="mt-4 flex items-center text-blue-500 text-sm font-medium">
          学習を開始する
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
  );
}
