'use client';

import React from 'react'
import Input from '../components/ui/Input'

interface SearchBarProps {
  title: string
  author: string
  onChangeTitle: (value: string) => void
  onChangeAuthor: (value: string) => void
}

export default function SearchBar({ title, author, onChangeTitle, onChangeAuthor }: SearchBarProps) {
  return (
    <div className="flex gap-4 mb-4">
      <Input
        label="Поиск по названию"
        placeholder="Введите название книги"
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
        className="flex-1"
      />
      <Input
        label="Поиск по автору"
        placeholder="Введите имя автора"
        value={author}
        onChange={(e) => onChangeAuthor(e.target.value)}
        className="flex-1"
      />
    </div>
  )
}