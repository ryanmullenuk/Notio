"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const organisation = String(data.get("organisation") ?? "");
    const enquiryType = String(data.get("enquiryType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Notio website enquiry — ${enquiryType || "General enquiry"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Enquiry type: ${enquiryType || "Not selected"}`,
      "",
      "How can Notio help?",
      message,
    ].join("\n");

    window.location.href = `mailto:hello@notio.uk?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submitEnquiry}>
      <div className="form-heading">
        <span>Enquiry / 01</span>
        <p>
          Complete the details below. Selecting send will open a prepared email
          in your usual email app.
        </p>
      </div>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Organisation <small>(if applicable)</small></span>
        <input name="organisation" type="text" autoComplete="organization" />
      </label>
      <label>
        <span>I am enquiring as</span>
        <select name="enquiryType" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Housing provider or local authority</option>
          <option>RTM, almshouse or charity</option>
          <option>Resident or family member</option>
          <option>Supplier or project partner</option>
          <option>Other</option>
        </select>
      </label>
      <label className="form-message">
        <span>What would you like to discuss?</span>
        <textarea name="message" rows={5} required />
      </label>
      <label className="form-consent">
        <input name="consent" type="checkbox" required />
        <span>
          I understand Notio will use these details to respond to my enquiry.
          See the <a href="/privacy-policy">privacy policy</a>.
        </span>
      </label>
      <button className="button button-dark form-submit" type="submit">
        Prepare email enquiry <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
