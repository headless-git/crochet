import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    tag: "Handmade",
    headline: "Every piece made by hand",
    body: "Crafted with care, each item is unique and built to last.",
    n: "01",
    bg: "#bb9380",
  },
  {
    tag: "Indian Roots",
    headline: "Rooted in tradition",
    body: "Inspired by Indian craft heritage passed down generations.",
    n: "02",
    bg: "#be886e",
  },
  {
    tag: "Custom Orders",
    headline: "Made just for you",
    body: "Tell us your idea and we'll bring it to life in wool and thread.",
    n: "03",
    bg: "#c18264",
  },
  {
    tag: "Ship Anywhere",
    headline: "Delivered to your door",
    body: "Pan-India shipping with care packaging on every order.",
    n: "04",
    bg: "#c17a5a",
  },
]

const Features = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)

    cards.forEach((card, i) => {
      const fromLeft = i < 2

      gsap.fromTo(
        card,
        {
          x: fromLeft ? -120 : 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: (i % 2) * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="feature-section"
      className="w-full min-h-screen flex flex-col gap-12 md:gap-16 lg:gap-20 py-14 md:py-18 lg:py-20"
    >
      <div className="w-full text-center px-4 sm:px-6 mb-4 md:mb-8 lg:mb-12">
        <p className="text-xs sm:text-sm tracking-[0.2em] text-[#3d0a18] mb-2 uppercase">
          Key Features
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#3d0a18] leading-tight">
          <span className="block">Because your crafts deserve</span>
          <span className="block">more love — and <em>less waiting.</em></span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 px-4 sm:px-6 lg:px-8">
        {features.map((f, i) => (
          <div
            key={f.n}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
            style={{ backgroundColor: f.bg }}
            className="rounded-2xl sm:rounded-3xl flex flex-col justify-between p-5 sm:p-6 lg:p-7 min-h-70 sm:min-h-80 md:min-h-90 xl:h-[45vh]"
          >
            <p className="text-[11px] sm:text-xs tracking-[0.2em] text-[#3d0a18]/70 uppercase">
              {f.tag}
            </p>

            <span className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-light leading-none text-[#3d0a18]/10 select-none -mb-2 sm:-mb-4">
              {f.n}
            </span>

            <div className="flex flex-col gap-2">
              <p className="text-base sm:text-lg font-semibold text-[#3d0a18]">
                {f.headline}
              </p>
              <p className="text-sm sm:text-[15px] text-[#3d0a18]/80 leading-relaxed">
                {f.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features