/**
 * SAKTHI MOTORS — Official Dealership Script & Centralized Vehicle Dataset
 * Authorized Bajaj Motorcycle Dealership | Chinnamanur, Theni, Tamil Nadu
 * Established: 2016 | 10+ Years of Dealership Experience
 * Primary Palette: Cobalt Blue (#004DA8) & Cloud Burst Dark Navy (#1E2B56)
 */

/* ==========================================================================
   1. DEALERSHIP MASTER CONFIGURATION
   ========================================================================== */
const DEALERSHIP_INFO = {
  name: "SAKTHI MOTORS",
  tagline: "Your Journey, Our Commitment",
  established: 2016,
  experience: "10+ Years of Experience",
  type: "Authorized Bajaj Motorcycle Dealership",
  location: "Chinnamanur, Theni, Tamil Nadu",
  address: "Venkateshwara Theater near, Chinnamanur, Theni, Tamil Nadu 625515",
  email: "sakthimotors2016@gmail.com",
  phone1: "9384946001", // Call + WhatsApp
  phone2: "9384946002", // Call only
  phone3: "9384946003", // Call only
  whatsappUrl: "https://wa.me/919384946001",
  mapsUrl: "https://maps.app.goo.gl/SHc75NPwitBBK4tt9"
};

/* ==========================================================================
   BACKEND API ENDPOINTS (GOOGLE APPS SCRIPT WEB APPS)
   ========================================================================== */
// Paste your Google Apps Script Web App URL for Service Booking below:
const SERVICE_BOOKING_API = "https://script.google.com/macros/s/AKfycbx48GbmXn0EqIw8jsBuhKOZnXpf6UKi4gY7NL2urkV_qjja7ddNZw1Y9VDnPBrFabxqYw/exec";

// Google Apps Script Web App URL for Contact Inquiries:
const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbz8I62g9I2rdG3Iz_HDhulBziv5X58BwYAANa11NhaLgDZkNr5OpysqOS3iPsRu0hKE3g/exec";

/* ==========================================================================
   2. CENTRALIZED VEHICLE DATASET (18 MODELS ACROSS 6 DISTINCT CATEGORIES)
   ========================================================================== */
const vehicles = [
  // --- 1. DOMINAR CATEGORY ---
  {
    id: "dominar-400",
    name: "Dominar 400",
    category: "Dominar",
    tagline: "Born to Sprint, Built to Tour",
    image: "assets/images/vehicles/dominar-400/main.webp",
    gallery: [
      "assets/images/vehicles/dominar-400/main.webp",
      "assets/images/vehicles/dominar-400/front.webp",
      "assets/images/vehicles/dominar-400/side.webp",
      "assets/images/vehicles/dominar-400/rear.webp"
    ],
    description: "Flagship sports tourer engineered for long-distance highway performance with a potent 373cc engine, factory-fitted touring visor, hand guards, engine bash plate, and luggage carrier.",
    features: [
      "Factory-Fitted Tall Touring Windshield & Hand Guards",
      "Assist and Slipper Clutch for Effortless Downshifts",
      "43mm Upside Down (USD) Front Suspension Forks",
      "Full LED Headlamp with Auto Headlamp On (AHO)",
      "Integrated Rear Pillion Backrest & Luggage Carrier",
      "Twin Barrel Sports Performance Exhaust System"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, DOHC, 4 Valve, Liquid Cooled, Triple Spark, FI",
      displacement: "373.3 cc",
      power: "40 PS (29.4 kW) @ 8,800 RPM",
      torque: "35 Nm @ 6,500 RPM",
      transmission: "6-Speed with Assist & Slipper Clutch",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 320mm Front Disc / 230mm Rear Disc",
      frontTyre: "110/70 R17 Radial",
      rearTyre: "150/60 R17 Radial",
      kerbWeight: "193 kg",
      fuelTank: "13 Litres"
    }
  },
  {
    id: "dominar-250",
    name: "Dominar 250",
    category: "Dominar",
    tagline: "Touring Excellence Made Accessible",
    image: "assets/images/vehicles/dominar-250/main.webp",
    gallery: [
      "assets/images/vehicles/dominar-250/main.webp",
      "assets/images/vehicles/dominar-250/front.webp",
      "assets/images/vehicles/dominar-250/side.webp",
      "assets/images/vehicles/dominar-250/rear.webp"
    ],
    description: "Versatile sports tourer designed to deliver composed highway stability and agile city cruising, powered by a refined liquid-cooled DOHC engine and advanced beam-type perimeter frame.",
    features: [
      "37mm USD Inverted Telescopic Front Forks",
      "Dual-Channel ABS Braking with Radial Calipers",
      "Beam-Type Perimeter Chassis for Dynamic Rigidity",
      "Slipper Clutch Technology for Smooth Gear Shifts",
      "Signature Full LED Lighting with Auto Headlamp On",
      "Twin Barrel Exhaust with Deep Resonant Note"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, DOHC, 4 Valve, Liquid Cooled, Twin Spark, FI",
      displacement: "248.77 cc",
      power: "27 PS (19.85 kW) @ 8,500 RPM",
      torque: "23.5 Nm @ 6,500 RPM",
      transmission: "6-Speed Manual Gearbox",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      frontTyre: "100/80-17 Tubeless",
      rearTyre: "130/70-17 Tubeless",
      kerbWeight: "180 kg",
      fuelTank: "13 Litres"
    }
  },

  // --- 2. PULSAR CATEGORY ---
  {
    id: "pulsar-ns400z",
    name: "Pulsar NS 400Z",
    category: "Pulsar",
    tagline: "The Biggest & Most Powerful Pulsar Ever",
    image: "assets/images/vehicles/pulsar-ns400z/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-ns400z/main.webp",
      "assets/images/vehicles/pulsar-ns400z/front.webp",
      "assets/images/vehicles/pulsar-ns400z/side.webp",
      "assets/images/vehicles/pulsar-ns400z/rear.webp"
    ],
    description: "The ultimate flagship naked streetfighter and the most powerful Pulsar ever built, engineered with a 373cc liquid-cooled DOHC 4-valve engine, 43mm gold-anodized inverted front forks, 4 selectable ride modes, switchable traction control, and ride-by-wire electronic throttle.",
    features: [
      "43mm USD Inverted Front Suspension Forks (Gold Anodized)",
      "4 Selectable Riding Modes (Road, Rain, Sport, Off-Road)",
      "Switchable Traction Control & Ride-by-Wire Electronic Throttle",
      "Dual-Channel ABS with 320mm Front & 230mm Rear Disc Brakes",
      "Full-Color Digital LCD Display with Bluetooth & Turn-by-Turn Navigation",
      "Bi-Functional LED Projector Headlamp with Signature Lightning Bolt DRLs"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, DOHC, 4 Valve, Liquid Cooled, FI",
      displacement: "373.27 cc",
      power: "40 PS (29.4 kW) @ 8,800 RPM",
      torque: "35 Nm @ 6,500 RPM",
      transmission: "6-Speed with Assist & Slipper Clutch",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 320mm Front Disc / 230mm Rear Disc",
      frontTyre: "110/70 R17 Tubeless",
      rearTyre: "140/70 R17 Tubeless",
      kerbWeight: "174 kg",
      fuelTank: "12 Litres"
    }
  },
  {
    id: "pulsar-ns200",
    name: "Pulsar NS200",
    category: "Pulsar",
    tagline: "The Naked Streetfighter",
    image: "assets/images/vehicles/pulsar-ns200/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-ns200/main.webp",
      "assets/images/vehicles/pulsar-ns200/front.webp",
      "assets/images/vehicles/pulsar-ns200/side.webp",
      "assets/images/vehicles/pulsar-ns200/rear.webp"
    ],
    description: "Streetfighter equipped with high-revving liquid-cooled DTS-i engine, inverted front suspension, and aggressive naked stance for street and highway agility.",
    features: [
      "USD Inverted Telescopic Front Suspension Forks",
      "Dual-Channel Anti-Lock Braking System (ABS)",
      "Digital LCD Console with Gear Position & Distance-to-Empty",
      "Pressed-Steel Perimeter Frame for Dynamic Handling",
      "Signature Wolf-Eyed Projector Headlamp Styling",
      "Underbelly Exhaust with Centralized Mass"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, SOHC, 4 Valve, Liquid Cooled, Triple Spark DTS-i FI",
      displacement: "199.5 cc",
      power: "24.5 PS @ 9,750 RPM",
      torque: "18.74 Nm @ 8,000 RPM",
      transmission: "6-Speed Manual Gearbox",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      frontTyre: "100/80-17 Tubeless",
      rearTyre: "130/70-17 Tubeless",
      kerbWeight: "158 kg",
      fuelTank: "12 Litres"
    }
  },
  {
    id: "pulsar-n160",
    name: "Pulsar N160",
    category: "Pulsar",
    tagline: "Dual-Channel ABS Precision Streetfighter",
    image: "assets/images/vehicles/pulsar-n160/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-n160/main.webp",
      "assets/images/vehicles/pulsar-n160/front.webp",
      "assets/images/vehicles/pulsar-n160/side.webp",
      "assets/images/vehicles/pulsar-n160/rear.webp"
    ],
    description: "Engineered with a segment-first Dual-Channel ABS, bi-functional LED projector headlamp, underbelly exhaust, and refined 164.82cc oil-cooled DTS-i engine delivering punchy city throttle response and exceptional stability.",
    features: [
      "Dual-Channel Anti-Lock Braking System (ABS) with 300mm Front Disc",
      "Bi-Functional LED Projector Headlamp with LED DRLs",
      "Infinity Digital Console with Gear Position & Distance-to-Empty",
      "Underbelly Exhaust with Centralized Mass & Deep Note",
      "Tubeless Tyres for Confident High Speed Grip",
      "Mono-Shock Rear Suspension with Nitrox Gas"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, SOHC, 2-Valve, Oil-Cooled, FI",
      displacement: "164.82 cc",
      power: "16 PS (11.7 kW) @ 8,750 RPM",
      torque: "14.65 Nm @ 6,750 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      frontTyre: "100/80-17 Tubeless",
      rearTyre: "130/70-17 Tubeless",
      kerbWeight: "152 kg",
      fuelTank: "14 Litres"
    }
  },
  {
    id: "pulsar-rs200",
    name: "Pulsar RS200",
    category: "Pulsar",
    tagline: "The Fastest Indian Pulsar",
    image: "assets/images/vehicles/pulsar-rs200/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-rs200/main.webp",
      "assets/images/vehicles/pulsar-rs200/front.webp",
      "assets/images/vehicles/pulsar-rs200/side.webp",
      "assets/images/vehicles/pulsar-rs200/rear.webp"
    ],
    description: "Aerodynamically full-faired super-sport motorcycle engineered for racetrack agility and sharp high-speed stability, featuring triple spark 4-valve liquid cooling.",
    features: [
      "Aerodynamic Full Fairing with Crystal LED Tail Lights",
      "Twin Projector Headlamps with Daytime Running Lights",
      "Liquid-Cooled 4-Valve Triple Spark DTS-i Engine",
      "Dual Channel ABS Braking Architecture",
      "Perimeter Frame with Nitrox Piggyback Monoshock",
      "Race-Tuned Clip-On Handlebars"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, SOHC, 4 Valve, Liquid Cooled, Triple Spark, FI",
      displacement: "199.5 cc",
      power: "24.5 PS @ 9,750 RPM",
      torque: "18.7 Nm @ 8,000 RPM",
      transmission: "6-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      frontTyre: "100/80-17 Tubeless",
      rearTyre: "130/70-17 Tubeless",
      kerbWeight: "166 kg",
      fuelTank: "13 Litres"
    }
  },
  {
    id: "pulsar-ns160",
    name: "Pulsar NS160",
    category: "Pulsar",
    tagline: "Power Meets Precision Handling",
    image: "assets/images/vehicles/pulsar-ns160/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-ns160/main.webp",
      "assets/images/vehicles/pulsar-ns160/front.webp",
      "assets/images/vehicles/pulsar-ns160/side.webp",
      "assets/images/vehicles/pulsar-ns160/rear.webp"
    ],
    description: "Athletic naked roadster equipped with inverted front forks, dual-channel ABS, and twin spark oil-cooled engine tailored for urban agility.",
    features: [
      "Upside Down (USD) Front Suspension Forks",
      "Dual-Channel ABS with Perimeter Chassis Dynamics",
      "Oil-Cooled Twin Spark 4-Valve Engine",
      "Advanced Digital Instrument Cluster with DTE Indicator",
      "Nitrox Monoshock Suspension System",
      "Muscular Sculpted Fuel Tank Shrouds"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, SOHC, 4 Valve, Oil Cooled, Twin Spark DTS-i FI",
      displacement: "160.3 cc",
      power: "17.2 PS @ 9,000 RPM",
      torque: "14.6 Nm @ 7,250 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      frontTyre: "100/80-17 Tubeless",
      rearTyre: "130/70-17 Tubeless",
      kerbWeight: "152 kg",
      fuelTank: "12 Litres"
    }
  },
  {
    id: "pulsar-220f",
    name: "Pulsar 220F",
    category: "Pulsar",
    tagline: "The Timeless Power Icon",
    image: "assets/images/vehicles/pulsar-220f/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-220f/main.webp",
      "assets/images/vehicles/pulsar-220f/front.webp",
      "assets/images/vehicles/pulsar-220f/side.webp",
      "assets/images/vehicles/pulsar-220f/rear.webp"
    ],
    description: "The legendary half-faired touring icon celebrated for high-speed stability, comfortable touring aerodynamics, and twin-spark oil-cooled performance.",
    features: [
      "Aerodynamic Semi-Fairing with Tall Highway Visor",
      "Ultra-Bright Projector Headlamp for Night Cruising",
      "Oil-Cooled DTS-i Engine with Broad Torque Curve",
      "Single Channel ABS with Dual Disc Braking",
      "Clip-On Handlebars with Ergonomic Sport Position",
      "Twin Rear Shock Absorbers with 5-Step Adjustability"
    ],
    specifications: {
      engine: "4-stroke, 2-Valve, Twin Spark DTS-i, Oil Cooled, FI",
      displacement: "220 cc",
      power: "20.4 PS @ 8,500 RPM",
      torque: "18.55 Nm @ 7,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 280mm Front Disc / 230mm Rear Disc",
      frontTyre: "90/90-17 Tubeless",
      rearTyre: "120/80-17 Tubeless",
      kerbWeight: "160 kg",
      fuelTank: "15 Litres"
    }
  },
  {
    id: "pulsar-150",
    name: "Pulsar 150",
    category: "Pulsar",
    tagline: "India's Definitive Sport Commuter",
    image: "assets/images/vehicles/pulsar-150/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-150/main.webp",
      "assets/images/vehicles/pulsar-150/front.webp",
      "assets/images/vehicles/pulsar-150/side.webp",
      "assets/images/vehicles/pulsar-150/rear.webp"
    ],
    description: "The gold standard of sporty daily commuting in India, combining dependable fuel efficiency with muscular styling, wolf-eyed cowl, and twin-spark DTS-i power.",
    features: [
      "Signature Wolf-Eyed Cowl with Twin Pilot Lamps",
      "Twin Spark DTS-i Engine with Electronic Injection",
      "Anti-Lock Braking System (ABS) with 260mm Front Disc",
      "Nitrox Rear Shock Absorbers for Balanced Ride Quality",
      "Contoured Sport Seat with Aerodynamic Grab Rails",
      "Backlit Switchgear with Digital-Analog Console"
    ],
    specifications: {
      engine: "4-stroke, 2-Valve, Twin Spark DTS-i, Air Cooled, FI",
      displacement: "149.5 cc",
      power: "14 PS @ 8,500 RPM",
      torque: "13.25 Nm @ 6,500 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 260mm Front Disc / 130mm Rear Drum",
      frontTyre: "80/100-17 Tubeless",
      rearTyre: "100/90-17 Tubeless",
      kerbWeight: "148 kg",
      fuelTank: "15 Litres"
    }
  },
  {
    id: "pulsar-ns125",
    name: "Pulsar NS125",
    category: "Pulsar",
    tagline: "Next-Gen Street Sport",
    image: "assets/images/vehicles/pulsar-ns125/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-ns125/main.webp",
      "assets/images/vehicles/pulsar-ns125/front.webp",
      "assets/images/vehicles/pulsar-ns125/side.webp",
      "assets/images/vehicles/pulsar-ns125/rear.webp"
    ],
    description: "Youthful streetfighter featuring a rigid perimeter chassis, sporty split seating, and a high-revving 125cc DTS-i engine tuned for responsive city commutes.",
    features: [
      "Rigid Perimeter Frame for Confident Cornering",
      "Nitrox Monoshock Suspension Setup",
      "Combined Braking System (CBS) with Front Disc",
      "Signature LED Tail Lamp and Wolf-Eye Headlamp",
      "High-Rigidity Swingarm and Sport Split Seat",
      "Digital-Analog Instrument Console"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, SOHC, 4-Valve, Air Cooled, DTS-i FI",
      displacement: "124.45 cc",
      power: "11.8 PS @ 8,500 RPM",
      torque: "11 Nm @ 7,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "CBS Braking, 240mm Front Disc / 130mm Rear Drum",
      frontTyre: "80/100-17 Tubeless",
      rearTyre: "100/90-17 Tubeless",
      kerbWeight: "144 kg",
      fuelTank: "12 Litres"
    }
  },
  {
    id: "pulsar-125",
    name: "Pulsar 125",
    category: "Pulsar",
    tagline: "Power Meets Daily Economy",
    image: "assets/images/vehicles/pulsar-125/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-125/main.webp",
      "assets/images/vehicles/pulsar-125/front.webp",
      "assets/images/vehicles/pulsar-125/side.webp",
      "assets/images/vehicles/pulsar-125/rear.webp"
    ],
    description: "Sport commuter combining iconic Pulsar DNA, clip-on handlebars, and neon-themed body accents with fuel-efficient 125cc performance.",
    features: [
      "Segment-First Clip-On Sport Handlebars",
      "Twin Disc Options with Anti-Skid Braking System",
      "Twin Spark DTS-i Engine for High Fuel Efficiency",
      "Premium Neon Accent Graphics & Color-Coded Alloys",
      "Infiniti Twin-Strip LED Tail Lamp",
      "Gas-Charged Twin Nitrox Rear Shock Absorbers"
    ],
    specifications: {
      engine: "4-stroke, 2-Valve, Twin Spark DTS-i, Air Cooled, FI",
      displacement: "124.4 cc",
      power: "11.8 PS @ 8,500 RPM",
      torque: "10.8 Nm @ 6,500 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "CBS with 240mm Front Disc / 130mm Rear Drum",
      frontTyre: "80/100-17 Tubeless",
      rearTyre: "100/90-17 Tubeless",
      kerbWeight: "140 kg",
      fuelTank: "11.5 Litres"
    }
  },
  {
    id: "pulsar-180",
    name: "Pulsar 180",
    category: "Pulsar",
    tagline: "Raw Naked Muscle",
    image: "assets/images/vehicles/pulsar-180/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-180/main.webp",
      "assets/images/vehicles/pulsar-180/front.webp",
      "assets/images/vehicles/pulsar-180/side.webp",
      "assets/images/vehicles/pulsar-180/rear.webp"
    ],
    description: "Muscular street motorcycle celebrated for strong mid-range punch, responsive handling, split sport seats, and aggressive street stance.",
    features: [
      "Dual Disc Braking System with Single Channel ABS",
      "Sporty Split Seats with Deeply Contoured Profile",
      "Wide Tubeless Tyres for Confident Cornering",
      "High-Torque 180cc Air-Cooled DTS-i Powerplant",
      "LED Tail Lamp & Wolf-Eyed Sport Cowl",
      "5-Step Adjustable Nitrox Shock Absorbers"
    ],
    specifications: {
      engine: "4-stroke, 2-Valve, Twin Spark DTS-i, Air Cooled, FI",
      displacement: "178.6 cc",
      power: "17 PS @ 8,500 RPM",
      torque: "14.52 Nm @ 6,500 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 280mm Front Disc / 230mm Rear Disc",
      frontTyre: "90/90-17 Tubeless",
      rearTyre: "120/80-17 Tubeless",
      kerbWeight: "151 kg",
      fuelTank: "15 Litres"
    }
  },

  // --- 3. AVENGER CATEGORY ---
  {
    id: "avenger-cruise-220",
    name: "Avenger Cruise 220",
    category: "Avenger",
    tagline: "Feel Like God on the Open Road",
    image: "assets/images/vehicles/avenger-cruise-220/main.webp",
    gallery: [
      "assets/images/vehicles/avenger-cruise-220/main.webp",
      "assets/images/vehicles/avenger-cruise-220/front.webp",
      "assets/images/vehicles/avenger-cruise-220/side.webp",
      "assets/images/vehicles/avenger-cruise-220/rear.webp"
    ],
    description: "Classic cruiser built for relaxed highway journeys with low-slung seating, high highway windshield, cushioned pillion backrest, and chrome detailing.",
    features: [
      "Classic Chrome Highway Windshield for Wind Deflection",
      "Low-Slung Ergonomic Cruiser Seating (737 mm Seat Height)",
      "Padded Deluxe Pillion Backrest with Chrome Sissy Bar",
      "Multi-Spoke Classic Chrome Wheel Styling",
      "Digital Speedometer Pod with Service Reminder",
      "Wide Rear Tyre for Stable Highway Cruising"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, Oil Cooled, Twin Spark DTS-i FI",
      displacement: "220 cc",
      power: "19.03 PS @ 8,500 RPM",
      torque: "17.55 Nm @ 7,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 280mm Front Disc / 130mm Rear Drum",
      frontTyre: "90/90-17 (Spoke)",
      rearTyre: "130/90-15 (Spoke)",
      kerbWeight: "163 kg",
      fuelTank: "13 Litres"
    }
  },
  {
    id: "avenger-street-160",
    name: "Avenger Street 160",
    category: "Avenger",
    tagline: "Urban Cruiser with Dark Custom Styling",
    image: "assets/images/vehicles/avenger-street-160/main.webp",
    gallery: [
      "assets/images/vehicles/avenger-street-160/main.webp",
      "assets/images/vehicles/avenger-street-160/front.webp",
      "assets/images/vehicles/avenger-street-160/side.webp",
      "assets/images/vehicles/avenger-street-160/rear.webp"
    ],
    description: "Contemporary urban cruiser featuring blacked-out cosmetic treatment, flat handlebars for effortless city navigation, and responsive 160cc DTS-i power.",
    features: [
      "All-Black Dark Custom Treatment and Black Alloy Wheels",
      "Street Control Handlebar for Nimble City Maneuvers",
      "Low Seat Height with Forward-Set Footpegs",
      "Single Channel ABS Braking Protection",
      "LED DRL with Signature Headlamp Bezel",
      "Comfort-Tuned Suspension Setup"
    ],
    specifications: {
      engine: "Single Cylinder, 4-stroke, Air Cooled, Twin Spark DTS-i FI",
      displacement: "160 cc",
      power: "15 PS @ 8,500 RPM",
      torque: "13.7 Nm @ 7,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 280mm Front Disc / 130mm Rear Drum",
      frontTyre: "90/90-17 Tubeless",
      rearTyre: "130/90-15 Tubeless",
      kerbWeight: "156 kg",
      fuelTank: "13 Litres"
    }
  },

  // --- 4. PLATINA CATEGORY ---
  {
    id: "platina-110es",
    name: "Platina 110 ES",
    category: "Platina",
    tagline: "Comfort on Every Road with ABS Safety",
    image: "assets/images/vehicles/platina-110es/main.webp",
    gallery: [
      "assets/images/vehicles/platina-110es/main.webp",
      "assets/images/vehicles/platina-110es/front.webp",
      "assets/images/vehicles/platina-110es/side.webp",
      "assets/images/vehicles/platina-110es/rear.webp"
    ],
    description: "Commuter featuring ComforTec suspension technology, segment-first Anti-Lock Braking System, and spring-in-spring rear shock absorbers.",
    features: [
      "ComforTec Spring-in-Spring (SNS) Long Travel Suspension",
      "Segment-First Anti-Lock Braking System (ABS)",
      "Longer & Wider Quilted Foam Seat for Rider & Pillion",
      "LED Daytime Running Lamp (DRL) with Powerful Headlamp",
      "Gear Shift Indicator with Neutral Finder",
      "Wide Footpads for Unmatched Everyday Comfort"
    ],
    specifications: {
      engine: "4-stroke, 2-Valve, Single Cylinder, Air Cooled, DTS-i",
      displacement: "115.45 cc",
      power: "8.6 PS @ 7,000 RPM",
      torque: "9.81 Nm @ 5,000 RPM",
      transmission: "5-Speed Manual Gearbox",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 240mm Front Disc / 110mm Rear Drum",
      frontTyre: "80/100-17 Tubeless",
      rearTyre: "80/100-17 Tubeless",
      kerbWeight: "122 kg",
      fuelTank: "11 Litres"
    }
  },
  {
    id: "platina-100",
    name: "Platina 100",
    category: "Platina",
    tagline: "The Benchmark for Comfort & Mileage",
    image: "assets/images/vehicles/platina-100/main.webp",
    gallery: [
      "assets/images/vehicles/platina-100/main.webp",
      "assets/images/vehicles/platina-100/front.webp",
      "assets/images/vehicles/platina-100/side.webp",
      "assets/images/vehicles/platina-100/rear.webp"
    ],
    description: "Value commuter delivering exceptional fuel economy, ComforTec suspension, soft seat cushioning, and durable build quality for daily commutes.",
    features: [
      "ComforTec Long Travel Front & Rear Suspension",
      "Anti-Skid Braking System (CBS) with Electronic CDI",
      "Extra-Long Cushioned Seat for Fatigueless Travel",
      "Tubeless Tyres for Puncture Protection",
      "LED DRL for Enhanced Daytime Visibility",
      "All-Black Alloy Wheels and Sturdy Chassis"
    ],
    specifications: {
      engine: "4-stroke, Single Cylinder, Air Cooled, DTS-i",
      displacement: "102 cc",
      power: "7.9 PS @ 7,500 RPM",
      torque: "8.3 Nm @ 5,500 RPM",
      transmission: "4-Speed All Down Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Combined Braking System, 130mm Drum (Front) / 110mm Drum (Rear)",
      frontTyre: "2.75 x 17 (Tubeless/Tube)",
      rearTyre: "3.00 x 17 (Tubeless/Tube)",
      kerbWeight: "117 kg",
      fuelTank: "11 Litres"
    }
  },

  // --- 5. CT CATEGORY ---
  {
    id: "ct110x",
    name: "CT110X",
    category: "CT",
    tagline: "Toughness Built for Hard Roads",
    image: "assets/images/vehicles/ct110x/main.webp",
    gallery: [
      "assets/images/vehicles/ct110x/main.webp",
      "assets/images/vehicles/ct110x/front.webp",
      "assets/images/vehicles/ct110x/side.webp",
      "assets/images/vehicles/ct110x/rear.webp"
    ],
    description: "Heavy-duty rugged commuter engineered with reinforced crash guards, rubber bellows, semi-knobby tyres, and high-ground clearance designed to conquer demanding rural and city roads.",
    features: [
      "Heavy-Duty Front Crash Guard & Protective Engine Bash Plate",
      "Rugged Rear Carrier with Pillion Grab Protection",
      "Telescopic Front Forks with Protective Rubber Gaiters",
      "Integrated USB Mobile Charging Port",
      "Twin Spring-in-Spring (SNS) Rear Suspension",
      "Semi-Knobby All-Terrain Tyres for Tough Surfaces"
    ],
    specifications: {
      engine: "4-stroke, Single Cylinder, Air Cooled, DTS-i",
      displacement: "115.45 cc",
      power: "8.6 PS @ 7,000 RPM",
      torque: "9.81 Nm @ 5,000 RPM",
      transmission: "4-Speed All Down Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Combined Braking System, 130mm Front Drum / 110mm Rear Drum",
      frontTyre: "2.75 x 17 Semi-Knobby",
      rearTyre: "3.00 x 17 Semi-Knobby",
      kerbWeight: "127 kg",
      fuelTank: "11 Litres"
    }
  },

  // --- 6. FREEDOM CATEGORY ---
  {
    id: "freedom",
    name: "Bajaj Freedom",
    category: "Freedom",
    tagline: "World's First Dual-Fuel CNG Motorcycle",
    image: "assets/images/vehicles/freedom/main.webp",
    gallery: [
      "assets/images/vehicles/freedom/main.webp",
      "assets/images/vehicles/freedom/front.webp",
      "assets/images/vehicles/freedom/side.webp",
      "assets/images/vehicles/freedom/rear.webp"
    ],
    description: "Groundbreaking dual-fuel motorcycle featuring integrated CNG and petrol fuel systems, offering remarkable running economy, trellis frame architecture, longest-in-class quilted seat, and mono-linked rear suspension.",
    features: [
      "Seamless Switch Button between CNG and Petrol Modes",
      "Trellis Frame with Integrated Protective Fuel Tank Cage",
      "Longest-in-Class Quilted Ergonomic Seat (785 mm)",
      "Linked Monoshock Rear Suspension",
      "Full Digital Instrument Cluster with Bluetooth Support",
      "Bright LED Headlamp and Sleek DRL"
    ],
    specifications: {
      engine: "Single Cylinder, Air-Cooled, 4-Stroke Engine",
      displacement: "125 cc",
      power: "9.5 PS @ 8,000 RPM",
      torque: "9.7 Nm @ 5,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Dual-Fuel (CNG + Petrol)",
      brakes: "Synchronized Braking (Disc / Drum Options)",
      frontTyre: "90/80-17",
      rearTyre: "120/70-16",
      kerbWeight: "147 kg",
      fuelTank: "2 kg CNG Cylinder + 2 Litres Petrol Auxiliary"
    }
  }
];

/* Official Bajaj Manufacturer Links for "MORE DETAILS" */
const BIKE_MORE_DETAILS_URLS = {
  "freedom": "https://www.bajajauto.com/bikes/bajaj-freedom/bajaj-freedom-125-ng04",
  "ct110x": "https://www.bajajauto.com/bikes/ct/ct-110x",
  "platina-100": "https://www.bajajauto.com/bikes/platina/platina-100",
  "platina-110es": "https://www.bajajauto.com/bikes/platina/platina-110",
  "avenger-cruise-220": "https://www.bajajauto.com/bikes/avenger/avenger-cruise-220",
  "avenger-street-160": "https://www.bajajauto.com/bikes/avenger/avenger-street-220",
  "dominar-250": "https://www.bajajauto.com/bikes/dominar/dominar-250",
  "dominar-400": "https://www.bajajauto.com/bikes/dominar/dominar-400",
  "pulsar-n160": "https://www.bajajauto.com/bikes/pulsar/pulsar-n160",
  "pulsar-ns125": "https://www.bajajauto.com/bikes/pulsar/pulsar-ns125",
  "pulsar-ns160": "https://www.bajajauto.com/bikes/pulsar/pulsar-ns160",
  "pulsar-ns200": "https://www.bajajauto.com/bikes/pulsar/pulsar-ns200",
  "pulsar-125": "https://www.bajajauto.com/bikes/pulsar/pulsar-125",
  "pulsar-150": "https://www.bajajauto.com/bikes/pulsar/pulsar-150",
  "pulsar-220f": "https://www.bajajauto.com/bikes/pulsar/pulsar-220f",
  "pulsar-rs200": "https://www.bajajauto.com/bikes/pulsar/pulsar-rs200",
  "pulsar-ns400z": "https://www.bajajauto.com/bikes/pulsar/pulsar-ns400z",
  "pulsar-180": "https://www.bajajauto.com/bikes/pulsar"
};

// Bind moreDetailsUrl to each vehicle object
vehicles.forEach(v => {
  v.moreDetailsUrl = BIKE_MORE_DETAILS_URLS[v.id] || "https://www.bajajauto.com/bikes";
});

/* ==========================================================================
   3. DOM READY INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  initActiveNavLink();
  initHeroCarousel();
  initProductsCategoryBlocks();
  initProductDetailsPage();
  initHomeFeaturedGrid();
  initContactForm();
  initServiceBookingForm();
});

/* ==========================================================================
   4. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   5. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const closeBtn = document.querySelector(".mobile-nav-close");
  if (!mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add("open");
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute("aria-expanded", "true");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      }
    }
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove("open");
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute("aria-expanded", "false");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
    document.body.style.overflow = "";
  };

  const toggleDrawer = () => {
    if (mobileDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleDrawer);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  // Close on any link click
  const links = mobileDrawer.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   6. ACTIVE NAV LINK INDICATOR
   ========================================================================== */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ==========================================================================
   7. 5-SLIDE HERO CAROUSEL WITH TOUCH SWIPE & CONTROLS
   ========================================================================== */
function initHeroCarousel() {
  const carousel = document.querySelector(".hero-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".hero-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  if (!slides.length) return;

  let currentIndex = 0;
  let autoTimer = null;
  const slideDuration = 5500;

  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    if (dots[currentIndex]) dots[currentIndex].classList.remove("active");

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (autoTimer) clearInterval(autoTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      startAutoPlay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);

  // Touch Swipe for Mobile (Android & iOS)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  carousel.addEventListener("touchstart", (e) => {
    stopAutoPlay();
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
    startAutoPlay();
  }, { passive: true });

  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  startAutoPlay();
}

/* ==========================================================================
   8. PRODUCTS PAGE: CATEGORY BLOCKS LAYOUT (DOMINAR, PULSAR, AVENGER, PLATINA, CT, FREEDOM)
   ========================================================================== */
function initProductsCategoryBlocks() {
  const container = document.getElementById("category-blocks-container");
  if (!container) return;

  const categories = [
    { key: "Dominar", title: "DOMINAR", subtitle: "Sports Tourer Series" },
    { key: "Pulsar", title: "PULSAR", subtitle: "Streetfighter & Naked Sports Range" },
    { key: "Avenger", title: "AVENGER", subtitle: "Classic Highway & Street Cruisers" },
    { key: "Platina", title: "PLATINA", subtitle: "Comfort Commuter Series with ComforTec" },
    { key: "CT", title: "CT", subtitle: "Rugged Heavy-Duty Commuter Series" },
    { key: "Freedom", title: "FREEDOM", subtitle: "World's First Dual-Fuel CNG Motorcycle" }
  ];

  container.innerHTML = categories.map(cat => {
    const catVehicles = vehicles.filter(v => v.category.toUpperCase() === cat.key.toUpperCase());
    if (!catVehicles.length) return "";

    return `
      <section class="category-block" id="block-${cat.key.toLowerCase()}">
        <div class="category-block-header">
          <div>
            <span class="category-tag">${cat.key.toUpperCase()}</span>
            <h2 class="category-block-title">${cat.title}</h2>
            <p class="category-block-subtitle">${cat.subtitle}</p>
          </div>
          <span class="category-model-count">${catVehicles.length} Models</span>
        </div>

        <div class="product-grid">
          ${catVehicles.map(bike => `
            <article class="product-card" data-category="${bike.category}">
              <div class="product-card-media">
                <span class="product-card-badge">${bike.category}</span>
                <img src="${bike.image}" alt="Bajaj ${bike.name} motorcycle at Sakthi Motors" loading="lazy">
              </div>
              <div class="product-card-body">
                <div class="product-card-meta">
                  <span class="product-series">${bike.category.toUpperCase()} SERIES</span>
                </div>
                <h3 class="product-name">${bike.name}</h3>
                <p class="product-desc">${bike.description}</p>
                <ul class="product-card-features">
                  ${bike.features.slice(0, 2).map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
                </ul>
                <div class="product-card-footer">
                  <a href="product-details.html?model=${bike.id}" class="btn btn-primary btn-sm" style="width: 100%;">
                    VIEW DETAILS <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  // Category quick pill smooth scrolling
  const navBtns = document.querySelectorAll(".category-pill-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* ==========================================================================
   9. HOME PAGE FEATURED MOTORCYCLES GRID
   ========================================================================== */
function initHomeFeaturedGrid() {
  const container = document.getElementById("featured-products-grid");
  if (!container) return;

  const featuredIds = ["pulsar-ns200", "pulsar-n160", "dominar-400", "freedom", "avenger-cruise-220", "platina-110es", "ct110x", "pulsar-rs200"];
  const featuredList = vehicles.filter(v => featuredIds.includes(v.id));

  container.innerHTML = featuredList.map(bike => `
    <article class="product-card">
      <div class="product-card-media">
        <span class="product-card-badge">${bike.category}</span>
        <img src="${bike.image}" alt="Bajaj ${bike.name} motorcycle at Sakthi Motors" loading="lazy">
      </div>
      <div class="product-card-body">
        <div class="product-card-meta">
          <span class="product-series">${bike.category.toUpperCase()}</span>
        </div>
        <h3 class="product-name">${bike.name}</h3>
        <p class="product-desc">${bike.description}</p>
        <ul class="product-card-features">
          ${bike.features.slice(0, 2).map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
        </ul>
        <div class="product-card-footer">
          <a href="product-details.html?model=${bike.id}" class="btn btn-outline btn-sm" style="width: 100%;">
            VIEW DETAILS <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ==========================================================================
   10. PRODUCT DETAILS PAGE DYNAMIC LOADER & 4-ANGLE GALLERY
   ========================================================================== */
function initProductDetailsPage() {
  const detailContainer = document.getElementById("product-detail-view");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const modelId = params.get("model") || params.get("id") || "pulsar-ns200";

  const bike = vehicles.find(v => v.id === modelId) || vehicles[0];
  if (!bike) return;

  document.title = `${bike.name} | Sakthi Motors Bajaj Dealership Chinnamanur`;

  const mainImage = document.getElementById("detail-main-img");
  const thumbsContainer = document.getElementById("detail-thumbs");

  if (mainImage) {
    mainImage.src = bike.image;
    mainImage.alt = `Bajaj ${bike.name} motorcycle at Sakthi Motors Chinnamanur`;
  }

  if (thumbsContainer && bike.gallery) {
    const angleLabels = ["Main View", "Front View", "Side View", "Rear View"];
    thumbsContainer.innerHTML = bike.gallery.map((src, idx) => `
      <button class="thumb-item ${idx === 0 ? 'active' : ''}" data-src="${src}" aria-label="${angleLabels[idx] || 'View Angle'}">
        <img src="${src}" alt="${bike.name} ${angleLabels[idx]}" loading="lazy">
      </button>
    `).join("");

    const thumbs = thumbsContainer.querySelectorAll(".thumb-item");
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        if (mainImage) {
          mainImage.style.opacity = "0.4";
          setTimeout(() => {
            mainImage.src = thumb.getAttribute("data-src");
            mainImage.style.opacity = "1";
          }, 150);
        }
      });
    });
  }

  const elCategory = document.getElementById("detail-category");
  const elTitle = document.getElementById("detail-title");
  const elTagline = document.getElementById("detail-tagline");
  const elDesc = document.getElementById("detail-description");
  const elContactBtn = document.getElementById("detail-contact-btn");
  const elMoreDetailsBtn = document.getElementById("detail-more-details-btn");

  if (elCategory) elCategory.textContent = `${bike.category.toUpperCase()} SERIES`;
  if (elTitle) elTitle.textContent = bike.name;
  if (elTagline) elTagline.textContent = bike.tagline;
  if (elDesc) elDesc.textContent = bike.description;

  // Set contact dealership link with bike name
  if (elContactBtn) {
    elContactBtn.href = `contact.html?vehicle=${encodeURIComponent(bike.name)}`;
  }

  // Set MORE DETAILS official manufacturer link
  if (elMoreDetailsBtn) {
    const moreUrl = bike.moreDetailsUrl || BIKE_MORE_DETAILS_URLS[bike.id] || "https://www.bajajauto.com/bikes";
    elMoreDetailsBtn.href = moreUrl;
    elMoreDetailsBtn.setAttribute("target", "_blank");
    elMoreDetailsBtn.setAttribute("rel", "noopener noreferrer");
    elMoreDetailsBtn.setAttribute("aria-label", `More details about ${bike.name} on official Bajaj Auto website`);
  }

  const featuresContainer = document.getElementById("detail-features-grid");
  if (featuresContainer && bike.features) {
    featuresContainer.innerHTML = bike.features.map(f => `
      <div class="feature-card">
        <i class="fa-solid fa-circle-check"></i>
        <span>${f}</span>
      </div>
    `).join("");
  }

  const specsContainer = document.getElementById("detail-specs-grid");
  if (specsContainer && bike.specifications) {
    const specEntries = [
      { label: "Engine", value: bike.specifications.engine },
      { label: "Displacement", value: bike.specifications.displacement },
      { label: "Maximum Power", value: bike.specifications.power },
      { label: "Maximum Torque", value: bike.specifications.torque },
      { label: "Transmission", value: bike.specifications.transmission },
      { label: "Fuel Type", value: bike.specifications.fuelType },
      { label: "Brakes", value: bike.specifications.brakes },
      { label: "Front Tyre", value: bike.specifications.frontTyre },
      { label: "Rear Tyre", value: bike.specifications.rearTyre },
      { label: "Kerb Weight", value: bike.specifications.kerbWeight },
      { label: "Fuel Tank Capacity", value: bike.specifications.fuelTank }
    ].filter(s => s.value);

    specsContainer.innerHTML = specEntries.map(s => `
      <div class="spec-item">
        <span class="spec-key">${s.label}</span>
        <span class="spec-value">${s.value}</span>
      </div>
    `).join("");
  }

  // Related models in the same category
  const relatedContainer = document.getElementById("related-motorcycles-grid");
  if (relatedContainer) {
    const related = vehicles.filter(v => v.category === bike.category && v.id !== bike.id).slice(0, 3);
    if (related.length) {
      relatedContainer.innerHTML = related.map(rel => `
        <article class="product-card">
          <div class="product-card-media">
            <span class="product-card-badge">${rel.category}</span>
            <img src="${rel.image}" alt="${rel.name}" loading="lazy">
          </div>
          <div class="product-card-body">
            <h4 class="product-name" style="font-size: 1.15rem;">${rel.name}</h4>
            <p class="product-desc" style="font-size: 0.88rem;">${rel.description}</p>
            <div class="product-card-footer">
              <a href="product-details.html?model=${rel.id}" class="btn btn-outline btn-sm" style="width: 100%;">
                VIEW DETAILS <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
      `).join("");
    } else {
      const parentSection = document.getElementById("related-motorcycles-section");
      if (parentSection) parentSection.style.display = "none";
    }
  }
}

/* ==========================================================================
   11. BACKEND-PREPARED CONTACT FORM (GOOGLE SHEETS + EMAIL READY)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successBox = document.getElementById("formSuccessAlert");
  const errorBox = document.getElementById("formErrorAlert");
  const submitBtn = form.querySelector("button[type='submit']");
  const vehicleSelect = form.querySelector("select[name='vehicle']");
  const otherGroup = document.getElementById("contact-other-model-group");
  const otherInput = document.getElementById("contact-other-model");
  const otherError = document.getElementById("error-contact-other-model");

  // Populate motorcycle dropdown if not pre-filled
  if (vehicleSelect && vehicleSelect.options.length <= 1) {
    vehicles.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.category})`;
      vehicleSelect.appendChild(opt);
    });
    const othersGroupOpt = document.createElement("optgroup");
    othersGroupOpt.label = "OTHERS";
    const othersOpt = document.createElement("option");
    othersOpt.value = "Others";
    othersOpt.textContent = "Others";
    othersGroupOpt.appendChild(othersOpt);
    vehicleSelect.appendChild(othersGroupOpt);
  }

  // Toggle 'Others' vehicle text input
  if (vehicleSelect && otherGroup) {
    vehicleSelect.addEventListener("change", () => {
      if (vehicleSelect.value === "Others" || vehicleSelect.value === "Other") {
        otherGroup.style.display = "block";
        if (otherInput) otherInput.focus();
      } else {
        otherGroup.style.display = "none";
        if (otherInput) otherInput.value = "";
        if (otherError) otherError.style.display = "none";
      }
    });
  }

  // Preselect vehicle if passed via URL parameter (e.g., ?model=pulsar-ns400z or ?vehicle=Pulsar NS 400Z)
  const urlParams = new URLSearchParams(window.location.search);
  const preselectModel = urlParams.get("model") || urlParams.get("vehicle");
  if (preselectModel && vehicleSelect) {
    const q = preselectModel.toLowerCase().replace(/[-_]/g, " ");
    for (let i = 0; i < vehicleSelect.options.length; i++) {
      const optText = vehicleSelect.options[i].text.toLowerCase().replace(/[-_]/g, " ");
      const optVal = vehicleSelect.options[i].value.toLowerCase().replace(/[-_]/g, " ");
      if (optText.includes(q) || optVal.includes(q) || q.includes(optVal)) {
        vehicleSelect.selectedIndex = i;
        break;
      }
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (successBox) successBox.style.display = "none";
    if (errorBox) errorBox.style.display = "none";
    if (otherError) otherError.style.display = "none";

    const name = form.querySelector("input[name='name']").value.trim();
    const phone = form.querySelector("input[name='phone']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const vehicle = form.querySelector("select[name='vehicle']").value;
    const otherVehicleVal = otherInput ? otherInput.value.trim() : "";
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name || !phone || !message) {
      if (errorBox) {
        errorBox.textContent = "Please fill in all required fields (Full Name, Phone Number, and Message).";
        errorBox.style.display = "block";
      }
      return;
    }

    if ((vehicle === "Others" || vehicle === "Other") && !otherVehicleVal) {
      if (otherError) {
        otherError.textContent = "Please enter the name of the bike.";
        otherError.style.display = "block";
      }
      if (otherInput) otherInput.focus();
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      if (errorBox) {
        errorBox.textContent = "Please enter a valid 10-digit phone number.";
        errorBox.style.display = "block";
      }
      return;
    }

    const originalBtnContent = submitBtn ? submitBtn.innerHTML : "SEND MESSAGE";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> SENDING...`;
    }

    let interestedBike = vehicle || "General Inquiry";
    if (vehicle === "Others" || vehicle === "Other") {
      interestedBike = otherVehicleVal ? `Others (${otherVehicleVal})` : "Others";
    }

    const payload = {
      date: new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }),
      customerName: name,
      phone: cleanPhone,
      email: email || "Not provided",
      interestedMotorcycle: interestedBike,
      message: message,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    try {
      if (FORM_ENDPOINT && FORM_ENDPOINT.startsWith("http")) {
        // text/plain prevents CORS pre-flight OPTIONS request on Google Apps Script Web Apps
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          redirect: "follow"
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      if (successBox) {
        successBox.textContent = "Thank you! Your enquiry has been received. Our team will contact you shortly.";
        successBox.style.display = "block";
      }
      form.reset();
      if (otherGroup) otherGroup.style.display = "none";
    } catch (err) {
      if (errorBox) {
        errorBox.textContent = "Unable to send your message. Please try again or contact us by phone.";
        errorBox.style.display = "block";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });
}

/* ==========================================================================
   12. BACKEND-PREPARED SERVICE BOOKING (GOOGLE APPS SCRIPT + SHEETS + GMAIL)
   ========================================================================== */
function initServiceBookingForm() {
  const form = document.getElementById("serviceBookingForm");
  if (!form) return;

  const modelSelect = form.querySelector("#service-model");
  const otherGroup = document.getElementById("other-model-group");
  const otherInput = document.getElementById("service-other-model");
  const dateInput = form.querySelector("#service-date");
  const regInput = form.querySelector("#service-registration");
  const hoursNotice = document.getElementById("selectedDateHoursNotice");
  const hoursVal = document.getElementById("selectedDateHoursVal");
  const hoursComputed = document.getElementById("service-hours-computed");
  const submitBtn = document.getElementById("serviceSubmitBtn");
  const successModal = document.getElementById("serviceSuccessModal");
  const errorAlert = document.getElementById("serviceErrorAlert");
  const errorMsgEl = document.getElementById("serviceErrorMessage");
  const doneBtn = document.getElementById("serviceDoneBtn");

  // 1. Populate vehicle model dropdown if not already pre-rendered
  if (modelSelect && modelSelect.options.length <= 1) {
    const categories = ["Pulsar", "Dominar", "Avenger", "Platina", "CT", "Freedom"];
    categories.forEach(cat => {
      const catGroup = document.createElement("optgroup");
      catGroup.label = `${cat.toUpperCase()} RANGE`;
      const catBikes = vehicles.filter(v => v.category.toLowerCase() === cat.toLowerCase());
      catBikes.forEach(b => {
        const opt = document.createElement("option");
        opt.value = b.name;
        opt.textContent = b.name;
        catGroup.appendChild(opt);
      });
      if (cat.toLowerCase() === "ct") {
        if (!catBikes.some(b => b.name === "CT 110")) {
          const opt110 = document.createElement("option");
          opt110.value = "CT 110";
          opt110.textContent = "CT 110";
          catGroup.appendChild(opt110);
        }
        if (!catBikes.some(b => b.name === "CT 100")) {
          const opt100 = document.createElement("option");
          opt100.value = "CT 100";
          opt100.textContent = "CT 100";
          catGroup.appendChild(opt100);
        }
      }
      modelSelect.appendChild(catGroup);
    });

    const otherGroupOpt = document.createElement("optgroup");
    otherGroupOpt.label = "OTHERS";
    const otherOpt = document.createElement("option");
    otherOpt.value = "Others";
    otherOpt.textContent = "Others";
    otherGroupOpt.appendChild(otherOpt);
    modelSelect.appendChild(otherGroupOpt);
  }

  // 2. Toggle 'Others' Vehicle Model text field
  if (modelSelect && otherGroup) {
    modelSelect.addEventListener("change", () => {
      if (modelSelect.value === "Others" || modelSelect.value === "Other") {
        otherGroup.style.display = "block";
        if (otherInput) otherInput.focus();
      } else {
        otherGroup.style.display = "none";
        if (otherInput) otherInput.value = "";
      }
    });
  }

  // 3. Auto uppercase vehicle registration number
  if (regInput) {
    regInput.addEventListener("input", () => {
      regInput.value = regInput.value.toUpperCase();
    });
  }

  // 4. Date validation: Min selectable date = today (cannot select past dates)
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const minDateStr = `${yyyy}-${mm}-${dd}`;
    dateInput.setAttribute("min", minDateStr);

    const updateServiceHoursDisplay = () => {
      const selectedVal = dateInput.value;
      if (!selectedVal) {
        if (hoursNotice) hoursNotice.style.display = "none";
        if (hoursComputed) hoursComputed.value = "";
        return;
      }

      const parts = selectedVal.split("-").map(Number);
      const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]);
      const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1..6 = Mon..Sat
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = dayNames[dayOfWeek];

      let hoursText = "";
      if (dayOfWeek === 0) {
        hoursText = "9:00 AM – 2:00 PM";
      } else {
        hoursText = "9:00 AM – 6:00 PM";
      }

      if (hoursNotice && hoursVal) {
        hoursVal.textContent = `${dayName} Service Hours: ${hoursText}`;
        hoursNotice.style.display = "flex";
      }
      if (hoursComputed) {
        hoursComputed.value = hoursText;
      }
    };

    dateInput.addEventListener("change", updateServiceHoursDisplay);
    dateInput.addEventListener("input", updateServiceHoursDisplay);
  }

  // Helper: Clear field errors
  const clearErrors = () => {
    form.querySelectorAll(".field-error").forEach(el => {
      el.textContent = "";
      el.style.display = "none";
    });
    form.querySelectorAll(".form-control").forEach(el => el.classList.remove("is-invalid"));
    if (errorAlert) errorAlert.style.display = "none";
  };

  // Helper: Show field error
  const setFieldError = (fieldId, errorMsg) => {
    const errEl = document.getElementById(`error-${fieldId}`);
    const inputEl = document.getElementById(fieldId);
    if (errEl) {
      errEl.textContent = errorMsg;
      errEl.style.display = "block";
    }
    if (inputEl) {
      inputEl.classList.add("is-invalid");
    }
  };

  // 5. Form submission handler with validation
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const nameInput = form.querySelector("#service-name");
    const mobileInput = form.querySelector("#service-mobile");
    const registrationInput = form.querySelector("#service-registration");
    const typeSelect = form.querySelector("#service-type");

    const nameVal = (nameInput ? nameInput.value : "").trim();
    const mobileVal = (mobileInput ? mobileInput.value : "").trim().replace(/\s+/g, "");
    const regVal = (registrationInput ? registrationInput.value : "").trim().toUpperCase();
    const modelVal = (modelSelect ? modelSelect.value : "").trim();
    const otherModelVal = (otherInput ? otherInput.value : "").trim();
    const typeVal = (typeSelect ? typeSelect.value : "").trim();
    const dateVal = (dateInput ? dateInput.value : "").trim();

    let hasError = false;
    let firstErrorField = null;

    // Validate Name
    if (!nameVal) {
      setFieldError("service-name", "Please enter your name.");
      hasError = true;
      if (!firstErrorField) firstErrorField = nameInput;
    }

    // Validate Mobile (10-digit Indian mobile number)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileVal || !mobileRegex.test(mobileVal)) {
      setFieldError("service-mobile", "Please enter a valid 10-digit mobile number.");
      hasError = true;
      if (!firstErrorField) firstErrorField = mobileInput;
    }

    // Validate Registration Number
    if (!regVal) {
      setFieldError("service-registration", "Please enter your vehicle registration number.");
      hasError = true;
      if (!firstErrorField) firstErrorField = registrationInput;
    }

    // Validate Vehicle Model
    if (!modelVal) {
      setFieldError("service-model", "Please select your vehicle model.");
      hasError = true;
      if (!firstErrorField) firstErrorField = modelSelect;
    } else if ((modelVal === "Others" || modelVal === "Other") && !otherModelVal) {
      setFieldError("service-other-model", "Please enter the name of the bike.");
      hasError = true;
      if (!firstErrorField) firstErrorField = otherInput;
    }

    // Validate Service Type
    if (!typeVal) {
      setFieldError("service-type", "Please select a service type.");
      hasError = true;
      if (!firstErrorField) firstErrorField = typeSelect;
    }

    // Validate Date
    if (!dateVal) {
      setFieldError("service-date", "Please select a service date.");
      hasError = true;
      if (!firstErrorField) firstErrorField = dateInput;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const [yr, mth, day] = dateVal.split("-").map(Number);
      const selected = new Date(yr, mth - 1, day);
      if (selected < today) {
        setFieldError("service-date", "Service date cannot be in the past. Please select today or a future date.");
        hasError = true;
        if (!firstErrorField) firstErrorField = dateInput;
      }
    }

    if (hasError) {
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    // Calculate Service Hours automatically
    const [yr, mth, day] = dateVal.split("-").map(Number);
    const selectedDate = new Date(yr, mth - 1, day);
    const isSunday = selectedDate.getDay() === 0;
    const computedHours = isSunday ? "9:00 AM – 2:00 PM" : "9:00 AM – 6:00 PM";
    const effectiveModel = (modelVal === "Others" || modelVal === "Other") ? `Others (${otherModelVal})` : modelVal;

    // Prevent duplicate submissions & show loading indicator
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px;"></i> SUBMITTING...';
    }

    const payload = {
      action: "service_booking",
      name: nameVal,
      mobile: mobileVal,
      registration: regVal,
      model: effectiveModel,
      otherModel: (modelVal === "Others" || modelVal === "Other") ? otherModelVal : "",
      serviceType: typeVal,
      serviceDate: dateVal,
      serviceHours: computedHours,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      status: "New Request"
    };

    try {
      if (SERVICE_BOOKING_API && SERVICE_BOOKING_API.startsWith("http") && !SERVICE_BOOKING_API.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
        await fetch(SERVICE_BOOKING_API, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          redirect: "follow"
        });
      } else {
        // Simulated delivery if user hasn't yet deployed their Google Apps Script URL
        await new Promise(resolve => setTimeout(resolve, 850));
      }

      // Success: Clear form & display success card
      form.reset();
      if (hoursNotice) hoursNotice.style.display = "none";
      if (otherGroup) otherGroup.style.display = "none";
      form.style.display = "none";

      if (successModal) {
        successModal.style.display = "block";
        successModal.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } catch (err) {
      console.error("Service booking submission error:", err);
      if (errorAlert) {
        if (errorMsgEl) errorMsgEl.textContent = "Unable to submit your request right now. Please try again.";
        errorAlert.style.display = "block";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="btn-text">BOOK SERVICE</span> <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i>';
      }
    }
  });

  // Done button: resets form view
  if (doneBtn) {
    doneBtn.addEventListener("click", () => {
      if (successModal) successModal.style.display = "none";
      form.style.display = "block";
      clearErrors();
    });
  }
}
