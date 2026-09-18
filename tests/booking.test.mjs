import test from "node:test";
import assert from "node:assert/strict";
import { bookingDestination } from "../lib/booking.ts";
test("prefills Cal.com fields and preserves event settings", () => {
  const url = new URL(
    bookingDestination(
      "https://cal.com/example/discovery?duration=30&name=old",
      " Alex & Jo ",
      "alex+studio@example.com",
    ),
  );
  assert.equal(url.searchParams.get("name"), "Alex & Jo");
  assert.equal(url.searchParams.get("email"), "alex+studio@example.com");
  assert.equal(url.searchParams.get("duration"), "30");
  assert.equal(url.pathname, "/example/discovery");
});
test("rejects unsafe or non-Cal destinations", () => {
  for (const base of [
    "javascript:alert(1)",
    "http://cal.com/example",
    "https://cal.com.evil.example/event",
    "https://user:password@cal.com/event",
    "https://cal.com/",
  ]) {
    assert.throws(() => bookingDestination(base, "Alex", "alex@example.com"));
  }
});
test("rejects empty, invalid and excessive input", () => {
  for (const [name, email] of [
    ["   ", "alex@example.com"],
    ["Alex", "bad-email"],
    ["Alex", "a@b"],
    ["x".repeat(101), "a@b.com"],
  ]) {
    assert.throws(() =>
      bookingDestination("https://cal.com/example/discovery", name, email),
    );
  }
});
