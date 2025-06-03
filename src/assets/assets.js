import { Linkedin, Twitter } from "lucide-react"
import brain from "./ai.png"
import fast from "./fast.png"
import quality from "./quality.png"
import social from "./social.png"

import i1 from "./01.jpg"
import i2 from "./2.jpg"
import i3 from "./3.jpg"
import i4 from "./4.jpg"
import i5 from "./5.jpg"
import i6 from "./6.jpg"


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
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review: "This tool saved me hours! Super intuitive and fast.",
  },
  {
    name: "Sophia R.",
    username: "@sophia_designs",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
      "I love the clean UI and the results speak for themselves. It's incredibly easy to use and integrates seamlessly into my workflow. This is definitely one of the best design tools I've used in a while.",
  },
  {
    name: "Noah T.",
    username: "@noah_codes",
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review: "Does exactly what I need. Reliable and efficient.",
  },
  {
    name: "Emma K.",
    username: "@emmaTechTalk",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
      "The features are great, but I wish it had more templates. Still, it’s one of the few tools I consistently rely on. The workflow improvements are undeniable, and it keeps getting better with updates.",
  },
  {
    name: "Aiden L.",
    username: "@aiden_builds",
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review: "Customer support was helpful and quick to respond.",
  },
  {
    name: "Olivia J.",
    username: "@olivia_dev",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
      "Takes a little time to get used to, but works great. Once I got the hang of it, I found it to be a reliable part of my development toolkit. The learning curve is worth it.",
  },
  {
    name: "Elijah N.",
    username: "@elijahx",
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review: "Impressive speed and quality. Highly recommended.",
  },
  {
    name: "Isabella B.",
    username: "@isabella_beta",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
      "It’s okay for basic needs, but lacks customization. I hope future updates offer more flexibility in design options and integrations.",
  },
  {
    name: "James C.",
    username: "@jc_dev",
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review:
      "Way better than other tools I’ve tried. Worth every penny. The attention to detail is top-notch and the user experience is just outstanding.",
  },
  {
    name: "Mia D.",
    username: "@miadigital",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
      "Nice tool but had a few bugs on mobile. That said, the desktop version is flawless and super efficient for daily use. Looking forward to better mobile optimization soon.",
  },
  {
    name: "Lucas W.",
    username: "@lucas_the_dev",
    socialMedia: <Twitter className="w-6 h-6 ml-auto mb-4 text-sky-500" />,
    review: "Simple, powerful, and efficient. What else do you need?",
  },
  {
    name: "Amelia S.",
    username: "@ameliaTechie",
    socialMedia: <Linkedin className="w-6 h-6 ml-auto mb-4 text-blue-500" />,
    review:
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
    image :i4 ,
    alt : "digital marketing agency ads"
  },
  {
    image :i5 ,
    alt : "sky blue modern digital marketing ads"
  },
  {
    image :i6 ,
    alt : "black && green modern digital marketing ads"
  },
]

export const pricingPlans = [
  {
    title: "Pro",
    price: 14,
    billing : "/month" ,
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Includes all features",
      "Edit & save ads anytime"
    ],
  },
  {
    title: "Pro",
    price: 118,
    billing : "/year" ,
    Save: "Save $50 with yearly pricing(30% off)",
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Includes all features",
      "Priority updates" ,
      "Edit & save ads anytime"
    ],
  },
  {
    title: "One-Time Payment",
    price: 149,
    features: [
      "Unlimited ad generation",
      "AI copy + visuals",
      "Edit & save ads anytime",
      "Includes all features",
      "Lifetime access & updates"
    ],
    bonus :"Pay once , Use forever"
  },
];
