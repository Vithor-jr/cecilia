'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type ActiveContextType = {
  active: string
  setActive: (value: string) => void
  headerActive: boolean
  setHeaderActive: (value: boolean) => void
}

const ActiveContext = createContext<ActiveContextType | null>(null)

export function ActiveProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("home")
  const [headerActive, setHeaderActive] = useState(true)
  const pathname = usePathname()

  /* ==============================
     RESET AO MUDAR DE ROTA
  =============================== */
  useEffect(() => {
    if (pathname === "/") {
      setHeaderActive(true)
      setActive("home")
    } else {
      setHeaderActive(false)
    }
  }, [pathname])

  useEffect(() => {
    if (!headerActive) return

    const sections = document.querySelectorAll("section[id]")
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [headerActive])

  return (
    <ActiveContext.Provider
      value={{ active, setActive, headerActive, setHeaderActive }}
    >
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
