import React from "react"
import Link from 'next/link'

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
  <Link href="/dash">Dashboard</Link>
  <Link href="/dash/accounts">Accounts</Link>
  <Link href="/dash/users">Users</Link>
</div>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </div>
    )
  }