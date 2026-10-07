'use client'
import { useState } from 'react'

export function Counter() {
  const [n, setN] = useState(0)
  return <button id="counter" onClick={() => setN(n + 1)}>Clicked {n} times</button>
}
