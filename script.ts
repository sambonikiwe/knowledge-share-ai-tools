import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cars = [
    {
      id: "1",
      name: "2023 Model X",
      price: 9910.99,
      summary: "Electric SUV with sleek design and cutting-edge features",
      overview:
        "The 2023 Model X is designed for safety and speed, with cutting-edge features and a sleek, aerodynamic exterior. This electric SUV offers a spacious and luxurious interior, making it the perfect choice for family road trips or daily commutes.",
      features: [
        "Advanced Autopilot with Full Self-Driving Capability",
        "Falcon Wing doors for easy access",
        "Dual-zone climate control with HEPA air filtration",
        "17-inch infotainment touchscreen with navigation and entertainment options",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "2",
      name: "2022 Toyota Camry",
      price: 5910.99,
      summary: "Reliable and fuel-efficient mid-size sedan",
      overview:
        "The 2022 Toyota Camry is a reliable and comfortable mid-size sedan that offers excellent fuel efficiency and a spacious interior. With its sleek design and modern features, its a great choice for daily commutes or road trips.",
      features: [
        "Adaptive Cruise Control",
        "Lane Departure Warning with Steering Assist",
        "Rear Cross-Traffic Alert",
        "Apple CarPlay and Android Auto compatibility",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "3",
      name: "2021 Ford F-150",
      price: 7910.99,
      summary: "Powerful and versatile full-size pickup truck",
      overview:
        "The 2021 Ford F-150 is a powerful and versatile full-size pickup truck that combines impressive towing and hauling capabilities with a comfortable and feature-packed interior.",
      features: [
        "Available EcoBoost engines for improved fuel efficiency",
        "Pro Trailer Backup Assist for easier trailer maneuverability",
        "FordPass Connect with Wi-Fi hotspot",
        "Integrated blind spot information system",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "4",
      name: "2023 Honda Civic",
      price: 4910.99,
      summary: "Stylish and fuel-efficient compact car",
      overview:
        "The 2023 Honda Civic is a stylish and fuel-efficient compact car that offers a comfortable ride, responsive handling, and a well-appointed interior.",
      features: [
        "Available turbocharged engine for increased performance",
        "Honda Sensing suite of safety and driver-assistance features",
        "Apple CarPlay and Android Auto integration",
        "Spacious trunk and folding rear seats for added cargo space",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "5",
      name: "2022 Jeep Wrangler",
      price: 8910.99,
      summary: "Iconic off-road SUV with open-air adventure",
      overview:
        "The 2022 Jeep Wrangler is an iconic off-road SUV that combines rugged capability with modern amenities and a removable top for open-air adventures.",
      features: [
        "Available four-wheel drive systems for superior off-road performance",
        "Removable doors and folding windshield for an open-air experience",
        "Uconnect infotainment system with off-road pages",
        "Available safety features like blind-spot monitoring",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "6",
      name: "2021 BMW 3 Series",
      price: 7910.99,
      summary: "Luxurious and sporty compact sedan",
      overview:
        "The 2021 BMW 3 Series is a luxurious and sporty compact sedan that offers a perfect blend of performance, style, and premium features.",
      features: [
        "Available turbocharged and high-performance engines",
        "Advanced driver assistance systems like lane departure warning",
        "Intuitive iDrive infotainment system with touchscreen display",
        "Comfortable and well-appointed interior with ample passenger space",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "7",
      name: "2023 Subaru Outback",
      price: 6910.99,
      summary: "Rugged and capable all-weather wagon",
      overview:
        "The 2023 Subaru Outback is a rugged and capable wagon that offers excellent all-weather performance, ample cargo space, and a comfortable ride.",
      features: [
        "Standard Symmetrical All-Wheel Drive for superior traction",
        "Raised ground clearance for off-road capability",
        "EyeSight Driver Assist Technology for advanced safety features",
        "Spacious interior with fold-flat rear seats for increased cargo space",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "8",
      name: "2022 Kia Sorento",
      price: 7410.99,
      summary: "Stylish and versatile mid-size SUV for families",
      overview:
        "The 2022 Kia Sorento is a stylish and versatile mid-size SUV that offers a comfortable ride, advanced safety features, and a well-appointed interior.",
      features: [
        "Available V6 engine or hybrid powertrain options",
        "Advanced safety features like forward collision avoidance assist",
        "Intuitive infotainment system with Apple CarPlay and Android Auto",
        "Spacious seating for up to seven passengers",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "9",
      name: "2021 Chevrolet Silverado 1500",
      price: 8910.99,
      summary: "Powerful and capable full-size pickup truck",
      overview:
        "The 2021 Chevrolet Silverado 1500 is a powerful and capable full-size pickup truck that offers impressive towing and hauling capabilities, as well as a comfortable and tech-savvy interior.",
      features: [
        "Available V8 engines for superior towing and hauling performance",
        "Advanced trailering technology like Trailer Sway Control",
        "Available 4G LTE Wi-Fi hotspot and infotainment system",
        "Durable and versatile cargo bed with available features like a power-up/down tailgate",
      ],
      imageUrl: "/car.jpg",
    },
    {
      id: "10",
      name: "2022 Hyundai Santa Fe",
      price: 6410.99,
      summary: "Stylish and well-equipped mid-size SUV",
      overview:
        "The 2022 Hyundai Santa Fe is a stylish and well-equipped mid-size SUV that offers a comfortable ride, advanced safety features, and a spacious interior.",
      features: [
        "Available turbocharged engines for increased performance",
        "Hyundai SmartSense suite of advanced safety features",
        "Intuitive infotainment system with Apple CarPlay and Android Auto",
        "Roomy interior with ample cargo space and available third-row seating",
      ],
      imageUrl: "/car.jpg",
    },
  ];

  for (const car of cars) {
    const createdCar = await prisma.car.create({
      data: {
        id: car.id,
        name: car.name,
        price: car.price,
        summary: car.summary,
        overview: car.overview,
        imageUrl: car.imageUrl,
      },
    });

    for (const feature of car.features) {
      await prisma.feature.create({
        data: {
          name: feature,
          carId: createdCar.id,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
