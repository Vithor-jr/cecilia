'use client'

import { useEffect, useState, useRef } from "react"

export function LettersAnimation(text: string, delay: number) {
  const [textoArbitrario, setTextoArbitrario] = useState('')
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  function animation() {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []

    setTextoArbitrario('') 

    for (let i = 0; i < text.length; i++) {
      const timeout = setTimeout(() => {
        setTextoArbitrario(prev => prev + text[i])
      }, 200 * i)

      timeoutsRef.current.push(timeout)
    }
  }

  useEffect(() => {
    animation()
    const interval = setInterval(animation, (text.length + 1) * 200 + 1000)

    return () => {
      clearInterval(interval)
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [text])

  return (
    <p className="bg-[#D5D3FF] text-left pl-3 pr-3 pb-2 rounded-2xl">
      <span className="text-[#574FE4]">{textoArbitrario}</span>
    </p>
  )
}
