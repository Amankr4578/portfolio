"use client"

import { motion } from "framer-motion"
import { Cloud } from "lucide-react"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/50" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <Cloud className="absolute top-[10%] left-[10%] h-32 w-32 text-primary/10 animate-float" />
      <Cloud className="absolute top-[20%] right-[15%] h-48 w-48 text-primary/5 animate-float [animation-delay:-2s]" />
      <Cloud className="absolute bottom-[10%] left-[20%] h-24 w-24 text-primary/10 animate-float [animation-delay:-4s]" />
      <Cloud className="absolute bottom-[20%] right-[5%] h-36 w-36 text-primary/5 animate-float [animation-delay:-1s]" />

    </div>
  )
}