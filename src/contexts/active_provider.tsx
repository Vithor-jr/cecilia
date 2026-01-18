'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type ActiveContextType = {
  active: string
  setActive: (value: string) => void
  headerActive: boolean
  setHeaderActive: (value: boolean) => void
}

const ActiveContext = createContext<ActiveContextType | null>(null)

export function ActiveProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("home")
  const [headerActive, setHeaderActive] = useState<boolean>(true)

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [active])

  return (
    <ActiveContext.Provider value={{ active, setActive, headerActive, setHeaderActive }}>
      {children}
    </ActiveContext.Provider>
  )
}

export function useActive() {
  const ctx = useContext(ActiveContext)
  if (!ctx) {
    throw new Error("useActive deve ser usado dentro de <ActiveProvider>")
  }
  return ctx
}
