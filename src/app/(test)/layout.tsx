import React from "react"

export default function TestGroupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800">
        <header className="p-4 border-b bg-blue-500 text-white">
          <div className="flex justify-between items-center">
            <h1>Test Environment</h1>
            <div className="flex gap-4">
              <a href="/cicd">CI/CD</a>
              <a href="/docker">Docker</a>
            </div>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    )
  }