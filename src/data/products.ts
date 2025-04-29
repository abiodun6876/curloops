import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'dc-heater',
    name: 'Compact DC Heater',
    description: 'An energy-efficient DC heater designed for personal use in small spaces. Features USB-C charging, digital display, and optional solar charging support.',
    image: '/heater.jpeg',
    features: [
      '12V Lithium-Ion Battery (Rechargeable, built-in)',
      'USB Type-C Fast Charging Port',
      'Optional Solar Panel Charging Support',
      'Digital Display (Temperature °C/°F + Timer)',
      '600ml Glass Water Container',
      'LED Power Indicator (Green: ON, Red: Charging)',
      'Portable Handle Design',
      'Efficient Heating Core Technology'
    ],
    status: 'available'
  },
  {
    id: 'dc-fried-egg',
    name: 'Portable DC Fried Egg Machine',
    description: 'A compact, rechargeable cooking device perfect for making fried eggs anywhere. Features built-in battery and USB-C charging.',
    image: '/eggfry.jpeg',
    features: [
      '12V Lithium-Ion Battery Power Supply',
      'USB Type-C Charging Port',
      'Optional Solar Panel Support (Version 2)',
      'Durable ABS Plastic Base',
      'Modern Minimalist Design',
      'Efficient Heating Core',
      'LED Power Indicator',
      'Compact and Portable'
    ],
    status: 'available'
  },
  {
    id: 'dc-blender',
    name: 'Portable DC Blender',
    description: 'A compact, rechargeable 12V DC-powered blender perfect for smoothies, protein shakes, and more. Ideal for students, travelers, and outdoor enthusiasts.',
    image: '/dc blender.jpeg',
    features: [
      '12V Lithium-Ion Battery with USB-C Charging',
      'High-Efficiency DC Motor',
      'Durable ABS Plastic Base',
      'Detachable 600ml Blender Cup',
      'LED Indicator Light',
      'Optional Solar Charging Support',
      'Safety Features: Overcharge Protection',
      'Modern Minimalist Design'
    ],
    status: 'available'
  },
  {
    id: 'water-dispenser',
    name: 'Smart DC Water Dispenser',
    description: 'An automatic DC-powered tabletop water dispenser with hot and cold options. Features smart cup detection and efficient water delivery system.',
    image: '/waterdispenser.jpeg',
    features: [
      '12V Lithium-Ion Battery Power',
      'Glass Cup Weight Sensor',
      'Built-in DC Water Pump',
      'Digital Display Screen',
      'Detachable Water Tank (1-2L)',
      'Hot and Cold Water Options',
      'Safety Features: Water Level Sensor',
      'Optional Solar Charging Port'
    ],
    status: 'coming-soon'
  },
  {
    id: 'sieving-machine',
    name: 'Portable DC Sieving Machine',
    description: 'A compact, efficient DC-powered sieving machine for processing various types of flour. Perfect for small bakeries and food processing.',
    image: '/dc flours seivers.png',
    features: [
      '12V/24V High-Efficiency DC Motor',
      'Rechargeable Lithium-Ion Battery',
      'Stainless Steel Sieve Net',
      'Glass Drawer Collection Tray',
      'Simple Control Switch with LED',
      'Optional Solar Charging Support',
      'Compact Tabletop Design',
      'Easy Maintenance Design'
    ],
    status: 'coming-soon'
  },
  {
    id: 'smartmop',
    name: 'SmartMop 1.0',
    description: 'Stylish DC-powered mopping machine with manual spray, instant drying, built-in water and detergent containers, and optional solar charging.',
    image: '/moppinmachine.jpeg',
    features: [
      'Ergonomic stylish handle',
      'Manual spray control',
      'Instant drying system',
      '360° Microfiber mop head',
      'DC lithium battery system',
      'Optional Solar Input',
      'LED Status Indicators',
      'Portable and lightweight design'
    ],
    status: 'available'
  },
  {
    id: 'palmoil-mixer',
    name: 'PalmOil Mixer & Separator Machine',
    description: 'Mechanical palm oil mixing and separation machine powered by petrol or diesel engine with built-in fiber filtering system.',
    image: '/paimoilmixer.png',
    features: [
      'Horizontal stainless steel mixing drum',
      'Petrol/Diesel Engine Powered',
      'Precision Gearbox Mixing Control',
      'Fiber and Kernel Separation',
      'Heavy-duty mobile wheels',
      'Durable anti-rust frame',
      'Easy drain waste system',
      'User-friendly design'
    ],
    status: 'available'
  },
  {
    id: 'dc_toaster',
    name: 'DC Battery Rechargeable Toaster',
    description: 'Portable, rechargeable two-slice toaster with built-in battery, digital display, and dual charging via USB or solar.',
    image: '/toaster.jpeg',
    features: [
      'Rechargeable Battery System',
      'Dual Charging: USB-C and Solar',
      'Two-Slice Capacity',
      'Digital Temperature and Timer Display',
      'Adjustable Heat Settings',
      'Compact and Lightweight Design',
      'Eco-Friendly Materials',
      'Ergonomic Carry Handle'
    ],
    status: 'available'
  },
  {
    id: 'solar-generator',
    name: 'Curloops Mobile Solar & Inverter Generator',
    description: 'Portable futuristic solar-powered inverter generator built like a travel box with a 1000W inverter, ABS lithium battery pack, and solar input.',
    image: '/curloopssolar.png',
    features: [
      '1000W AC Inverter Output',
      'ABS Lithium-ion Battery Pack',
      'Solar Panel Input Socket',
      'Digital Display & Power Indicators',
      'LED Decorative Lights',
      'Silent and Energy Efficient',
      'Compact Travel Box Design',
      'Curloops Green Energy Branding'
    ],
    status: 'available'
  },
  {
    id: 'iona-iron',
    name: 'IONA Smart Fabric Care',
    description: 'Next-generation fabric pressing device using MagPulse™ technology and graphene heating for efficient, gentle fabric care.',
    image: '/iron.jpeg',
    features: [
      'Graphene Ultra-Plate Technology',
      'MagPulse™ Fiber Smoothing',
      'Ionic Steam Fusion System',
      'Smart Solar Cell Dock (Optional)',
      'Adaptive Intelligence System',
      '99% Energy Consumption Reduction',
      'Automatic Fabric Detection',
      'Ultra-Lightweight Design'
    ],
    status: 'coming-soon'
  },
  {
    id: 'home_hydro_generator',
    name: 'Home Hydropower Generator',
    description: 'Compact, portable hydropower generator by Curloops Innovations featuring a pressurized water system, digital output display, and eco-friendly energy production.',
    image: '/home_hydro_generator.jpeg',
    features: [
      'Pressurized Water Tank System',
      '12V DC Motor for Energy Generation',
      'Built-in Water Filter for Recycling',
      'Digital Voltage Output Display',
      'Outlet Plug for Device Charging',
      'LED Operation Indicator',
      'Compact and Mobile Design',
      'Eco-Friendly and Recyclable Materials'
    ],
    status: 'available'
  }
  ,
  {
    id: 'neurocare_transformer_bed',
    name: 'NeuroCare Transformer Bed',
    description: 'Next-generation hospital bed by NeuroCare Systems featuring motorized transformation, IoT health monitoring, integrated vitals sensing, and smart patient comfort solutions.',
    image: '/automated hospital bed.jpeg',
    features: [
      'Motorized Bed-to-Chair Transformation',
      'Built-in Blood Pressure and Temperature Sensors',
      'IoT Health Monitoring and Mobile App Control',
      'Foldable Reading Desk with USB Charging Ports',
      'Mini Water Dispenser and Food Tray',
      'Adjustable Safety Side Guards with Auto-Lock',
      'Smart 360° Mobility Wheels with Remote Lock',
      'Antibacterial Memory Foam Mattress',
      'Emergency Mode with Instant Flattening',
      'Voice Assistant Integration (Alexa, Google)'
    ],
    status: 'available'
  },
  
  
  {
    id: 'cokopress',
    name: 'CokoPress™ V2',
    description: 'Advanced cocoa pod cracker and bean separator available in manual, solar-powered, and petrol engine versions.',
    image: '/cocoamachine.jpeg',
    features: [
      'Precision Cracking Drum System',
      'Soft Compression Rollers',
      'Dual Collection Bins',
      'Multiple Power Options',
      'Durable Stainless Steel Construction',
      'Adjustable Settings',
      'Optional Air Suction Module',
      'High Processing Capacity'
    ],
    status: 'available'
  },
  {
    id: 'palm-oil-press',
    name: 'Hydraulic Palm Oil Press',
    description: 'Professional-grade hydraulic press machine for efficient palm oil extraction, featuring integrated heating and separation systems.',
    image: '/palmoil.jpeg',
    features: [
      'Food-Grade Stainless Steel Construction',
      'Manual Hydraulic Jack (10-20 tons)',
      'Integrated Heating System',
      'Oil and Water Separation Tank',
      'Direct Bottling System',
      'Compact Design (1200mm height)',
      'Easy Maintenance Access',
      'Enhanced Oil Yield Technology'
    ],
    status: 'available'
  },
  {
    id: 'secure-platform',
    name: 'SecureGuard™ Intelligence Platform',
    description: 'Advanced security and intelligence platform designed for national defense and infrastructure protection. Features AI-powered analytics and blockchain security.',
    image: '/aidevence.png',
    features: [
      'AI-Powered Threat Detection',
      'Blockchain-Based Audit System',
      'Local Infrastructure Deployment',
      'Advanced Analytics Dashboard',
      'Real-Time Monitoring System',
      'Secure Access Controls',
      'Data Protection Framework',
      'Compliance Management Tools'
    ],
    status: 'coming-soon'
  }
];