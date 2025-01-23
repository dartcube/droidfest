"use client"

import { faqs } from "@/consts/FAQ"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { SplineScene } from "../ui/splite"



export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold bg-text-gradient bg-clip-text text-transparent">FAQs</h1>
          <h2 className="text-2xl text-white/80">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* Vertical line decoration */}
              <div className="absolute left-0 top-0 w-px h-full bg-purple-300/40" />

              <div className="pl-6">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left text-white p-4 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 text-white/70 text-sm leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SplineScene
        scene="https://prod.spline.design/TPMa0ZmXBLI6fFq4/scene.splinecode"
        className="w-full h-full max-h-96 mt-8 max-w-3xl"
      />
    </div>
  )
}

