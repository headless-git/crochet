import { useEffect, useRef } from "react"
import Image2 from "../assets/images/Loading.jpg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface LoadingProps {
  onComplete: () => void
}

const Loading = ({ onComplete }: LoadingProps) => {
  const screenRef = useRef<HTMLElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      clipRef.current,
      { height: "0%" },
      {
        height: "100%",
        duration: 4.5,
        ease: "power1.inOut",
      }
    )

    const counter = { val: 0 }

    gsap.to(counter, {
      val: 100,
      duration: 4.5,
      ease: "power1.inOut",
      onUpdate() {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(counter.val)} %`
        }
      },
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ onComplete })
      tl.to(screenRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
      })
    }, 4200)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <section
      ref={screenRef}
      className="fixed inset-0 z-100 flex items-center justify-center min-h-screen w-full overflow-hidden px-4 sm:px-6"
    >
      <img
        src={Image2}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-[95vw] sm:max-w-4xl flex flex-col items-center">
        <div className="relative leading-none w-full flex justify-center">
          <h1
            className="text-center font-light leading-none select-none whitespace-nowrap text-[clamp(2rem,8vw,4.5rem)] tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em]"
            style={{ color: "rgba(245,239,228,0.15)" }}
          >
            CRAFT & KOTHA
          </h1>

          <div
            ref={clipRef}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0 overflow-hidden w-full flex justify-center"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <h1
                aria-hidden
                className="text-center font-light leading-none select-none whitespace-nowrap text-[clamp(2rem,8vw,4.5rem)] tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em]"
                style={{ color: "#c4622d" }}
              >
                CRAFT & KOTHA
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 w-full flex justify-end pr-1 sm:pr-0">
          <span
            ref={percentRef}
            className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-widest"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            0 %
          </span>
        </div>
      </div>
    </section>
  )
}

export default Loading