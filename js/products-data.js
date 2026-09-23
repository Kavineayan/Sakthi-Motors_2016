/**
 * SAKTHI MOTORS — Centralized Dealership & Product Data
 * Authorized Bajaj Motorcycle Dealership in Chinnamanur, Theni, Tamil Nadu
 * Established: 2016 | 10+ Years of Dealership Experience
 */

const DEALERSHIP_INFO = {
  name: "SAKTHI MOTORS",
  tagline: "Your Journey, Our Commitment",
  taglineSecondary: "POWER • PERFORMANCE • TRUST • EXPERIENCE",
  established: 2016,
  experience: "10+ Years of Experience",
  dealershipType: "Authorized Bajaj Motorcycle Dealership",
  locationName: "Chinnamanur, Theni, Tamil Nadu",
  address: "Venkateshwara Theater near, Chinnamanur, Theni, Tamil Nadu 625515",
  googleMapsUrl: "https://maps.app.goo.gl/SHc75NPwitBBK4tt9",
  email: "sakthimotors2016@gmail.com",
  whatsappNumber: "9384946001",
  whatsappUrl: "https://wa.me/919384946001",
  phones: [
    { number: "9384946001", tel: "+919384946001", label: "Sales & Customer Assistance (Call + WhatsApp)" },
    { number: "9384946002", tel: "+919384946002", label: "Showroom Inquiries (Call Only)" },
    { number: "9384946003", tel: "+919384946003", label: "Service & Support (Call Only)" }
  ],
  hours: {
    weekday: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: 9:00 AM – 2:00 PM"
  }
};

const PRODUCTS = [
  {
    id: "pulsar-ns400z",
    name: "Pulsar NS 400Z",
    series: "Pulsar",
    category: "Sports",
    tagline: "The Biggest & Most Powerful Pulsar Ever",
    image: "assets/images/vehicles/pulsar-ns400z/main.webp",
    gallery: [
      "assets/images/vehicles/pulsar-ns400z/main.webp",
      "assets/images/vehicles/pulsar-ns400z/front.webp",
      "assets/images/vehicles/pulsar-ns400z/side.webp",
      "assets/images/vehicles/pulsar-ns400z/rear.webp"
    ],
    description: "The ultimate flagship naked streetfighter and the most powerful Pulsar ever built, engineered with a 373cc liquid-cooled DOHC 4-valve engine, 43mm gold-anodized inverted front forks, 4 selectable ride modes, switchable traction control, and ride-by-wire electronic throttle.",
    specs: {
      engine: "373.27 cc Liquid-Cooled, 4-Valve, DOHC Single Cylinder FI",
      power: "40 PS @ 8,800 RPM",
      torque: "35 Nm @ 6,500 RPM",
      transmission: "6-Speed with Assist & Slipper Clutch",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 320mm Front Disc / 230mm Rear Disc",
      tyres: "110/70 R17 (Front) | 140/70 R17 Tubeless (Rear)",
      weight: "174 kg (Kerb)",
      fuelTank: "12 Litres"
    },
    features: [
      "43mm USD Inverted Front Suspension Forks (Gold Anodized)",
      "4 Selectable Riding Modes (Road, Rain, Sport, Off-Road)",
      "Switchable Traction Control & Ride-by-Wire Electronic Throttle",
      "Dual-Channel ABS with 320mm Front & 230mm Rear Disc Brakes",
      "Full-Color Digital LCD Display with Bluetooth & Turn-by-Turn Navigation",
      "Bi-Functional LED Projector Headlamp with Signature Lightning Bolt DRLs"
    ]
  },
  {
    id: "pulsar-ns200",
    name: "Pulsar NS200",
    series: "Pulsar",
    category: "Sports",
    tagline: "The Naked Streetfighter",
    image: "assets/images/pulsar.svg",
    gallery: [
      "assets/images/pulsar.svg",
      "assets/images/pulsar-n250.svg",
      "assets/images/showroom.svg"
    ],
    description: "Performance-focused naked streetfighter equipped with a high-revving liquid-cooled DTS-i engine, inverted front forks, and aggressive aerodynamic stance for street and highway agility.",
    specs: {
      engine: "199.5 cc Liquid-Cooled, 4-Valve, Triple Spark DTS-i FI",
      power: "24.5 PS @ 9,750 RPM",
      torque: "18.74 Nm @ 8,000 RPM",
      transmission: "6-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 300mm Front Disc / 230mm Rear Disc",
      tyres: "100/80-17 (Front) | 130/70-17 Tubeless (Rear)",
      weight: "158 kg (Kerb)",
      fuelTank: "12 Litres"
    },
    features: [
      "USD Inverted Front Suspension Forks",
      "Dual-Channel Anti-Lock Braking System (ABS)",
      "Digital LCD Console with Gear Position & Distance-to-Empty",
      "Perimeter Frame for Dynamic Handling",
      "Signature Wolf-Eyed Projector Headlamp",
      "Nitrox Monoshock Rear Absorber"
    ]
  },
  {
    id: "dominar-400",
    name: "Dominar 400",
    series: "Dominar",
    category: "Sports Tourer",
    tagline: "Born to Sprint, Built to Tour",
    image: "assets/images/dominar.svg",
    gallery: [
      "assets/images/dominar.svg",
      "assets/images/dominar-400.svg",
      "assets/images/showroom.svg"
    ],
    description: "Purpose-built sports touring motorcycle engineered for long-distance cruising with a high-torque 373cc engine, factory-fitted touring visor, hand guards, luggage carrier, and rigid perimeter frame.",
    specs: {
      engine: "373.3 cc Liquid-Cooled, DOHC, 4-Valve Single Cylinder FI",
      power: "40 PS @ 8,800 RPM",
      torque: "35 Nm @ 6,500 RPM",
      transmission: "6-Speed with Assist & Slipper Clutch",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Dual Channel ABS, 320mm Front Disc / 230mm Rear Disc",
      tyres: "110/70-R17 (Front) | 150/60-R17 Radial (Rear)",
      weight: "193 kg (Kerb)",
      fuelTank: "13 Litres"
    },
    features: [
      "Factory-Fitted Touring Windshield & Hand Guards",
      "Assist and Slipper Clutch",
      "43mm Upside Down (USD) Front Forks",
      "Full LED Headlamp with Auto Headlamp On (AHO)",
      "Integrated Rear Pillion Backrest & Tail Rack",
      "Twin Barrel Sport Performance Exhaust"
    ]
  },
  {
    id: "freedom-125",
    name: "Freedom 125",
    series: "Freedom",
    category: "Eco Commuter",
    tagline: "World's First Dual-Fuel CNG Motorcycle",
    image: "assets/images/freedom.svg",
    gallery: [
      "assets/images/freedom.svg",
      "assets/images/freedom-125.svg",
      "assets/images/showroom.svg"
    ],
    description: "Groundbreaking dual-fuel motorcycle featuring integrated CNG and petrol fuel systems, offering remarkable running cost efficiency, modern styling, and mono-linked rear suspension.",
    specs: {
      engine: "125 cc Single Cylinder, Air-Cooled, 4-Stroke Engine",
      power: "9.5 PS @ 8,000 RPM",
      torque: "9.7 Nm @ 5,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Dual-Fuel (CNG + Petrol)",
      brakes: "Synchronized Braking (Disc / Drum Options)",
      tyres: "90/80-17 (Front) | 120/70-16 (Rear)",
      weight: "147 kg (Kerb)",
      fuelTank: "2 kg CNG Tank + 2 Litre Petrol Tank"
    },
    features: [
      "Seamless Switch Button between CNG and Petrol Modes",
      "Trellis Frame with Integrated Protective Fuel Tank Cage",
      "Longest-in-Class Quilted Ergonomic Seat (785 mm)",
      "Linked Monoshock Rear Suspension",
      "Full Digital Instrument Cluster with Bluetooth Support",
      "Bright LED Headlamp and Sleek DRL"
    ]
  },
  {
    id: "avenger-cruise-220",
    name: "Avenger Cruise 220",
    series: "Avenger",
    category: "Cruiser",
    tagline: "Feel Like God",
    image: "assets/images/avenger.svg",
    gallery: [
      "assets/images/avenger.svg",
      "assets/images/avenger-220.svg",
      "assets/images/showroom.svg"
    ],
    description: "Classic cruiser built for relaxed highway journeys with low-slung seating, high highway windshield, cushioned pillion backrest, and iconic chrome detailing.",
    specs: {
      engine: "220 cc Oil-Cooled, Twin Spark DTS-i FI Engine",
      power: "19.03 PS @ 8,500 RPM",
      torque: "17.55 Nm @ 7,000 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS, 280mm Front Disc / 130mm Rear Drum",
      tyres: "90/90-17 (Front) | 130/90-15 (Rear)",
      weight: "163 kg (Kerb)",
      fuelTank: "13 Litres"
    },
    features: [
      "Classic Chrome Highway Windshield",
      "Low-Slung Ergonomic Cruiser Seating (737 mm)",
      "Padded Deluxe Pillion Backrest",
      "Multi-Spoke Classic Chrome Wheel Styling",
      "Digital Speedometer Pod with Service Reminder",
      "Wide Rear Tyre for Stable Highway Cruising"
    ]
  },
  {
    id: "platina-110",
    name: "Platina 110",
    series: "Platina",
    category: "Comfort Commuter",
    tagline: "Comfort on Every Road",
    image: "assets/images/platina.svg",
    gallery: [
      "assets/images/platina.svg",
      "assets/images/platina-110.svg",
      "assets/images/showroom.svg"
    ],
    description: "The benchmark for everyday riding comfort and dependable mileage, equipped with ComforTec suspension technology, anti-skid braking, and spring-in-spring rear shock absorbers.",
    specs: {
      engine: "115.45 cc 4-Stroke, DTS-i Single Cylinder Engine",
      power: "8.6 PS @ 7,000 RPM",
      torque: "9.81 Nm @ 5,000 RPM",
      transmission: "5-Speed Manual Gearbox",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Single Channel ABS / CBS with 240mm Front Disc",
      tyres: "80/100-17 (Front) | 80/100-17 Tubeless (Rear)",
      weight: "122 kg (Kerb)",
      fuelTank: "11 Litres"
    },
    features: [
      "ComforTec Spring-in-Spring (SNS) Long Travel Suspension",
      "Segment-First Anti-Lock Braking System (ABS)",
      "Longer & Wider Quilted Foam Seat",
      "LED Daytime Running Lamp (DRL)",
      "Gear Shift Indicator with Neutral Finder",
      "Wide Footpads for Rider Comfort"
    ]
  },
  {
    id: "ct-125x",
    name: "CT 125X",
    series: "CT",
    category: "Rugged Utility",
    tagline: "Toughness Built for Hard Roads",
    image: "assets/images/ct.svg",
    gallery: [
      "assets/images/ct.svg",
      "assets/images/ct-125x.svg",
      "assets/images/showroom.svg"
    ],
    description: "Heavy-duty rugged commuter engineered with a reinforced steel chassis, crash guards, rubber bellows, and high-torque engine designed to conquer demanding rural and city roads.",
    specs: {
      engine: "124.4 cc 4-Stroke, Air-Cooled DTS-i Engine",
      power: "10.9 PS @ 8,000 RPM",
      torque: "11 Nm @ 5,500 RPM",
      transmission: "5-Speed Manual",
      fuelType: "Petrol (E20 Compliant)",
      brakes: "Combined Braking System (CBS) with 240mm Front Disc",
      tyres: "80/100-17 (Front) | 100/90-17 Tube/Tubeless (Rear)",
      weight: "130 kg (Kerb)",
      fuelTank: "11 Litres"
    },
    features: [
      "Heavy-Duty Front Crash Guard & Engine Bash Plate",
      "Rugged Rear Carrier with Pillion Grab Protection",
      "Telescopic Front Forks with Protective Rubber Gaiters",
      "Integrated USB Mobile Charging Port",
      "Twin Spring-in-Spring (SNS) Rear Suspension",
      "All-Black Tough Matte Finish Styling"
    ]
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

PRODUCTS.forEach(p => {
  p.moreDetailsUrl = BIKE_MORE_DETAILS_URLS[p.id] || "https://www.bajajauto.com/bikes";
});
