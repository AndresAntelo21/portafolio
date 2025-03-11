import React from "react";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-violet-600"></div>
    </div>
  );
};
