export const site = {
  name: "Arjun Sharma",
  url: "https://arjunsharma.co",
  title: "SEO & AI Search for Design Studios | Arjun Sharma",
  description:
    "Grow your design studio with Google SEO, AI Search optimization and content that attracts qualified leads. Work with Arjun Sharma. Book a discovery call.",
  bookingUrl:
    process.env.CAL_BOOKING_URL?.trim() ||
    "https://cal.com/arjun-sharma/discovery-call",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
    "https://www.linkedin.com/in/arjunsh1607/",
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
    title: "AI Search Optimization",
    line: "Make your studio easier to discover and reference when buyers ask AI who to hire.",
    symbol: "ai",
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    line: "SEO for design studios, built around the services and projects your ideal clients are already searching for.",
    symbol: "search",
  },
  {
    number: "03",
    title: "Content Creation",
    line: "Turn your expertise into case studies and useful content that helps buyers see why you’re the right fit.",
    symbol: "content",
  },
  {
    number: "04",
    title: "Technical SEO Optimization",
    line: "Fix slow pages, crawl issues and site structure so buyers and search engines can reach your best work.",
    symbol: "technical",
  },
  {
    number: "05",
    title: "Authority & Link Building",
    line: "Earn relevant links and third-party mentions that build credibility for your studio beyond your own website.",
    symbol: "authority",
  },
  {
    number: "06",
    title: "Local SEO",
    line: "Help nearby clients find your studio through relevant local searches, location pages and your Google Business Profile.",
    symbol: "local",
  },
];
export const steps = [
  [
    "Understand who you want to attract",
    "Which projects are worth your time? We look at your best clients, project budgets and the work you want more of.",
  ],
  [
    "Find out how they discover agencies",
    "What do those buyers search for, ask AI and compare? We map where they look before they make a shortlist.",
  ],
  [
    "Build the right assets",
    "Turn your expertise into service pages, case studies and useful content that help a buyer choose you.",
  ],
  [
    "Measure. Learn. Keep building.",
    "Track whether the right buyers find you and get in touch. Use those conversations to decide what to improve next.",
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
