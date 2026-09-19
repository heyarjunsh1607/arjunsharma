"use client";

import { useState, type FormEvent } from "react";
import { bookingDestination } from "@/lib/booking";

export function BookingForm({ bookingUrl }: { bookingUrl: string }) {
  const [error, setError] = useState("");
  const [leaving, setLeaving] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      if (!bookingUrl)
        throw new Error(
          "Booking will open soon. The calendar link is not available yet.",
        );
      const destination = bookingDestination(
        bookingUrl,
        String(data.get("name") || ""),
        String(data.get("email") || ""),
      );
      setLeaving(true);
      window.location.assign(destination);
    } catch (error) {
      setLeaving(false);
      setError(
        error instanceof Error
          ? error.message
          : "Please check your details and try again.",
      );
    }
  }
  return (
    <div className="booking-window" id="booking">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>let’s-talk.calendar</span>
        <span aria-hidden="true">↗</span>
      </div>
      <form onSubmit={submit} className="booking-form">
        <p className="booking-heading">
          Find your studio’s next growth opportunity.
        </p>
        <p className="booking-subtitle">
          Enter your details, then choose a time. You’ll also get my occasional
          notes on studio growth.
        </p>
        <div className="booking-fields">
          <label htmlFor="booking-name">
            Your name
            <input
              id="booking-name"
              name="name"
              autoComplete="name"
              placeholder="Alex Morgan"
              required
              maxLength={100}
              disabled={leaving}
            />
          </label>
          <label htmlFor="booking-email">
            Your email
            <input
              id="booking-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="alex@yourstudio.com"
              required
              maxLength={254}
              disabled={leaving}
            />
          </label>
        </div>
        <button
          className="button"
          type="submit"
          disabled={leaving || !bookingUrl}
        >
          {leaving ? "Opening available times…" : "Continue to choose a time"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        {!bookingUrl ? (
          <p className="booking-notice">
            The calendar is being connected. Booking opens soon.
          </p>
        ) : null}
        <p role="alert" className="form-error">
          {error}
        </p>
        <noscript>
          <p>
            Enable JavaScript to prefill your booking.
            {bookingUrl ? (
              <a href={bookingUrl}> Or book directly on Cal.com.</a>
            ) : null}
          </p>
        </noscript>
      </form>
    </div>
  );
}
