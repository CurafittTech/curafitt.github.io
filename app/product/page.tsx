export default function ProductPage() {
    return (
      <div className="bg-[#C1E899] min-h-screen text-black px-4 py-8">
        <div className="max-w-5xl mx-auto bg-[#E6F0DC] p-6 md:p-8 rounded-lg shadow-md space-y-6">
          <h1 className="text-3xl font-bold">Our Product</h1>
  
          <p>
            Curafitt’s wearable device and platform offers real-time feedback and data-driven 
            insights to revolutionize ACL rehabilitation and improve physical therapy outcomes.
          </p>
  
          {/* Placeholder image #1 (main product image) */}
          <div className="flex justify-center">
            <img
              src="/product_img_1.png"
              alt="CuraFitt Product Overview"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
  
          <p>
            From monitoring patient performance to adjusting programs in real-time, our solution 
            helps physical therapists create optimized care plans while keeping patients engaged 
            and motivated. By leveraging advanced sensor technology, real-time data analytics, 
            and intuitive feedback, Curafitt ensures every step of your rehabilitation journey 
            is tailored to maximize progress.
          </p>
  
          {/* Placeholder image #2 */}
          <div className="flex justify-center">
            <img
              src="/product_img_2.png"
              alt="CuraFitt Product Features"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
  
          <p>
            Whether you’re an athlete recovering from surgery or a physical therapist managing 
            multiple patients, Curafitt’s integrated platform provides actionable insights 
            that empower you to make data-driven decisions. Personalized metrics and goal 
            tracking ensure you always know where you stand and what’s next in your recovery plan.
          </p>
  
          {/* Key Benefits Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Benefits</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Actionable Insights for Physical Therapists</li>
              <li>Gamified Progress Tracking for Patients</li>
              <li>Enhanced Patient-Therapist Communication</li>
              <li>Convenient Integration with Busy Lifestyles</li>
            </ul>
          </div>
  
          {/* Placeholder image #3 (optional) */}
          <div className="flex justify-center">
            <img
              src="/product_img_3.png"
              alt="CuraFitt Additional Feature"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    )
  }