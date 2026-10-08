const config = {
  title: "Marco Christian | Portfolio",
  description: {
    long: "Explore the portfolio of Marco Christian, a software engineer, full-stack developer, and AI enthusiast!",
    short:
      "Explore the portfolio of Marco Christian, a software engineer, full-stack developer, and AI enthusiast!",
  },
  aboutPhoto: "/assets/about/me.jpg",
  about: [
  "Hi, I'm Marco Christian, a software engineer and full-stack developer who enjoys building interactive, polished web experiences.",
  "I work mostly with React and NestJS, and I'm increasingly interested in AI-powered products.",
  "Outside of code, replace this with something personal.",
  ],
  keywords: [
    "Marco",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Marco Christian",
  email: "marcochristian114@gmail.com",
  site: "https://marcoyap.my.id",

  // for github stars button
  githubUsername: "marcoyap41",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/marcochristian41",
    instagram: "https://www.instagram.com/_marcoyap",
    facebook: "#",
    github: "https://github.com/marcoyap41",
  },
};
export { config };
