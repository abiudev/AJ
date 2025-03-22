import { IoCodeSlash, IoCamera, IoVideocam, IoCalendar, IoDocument } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  {
    key: "services",
    label: "Services",
    subLinks: [
      { 
        href: "/services/photography", 
        key: "photography", 
        label: "Photography", 
        description: "We offer professional photography services to capture the essence of your special moments and events with high-quality imagery.",
        icon: <IoCamera className="h-5 w-5 text-orange-500" />
      },
      { 
        href: "/services/digital-marketing", 
        key: "digitalmarketing", 
        label: "Digital Marketing", 
        description: "We create data-driven digital marketing strategies that boost brand visibility, drive engagement, and maximize conversions.",
        icon: <FaChartLine className="h-5 w-5 text-orange-500" />
      },
      { 
        href: "/services/videography", 
        key: "videography", 
        label: "Videography", 
        description: "Our videography services bring your events to life, providing captivating videos that tell your story with precision and creativity.",
        icon: <IoVideocam className="h-5 w-5 text-orange-500" />
      },
      { 
        href: "/services/event-management", 
        key: "corporateEventManagement", 
        label: "Corporate Event Management", 
        description: "We specialize in organizing and managing corporate events, ensuring flawless execution and memorable experiences for your attendees.",
        icon: <IoCalendar className="h-5 w-5 text-orange-500" />
      },
      { 
        href: "/services/software-development", 
        key: "softwareDevelopment", 
        label: "Software Development", 
        description: "We design and develop custom websites that are responsive, user-friendly, and tailored to your business goals.",
        icon: <IoCodeSlash className="h-5 w-5 text-orange-500" />
      },
      { 
        href: "/services/rapporteuring-services", 
        key: "rapporteurServices", 
        label: "Rapporteur Services", 
        description: "Our rapporteur services provide accurate and detailed documentation of meetings, conferences, and events, ensuring that every important point is captured.",
        icon: <IoDocument className="h-5 w-5 text-orange-500" />
      },
    ],
  },
  { href: "/about-us", key: "about_us", label: "About Us" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
];

export const Services = [
  {
    href: "/services/photography",
    key: "photography",
    label: "Photography",
    description: "We offer professional photography services to capture the essence of your special moments and events with high-quality imagery.",
    image: "/photography.jpg",
  },
  {
    href: "/services/digital-marketing",
    key: "digitalmarketing",
    label: "Digital Marketing",
    description: "We create data-driven digital marketing strategies that boost brand visibility, drive engagement, and maximize conversions.",
    image: "/digital.jpg",
  },
  {
    href: "/services/videography",
    key: "videography",
    label: "Videography",
    description: "Our videography services bring your events to life, providing captivating videos that tell your story with precision and creativity.",
    image: "/videography.png",
  },
  {
    href: "/services/event-management",
    key: "corporateEventManagement",
    label: "Corporate Event Management",
    description: "We specialize in organizing and managing corporate events, ensuring flawless execution and memorable experiences for your attendees.",
    image: "/event.png",
  },
  {
    href: "/services/software-development",
    key: "webDevelopment",
    label: "Web Development",
    description: "We design and develop custom websites that are responsive, user-friendly, and tailored to your business goals.",
    image: "/webdev.png",
  },
  {
    href: "/services/rapporteuring-services",
    key: "rapporteurServices",
    label: "Rapporteur Services",
    description: "Our rapporteur services provide accurate and detailed documentation of meetings, conferences, and events, ensuring that every important point is captured.",
    image: "/rap.png",
  },
];

export const serviceFeatures = {
  digitalmarketing: [
    "Results-driven marketing strategies",
    "Targeted campaigns for maximum impact",
    "Data-backed insights for better conversion",
    "Creative content that engages and sells",
  ],
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
};

export const guarantees = [
  {
    header: "Unmatched Expertise",
    text: "Our team comprises industry professionals with years of experience in their respective fields. We bring a deep understanding of trends, tools, and best practices to every project. This ensures you receive top-quality services tailored to your specific needs.",
  },
  {
    header: "Commitment to Quality",
    text: "We are dedicated to delivering exceptional results that meet the highest standards. Our rigorous quality checks ensure that every detail is perfected. Your satisfaction drives our commitment to excellence.",
  },
  {
    header: "Personalized Solutions",
    text: "Every client and project is unique, and so is our approach. We take the time to understand your goals and customize our services to achieve them. This ensures you get a solution that’s perfectly aligned with your vision.",
  },
  {
    header: "Timely Delivery",
    text: "Meeting deadlines is a cornerstone of our work ethic. We prioritize efficient project management to ensure on-time delivery without compromising quality. Your time is valuable, and we respect that.",
  },
];
