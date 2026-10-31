"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const v = value.trim();

  if (name === "name") {
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "Your name must be at least 2 characters.";
  }
  if (name === "email") {
    if (!v) return "Please enter your email.";
    if (!emailPattern.test(v)) return "Enter a valid email, like name@example.com.";
  }
  if (name === "message") {
    if (!v) return "Please write a message.";
    if (v.length < 10) return "Your message must be at least 10 characters.";
  }
  return "";
}

export default function ContactForm({ to }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const next = {};
    Object.keys(values).forEach((key) => {
      next[key] = validateField(key, values[key]);
    });
    setErrors(next);

    const firstInvalid = Object.keys(next).find((key) => next[key]);
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio message from ${values.name.trim()}`
    );
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n- ${values.name.trim()} (${values.email.trim()})`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="field-name">Name</label>
        <input
          id="field-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby="error-name"
        />
        <p id="error-name" className="field-error" role="alert">
          {errors.name}
        </p>
      </div>

      <div className="field">
        <label htmlFor="field-email">Email</label>
        <input
          id="field-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby="error-email"
        />
        <p id="error-email" className="field-error" role="alert">
          {errors.email}
        </p>
      </div>

      <div className="field">
        <label htmlFor="field-message">Message</label>
        <textarea
          id="field-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="error-message"
        />
        <p id="error-message" className="field-error" role="alert">
          {errors.message}
        </p>
      </div>

      <button type="submit" className="btn btn-primary">
        <Send size={16} aria-hidden="true" /> Send message
      </button>

      {sent && (
        <p className="form-status" role="status">
          <Check size={16} aria-hidden="true" /> Your email app should open with
          the message ready to send.
        </p>
      )}
    </form>
  );
}
