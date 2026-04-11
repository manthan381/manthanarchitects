"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle2, Compass, Layers, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const cultureBlocks = [
  {
    title: "great culture",
    description: "collaborative and friendly environment.",
    icon: Sparkles,
  },
  {
    title: "flexible hours",
    description: "focus on output, not hours.",
    icon: Compass,
  },
  {
    title: "high growth",
    description: "work on enterprise-level projects.",
    icon: Layers,
  },
  {
    title: "learning",
    description: "direct access to seniors & premium courses.",
    icon: Users,
  },
] as const;

export default function CareerContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    portfolio: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: `Career Application - ${form.role || "General"}`,
          email: form.email,
          phone: form.phone,
          message: `[CAREER APPLICATION]\n\nRole: ${form.role}\nPortfolio: ${form.portfolio}\n\nAbout Candidate:\n${form.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("failed");
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        role: "",
        portfolio: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white min-h-screen selection:bg-[#eb5e22] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col justify-center pt-24 pb-12 md:pb-24 h-[75vh] md:min-h-screen bg-gray-100">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/carrer/carrer-image-1.webp"
            alt="Careers at Manthan Architects"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </motion.div>

        <div className="mx-auto max-w-[1600px] w-full px-6 sm:px-10 lg:px-24 relative z-10 mt-24 md:mt-64">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-gray-100/20 backdrop-blur-sm px-4 py-3 rounded-md">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black tracking-tight lowercase">
                join us in building <br /> the future
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white text-gray-900 py-12 px-6 sm:px-10 lg:px-24">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lowercase tracking-tight text-black"
          >
            why build with manthan architect?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl mt-6 max-w-2xl text-center shadow-sm"
          >
            <p className="text-gray-600 text-base md:text-lg font-light lowercase leading-relaxed">
              we are not just a firm, we are a tech lab. join us to build high performance products, not just interiors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12 w-full">
            {cultureBlocks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-2xl group-hover:bg-[#eb5e22]/10 transition-colors">
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#eb5e22] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-black lowercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-base font-light lowercase leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="bg-white pt-12 pb-16 px-6 sm:px-10 lg:px-24 border-t border-gray-100">
        <div className="mx-auto max-w-[1600px]">

          {/* Section Header — 2 col like reference */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black lowercase leading-tight tracking-tight">
                shape the <br /> future of design.
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500 font-light text-base lowercase leading-relaxed">
                we are always looking for visionary architects, <br />
                designers, and creators. select your expertise, <br />
                attach your portfolio, and let&apos;s build something exceptional together.
              </p>
            </div>
          </div>

          {/* Role Selection Chips */}
          <div className="mb-10">
            <p className="text-sm font-medium text-gray-700 lowercase mb-4">i am applying for *</p>
            <div className="flex flex-wrap gap-3">
              {["architectural designers", "interior designers", "3d designers", "business development executives"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, role }))}
                  className={`px-5 py-2 rounded-full border text-sm font-light lowercase transition-all duration-200
                    ${form.role === role
                      ? "bg-[#1c2a22] text-white border-[#1c2a22]"
                      : "bg-white text-gray-600 border-gray-300 hover:border-[#1c2a22] hover:text-[#1c2a22]"
                    }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">

            {/* Row 1: Full Name | Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="career-name" className="text-sm font-medium text-gray-700 lowercase">full name *</label>
                <Input
                  id="career-name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="py-6 px-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 rounded-lg"
                  placeholder="enter full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="career-email" className="text-sm font-medium text-gray-700 lowercase">
                  email address <span className="text-gray-400 font-light">(optional)</span>
                </label>
                <Input
                  id="career-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="py-6 px-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 rounded-lg"
                  placeholder="enter email address"
                />
              </div>
            </div>

            {/* Row 2: Phone | Portfolio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="career-phone" className="text-sm font-medium text-gray-700 lowercase">phone *</label>
                <Input
                  id="career-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                  className="py-6 px-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 rounded-lg"
                  placeholder="enter phone number"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="career-portfolio" className="text-sm font-medium text-gray-700 lowercase">portfolio *</label>
                <Input
                  id="career-portfolio"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={onChange}
                  required
                  className="py-6 px-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 rounded-lg"
                  placeholder="portfolio link (linkedin/website)"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
              <label htmlFor="career-message" className="text-sm font-medium text-gray-700 lowercase">message *</label>
              <Textarea
                id="career-message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className="py-4 px-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 rounded-lg resize-none"
                placeholder="tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <Button
                type="submit"
                className="px-10 py-6 text-sm font-medium tracking-wide lowercase rounded-lg bg-[#1c2a22] text-white hover:bg-[#eb5e22] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                disabled={status === "sending"}
              >
                {status === "sending" ? "submitting..." : "submit application →"}
              </Button>
            </div>

            {status === "sent" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-green-700 text-sm font-medium lowercase">
                  application successfully submitted! our team will review it shortly.
                </p>
              </div>
            ) : null}
            {status === "error" ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-red-600 text-sm font-medium lowercase">
                  unable to submit. please try again.
                </p>
              </div>
            ) : null}
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}
