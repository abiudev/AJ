export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about-us", key: "about_us", label: "About us" },
  {
    key: "services",
    label: "Services",
    subLinks: [
      {
        href: "/services/Photography",
        key: "photography",
        label: "Photography",
        description:
          "We offer professional photography services to capture the essence of your special moments and events with high-quality imagery.",
      },
      {
        href: "/services/Videography",
        key: "videography",
        label: "Videography",
        description:
          "Our videography services bring your events to life, providing captivating videos that tell your story with precision and creativity.",
      },
      {
        href: "/services/Corporate Event Management",
        key: "corporateEventManagement",
        label: "Corporate Event Management",
        description:
          "We specialize in organizing and managing corporate events, ensuring flawless execution and memorable experiences for your attendees.",
      },
      {
        href: "/services/Corporate Event Coverage",
        key: " eventCoverage",
        label: "Corporate Event Coverage",
        description:
          "Our corporate event coverage services ensure that every important moment is professionally documented for your company’s archive.",
      },
      {
        href: "/services/Web Development",
        key: "webDevelopment",
        label: "Web Development",
        description:
          "We design and develop custom websites that are responsive, user-friendly, and tailored to your business goals.",
      },
      {
        href: "/services/Rapporteur Services",
        key: "rapporteurServices",
        label: "Rapporteur Services",
        description:
          "Our rapporteur services provide accurate and detailed documentation of meetings, conferences, and events, ensuring that every important point is captured.",
      },
    ],
  },

  { href: "/pricing", key: "pricing", label: "Pricing" },
  { href: "/contact-us", key: "contact_us", label: "Contact Us" },
];
export const Services = [
  {
    href: "/services/Photography",
    key: "photography",
    label: "Photography",
    description:
      "We offer professional photography services to capture the essence of your special moments and events with high-quality imagery.",
    image: "/photography.jpg",
  },
  {
    href: "/services/Videography",
    key: "videography",
    label: "Videography",
    description:
      "Our videography services bring your events to life, providing captivating videos that tell your story with precision and creativity.",
    image: "/videography.png",
  },
  {
    href: "/services/Corporate Event Management",
    key: "corporateEventManagement",
    label: "Corporate Event Management",
    description:
      "We specialize in organizing and managing corporate events, ensuring flawless execution and memorable experiences for your attendees.",
    image: "/event.png",
  },
  {
    href: "/services/Corporate Event Coverage",
    key: "eventCoverage",
    label: "Corporate Event Coverage",
    description:
      "Our corporate event coverage services ensure that every important moment is professionally documented for your company's archive.",
    image: "/coverage.png",
  },
  {
    href: "/services/Web Development",
    key: "webDevelopment",
    label: "Web Development",
    description:
      "We design and develop custom websites that are responsive, user-friendly, and tailored to your business goals.",
    image: "/webdev.png",
  },
  {
    href: "/services/Rapporteur Services",
    key: "rapporteurServices",
    label: "Rapporteur Services",
    description:
      "Our rapporteur services provide accurate and detailed documentation of meetings, conferences, and events, ensuring that every important point is captured.",
    image: "/rap.png",
  },
];
export const serviceFeatures = {
  photography: [
    "High-quality and professional photos",
    "Fast turnaround time for deliveries",
    "Tailored photography packages for events",
    "Expert use of the latest photography equipment",
  ],
  videography: [
    "Cinematic quality videos for events",
    "Creative editing and storytelling",
    "Use of state-of-the-art filming equipment",
    "Customizable videography packages to suit your needs",
  ],
  rapporteurServices: [
    "Accurate and detailed event reporting",
    "Professional summarization of discussions and decisions",
    "Timely delivery of reports and transcriptions",
    "Expert handling of confidential information",
  ],
  corporateEventManagement: [
    "Seamless planning and coordination of events",
    "Expert management of vendors and logistics",
    "Creative design and execution of corporate themes",
    "Ensuring smooth execution of events within budget",
  ],
  webDevelopment: [
    "Custom-built websites tailored to client needs",
    "Responsive designs optimized for all devices",
    "SEO-friendly and performance-optimized code",
    "Integration of advanced features and tools",
  ],
  eventCoverage: [
    "Comprehensive coverage of events from start to finish",
    "Expert coordination of photography and videography teams",
    "Real-time updates and on-site editing options",
    "Ensuring no moment is missed with detailed documentation",
  ],
};
