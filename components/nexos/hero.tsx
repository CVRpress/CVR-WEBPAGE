"use client"

import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  r: number
  vx: number
  vy: number
  side: "left" | "right"
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef<number>(0)

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = []
    // Much wider edge zone: dots reach closer to center text
    const edgeWidth = Math.min(480, width * 0.4)
    const count = Math.floor((edgeWidth * height * 2) / 6000)

    for (let i = 0; i < count; i++) {
      const side: "left" | "right" = Math.random() < 0.5 ? "left" : "right"
      const x =
        side === "left"
          ? Math.random() * edgeWidth
          : width - Math.random() * edgeWidth
      const y = Math.random() * height
      // Wider variety of sizes
      const r = 0.3 + Math.random() * 4.5
      dots.push({
        x,
        y,
        baseX: x,
        baseY: y,
        r,
        vx: 0,
        vy: 0,
        side,
      })
    }
    dotsRef.current = dots
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const edgeWidth = Math.min(480, width * 0.4)
    ctx.clearRect(0, 0, width, height)

    const mx = mouseRef.current.x
    const my = mouseRef.current.y
    const dots = dotsRef.current

    for (const d of dots) {
      const springX = (d.baseX - d.x) * 0.02
      const springY = (d.baseY - d.y) * 0.02
      d.vx += springX
      d.vy += springY

      const dx = d.x - mx
      const dy = d.y - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 200) {
        const force = (200 - dist) / 200
        d.vx += (dx / dist) * force * 1.0
        d.vy += (dy / dist) * force * 1.0
      }

      d.vx *= 0.92
      d.vy *= 0.92

      d.x += d.vx
      d.y += d.vy

      // Clamp to side but allow wider roaming
      if (d.side === "left") {
        d.x = Math.max(-10, Math.min(edgeWidth + 60, d.x))
      } else {
        d.x = Math.max(width - edgeWidth - 60, Math.min(width + 10, d.x))
      }
      d.y = Math.max(-10, Math.min(height + 10, d.y))
    }

    // Connections
    const maxDist = 120
    ctx.lineWidth = 0.5
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        if (dots[i].side !== dots[j].side) continue
        const ddx = dots[i].x - dots[j].x
        const ddy = dots[i].y - dots[j].y
        const ddist = Math.sqrt(ddx * ddx + ddy * ddy)
        if (ddist < maxDist) {
          const alpha = (1 - ddist / maxDist) * 0.22
          ctx.strokeStyle = `rgba(199,178,153,${alpha})`
          ctx.beginPath()
          ctx.moveTo(dots[i].x, dots[i].y)
          ctx.lineTo(dots[j].x, dots[j].y)
          ctx.stroke()
        }
      }
    }

    // Dots with varying glow
    for (const d of dots) {
      const ddx = d.x - mx
      const ddy = d.y - my
      const ddist = Math.sqrt(ddx * ddx + ddy * ddy)
      const glow = ddist < 200 ? 0.85 : 0.2
      ctx.fillStyle = `rgba(199,178,153,${glow})`
      ctx.beginPath()
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
      ctx.fill()
    }

    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initDots(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      let clientX: number, clientY: number
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if ("clientX" in e) {
        clientX = e.clientX
        clientY = e.clientY
      } else {
        return
      }
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
    }

    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener("mousemove", handlePointer)
    canvas.addEventListener("touchmove", handlePointer, { passive: true })
    canvas.addEventListener("touchstart", handlePointer, { passive: true })
    canvas.addEventListener("mouseleave", handlePointerLeave)
    canvas.addEventListener("touchend", handlePointerLeave)

    animRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handlePointer)
      canvas.removeEventListener("touchmove", handlePointer)
      canvas.removeEventListener("touchstart", handlePointer)
      canvas.removeEventListener("mouseleave", handlePointerLeave)
      canvas.removeEventListener("touchend", handlePointerLeave)
      cancelAnimationFrame(animRef.current)
    }
  }, [initDots, draw])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Full-page background gradient: dark edges dissolving to lighter center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, #0F204B 0%, #0A1533 40%, #050A1F 80%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(199,178,153,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,178,153,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Network dots canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[5] h-full w-full"
        aria-hidden="true"
      />

      {/*
        Woman silhouette -- full section, blended with a mask that
        goes from absolute edge to absolute edge. No overlay boxes.
      */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <Image
          src="/images/f7f5bd49-fa9e-41b2-9c68-b833c3cb831b.jpg"
          alt=""
          fill
          className="object-contain object-center opacity-30 mix-blend-lighten"
          style={{
            maskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 75%)",
          }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-3 font-serif text-7xl font-bold tracking-[0.25em] text-foreground md:text-8xl lg:text-9xl">
          CVR
        </h1>

        <h2 className="mb-6 font-serif text-xl font-light tracking-wide text-nexos-slate md:text-2xl lg:text-3xl">
          Camila V&aacute;squez Rogel
        </h2>

        <div className="mx-auto mb-8 h-px w-24 bg-nexos-bronze/50" />

        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-nexos-bronze">
          Investigaci&oacute;n & Compliance
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-nexos-slate md:text-lg">
          Periodismo de investigaci&oacute;n especializado en riesgos
          corporativos y an&aacute;lisis de compliance. La verdad detr&aacute;s
          de los datos.
        </p>

        <a
          href="#contacto"
          className="inline-block rounded bg-nexos-bronze px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-nexos-midnight transition-all hover:bg-nexos-bronze/90 hover:shadow-lg hover:shadow-nexos-bronze/20"
        >
          Contacto Confidencial
        </a>
      </div>
    </section>
  )
}
