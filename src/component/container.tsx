import React from 'react';

export default function container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}
