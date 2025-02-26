import React from "react"

export default function RootGroupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="max-w-7xl mx-auto">
        <header className="p-4 border-b">
          <nav className="flex justify-between">
            <div>Main Site</div>
            <div className="flex gap-4">
              <a href="/dash">Dashboard</a>
              <a href="/dash/accounts">Accounts</a>
              <a href="/dash/users">Users</a>
            </div>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </div>
    )
  }