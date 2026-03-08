interface LessonCardProps {
  lessonNumber: number;
  title: string;
  textsCount: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export default function LessonCard({
  lessonNumber,
  title,
  textsCount,
  isActive,
  isCompleted,
  onClick,
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
        isActive
          ? "bg-blue-600 border-blue-500 text-white"
          : isCompleted
          ? "bg-green-900/30 border-green-700 text-green-300 hover:bg-green-900/50"
          : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isActive
                ? "bg-blue-500"
                : isCompleted
                ? "bg-green-600"
                : "bg-gray-700"
            }`}
          >
            {isCompleted ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              lessonNumber
            )}
          </span>
          <div>
            <div className="font-medium">{title}</div>
            <div className={`text-xs ${isActive ? "text-blue-200" : "text-gray-500"}`}>
              {textsCount} 問
            </div>
          </div>
        </div>
        {isActive && (
          <span className="text-xs bg-blue-500 px-2 py-1 rounded">学習中</span>
        )}
      </div>
    </button>
  );
}
