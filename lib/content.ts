export const site = {
  name: "Arjun Sharma",
  url: "https://arjunsharma.co",
  title: "SEO for Design Studios | Arjun Sharma",
  description:
    "I help design studios generate more qualified inbound leads through Google SEO, AI Search and better positioning.",
  bookingUrl: process.env.CAL_BOOKING_URL?.trim() || "https://cal.com/arjun-sharma/discovery-call",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "https://www.linkedin.com/in/arjunsh1607/",
  twitterUrl: "https://x.com/arjunsh1607",
};
if (
  site.linkedinUrl &&
  !/^https:\/\/(www\.)?linkedin\.com\//.test(site.linkedinUrl)
)
  throw new Error("LinkedIn URL must be a LinkedIn HTTPS URL");

export const services = [
  {
    number: "01",
    title: "Google Search",
    line: "SEO for design studios, built around buyer intent.",
    items: [
      "Service and commercial pages",
      "Case studies and comparison pages",
      "High-intent content",
      "Technical SEO and authority building",
    ],
    symbol: "search",
  },
  {
    number: "02",
    title: "AI Search",
    line: "Be part of the shortlist.",
    items: [
      "Buyer questions and AI discovery journeys",
      "Clear brand and entity signals",
      "Useful, referenceable content",
      "Relevant third-party mentions",
    ],
    symbol: "spark",
  },
  {
    number: "03",
    title: "Positioning",
    line: "Give the right people a reason to choose you.",
    items: [
      "Ideal client and positioning",
      "Service messaging and social proof",
      "Case studies that answer buyer questions",
      "Conversion paths and useful lead magnets",
    ],
    symbol: "funnel",
  },
];
export const steps = [
  [
    "Understand who you want to attract",
    "Your ideal clients, deal size, services and current pipeline. We start with what a good lead actually looks like.",
  ],
  [
    "Find out how they discover agencies",
    "Google searches, AI prompts, directories, comparisons and communities. Then we work out where you need to show up.",
  ],
  [
    "Build the right assets",
    "Clear service pages, useful content, stronger case studies and relevant off-site signals. Each one has a job to do.",
  ],
  [
    "Measure. Learn. Keep building.",
    "Track discovery, qualified traffic and the conversations they contribute to. Double down on what works.",
  ],
];
export const faqs = [
  {
    question: "Does SEO work for design agencies?",
    answer:
      "Yes, when it is built around the right buyers. Search volume can be smaller than in broad SaaS markets, but agency contracts are valuable. A few relevant searches can matter more than thousands of visits from people who will never hire you.",
  },
  {
    question: "What should a design studio rank for?",
    answer:
      "Start with your services, the industries you understand and the problems you solve. Add location searches where relevant, competitor alternatives, case studies and educational content close to a buying decision. The right mix depends on your studio and its ideal clients.",
  },
  {
    question: "How long does SEO take for a design studio?",
    answer:
      "It depends on your existing authority, competition, site quality and the assets you already have. Technical improvements and clearer pages can help sooner; building search visibility usually takes sustained work over months. I do not promise a fixed timeline or guaranteed leads.",
  },
  {
    question: "What is AI Search optimization?",
    answer:
      "It is the work of making your studio easier to discover and understand when buyers use tools like ChatGPT, Claude and Perplexity to research agencies. That includes clear first-party content, consistent brand information and credible third-party mentions. No one can guarantee that an AI system will recommend you.",
  },
  {
    question: "Is AI Search replacing Google?",
    answer:
      "I treat them as connected discovery channels. Buyers can move between Google, AI tools, directories and your website before making a decision. A clear website and credible information about your studio help across that journey.",
  },
  {
    question: "Do I need to publish blog posts every week?",
    answer:
      "No. A smaller set of useful pages built around real buyer questions can do more for your studio than a constant stream of generic posts. We focus on service pages, case studies and content that helps the right person move closer to a conversation.",
  },
];

export type Proof = {
  label: string;
  result: string;
  context: string;
  sourceUrl?: string;
};
// Replace empty strings with verified results. Empty entries never render.
export const proof: Proof[] = [
  { label: "Organic search", result: "", context: "" }, // [Insert organic traffic result]
  { label: "Qualified inbound", result: "", context: "" }, // [Insert qualified leads generated]
  { label: "AI Search", result: "", context: "" }, // [Insert AI Search visibility result]
];
export const testimonial = { quote: "", name: "", role: "" }; // [Insert client testimonial]
