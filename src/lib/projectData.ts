// /lib/data/projects.ts

export type ProjectCategory =
  | "Office"
  | "Hotel and Resort"
  | "Hospital"
  | "Restaurant, Bar and Microbrewery"
  | "Commercial"
  | "Highways and Toll Plaza"
  | "Modern Villa"
  | "Gym";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  location: string;
  year: number;
  coverImage: string;
  images: string[];
};

export const projects: Project[] = [
  /*--------------- Office Projects ----------------*/
  {
    title: "Urban Company, Corporate Office",
    slug: "urban-company-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Plot-183 Udyog Vihar Phase-I, Gurugram",
    year: 2023,
    coverImage: "/images/projects/urban-company-office-6.jpg",
    images: [
      "/images/projects/urban-company-office-1.jpg",
      "/images/projects/urban-company-office-2.jpg",
      "/images/projects/urban-company-office-3.jpg",
      "/images/projects/urban-company-office-4.jpg",
      "/images/projects/urban-company-office-5.jpg",
      "/images/projects/urban-company-office-7.jpg",
      "/images/projects/urban-company-office-8.jpg",
      "/images/projects/urban-company-office-9.jpg",
      "/images/projects/urban-company-office-10.jpg",
      "/images/projects/urban-company-office-11.jpg",
      "/images/projects/urban-company-office-12.jpg",
      "/images/projects/urban-company-office-13.jpg",
      "/images/projects/urban-company-office-14.jpg",
      "/images/projects/urban-company-office-15.jpg",
    ],
  },
  {
    title: "Hotel Red Velvet, Corporate Office",
    slug: "red-velvet-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Gurugram",
    year: 2023,
    coverImage: "/images/projects/red-velvet-office.jpg",
    images: [
      "/images/projects/red-velvet-office.jpg",
      "/images/projects/red-velvet-office-2.jpg",
      "/images/projects/red-velvet-office-3.jpg",
      "/images/projects/red-velvet-office-4.jpg",
    ],
  },
  {
    title: "Goldmine Office , Urbtech",
    slug: "urbtech-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Sector-138, Noida, Uttar Pradesh",
    year: 2023,
    coverImage: "/images/projects/urbtech-office.jpg",
    images: [
      "/images/projects/urbtech-office.jpg",
      "/images/projects/urbtech-office-2.jpg",
      "/images/projects/urbtech-office-3.jpg",
      "/images/projects/urbtech-office-4.jpg",
    ],
  },
  {
    title: "Zimbabwe Ambassador Home Office",
    slug: "defence-colony-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Defense Colony, New Delhi",
    year: 2023,
    coverImage: "/images/projects/defence-colony-office.jpg",
    images: [
      "/images/projects/defence-colony-office.jpg",
      "/images/projects/defence-colony-office-2.jpg",
      "/images/projects/defence-colony-office-3.jpg",
    ],
  },
  {
    title: "Go Work, Co-Working Offices",
    slug: "go-works-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Udyog Vihar Phase-I, Gurugram",
    year: 2023,
    coverImage: "/images/projects/GoWork-1.jpg",
    images: [
      "/images/projects/GoWork-1.jpg",
      "/images/projects/GoWork-2.jpg",
      "/images/projects/GoWork-3.jpg",
      "/images/projects/GoWork-4.jpg",
      "/images/projects/GoWork-5.jpg",
      "/images/projects/GoWork-10.jpg",
      "/images/projects/GoWork-11.jpg",
      "/images/projects/GoWork-12.jpg",
      "/images/projects/GoWork-13.jpg",
      "/images/projects/GoWork-14.jpg",
    ],
  },
  {
    title: "New Door, Real Estate Consultant Office",
    slug: "new-door-success-tower",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Success Tower, Sector-62, Noida",
    year: 2023,
    coverImage: "/images/projects/new-door-success-tower.jpg",
    images: [
      "/images/projects/new-door-success-tower.jpg",
      "/images/projects/new-door-success-tower-1.jpg",
      "/images/projects/new-door-success-tower-2.jpg",
      "/images/projects/new-door-success-tower-3.jpg",
      "/images/projects/new-door-success-tower-4.jpg",
      "/images/projects/new-door-success-tower-5.jpg",
      "/images/projects/new-door-success-tower-6.jpg",
      "/images/projects/new-door-success-tower-7.jpg",
    ],
  },
  {
    title: "CIBT Corporate Office",
    slug: "cibt-corporate-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Gurugram",
    year: 2023,
    coverImage: "/images/projects/cibt-office.jpg",
    images: [
      "/images/projects/cibt-office.jpg",
      "/images/projects/cibt-office-1.jpg",
      "/images/projects/cibt-office-2.jpg",
      "/images/projects/cibt-office-3.jpg",
      "/images/projects/cibt-office-4.jpg",
      "/images/projects/cibt-office-5.jpg",
      "/images/projects/cibt-office-6.jpg",
      "/images/projects/cibt-office-7.jpg",
      "/images/projects/cibt-office-8.jpg",
      "/images/projects/cibt-office-9.jpg",
    ],
  },
  {
    title: "Prabhattyam Solvex  Pvt Limited",
    slug: "prabhattyam-solvex-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Sector 135, Noida",
    year: 2023,
    coverImage: "/images/projects/sector-135-office.jpg",
    images: [
      "/images/projects/sector-135-office.jpg",
      "/images/projects/sector-135-office-1.jpg",
      "/images/projects/sector-135-office-2.jpg",
      "/images/projects/sector-135-office-3.jpg",
      "/images/projects/sector-135-office-4.jpg",
      "/images/projects/sector-135-office-5.jpg",
      "/images/projects/sector-135-office-6.jpg",
    ],
  },
  {
    title: "General Commandant Office",
    slug: "general-commandant-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Delhi Cantonment, Delhi",
    year: 2023,
    coverImage: "/images/projects/office-for-general-commandant.jpg",
    images: [
      "/images/projects/office-for-general-commandant.jpg",
      "/images/projects/office-for-general-commandant-2.jpg",
      "/images/projects/office-for-general-commandant-3.jpg",
    ],
  },
  {
    title: "Perfect House",
    slug: "perfect-house-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "DLF Phase-II, Gurugram",
    year: 2023,
    coverImage: "/images/projects/the-perfect-house-office.jpg",
    images: [
      "/images/projects/the-perfect-house-office-1.jpg",
      "/images/projects/the-perfect-house-office-2.jpg",
      "/images/projects/the-perfect-house-office-3.jpg",
    ],
  },
  {
    title: "DM 23",
    slug: "dm-23-real-estate-office",
    category: "Office",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "DLF Phase-III, Gurugram",
    year: 2023,
    coverImage: "/images/projects/real-estate-office.jpg",
    images: ["/images/projects/real-estate-office.jpg"],
  },

  /*--------------- Hotels ----------------*/
  {
    title: "Punjabi Haveli & Resort",
    slug: "punjabi-haveli-jammu",
    category: "Hotel and Resort",
    description:
      "Hotel and resort design should create relaxing, comfortable spaces using natural materials and light, flexible areas, and local culture for a unique, refreshing guest experience.",
    location: "Katra, Jammu",
    year: 2024,
    coverImage: "/images/projects/punjabi-haveli-jammu-1.jpg",
    images: [
      "/images/projects/punjabi-haveli-jammu-1.jpg",
      "/images/projects/punjabi-haveli-jammu-2.jpg",
      "/images/projects/punjabi-haveli-jammu-3.jpg",
      "/images/projects/punjabi-haveli-jammu-4.png",
      "/images/projects/punjabi-haveli-jammu-5.jpg",
    ],
  },
  {
    title: "Radison Blu Hotel",
    slug: "radison-hotel",
    category: "Hotel and Resort",
    description:
      "Hotel and resort design should create relaxing, comfortable spaces using natural materials and light, flexible areas, and local culture for a unique, refreshing guest experience.",
    location: "Sohna Road, Gurugram",
    year: 2024,
    coverImage: "/images/projects/radison-hotel-front.jpg",
    images: [
      "/images/projects/radison-hotel-front.jpg",
      "/images/projects/radison-hotel-front-2.jpg",
      "/images/projects/radison-hotel-front-3.jpg",
    ],
  },
  {
    title: "Red Velvet Hotel",
    slug: "red-velvet-hotel",
    category: "Hotel and Resort",
    description:
      "Hotel and resort design should create relaxing, comfortable spaces using natural materials and light, flexible areas, and local culture for a unique, refreshing guest experience.",
    location: "Patna, Bihar",
    year: 2024,
    coverImage: "/images/projects/red-velvet-1.jpg",
    images: [
      "/images/projects/red-velvet-1.jpg",
      "/images/projects/red-velvet-2.jpg",
      "/images/projects/red-velvet-3.jpg",
      "/images/projects/red-velvet-4.jpg",
    ],
  },

  /*------------------ Hospital -------------------- */
  {
    title: "Sanar Multispeciality Hospital",
    slug: "sanar-multispeciality-hospital",
    category: "Hospital",
    description:
      "Hospital design should create clean, comfortable, calming environments promoting healing through natural light, soothing colours, clutter-free layouts, proper ventilation, noise control, and green spaces for patient and staff well-being.",
    location: "Gurugram",
    year: 2024,
    coverImage: "/images/projects/sanar-hospital-1.jpg",
    images: [
      "/images/projects/sanar-hospital-1.jpg",
      "/images/projects/sanar-hospital-2.jpg",
      "/images/projects/sanar-hospital-3.jpg",
      "/images/projects/sanar-hospital-4.jpg",
      "/images/projects/sanar-hospital-5.jpg",
    ],
  },

  /*--------------- Restaurant, Bar and Microbrewery ----------------*/
  {
    title: "Back 2 Bar",
    slug: "back-2-bar",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Rajouri",
    year: 2024,
    coverImage: "/images/projects/back-2-back-bar.jpg",
    images: [
      "/images/projects/back-2-back-bar-1.jpg",
      "/images/projects/back-2-back-bar-2.jpg",
    ],
  },
  {
    title: "Bellvino Night Club",
    slug: "bellvino-night-club",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/bellvino-night-club.png",
    images: [
      "/images/projects/bellvino-night-club.png",
      "/images/projects/bellvino-night-club-1.jpg",
      "/images/projects/bellvino-night-club-2.jpg",
      "/images/projects/bellvino-night-club-3.png",
      "/images/projects/bellvino-night-club-4.png",
      "/images/projects/bellvino-night-club-5.png",
      "/images/projects/bellvino-night-club-6.png",
      "/images/projects/bellvino-night-club-7.jpg",
      "/images/projects/bellvino-night-club-8.jpg",
      "/images/projects/bellvino-night-club-9.jpg",
      "/images/projects/bellvino-night-club-10.jpg",
      "/images/projects/bellvino-night-club-11.jpg",
      "/images/projects/bellvino-night-club-12.jpg",
    ],
  },
  {
    title: "Castle Barbeque",
    slug: "castle-barbeque",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Ludhiana",
    year: 2024,
    coverImage: "/images/projects/castle-barbeque.jpg",
    images: [
      "/images/projects/castle-barbeque.jpg",
      "/images/projects/castle-barbeque-1.jpg",
      "/images/projects/castle-barbeque-2.jpg",
    ],
  },
  {
    title: "Green House",
    slug: "green-house",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Sector 49, Gurugram",
    year: 2024,
    coverImage: "/images/projects/green-house.jpg",
    images: [
      "/images/projects/green-house.jpg",
      "/images/projects/green-house-1.jpg",
    ],
  },
  {
    title: "Night Club at Mombasa",
    slug: "night-club-at-mombasa",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Kenya",
    year: 2024,
    coverImage: "/images/projects/night-club-at-mombasa.jpg",
    images: [
      "/images/projects/night-club-at-mombasa.jpg",
      "/images/projects/night-club-at-mombasa-1.jpg",
    ],
  },
  {
    title: "Quaff Brewing",
    slug: "quaff-brewing",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "DLF Cyber City, Gurugram",
    year: 2024,
    coverImage: "/images/projects/quaff-brewing.jpg",
    images: [
      "/images/projects/quaff-brewing.jpg",
      "/images/projects/quaff-brewing-1.jpg",
      "/images/projects/quaff-brewing-2.jpg",
    ],
  },
  {
    title: "Tangy House Restro Bar",
    slug: "tangy-house-restro-bar",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Sushant Lok II, Gurugram",
    year: 2024,
    coverImage: "/images/projects/tangy-house.jpg",
    images: [
      "/images/projects/tangy-house.jpg",
      "/images/projects/tangy-house-1.jpg",
      "/images/projects/tangy-house-2.jpg",
    ],
  },
  {
    title: "Vapour Bar Exchange",
    slug: "vapour-bar-exchange",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Ludhiana",
    year: 2024,
    coverImage: "/images/projects/vapour-bar.jpg",
    images: [
      "/images/projects/vapour-bar-3.jpg",
      "/images/projects/vapour-bar-2.jpg",
      "/images/projects/vapour-bar-1.jpg",
    ],
  },
  {
    title: "Wall Street Bar",
    slug: "wall-street-bar",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Ludhiana",
    year: 2024,
    coverImage: "/images/projects/wall-street-1.jpg",
    images: [
      "/images/projects/wall-street-1.jpg",
      "/images/projects/wall-street-2.jpg",
      "/images/projects/wall-street-3.jpg",
    ],
  },

  /*--------------- Brewery Projects ----------------*/

  {
    title: "Barrels of Brew",
    slug: "barrels-of-brew",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Chautala Club, Sirsa, Haryana",
    year: 2024,
    coverImage: "/images/projects/barrels-of-brew-1.jpg",
    images: [
      "/images/projects/barrels-of-brew-1.jpg",
      "/images/projects/barrels-of-brew-2.jpg",
    ],
  },
  {
    title: "Brew Lab Microbrewery",
    slug: "brew-lab",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Sector-54, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/brew-lab-1.jpg",
    images: [
      "/images/projects/brew-lab-1.jpg",
      "/images/projects/brew-lab-2.jpg",
    ],
  },
  {
    title: "Brew Window",
    slug: "brew-window",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "SS Plaza, Sector-47, Gurgaon",
    year: 2024,
    coverImage: "/images/projects/brew-window-1.png",
    images: [
      "/images/projects/brew-window-1.png",
      "/images/projects/brew-window-2.png",
    ],
  },
  {
    title: "Food Frolic",
    slug: "food-frolic",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Sector-84, Manesar, Haryana",
    year: 2024,
    coverImage: "/images/projects/food-frolic-1.jpg",
    images: [
      "/images/projects/food-frolic-1.jpg",
      "/images/projects/food-frolic-2.jpg",
      "/images/projects/food-frolic-3.jpg",
    ],
  },
  {
    title: "Michigun Tap",
    slug: "michigun-tap",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Global Foyer, Sector-44, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/michigun-tap-1.jpg",
    images: [
      "/images/projects/michigun-tap-1.jpg",
      "/images/projects/michigun-tap-2.jpg",
      "/images/projects/michigun-tap-3.jpg",
    ],
  },
  {
    title: "Norenj",
    slug: "norenj",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Sector-47, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/norenj-1.png",
    images: [
      "/images/projects/norenj-1.png",
      "/images/projects/norenj-2.png",
      "/images/projects/norenj-3.png",
      "/images/projects/norenj-4.png",
    ],
  },
  {
    title: "Not Just Paranthas",
    slug: "not-just-paranthas",
    category: "Restaurant, Bar and Microbrewery",
    description:
      "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
    location: "Pavelion Mall, Ludhiana, Punjab",
    year: 2024,
    coverImage: "/images/projects/not-just-paranthas-4.jpg",
    images: [
      "/images/projects/not-just-paranthas-1.jpg",
      "/images/projects/not-just-paranthas-2.jpg",
      "/images/projects/not-just-paranthas-3.jpg",
      "/images/projects/not-just-paranthas-4.jpg",
      "/images/projects/not-just-paranthas-5.jpg",
    ],
  },

  /*--------------- Commercial Projects ----------------*/

  {
    title: "BSTS Tower",
    slug: "bsts-corporate-plaza",
    category: "Commercial",
    description:
      "Effective commercial space design harmonizes functionality, aesthetics, and user experience through thoughtful space planning, layered lighting, durable materials, and flexible layouts. Clear circulation paths, defined zones, and ample room for fixtures and furniture ensure smooth flow.",
    location: "Udyog Vihar Phase-1, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/bsts-corporate-plaza.jpg",
    images: ["/images/projects/bsts-corporate-plaza.jpg"],
  },
  {
    title: "Project SS Plaza",
    slug: "project-ss-plaza",
    category: "Commercial",
    description:
      "Effective commercial space design harmonizes functionality, aesthetics, and user experience through thoughtful space planning, layered lighting, durable materials, and flexible layouts. Clear circulation paths, defined zones, and ample room for fixtures and furniture ensure smooth flow.",
    location: "Re-development, Sector-47, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/project-ss-plaza.jpg",
    images: [
      "/images/projects/project-ss-plaza.jpg",
      "/images/projects/project-ss-plaza-2.jpg",
    ],
  },

  /*--------------- Highways & Toll Plaza ----------------*/

  {
    title: "Highway Toll Plaza and Others Facilities Development",
    slug: "highways-and-toll-plaza",
    category: "Highways and Toll Plaza",
    description:
      "Highway and toll plaza designs emphasizing efficiency, safety, and sustainability. Wide lanes, clear signage, and electronic tolling ensure smooth traffic flow and minimal delays. A continuous green belt of native trees and shrubs, alongside the road and around the plaza absorbs emissions, reduces noise, and manages rainwater naturally.",
    location: "Hajipur(Delhi - Mumbai Expressway), Haryana",
    year: 2024,
    coverImage: "/images/projects/highways-toll-plaza.jpg",
    images: [
      "/images/projects/highways-toll-plaza.jpg",
      "/images/projects/highways-toll-plaza-2.jpg",
      "/images/projects/highways-toll-plaza-3.jpg",
      "/images/projects/highways-toll-plaza-4.jpg",
      "/images/projects/highways-toll-plaza-5.jpg",
      "/images/projects/highways-toll-plaza-6.jpg",
      "/images/projects/highways-toll-plaza-7.jpg",
      "/images/projects/highways-toll-plaza-8.jpg",
    ],
  },

  /*--------------- Residential Projects ----------------*/
  {
    title: "House",
    slug: "pataudi-house",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Pataudi, Haryana",
    year: 2024,
    coverImage: "/images/projects/villa-cover.jpg",
    images: [
      "/images/projects/villa-1.jpg",
      "/images/projects/villa-2.jpg",
      "/images/projects/villa-3.jpg",
      "/images/projects/villa-4.jpg",
      "/images/projects/villa-5.jpg",
    ],
  },
  {
    title: "Agarwal Villa",
    slug: "agarwal-villa",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "DLF Phase-2, Gurgaon, Haryana",
    year: 2024,
    coverImage: "/images/projects/anm-45-46.jpg",
    images: [
      "/images/projects/anm-45-46-1.jpg",
      "/images/projects/anm-45-46-2.jpg",
    ],
  },
  {
    title: "DLF Phase 4",
    slug: "dlf-phase-4",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/dlf-phase-4.jpg",
    images: [
      "/images/projects/dlf-phase-4-1.jpeg",
      "/images/projects/dlf-phase-4-2.jpg",
      "/images/projects/dlf-phase-4-3.jpeg",
    ],
  },
  {
    title: "J-2, Sector-83",
    slug: "j-2-sector-83",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/j-2,sector-83-gurgaon-india.jpg",
    images: [
      "/images/projects/j-2-sector-83-gurgaon-india-1.jpg",
      "/images/projects/j-2-sector-83-gurgaon-india-2.jpg",
      "/images/projects/j-2-sector-83-gurgaon-india-3.jpg",
      "/images/projects/j-2-sector-83-gurgaon-india-4.jpg",
      "/images/projects/j-2-sector-83-gurgaon-india-5.jpg",
    ],
  },
  {
    title: "K-Block-1485, Palam Vihar",
    slug: "k-block-1485-palam-vihar",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/k-block-1485-palam-vihar.jpg",
    images: ["/images/projects/k-block-1485-palam-vihar.jpg"],
  },
  {
    title: "Sector 83, India Next",
    slug: "sector-83-india-next",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/sector-83-india-next-gurgaon.jpg",
    images: [
      "/images/projects/sector-83-india-next-gurgaon.jpg",
      "/images/projects/sector-83-india-next-gurgaon-1.jpg",
      "/images/projects/sector-83-india-next-gurgaon-2.jpg",
      "/images/projects/sector-83-india-next-gurgaon-3.jpg",
      "/images/projects/sector-83-india-next-gurgaon-4.jpg",
      "/images/projects/sector-83-india-next-gurgaon-5.jpg",
      "/images/projects/sector-83-india-next-gurgaon-6.jpg",
      "/images/projects/sector-83-india-next-gurgaon-7.jpg",
    ],
  },
  {
    title: "Sector-31, 975 P",
    slug: "sector-31-975-p",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Gurgaon",
    year: 2024,
    coverImage: "/images/projects/sector-31-975-p.jpg",
    images: ["/images/projects/sector-31-975-p.jpg"],
  },
  {
    title: "Studio Appartment, Senate Court",
    slug: "studio-appartment-senate-court",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Haryana",
    year: 2024,
    coverImage: "/images/projects/studio-appartment.jpg",
    images: [
      "/images/projects/studio-appartment.jpg",
      "/images/projects/studio-appartment-1.jpg",
      "/images/projects/studio-appartment-2.jpg",
    ],
  },
  {
    title: "Vatika India, Next",
    slug: "vatika-india-next",
    category: "Modern Villa",
    description:
      "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
    location: "Haryana",
    year: 2024,
    coverImage: "/images/projects/vatika-india-next-1.jpg",
    images: [
      "/images/projects/vatika-india-next-1.jpg",
      "/images/projects/vatika-india-next-2.jpg",
      "/images/projects/vatika-india-next-3.jpg",
    ],
  },

  /*--------------- Gym ----------------*/

  {
    title: "Volt Fitness Gym",
    slug: "volt-fitness-gym",
    category: "Gym",
    description:
      "Gym interior design prioritizes functionality and motivation through strategic zoning, appropriate lighting, durable materials, ventilation, mirrors for form checking, and energizing colour schemes.",
    location: "Sector 31",
    year: 2024,
    coverImage: "/images/projects/gym-v-1.jpg",
    images: [
      "/images/projects/gym-v-1.jpg",
      "/images/projects/gym-v-2.jpg",
      "/images/projects/gym-v-3.jpg",
      "/images/projects/gym-v-4.jpg",
      "/images/projects/gym-v-5.jpg",
    ],
  },
  {
    title: "Sirsa Fitness Gym",
    slug: "sirsa-fitness-gym",
    category: "Gym",
    description:
      "Gym interior design prioritizes functionality and motivation through strategic zoning, appropriate lighting, durable materials, ventilation, mirrors for form checking, and energizing colour schemes.",
    location: "Sirsa, Haryana",
    year: 2024,
    coverImage: "/images/projects/sirsa-gym-view-1.jpg",
    images: [
      "/images/projects/sirsa-gym-view-1.jpg",
      "/images/projects/sirsa-gym-view-2.jpg",
      "/images/projects/sirsa-gym-view-3.jpg",
      "/images/projects/sirsa-gym-view-4.jpg",
      "/images/projects/sirsa-gym-view-5.jpg",
      "/images/projects/sirsa-gym-view-6.jpg",
      "/images/projects/sirsa-gym-view-7.jpg",
      "/images/projects/sirsa-gym-view-8.jpg",
    ],
  },
];
