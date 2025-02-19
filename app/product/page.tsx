export default function ProductPage() {
    return (
      <div className="bg-[#ffffff] min-h-screen text-black px-4 py-8">
        <div className="max-w-5xl mx-auto bg-[#ffffff] p-6 md:p-8 rounded-lg shadow-md space-y-6">
          <h1 className="text-3xl font-bold">Our Product</h1>
  
          <p>
            Curafitt&rsquo;s wearable device and platform offers real-time feedback and data-driven 
            insights to revolutionize ACL rehabilitation and improve physical therapy outcomes.
          </p>
  
            
            {/* Updated Section: Two Portrait-Style Images */}
          <div className="flex justify-center gap-4">
            <img
              src="/cura_app1.png"
              alt="CuraFitt App Screenshot 1"
              className="rounded shadow-md w-1/2 object-contain max-w-xs"
            />
            <img
              src="/cura_app2.png"
              alt="CuraFitt App Screenshot 2"
              className="rounded shadow-md w-1/2 object-contain max-w-xs"
            />
          </div>
  
          <p>
            From monitoring patient performance to adjusting programs in real-time, our solution 
            helps physical therapists create optimized care plans while keeping patients engaged 
            and motivated. By leveraging advanced sensor technology, real-time data analytics, 
            and intuitive feedback, Curafitt ensures every step of your rehabilitation journey 
            is tailored to maximize progress.
          </p>
  
          {/* Updated Section: Four Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/cura_app3.png"
              alt="CuraFitt App Screenshot 3"
              className="rounded shadow-md w-full object-contain max-w-xs"
            />
            <img
              src="/cura_app4.png"
              alt="CuraFitt App Screenshot 4"
              className="rounded shadow-md w-full object-contain max-w-xs"
            />
            <img
              src="/cura_app5.png"
              alt="CuraFitt App Screenshot 5"
              className="rounded shadow-md w-full object-contain max-w-xs"
            />
            <img
              src="/cura_app6.png"
              alt="CuraFitt App Screenshot 6"
              className="rounded shadow-md w-full object-contain max-w-xs"
            />
          </div>
  
          <p>
            Whether you&rsquo;re an athlete recovering from surgery or a physical therapist managing 
            multiple patients, Curafitt&rsquo;s integrated platform provides actionable insights 
            that empower you to make data-driven decisions. Personalized metrics and goal 
            tracking ensure you always know where you stand and what&rsquo;s next in your recovery plan.
          </p>
  
          {/* Key Benefits of CuraFitt */}
          <div className="flex justify-center">
              <img
                  src="/cura_prod7.png"
                  alt="CuraFitt Additional Feature"
                  className="rounded shadow-md w-full max-w-2xl"
                  />
          </div>
        </div>
      </div>
    )
  }





// //          {/* Placeholder image #1 (main product image) */}
          // <div className="flex justify-center">
            // <img
              // src="/product_img_1.png"
              // alt="CuraFitt Product Overview"
              // className="rounded shadow-md w-full max-w-2xl"
            // />
          // </div>



// {/* Placeholder image #2 */}
          // <div className="flex justify-center">
            // <img
              // src="/product_img_2.png"
              // alt="CuraFitt Product Features"
              // className="rounded shadow-md w-full max-w-2xl"
            // />
          // </div>
