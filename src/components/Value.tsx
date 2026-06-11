import Image1 from '../assets/images/Value_Card1.jpg'
import Image2 from '../assets/images/Value_Card2.jpg'
import Image3 from '../assets/images/Value_Card3.jpg'
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Natural Yarn", body: "We source only plant-dyed, hand-spun yarn from small Indian mills", image: Image1 },
  { title: "Stitch by Stitch", body: "Each piece takes hours to complete. No two are identical.", image: Image2 },
  { title: "Made to Last", body: "Reinforced edges, blocked and set by hand. Built to be loved and passed on.", image: Image3 },
]

const Value = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.set(card, {
        y: "120%",
        rotate: i % 2 === 0 ? -6 : 6,
      })
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to(cardsRef.current, {
      y: 0,
      rotate: 0,
      duration: 2,
      stagger: 1,
      ease: "power2.out"
    });

  }, { scope: sectionRef });

  return (
    <section
      id="value-section"
      ref={sectionRef}
      className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6"
    >

      {/* Header */}
      <div className="w-full text-center">
        <p className="text-xs sm:text-sm tracking-widest text-[#3d0a18] mb-2">Our Values</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#3d0a18] leading-tight mb-5 sm:mb-10">
          <span className="block">Made with intention — and</span>
          <span className="block"><em>rooted in love.</em></span>
        </h2>
      </div>

      {/* Card stack */}
      <div className="relative w-full sm:w-[90%] lg:w-[80%] h-[68vh] sm:h-[58vh] md:h-[60vh]">
        {features.map((f, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null): void => { cardsRef.current[i] = el }}
            className="absolute inset-0 bg-[#BFA48C] rounded-2xl sm:rounded-3xl overflow-hidden
                       flex flex-col sm:grid sm:grid-cols-12 sm:items-stretch
                       p-4 sm:py-6 sm:pr-6 sm:pl-0 gap-3 sm:gap-0"
          >
            {/* Image block */}
            <div className="sm:col-span-8 rounded-xl sm:rounded-3xl overflow-hidden order-1 sm:order-2 flex-[0_0_55%] sm:flex-none">
              <img className="w-full h-full object-cover" src={f.image} alt={f.title} />
            </div>

            {/* Text block */}
            <div className="sm:col-span-4 flex flex-col gap-2 sm:gap-3 justify-center sm:px-8 order-2 sm:order-1 flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{f.title}</h2>
              <p className="text-sm sm:text-base leading-snug">{f.body}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Value