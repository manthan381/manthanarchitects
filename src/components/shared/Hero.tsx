// "use client";

// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";

// export default function Hero() {
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     area: "",
//   });

//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
//     "idle"
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAreaChange = (value: string) => {
//     setForm({ ...form, area: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const res = await fetch("/api/consultation", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus("sent");
//         setForm({ name: "", company: "", email: "", phone: "", area: "" });
//       } else throw new Error();
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <section
//       className="relative h-[650px] w-full bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero-bg-spacemanthan-7.jpg')" }}
//     >
//       {/* Overlay */}

//       {/* Content */}
//       <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
//           {/* Left Side */}
//           <motion.div
//             initial={{ x: -60, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             className="text-white space-y-6"
//           >
//             <div className="bg-linear-to-r from-gray-900 to-[#101828b3] py-10 px-5 md:px-8 lg:px-20 max-w-3xl">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//                 One Vision. One Team. One Roof.
//               </h1>
//               <p className="text-md md:text-lg text-gray-300 max-w-xl font-semibold">
//                 One-Stop Solution for Architecture, Interiors, Construction &
//                 Custom Furnitures — All seamlessly managed and delivered hassle
//                 free with Precision and Excellence.
//               </p>
//             </div>
//           </motion.div>

//           {/* Right Side - Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Right Side - Form */}
//             <motion.div
//               initial={{ x: 60, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-xl p-6 space-y-4 w-full max-w-sm mx-auto"
//             >
//               <h2 className="text-xl font-bold mb-5 text-gray-900">
//                 Book a Consultation
//               </h2>

//               <Input
//                 name="name"
//                 placeholder="Full Name"
//                 className="bg-gray-50 py-5"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 name="company"
//                 placeholder="Company"
//                 className="bg-gray-50 py-5"
//                 value={form.company}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="email"
//                 placeholder="Email"
//                 type="email"
//                 className="bg-gray-50 py-5"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 name="phone"
//                 placeholder="Phone Number"
//                 type="tel"
//                 className="bg-gray-50 py-5"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//               />

//               <Select onValueChange={handleAreaChange} value={form.area}>
//                 <SelectTrigger className="bg-gray-50 w-full py-5">
//                   <SelectValue placeholder="Select Carpet Area" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="below-1000">Below 1000 sq.ft</SelectItem>
//                   <SelectItem value="1000-2500">1000 - 2500 sq.ft</SelectItem>
//                   <SelectItem value="above-2500">Above 2500 sq.ft</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Button
//                 type="submit"
//                 className="w-full mt-5"
//                 disabled={status === "sending"}
//               >
//                 {status === "sending" ? "Sending..." : "Submit"}
//               </Button>
//               <p className="text-xs text-center">
//                 By submitting this form you agree to the privacy policy
//               </p>
//               {status === "sent" && (
//                 <p className="text-green-500 text-center text-sm mt-2">
//                   Consultation booked successfully!
//                 </p>
//               )}
//               {status === "error" && (
//                 <p className="text-red-500 text-center text-sm mt-2">
//                   Something went wrong. Please try again.
//                 </p>
//               )}
//             </motion.div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/hero-bg-spacemanthan-7.jpg",
  "/images/M2.png", // Apni images ke path yahan add karein
  "/images/M1.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds mein change hoga
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      {/* Image Slider Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        />
      </AnimatePresence>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side Content */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white space-y-6"
          >
            <div className="bg-linear-to-r from-gray-900 to-[#101828b3] py-10 px-5 md:px-8 lg:px-20 max-w-3xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                One Vision. One Team. One Roof.
              </h1>
              <p className="text-md md:text-lg text-gray-300 max-w-xl font-semibold mt-4">
                One-Stop Solution for Architecture, Interiors, Construction &
                Custom Furnitures — All seamlessly managed and delivered hassle
                free with Precision and Excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}