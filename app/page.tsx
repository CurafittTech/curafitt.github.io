'use client'

import { useEffect, useState } from 'react'

const images = [
  '/example1.jpg',
  '/example2.jpg',
  '/example3.jpg',
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // 3-second shuffle
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-[#ffffff] text-black min-h-screen">
      {/* Hero Section: Left (Slogan) + Right (Image) */}

    
      <section className="relative w-full h-[60vh] flex items-center bg-white">
  {/* Left - Dark Overlay with Stronger Blur */}
  <div className="absolute inset-0 w-1/2 h-full bg-black/60 backdrop-blur-lg"></div>

  {/* Left - Text Content */}
  <div className="relative z-10 w-full md:w-1/2 text-white p-6 md:p-12">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
      Precision rehab with the smartest knee brace
    </h1>
    <p className="text-lg">
      A brace that can be your personal physical therapy guide - anytime, anywhere.
    </p>
    <a
      href="https://forms.gle/kkYfrSBzzLPGXUNA6"
      className="mt-4 inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors"
    >
      Request a Demo
    </a>
  </div>

  {/* Right - Blurred Image */}
  <div className="w-full md:w-1/2 h-[60vh] relative overflow-hidden">
    <img 
      src="/knee-hero.jpg" 
      alt="Hero Section Image"
      className="w-full h-full object-cover blur-xs"
    />
  </div>
</section>


      {/* Slideshow
      <section className="bg-[#ffffff] py-6 px-4 md:px-8">
        <div className="w-full h-64 mb-8 mx-auto max-w-4xl">
          <img
            src={images[currentIndex]}
            alt="Slideshow Image"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </section> */}

      {/* Value Proposition + CTA */}
      <section className="bg-[#ffffff] py-8 px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Empowering you to recover faster.
          </h2>
          <p className="mb-6">
            We design cutting-edge wearable braces that provide real-time feedback 
            and data-driven insights to revolutionize rehabilitation and improve 
            physical therapy outcomes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://forms.gle/kkYfrSBzzLPGXUNA6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-6 rounded transition-colors inline-block"
            >
              Request a Demo
            </a>
            <a
              href="https://forms.gle/g7rFhkXL4Q4ouAAc9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-6 rounded transition-colors inline-block"
            >
              Become an Investor
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
