"use server";

import { PrismaClient, Car } from "@prisma/client";

const prisma = new PrismaClient();

type CarData = {
  id: string;
  name: string;
  price: number;
  summary: string;
  overview: string;
  features: string[];
  imageUrl: string;
};

export async function getCarById(id: string): Promise<CarData | null> {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      features: true, // Include related features
    },
  });

  if (!car) {
    return null;
  }

  // Map the result to CarData
  const carData: CarData = {
    id: car.id,
    name: car.name,
    price: car.price,
    summary: car.summary,
    overview: car.overview,
    imageUrl: car.imageUrl,
    features: car.features.map((feature) => feature.name), // Map features to an array of strings
  };

  return carData;
}

type PriceRange = [] | [number, number];

interface Filters {
  priceRange: PriceRange;
  model: string;
  year: string;
}

export async function getCars({
  priceRange,
  model,
  year,
}: Filters): Promise<Car[]> {
  console.log(priceRange, model, year);
  const cars = await prisma.car.findMany({
    where: {
      AND: [
        priceRange.length !== 0
          ? { price: { gte: priceRange[0], lte: priceRange[1] } }
          : {},
        model !== "all" ? { model: model } : {},
        year !== "all" ? { year: year } : {},
      ],
    },
  });

  return cars;
}

export async function createRental(rental: {
  userId: number;
  carId: string;
  pickup: Date;
  dropoff: Date;
}) {
  return await prisma.rental.create({
    data: rental,
  });
}
