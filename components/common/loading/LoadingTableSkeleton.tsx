import React from "react";

const LoadingTableSkeleton = ({ rows = 5, columns = 3 }) => {
  return (
    <div className="w-full overflow-x-auto mt-10 ">
      <table className="min-w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-4 py-2">
                <div className="h-6 w-full bg-gray-400 dark:bg-[#353563] rounded animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <div className="h-10 w-full bg-gray-300 dark:bg-[#272748] rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadingTableSkeleton;
