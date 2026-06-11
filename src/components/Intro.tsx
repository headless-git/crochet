import { useEffect, useRef } from "react"
import HeroImage from "../assets/images/Intro.jpg"
import { Link } from "react-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const scrollingDown = currentScrollY > lastScrollY.current
        const pastThreshold = currentScrollY > 80

        if (scrollingDown && pastThreshold) {
          gsap.to(header, {
            y: -120,
            duration: 0.18,
            ease: "power3.inOut",
          })
        } else {
          gsap.to(header, {
            y: 0,
            duration: 0.25,
            ease: "power3.out",
          })
        }

        lastScrollY.current = currentScrollY
        ticking.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="home-section"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      <img
        src={HeroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
      />

      <div className="absolute inset-0 z-10 bg-black/60" />

      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-3 sm:mt-6 px-3 sm:px-4"
      >
        <header className="w-full sm:w-[92%] lg:w-[80%] bg-[rgba(244,241,238,0.85)] backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-sm">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            <div className="shrink-0 whitespace-nowrap text-[#3d0a18] text-sm sm:text-lg lg:text-xl font-medium cursor-pointer">
              Craft & Kotha
            </div>

            <nav className="min-w-0">
              <ul className="flex items-center gap-3 sm:gap-5 text-[#3d0a18] text-xs sm:text-sm lg:text-base whitespace-nowrap overflow-x-auto">
                <Link
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <li className="cursor-pointer hover:opacity-70 transition-opacity">
                    Home
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="value-section"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <li className="hidden sm:block cursor-pointer hover:opacity-70 transition-opacity">
                    Values
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="story-section"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <li className="cursor-pointer hover:opacity-70 transition-opacity">
                    Story
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="feature-section"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <li className="hidden sm:block cursor-pointer hover:opacity-70 transition-opacity">
                    Features
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <li className="cursor-pointer hover:opacity-70 transition-opacity">
                    Contact
                  </li>
                </Link>            
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 sm:px-8 md:px-10 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight font-bold text-[#f5efe4]">
          You Imagine <br /> We Stitch
        </h1>

        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
        >
          <button className="mt-8 sm:mt-8 px-7 sm:px-10 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base bg-[#f5efe4] hover:bg-[#e4d1ad] text-[#3d0a18] rounded-full cursor-pointer transition-colors duration-200 min-w-40">
            Your imagination
          </button>
        </Link>

        <div className="mt-7 sm:mt-6 text-white text-sm sm:text-base font-medium">
          Trusted by 50+ customers
        </div>

        <div className="mt-15 sm:mt-20 text-white/80 text-sm sm:text-base">
          Scroll to discover
        </div>
      </div>
    </section>
  )
}

export default Intro