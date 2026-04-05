import { useEffect, useRef, useState } from 'react'

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

/**
 * Animated counter 
 * @param {number} target   Final number
 * @param {string} suffix    '%'
 * @param {number} duration  duration in ms
 */
export function useCountUp(target, suffix = '', duration = 1200) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('sa-scale')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          el.classList.add('sa-visible')

          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * target) + suffix
            if (progress < 1) requestAnimationFrame(tick)
            else el.textContent = target + suffix
          }
          requestAnimationFrame(tick)
          io.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, suffix, duration])

  return ref
}



export default function CountUp({ end, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}