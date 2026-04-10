"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `[BLOG SIDEBAR CONSULTATION]\n\n${form.message}`
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-700">full name *</label>
        <Input
          className="py-5 bg-gray-50 border-gray-200 focus-visible:ring-primary"
          placeholder="your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-700">email (optional)</label>
        <Input
          type="email"
          className="py-5 bg-gray-50 border-gray-200 focus-visible:ring-primary"
          placeholder="email address"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-700">phone *</label>
        <Input
          type="tel"
          className="py-5 bg-gray-50 border-gray-200 focus-visible:ring-primary"
          placeholder="phone number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-700">project details *</label>
        <Textarea
          className="py-3 bg-gray-50 border-gray-200 focus-visible:ring-primary resize-none"
          placeholder="tell us briefly about your project..."
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full py-6 text-sm font-bold tracking-wide mt-2"
        variant="manthan"
        disabled={status === "loading"}
      >
        {status === "loading" ? "requesting..." : "book consultation"}
      </Button>

      {status === "success" && (
        <p className="text-green-600 bg-green-50 border border-green-200 p-2 text-xs font-medium text-center rounded">
          request received. we will reach out shortly!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-2 text-xs font-medium text-center rounded">
          failed to send request. please try again.
        </p>
      )}
    </form>
  );
}
