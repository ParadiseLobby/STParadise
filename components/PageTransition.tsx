'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        style={{ width: '100%', position: 'relative' }}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        exit={{ clipPath: 'inset(0 0 0 100%)' }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {children}

        {/* Scan line — travels top→bottom during entry, fades out */}
        <motion.div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            height: 1,
            background: '#5B6B8A',
            zIndex: 999,
            pointerEvents: 'none',
          }}
          initial={{ top: '0%', opacity: 0.4 }}
          animate={{ top: '100%', opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
