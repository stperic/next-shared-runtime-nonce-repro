import { Suspense } from 'react'
import { connection } from 'next/server'
import { Counter } from './counter'

async function Dynamic() {
  await connection()
  return <p>Rendered per request at {new Date().toISOString()}</p>
}

export default function Page() {
  return (
    <main>
      <h1>turbopackSharedRuntime + nonce CSP</h1>
      <Counter />
      <Suspense fallback={<p>Loading…</p>}>
        <Dynamic />
      </Suspense>
    </main>
  )
}
