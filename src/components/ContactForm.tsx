"use client";

import type { FormEvent } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

const inputClasses =
  "mt-2 w-full rounded-input border border-border bg-white px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow";

export default function ContactForm() {
  const { fields, submit } = site.contactForm;

  // Form UI only for now: sending the message is added in Phase 3
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card bg-white p-6 text-ink lg:p-8"
    >
      <div className="space-y-4">
        <label className="block font-semibold">
          {fields.name.label}
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={fields.name.placeholder}
            className={`${inputClasses} min-h-12`}
          />
        </label>

        <label className="block font-semibold">
          {fields.business.label}
          <input
            type="text"
            name="business"
            autoComplete="organization"
            placeholder={fields.business.placeholder}
            className={`${inputClasses} min-h-12`}
          />
        </label>

        <label className="block font-semibold">
          {fields.phone.label}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder={fields.phone.placeholder}
            className={`${inputClasses} min-h-12`}
          />
        </label>

        <label className="block font-semibold">
          {fields.need.label}
          <textarea
            name="need"
            rows={4}
            placeholder={fields.need.placeholder}
            className={inputClasses}
          />
        </label>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        {submit}
      </Button>
    </form>
  );
}
