import { useState } from 'react'
import Image1 from '../assets/images/Founders.png'
import Image2 from '../assets/images/Image2_Story.47.56.jpeg'
import Image3 from '../assets/images/WhatsApp Image 2026-06-01 at 19.25.24.jpeg'
import Image4 from '../assets/images/WhatsApp Image 2026-06-01 at 19.25.29.jpeg'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedImages = () => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="relative w-72 h-88 sm:w-96 sm:h-112 lg:w-116 lg:h-140 mx-auto lg:mr-10 shrink-0">
      <div
        onMouseEnter={() => setFlipped(false)}
        className={`absolute w-64 h-80 sm:w-88 sm:h-104 lg:w-100 lg:h-130 bg-white rounded-2xl sm:rounded-3xl flex items-end justify-center pb-3 sm:pb-4 transition-all duration-500 ease-in-out cursor-pointer
          ${flipped
            ? '-rotate-6 scale-95 z-0 opacity-80 left-0'
            : '-rotate-3 scale-100 z-10 left-0'
          }`}
      >
        <img className="w-[90%] h-[85%] object-cover rounded-xl sm:rounded-2xl" src={Image1} alt="Craft & Kotha founders" />
      </div>

      <div
        onMouseEnter={() => setFlipped(true)}
        className={`absolute w-64 h-80 sm:w-88 sm:h-104 lg:w-100 lg:h-130 bg-white rounded-2xl sm:rounded-3xl flex items-end justify-center pb-3 sm:pb-4 transition-all duration-500 ease-in-out cursor-pointer
          ${flipped
            ? 'rotate-0 scale-100 z-10 right-0'
            : 'rotate-6 scale-95 z-0 opacity-80 right-0'
          }`}
      >
        <img className="w-[90%] h-[85%] object-cover rounded-xl sm:rounded-2xl" src={Image2} alt="Craft & Kotha work" />
      </div>
    </div>
  )
}

const Story = () => {
  return (
    <section id="story-section">

      <div className="w-full text-center px-4 pt-16 sm:pt-20">
        <p className="text-xs sm:text-sm tracking-widest text-[#3d0a18] mb-2">Our Story</p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#3d0a18] leading-tight mb-6 sm:mb-10">
          <span className="block">Born in Bengal.</span>
          <span className="block">Made for the world.</span>
        </h2>
      </div>

      <div className="relative w-full py-10 sm:py-24 overflow-hidden">

        {/* — Block 01 — */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-5 sm:px-10 lg:ml-30 mb-12 sm:mb-28 lg:mb-40 gap-8 lg:gap-0">
          <div className="w-full sm:w-[80%] lg:w-[38%] bg-[#deb2a7] p-5 sm:p-10 text-[#3d0a18]">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#c4622d] mb-3 block">
              01 — ALANKRITA
            </span>
            <p className="text-sm sm:text-lg lg:text-xl leading-relaxed">
              We began as Alankrita in August 2024 — a small, hopeful initiative
              born from one simple wish: to bring back the warmth of something handmade
              in a world that had forgotten to slow down. It started with earrings.
              Thread, hooks, and hours of quiet focus — each pair made not for a shelf,
              but for a person.
            </p>
          </div>
          <StackedImages />
        </div>

        {/* — Block 02 — */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-5 sm:px-10 mb-12 sm:mb-28 lg:mb-40 gap-6 lg:gap-0">

          {/* Two images side-by-side on mobile, individual positions on lg */}
          <div className="flex lg:hidden gap-4 w-full justify-center">
            <div className="w-36 h-48 sm:w-48 sm:h-64 bg-white rounded-2xl flex items-end justify-center pb-2 shrink-0">
              <img className="w-[90%] h-[85%] object-cover rounded-xl" src={Image3} alt="" />
            </div>
            <div className="w-36 h-48 sm:w-48 sm:h-64 bg-white rounded-2xl flex items-end justify-center pb-2 shrink-0">
              <img className="w-[90%] h-[85%] object-cover rounded-xl" src={Image4} alt="" />
            </div>
          </div>

          {/* Left image — desktop only */}
          <div className="hidden lg:flex w-76 h-92 bg-white rounded-3xl items-end justify-center pb-4 self-end mb-4 shrink-0">
            <img className="w-[90%] h-[85%] object-cover rounded-2xl" src={Image3} alt="" />
          </div>

          <div className="w-full sm:w-[80%] lg:w-[40%] bg-[#e9cfb8] p-5 sm:p-10 text-[#3d0a18] lg:mx-auto">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#c4622d] mb-3 block">
              02 — EXPANDING
            </span>
            <p className="text-sm sm:text-lg lg:text-xl leading-relaxed">
              But craft has a way of pulling you deeper. Soon our hands were reaching
              for wool, cardboard, needles, and more — materials that most eyes
              overlook, but that hold a world of possibility. We found ourselves
              reviving forgotten crafts, learning old techniques, and falling
              in love with every new material that let us make something meaningful.
            </p>
          </div>

          {/* Right image — desktop only */}
          <div className="hidden lg:flex w-76 h-92 bg-white rounded-3xl items-end justify-center pb-4 mt-16 shrink-0">
            <img className="w-[90%] h-[85%] object-cover rounded-2xl" src={Image4} alt="" />
          </div>

        </div>

        {/* — Block 03 — */}
        <div className="relative z-10 flex justify-center px-5 sm:px-10">
          <div className="w-full sm:w-[80%] lg:w-[55%] bg-[#f1c9c4] p-6 sm:p-12 text-[#3d0a18]">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#c4622d] mb-3 block">
              03 — CRAFT & KOTHA
            </span>
            <p className="text-sm sm:text-lg lg:text-xl leading-relaxed">
              And so we grew — and with that growth came a new name.{' '}
              <em>Craft & Kotha.</em> Kotha, in our tongue, means home — a place of
              stories, of gathering, of things made with care and kept close. That is
              exactly what this is. A home for crafts of every kind. Wool and thread.
              Cardboard and colour. Anything your hands can shape into love.
            </p>
            <p className="text-sm sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6 text-[#c4622d] italic">
              The name changed. The heart never did.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1600 2400"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 350 350 C 500 400, 800 500, 1050 750 C 1250 950, 1200 1200, 950 1450 C 700 1700, 450 1800, 650 2100"
              stroke="#c4622d"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="12 18"
              fill="none"
            />
          </svg>
        </div>

      </div>

    </section>
  )
}

export default Story