import { useEffect, useRef } from 'react'

/**
 * scroll-reveal animation .
 * @param {string} animClass  
 * @param {number} delay      
 */
export function useScrollAnimation(animClass = 'sa-up', delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add(animClass)
    if (delay) el.style.transitionDelay = `${delay}s`

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sa-visible')
          io.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [animClass, delay])

  return ref
}

