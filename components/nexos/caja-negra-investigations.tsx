"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { AlertTriangle } from "lucide-react"

const activeInvestigations = [
  {
    name: "Bafre Inmobiliaria",
    description:
      "Compra masiva de viviendas okupadas y activos distressed. Gestiona liberaci\u00f3n y destina los inmuebles a flipping o alquiler tur\u00edstico con inversores privados. Muy similar en la estrategia de \u00abactivos ocupados con descuento\u00bb.",
  },
  {
    name: "Nestar - Azora Gesti\u00f3n",
    description:
      "Auditor\u00eda documental de las pr\u00e1cticas contractuales del tercer mayor tenedor de vivienda en Espa\u00f1a. Seguimiento period\u00edstico de las recientes resoluciones judiciales sobre la imposici\u00f3n sistem\u00e1tica de cl\u00e1usulas abusivas y la gesti\u00f3n opaca de contingencias estructurales en sus inmuebles.",
  },
  {
    name: "Domoblock",
    description:
      "Plataforma de house flipping con captaci\u00f3n de inversores minoristas desde importes bajos. Promueve TIR elevadas en proyectos de compra-reforma-venta r\u00e1pida, con veh\u00edculos societarios de bajo capital.",
  },
  {
    name: "Homent Capital | LV Investors 2022 S.L.",
    description:
      "An\u00e1lisis profundo del entramado societario dirigido por Daniel Lobato Vicente. La investigaci\u00f3n documenta la totalidad de su red de veh\u00edculos de inversi\u00f3n, su modus operandi en la captaci\u00f3n agresiva de activos inmobiliarios y la detecci\u00f3n de posibles vulnerabilidades legales en sus protocolos de compliance corporativo.",
  },
  {
    name: "Inmoversia",
    description:
      "Inversi\u00f3n inmobiliaria desde 500 \u20ac en proyectos de corta duraci\u00f3n (flipping y reforma). Promesas de TIR 15-25% y modelo de co-inversi\u00f3n privada con inversores retail.",
  },
  {
    name: "Elansora Group S.L. (Elanso Capital)",
    description:
      "Rastreo de la estructura de captaci\u00f3n de capital y activos. La investigaci\u00f3n examina el reciente cese de su actividad digital (cierre del dominio corporativo) y audita posibles incompatibilidades normativas y conflictos de inter\u00e9s derivados del perfil p\u00fablico y profesional de sus administradores.",
  },
  {
    name: "Retsinnal Group / Tradeando",
    description:
      "Captaci\u00f3n agresiva de inversores particulares a trav\u00e9s de cursos y \u00abclubes VIP\u00bb con promesas de alta rentabilidad en proyectos inmobiliarios de flipping y reforma. M\u00faltiples quejas en foros por opacidad y estructuras de captaci\u00f3n privada.",
  },
  {
    name: "Testa Residencial (Grupo Blackstone)",
    description:
      "Evaluaci\u00f3n de riesgos regulatorios en la filial espa\u00f1ola del fondo de inversi\u00f3n internacional. Documentaci\u00f3n exhaustiva sobre la alteraci\u00f3n de condiciones en inmuebles de protecci\u00f3n p\u00fablica y la aplicaci\u00f3n de t\u00e1cticas de presi\u00f3n financiera para el vaciado de edificios residenciales.",
  },
  {
    name: "Hausera",
    description:
      "Especializada en inversi\u00f3n colectiva en flipping inmobiliario. Anuncia rentabilidades superiores al 20% anual y capta capital privado para activos en reforma, con fuerte presencia en redes y eventos.",
  },
  {
    name: "Equalice",
    description:
      "Captaci\u00f3n de inversores particulares para proyectos de flipping y reforma desde importes accesibles. Enfocada en rentabilidades altas y marketing directo a particulares con perfil \u00abinversor pasivo\u00bb.",
  },
]

export function CajaNegraInvestigations() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
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
    if (!sectionRef.current || !iconRef.current) return
    const sectionRect = sectionRef.current.getBoundingClientRect()
    const iconRect = iconRef.current.getBoundingClientRect()
    defaultPos.current = {
      x: iconRect.left - sectionRect.left + iconRect.width / 2,
      y: iconRect.top - sectionRect.top + iconRect.height / 2,
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
      id="investigaciones"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ cursor: "none" }}
    >
      {/* Dark blue base */}
      <div className="absolute inset-0 bg-nexos-navy" />

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
      <div className="relative z-10 mx-auto max-w-5xl">
        <div ref={iconRef} className="mb-6 flex justify-center">
          <AlertTriangle
            className="h-8 w-8 text-nexos-bronze"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          INVESTIGACIONES EN CURSO
        </h2>
        <div className="mx-auto mb-12 h-px w-16 bg-nexos-bronze/40" />

        {/* Active investigations grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {activeInvestigations.map((inv) => (
            <article
              key={inv.name}
              className="rounded border border-nexos-sapphire/60 bg-nexos-midnight/80 p-8 backdrop-blur-sm"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-nexos-bronze">
                Investigaci&oacute;n activa
              </p>
              <h3 className="mb-4 font-serif text-lg font-bold text-foreground md:text-xl">
                {inv.name}
              </h3>
              <div className="mb-4 h-px w-12 bg-nexos-sapphire/60" />
              <p className="text-sm leading-relaxed text-nexos-slate">
                {inv.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
