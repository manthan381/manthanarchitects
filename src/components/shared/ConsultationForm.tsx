"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    area: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.area) {
       // if select is required, we should manually check it since Radix UI Select doesn't play naturally with native form validation sometimes
       alert("Please select a carpet area");
       return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", phone: "", area: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        required
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Company Name"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <Input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        required
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Select
        value={form.area}
        onValueChange={(value) => setForm({ ...form, area: value })}
        required
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Carpet Area" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="below-1000">Below 1000 sq.ft</SelectItem>
          <SelectItem value="1000-2500">1000 - 2500 sq.ft</SelectItem>
          <SelectItem value="above-2500">Above 2500 sq.ft</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Booking..." : "Book Now"}
      </Button>

      {status === "success" && (
        <p className="text-green-600 text-sm font-medium text-center">
          Consultation booked successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium text-center">
          Failed to book. Please try again.
        </p>
      )}
    </form>
  );
}
