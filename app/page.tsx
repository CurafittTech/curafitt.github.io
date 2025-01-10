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
    <div className="bg-[#C1E899] text-black min-h-screen">
      {/* Hero Section: Left (Slogan) + Right (Image) */}
      <section className="flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8">
        {/* Slogan (Left) */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Revolutionizing Recovery: Smarter Physical Therapy for Faster Results
          </h1>
          <p className="text-lg">
            Discover how our innovative solutions transform rehabilitation 
            for patients and physical therapists alike.
          </p>
        </div>

        {/* Image (Right) - replace with your own linked image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://via.placeholder.com/500x300.png?text=Your+Hero+Image"
            alt="Hero Section Image"
            className="object-cover rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </section>

      {/* Slideshow */}
      <section className="bg-[#E6F0DC] py-6 px-4 md:px-8">
        <div className="w-full h-64 mb-8 mx-auto max-w-4xl">
          <img
            src={images[currentIndex]}
            alt="Slideshow Image"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Value Proposition + CTA */}
      <section className="bg-[#E6F0DC] py-8 px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Empowering Faster, Smarter Recovery
          </h2>
          <p className="mb-6">
            We design cutting-edge wearable devices that provide real-time feedback 
            and data-driven insights to revolutionize rehabilitation and improve 
            physical therapy outcomes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://forms.gle/dummyGoogleLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-6 rounded transition-colors inline-block"
            >
              Request a Demo
            </a>
            <a
              href="https://forms.gle/dummyGoogleLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-6 rounded transition-colors inline-block"
            >
              Be a Part of the Trials
            </a>
            <a
              href="https://forms.gle/dummyGoogleLink"
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
