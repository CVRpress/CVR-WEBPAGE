"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { FileSearch } from "lucide-react"

export function CajaNegraHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rawPos = useRef({ x: 0, y: 0 })
  const smoothPos = useRef({ x: 0, y: 0 })
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 })
  const animRef = useRef<number>(0)
  const isMobileRef = useRef(false)
  const defaultPos = useRef({ x: 0, y: 0 })
  const isTouching = useRef(false)
  const hasInteracted = useRef(false)
  const initializedRef = useRef(false)

  const updateDefaultPos = useCallback(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    defaultPos.current = {
      x: rect.width / 2,
      y: rect.height / 2,
    }
  }, [])

  const animate = useCallback(() => {
    if (!sectionRef.current) {
      animRef.current = requestAnimationFrame(animate)
      return
    }

    let targetX: number, targetY: number

    if (isMobileRef.current) {
      targetX = isTouching.current ? rawPos.current.x : defaultPos.current.x
      targetY = isTouching.current ? rawPos.current.y : defaultPos.current.y
    } else {
      targetX = hasInteracted.current ? rawPos.current.x : defaultPos.current.x
      targetY = hasInteracted.current ? rawPos.current.y : defaultPos.current.y
    }

    const lerp = 0.04
    smoothPos.current.x += (targetX - smoothPos.current.x) * lerp
    smoothPos.current.y += (targetY - smoothPos.current.y) * lerp

    setRenderPos({ x: smoothPos.current.x, y: smoothPos.current.y })
    animRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    isMobileRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0

    const timer = setTimeout(() => {
      updateDefaultPos()
      if (!initializedRef.current) {
        smoothPos.current = { ...defaultPos.current }
        rawPos.current = { ...defaultPos.current }
        initializedRef.current = true
      }
    }, 100)

    const handleResize = () => updateDefaultPos()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", updateDefaultPos)
    animRef.current = requestAnimationFrame(animate)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", updateDefaultPos)
      cancelAnimationFrame(animRef.current)
    }
  }, [animate, updateDefaultPos])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    rawPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    hasInteracted.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    hasInteracted.current = false
    rawPos.current = { ...defaultPos.current }
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!sectionRef.current) return
    isTouching.current = true
    const rect = sectionRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    rawPos.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    }
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    rawPos.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    isTouching.current = false
    rawPos.current = { ...defaultPos.current }
  }, [])

  const magnifierRadius = isMobileRef.current ? 90 : 110
  const ringSize = magnifierRadius * 2

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-24"
      style={{ cursor: "none" }}
    >
      {/* Dark base */}
      <div className="absolute inset-0 bg-nexos-navy" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(199,178,153,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,178,153,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Investigator desk image -- revealed through the magnifier */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: "url(/images/investigator-desk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: `circle(${magnifierRadius}px at ${renderPos.x}px ${renderPos.y}px)`,
        }}
      />

      {/* Magnifier ring */}
      <div
        className="pointer-events-none absolute z-[2] rounded-full border-2 border-nexos-bronze/40"
        style={{
          width: ringSize,
          height: ringSize,
          left: renderPos.x - magnifierRadius,
          top: renderPos.y - magnifierRadius,
          boxShadow:
            "0 0 30px 8px rgba(199,178,153,0.05), inset 0 0 20px 4px rgba(199,178,153,0.03)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <FileSearch
            className="h-10 w-10 text-nexos-bronze"
            strokeWidth={1.5}
          />
        </div>

        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-nexos-bronze/70">
          Proyecto de investigaci&oacute;n &middot; CVR
        </p>

        <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          La Caja Negra
        </h1>

        <div className="mx-auto mb-8 h-px w-24 bg-nexos-bronze/50" />

        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-nexos-slate md:text-lg">
          Investigaci&oacute;n y an&aacute;lisis de compliance enfocado en
          documentar la opacidad corporativa, las zonas grises regulatorias y
          los riesgos estructurales en el sector de la inversi&oacute;n
          inmobiliaria privada en Espa&ntilde;a. Porque cuando las empresas
          apagan la grabadora, alguien tiene que encenderla.
        </p>
      </div>
    </section>
  )
}
