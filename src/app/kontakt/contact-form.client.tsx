"use client";

import React from "react";
import { CtaPopoverButton } from "../_components/landing/cta-popover-button";
import { services } from "../_components/landing/data";

type FormFieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

function FormField({ id, label, children }: FormFieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 text-sm text-[#433d32]">
      <span className="font-semibold text-[#17140f]">{label}</span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [state, setState] = React.useState({
    loading: false,
    success: false,
    error: ""
  });

  const [formData, setFormData] = React.useState({
    childName: "",
    childAge: "",
    problem: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ loading: true, success: false, error: "" });
    // Basic client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitsOnly = (s: string) => s.replace(/\D/g, "");
    const phoneDigits = digitsOnly(formData.phone || "");
    if (!emailRegex.test(formData.email || "")) {
      setState({ loading: false, success: false, error: "Niepoprawny format adresu e-mail." });
      return;
    }
    if (phoneDigits.length < 7) {
      setState({ loading: false, success: false, error: "Niepoprawny numer telefonu." });
      return;
    }

    try {
      // Build payload and include service metadata if the selected value matches a service href
      const payload = { ...formData } as Record<string, unknown>;
      const matched = services.find((s) => s.href === formData.problem);
      if (matched) {
        payload.serviceHref = matched.href;
        payload.serviceTitle = matched.title;
        // Keep a human-friendly problem field too
        payload.problemLabel = matched.title;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Wystąpił błąd podczas wysyłania formularza");
      }

      setState({ loading: false, success: true, error: "" });
      // Reset form on success
      setFormData({
        childName: "",
        childAge: "",
        problem: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (err) {
      setState({
        loading: false,
        success: false,
        error: err instanceof Error ? err.message : "Nieoczekiwany błąd"
      });
    }
  };

  return (
    <form
      className="mt-8 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      {state.error && (
        <div className="rounded-[18px] border border-[#fdaaaa] bg-[#fff5f5] px-4 py-3 text-sm text-[#c53030]">
          ⚠️ {state.error}
        </div>
      )}
      {state.success && (
        <div className="rounded-[18px] border border-[#c6f6d5] bg-[#f0fff4] px-4 py-3 text-sm text-[#2f855a]">
          ✅ Dziękuję za zapytanie! Skontaktuję się z Tobą w ciągu 24 godzin.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="child-name" label="Imię dziecka">
          <input
            id="child-name"
            name="childName"
            type="text"
            required
            placeholder="np. Jan"
            value={formData.childName}
            onChange={handleInputChange}
            disabled={state.loading}
            className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
          />
        </FormField>
        <FormField id="child-age" label="Wiek">
          <input
            id="child-age"
            name="childAge"
            type="text"
            required
            placeholder="np. 6 lat"
            value={formData.childAge}
            onChange={handleInputChange}
            disabled={state.loading}
            className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
          />
        </FormField>
      </div>
      <FormField id="problem" label="Jakiego wsparcia potrzebujesz?">
        <select
          id="problem"
          name="problem"
          required
          value={formData.problem}
          onChange={handleInputChange}
          disabled={state.loading}
          className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
        >
          <option value="">Wybierz opcję…</option>
          <option value="diagnosis">Diagnoza i konsultacja</option>
          <option value="therapy">Terapia (np. Johansen, terapia ręki)</option>
          <option value="education">Wsparcie edukacyjne</option>
          <optgroup label="Usługi">
            {services.map((s) => (
              <option key={s.href} value={s.href}>
                {s.title}
              </option>
            ))}
          </optgroup>
          <option value="other">Inne</option>
        </select>
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="phone" label="Telefon do kontaktu">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Twój numer telefonu"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={state.loading}
            className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
          />
        </FormField>
        <FormField id="email" label="Adres e-mail">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Twój adres e-mail"
            value={formData.email}
            onChange={handleInputChange}
            disabled={state.loading}
            className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
          />
        </FormField>
      </div>

      <FormField id="message" label="Opisz problem dziecka">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Opowiedz krótko, co Cię martwi i jakie cele chcesz osiągnąć dla swojego dziecka."
          value={formData.message}
          onChange={handleInputChange}
          disabled={state.loading}
          className="w-full rounded-[18px] border border-[#efe4c9] bg-[#faf6ed] px-4 py-3 text-sm text-[#433d32] outline-none transition focus:border-[#e5563c] focus:ring-2 focus:ring-[#f9c851]/40"
        />
      </FormField>

      <div className="flex flex-col gap-3">
        {state.loading ? (
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold bg-[#fed102] text-[#2a2400] opacity-80 cursor-not-allowed"
          >
            Wysyłanie...
          </button>
        ) : (
          <CtaPopoverButton label="Wyślij zapytanie" tone="dark" />
        )}
        <p className="text-xs text-[#837659]">
          Wysyłając formularz zgadzasz się na kontakt i przetwarzanie danych zgodnie z polityką prywatności
          EduHuśtawki.
        </p>
      </div>
    </form>
  );
}
