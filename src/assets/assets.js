import brain from "./ai.png"
import fast from "./fast.png"
import quality from "./quality.png"
import social from "./social.png"

import i1 from "./01.jpg"
import i2 from "./2.jpg"
import i3 from "./3.jpg"


import gen1 from "./gen1.jpg"
import gen2 from "./gen2.jpg"
import gen3 from "./gen3.jpg"
import gen4 from "./gen4.jpg"
import profile from "./userpic.png"


export const features = [ 
  {
    icon: brain,
    title: "Ai Copywriting",
    description: "AI writes ad text that grabs attention and drives clicks.",
    bg: "#7ed0ff"
  },
  {
    icon: quality,
    title: "Auto Images",
    description: "Get stunning visuals ready for any platform — no design needed.",
    bg: "#fed396"
  },
  {
    icon: fast,
    title: "Instant Ads",
    description: "Enter your info and get ready-to-use ads in seconds.",
    bg: "#F6F49D"
  },
  {
    icon: social,
    title: "Cross-Platform",
    description: "Generate ads for Facebook, Instagram, TikTok, and more.",
    bg: "#fe96a2"
  },
]

export const reviews = [
  {
    name: "Liam M.",
    username: "@liam_maker",
    img : profile,
    body: "This tool saved me hours! Super intuitive and fast.",
  },
  {
    name: "Sophia R.",
    username: "@sophia_designs",
    img : profile,
    body:
      "I love the clean UI and the results speak for themselves. It's incredibly easy to use and integrates seamlessly into my workflow. This is definitely one of the best design tools I've used in a while.",
  },
  {
    name: "Noah T.",
    username: "@noah_codes",
    img : profile,
    body: "Does exactly what I need. Reliable and efficient.",
  },
  {
    name: "Emma K.",
    username: "@emmaTechTalk",
    img : profile,
    body:
      "The features are great, but I wish it had more templates. Still, it’s one of the few tools I consistently rely on. The workflow improvements are undeniable, and it keeps getting better with updates.",
  },
  {
    name: "Aiden L.",
    username: "@aiden_builds",
    img : profile,
    body: "Customer support was helpful and quick to respond.",
  },
  {
    name: "Olivia J.",
    username: "@olivia_dev",
    img : profile,
    body:
      "Takes a little time to get used to, but works great. Once I got the hang of it, I found it to be a reliable part of my development toolkit. The learning curve is worth it.",
  },
  {
    name: "Elijah N.",
    username: "@elijahx",
    img : profile,
    body: "Impressive speed and quality. Highly recommended.",
  },
  {
    name: "Isabella B.",
    username: "@isabella_beta",
    img : profile,
    body:
      "It’s okay for basic needs, but lacks customization. I hope future updates offer more flexibility in design options and integrations.",
  },
  {
    name: "James C.",
    username: "@jc_dev",
    img : profile,
    body:
      "Way better than other tools I’ve tried. Worth every penny. The attention to detail is top-notch and the user experience is just outstanding.",
  },
  {
    name: "Mia D.",
    username: "@miadigital",
    img : profile,
    body:
      "Nice tool but had a few bugs on mobile. That said, the desktop version is flawless and super efficient for daily use. Looking forward to better mobile optimization soon.",
  },
  {
    name: "Lucas W.",
    username: "@lucas_the_dev",
    img : profile,
    body: "Simple, powerful, and efficient. What else do you need?",
  },
  {
    name: "Amelia S.",
    username: "@ameliaTechie",
    img : profile,
    body:
      "Really helped me improve my workflow. Great job! I’ve already recommended it to several colleagues, and they love it too. This is the kind of tool that actually makes a difference.",
  },
];

export const examples = [
  {
    image :i1 ,
    alt : "Special offer for selling watches ads"
  },
  {
    image :i2 ,
    alt : "Modern furniture ads"
  },
  {
    image :i3 ,
    alt : "Special offer for selling shoes ads"
  },
  {
    image :gen3 ,
    alt : "digital marketing agency ads"
  }
]

export const pricingPlans = [
  {
    title: "Starter",
    price: 14,
    billing : "/month" ,
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Includes all features",
      "Edit & save ads anytime"
    ],
    variant_id : "851037" 
  },
  {
    title: "Core",
    price: 149,
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Edit & save ads anytime",
      "Includes all features",
      "Lifetime access & updates"
    ],
    bonus :"Pay once , Use forever",
    variant_id : "851041"
  },
  {
    title: "Pro",
    price: 120,
    billing : "/year" ,
    Save: "$10/Month ,Save $48 with yearly pricing(30% off)",
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Edit & save ads anytime",
      "Includes all features",
      "Priority updates" ,
    ],
    variant_id : "851039"
  },
];


export const faqs = [
  {
  question : "Will the offer be available forever?" ,
  answer : "No. This is a limited-time test offer. I might extend it if it works well, but there is no guarantee and the price will increase."
  },
  {
    question: "How does the AI generate ads?",
    answer: "You just describe your product or service, and our AI instantly creates high-converting ad copy and visuals tailored to your input."
  },
  {
    question: "Can I use it for any niche or industry?",
    answer: "Yes! The tool is built to generate ads for any product, service, or business — from e-commerce to local services."
  },
  {
    question: "Do I need design or writing skills?",
    answer: "Not at all. The tool is beginner-friendly — no writing or design experience required. Just input your idea and get results."
  },
  {
    question: "What platforms are supported?",
    answer: "The ads are optimized for all major social media platforms including Facebook, Instagram, TikTok, and more."
  },
  {
    question: "What's the difference between monthly, yearly, and lifetime plans?",
    answer: "Monthly is flexible and billed each month. Yearly saves you money with a discount. Lifetime is a one-time payment with no renewals."
  }
];


export const generated_ads = [

  {
    id: 1,
    image: gen1,
    alt: "Ad Image",
    title: "Room Glow",
    desc: "RGB lights to instantly upgrade your space."
  },

  {
    id: 2,
    image: gen2,
    alt: "Ad Image",
    title: "Posture Fix",
    desc: "Relieve back pain and improve your posture fast."
  },

  {
    id: 3,
    image: gen3,
    alt: "Ad Image",
    title: "Flower Light",
    desc: "A fun glowing gift everyone will love."
  },

  {    id: 4,
    image: gen4,
    alt: "Ad Image",
    title: "Desk Boost",
    desc: "Sleek LED stand that elevates your setup."
  },
   {
    id: 5,
    image: gen3,
    alt: "Ad Image",
    title: "Flower Light",
    desc: "A fun glowing gift everyone will love."
  },
]


export const Sizes = [
  { size: "1:1", value: "1/1" },
  { size: "4:3", value: "4/3" },
  { size: "3:2", value: "3/2" },
  { size: "16:9", value: "16/9" },
  { size: "9:16", value: "9/16" },
  { size: "5:4", value: "5/4" },
  { size: "4:5", value: "4/5" },
  { size: "1:2", value: "1/2" },
];

