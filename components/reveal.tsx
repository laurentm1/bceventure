'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  stagger?: boolean
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  style?: React.CSSProperties
  id?: string
}

export default function Reveal({
  children,
  stagger = false,
  as: Tag = 'div',
  className = '',
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const cls = stagger ? 'reveal-stagger' : 'reveal'
  // Cast needed: ref type varies by element but is safe here
  const AnyTag = Tag as 'div'
  return (
    <AnyTag ref={ref as React.Ref<HTMLDivElement>} className={`${cls} ${seen ? 'in' : ''} ${className}`.trim()} {...props}>
      {children}
    </AnyTag>
  )
}
