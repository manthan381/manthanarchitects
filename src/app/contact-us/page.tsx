// src/app/contact-us/page.tsx
"use client";
import { useState } from "react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Building } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };
  return (
    <main>
      <Header />
      {/* Header */}
      <section className="py-16 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Let’s Talk About Your Project</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're here to answer your questions and bring your vision to life.
          Reach out to us anytime.
        </p>
      </section>

      {/* Full-width Map */}
      <section className="w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="lg:w-1/2 w-full m-5">
          <div className="border-3 border-gray-200">
            <iframe
              className="w-full h-[450px]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.1801827121649!2d77.08646059904567!3d28.48307228526122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196a545e2307%3A0xd7db73392cd3bc11!2sManthan%20Dezin%20Studio!5e0!3m2!1sen!2sin!4v1753951341444!5m2!1sen!2sin"
            ></iframe>
          </div>
          <p className="text-sm font-bold text-gray-500">Office Location</p>
        </div>
        <div className="lg:w-1/2 w-full m-5">
          <div className="border-3 border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.4546649150107!2d76.97875597549248!3d28.405534675789376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzE5LjkiTiA3NsKwNTgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1756536823654!5m2!1sen!2sin"
              className="w-full h-[450px]"
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-sm font-bold text-gray-500">Factory Location</p>
        </div>
      </section>

      {/* Icon Cards */}
      <section className="pt-16 pb-5 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-background rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          <MessageCircle className="text-primary w-8 h-8 mb-4" />
          <h4 className="font-bold text-xl mb-2">WhatsApp</h4>
          <p className="text-gray-600 text-lg font-semibold dark:text-gray-400">
            +91-9958097927
          </p>
        </div>
        <div className="bg-white dark:bg-background rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          <Phone className="text-primary w-8 h-8 mb-4" />
          <h4 className="font-bold text-xl mb-2">Call Us</h4>
          <p className="text-gray-600 text-lg font-semibold dark:text-gray-400">
            +91-9958097927, 0124-4446207
          </p>
        </div>
        <div className="bbg-white dark:bg-background rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          <Mail className="text-primary w-8 h-8 mb-4" />
          <h4 className="font-bold text-xl mb-2">Email</h4>
          <p className="text-gray-600 text-lg font-semibold dark:text-gray-400">
            hello@manthanarchitects.com
          </p>
        </div>
      </section>

      {/* Icon Cards */}
      <section className="pt-10 pb-20 px-4 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto text-white w-16 h-16 mb-4 bg-gray-900 p-3 rounded-full relative" />
          <div className="bg-gray-50 px-5 py-10 m-[-40px] min-w-96 border border-gray-200 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Our Office Address</h3>
            <p className="text-gray-700 text-lg font-semibold dark:text-gray-300">
              Manthanarchitects,
              <br />
              J-2/5, DLF City Phase - 2, Sector - 25,
              <br />
              Gurugram, Haryana - 122008
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <Building className="mx-auto text-white w-16 h-16 mb-4 bg-gray-900 p-3 rounded-full relative" />
          <div className="bg-gray-50 px-5 py-10 m-[-40px] min-w-96 border border-gray-200 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Bench Furniture
              <br />
              Factory Address
            </h3>
            <p className="text-gray-700 text-lg font-semibold dark:text-gray-300">
              Kherki Daula, Sanimandir,
              <br />
              Bevdha Chowk, Sector-84,
              <br />
              Gurugram, Haryana - 122004.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto bg-white dark:bg-background shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                className="py-5"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                className="py-5"
                placeholder="Company Name"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <Input
              type="email"
              className="py-5"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              className="py-5"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <Textarea
              className="py-5"
              placeholder="Tell us more..."
              name="message"
              rows={10}
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </Button>

            {status === "sent" && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
