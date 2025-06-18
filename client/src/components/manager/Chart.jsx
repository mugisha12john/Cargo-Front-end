import { Package } from "lucide-react";
const ImportExportChart = () => {
  return (
    <div className="bg-gray-300 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Import vs Export</h3>
      <div className="flex items-center justify-center h-48">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray={`${65 * 2.199} ${35 * 2.199}`}
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="10"
              strokeDasharray={`${35 * 2.199} ${65 * 2.199}`}
              strokeDashoffset={`-${65 * 2.199}`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Import</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Export</span>
        </div>
      </div>
    </div>
  );
};
export default ImportExportChart;