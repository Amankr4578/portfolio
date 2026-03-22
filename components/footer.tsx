"use client"

import type React from "react"
import { useEffect, useState } from "react"

const getIstTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date())

export function Footer() {
  const [istTime, setIstTime] = useState("")

  useEffect(() => {
    setIstTime(getIstTime())

    const timer = setInterval(() => {
      setIstTime(getIstTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="py-8 md:px-8 border-t bg-background">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
            <span className="font-semibold">&lt;Aman /&gt;</span>
          </a>
          {/* <p className="mt-2 text-sm text-muted-foreground">Phagwara, Punjab, India</p>
          <p className="text-sm text-muted-foreground">Local time: {istTime} IST</p> */}
        </div>

        <p className="text-center text-sm text-muted-foreground" suppressHydrationWarning>
          Phagwara, Punjab {istTime ? `${istTime} IST` : "IST"}
        </p>

        <div className="flex flex-col items-center text-center md:items-end md:text-right">
          <p className="text-sm text-muted-foreground">Designed & Developed by Aman Kumar</p>
          {/* <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and Framer Motion
          </p> */}
        </div>
      </div>
    </footer>
  )
}
