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
        key: "event_management",
        label: "Corporate Event Management",
        description:
          "We specialize in organizing and managing corporate events, ensuring flawless execution and memorable experiences for your attendees.",
      },
      {
        href: "/services/Corporate Event Coverage",
        key: "event_coverage",
        label: "Corporate Event Coverage",
        description:
          "Our corporate event coverage services ensure that every important moment is professionally documented for your company’s archive.",
      },
      {
        href: "/services/Web Development",
        key: "web_dev",
        label: "Web Development",
        description:
          "We design and develop custom websites that are responsive, user-friendly, and tailored to your business goals.",
      },
      {
        href: "/services/Rapporteur Services",
        key: "rapporteur_services",
        label: "Rapporteur Services",
        description:
          "Our rapporteur services provide accurate and detailed documentation of meetings, conferences, and events, ensuring that every important point is captured.",
      },
    ],
  },

  { href: "/pricing", key: "pricing", label: "Pricing" },
  { href: "/contact-us", key: "contact_us", label: "Contact Us" },
];
