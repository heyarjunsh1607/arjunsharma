export function bookingDestination(
  base: string,
  name: string,
  email: string,
): string {
  const url = new URL(base);
  if (
    url.protocol !== "https:" ||
    !["cal.com", "www.cal.com"].includes(url.hostname) ||
    url.username ||
    url.password ||
    url.pathname === "/"
  ) {
    throw new Error("Configure a valid HTTPS Cal.com event URL.");
  }
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  if (
    !cleanName ||
    cleanName.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanEmail.length > 254
  ) {
    throw new Error("Enter your name and a valid email address.");
  }
  url.searchParams.set("name", cleanName);
  url.searchParams.set("email", cleanEmail);
  return url.toString();
}
