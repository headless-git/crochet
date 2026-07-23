import Instagram from '../assets/images/Insta.svg'
import ContactForm from '../components/ContactForm'

const Footer = () => {
  return (
    <>
      <section id="contact-section" className="w-full pt-16 pb-6 px-6 md:px-12 lg:px-20 text-[#f5efe4] bg-[#1c1a16]">
      
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          
     
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-base max-w-md leading-relaxed">
              Share your ideas with us and let's craft something beautiful.
            </p>
            <a 
              href="https://www.instagram.com/alankrita_official_?igsh=NmU0eTdpYjM3ZnN1&utm_source=qr" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-2 inline-block hover:opacity-80 transition-opacity"
            >
              <img className="w-20 h-20 object-contain" src={Instagram} alt="Instagram" />
            </a>
          </div>

          <div className="w-full">
            <ContactForm />
          </div>

        </div>

        <div className="w-full max-w-7xl mx-auto pt-4 border-t border-stone-200/40">
          <svg width="100%" viewBox="0 0 1000 120" xmlns="http://www.w3.org/2000/svg">
            <text
              y="100"
              fontFamily="star"
              fontSize="120"
              fill="white"
              textLength="1000"
              lengthAdjust="spacing"
            >
              CRAFT & KOTHA
            </text>
          </svg>
        </div>

      </section>
    </>
  )
}

export default Footer