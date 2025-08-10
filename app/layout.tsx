"use client";

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="container mx-auto p-6">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
