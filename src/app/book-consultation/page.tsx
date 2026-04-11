"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Lightbulb, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function BookConsultationPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `[CONSULTATION BOOKING]\n\n${form.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("failed");
      }

      setStatus("sent");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      <section className="bg-gray-200 pt-24 pb-16 px-6 sm:px-10 lg:px-24">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 lowercase text-black"
          >
            schedule a <span className="font-bold">consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light lowercase"
          >
            embark on your journey to create an inspired space. connect with our experts to discuss your vision,
            requirements, and how we can bring it to life.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase">what to expect</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-8 lowercase">
                our initial consultation is designed to understand your unique needs and provide clarity on the
                architectural journey ahead. we believe every great space starts with a great conversation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lowercase">1. discovery & vision</h3>
                  <p className="text-gray-500 font-light lowercase">
                    we&apos;ll discuss your ideas, lifestyle requirements, and functional needs to establish a strong
                    foundation for your project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lowercase">2. conceptual approach</h3>
                  <p className="text-gray-500 font-light lowercase">
                    our experts will offer high-level spatial and aesthetic strategies tailored to your specific site
                    and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CalendarDays className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lowercase">3. process & timelines</h3>
                  <p className="text-gray-500 font-light lowercase">
                    gain a clear understanding of the design process, regulatory approvals, and realistic execution
                    schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
              <h4 className="font-bold text-gray-900 text-lg mb-4 lowercase">ready to begin?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 font-light lowercase">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> no initial commitment required
                </li>
                <li className="flex items-center text-gray-600 font-light lowercase">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> expert architectural insights
                </li>
                <li className="flex items-center text-gray-600 font-light lowercase">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> personalized project mapping
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-6 lowercase">booking details</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="book-name" className="text-sm font-semibold text-gray-700 lowercase">full name *</label>
                    <Input
                      id="book-name"
                      className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
                      placeholder="john doe"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="book-company" className="text-sm font-semibold text-gray-700 lowercase">company / organization</label>
                    <Input
                      id="book-company"
                      className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
                      placeholder="optional"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="book-email" className="text-sm font-semibold text-gray-700 lowercase">email address (optional)</label>
                  <Input
                    id="book-email"
                    type="email"
                    className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
                    placeholder="john@example.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="book-phone" className="text-sm font-semibold text-gray-700 lowercase">phone number *</label>
                  <Input
                    id="book-phone"
                    type="tel"
                    className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
                    placeholder="+91 98765 43210"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="book-message" className="text-sm font-semibold text-gray-700 lowercase">project details *</label>
                  <Textarea
                    id="book-message"
                    className="py-4 bg-gray-50 border-gray-200 focus-visible:ring-primary resize-none"
                    placeholder="tell us about your site, requirements, and preferred timeline for consultation..."
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-8 text-lg font-bold tracking-wide mt-4 lowercase"
                  variant="manthan"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "requesting..." : "request consultation"}
                </Button>

                {status === "sent" ? (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-semibold bg-green-50 p-4 rounded-lg text-center border border-green-200 mt-4 lowercase"
                  >
                    request received successfully! our team will contact you shortly to confirm the schedule.
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 font-semibold bg-red-50 p-4 rounded-lg text-center border border-red-200 mt-4 lowercase"
                  >
                    unable to send request. please check your connection or contact us directly.
                  </motion.p>
                ) : null}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
