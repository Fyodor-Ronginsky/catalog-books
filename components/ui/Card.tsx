'use client';

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "" }: ButtonProps) {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}
