'use client';

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 font-medium text-gray-700" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
    </div>
  )
}