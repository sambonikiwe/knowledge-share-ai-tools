"use client";

import { CarCard } from "./car-card";
import { FilterSection } from "../filters";
import { getCars } from "@/lib/db";
import { useEffect, useState } from "react";

interface Car {
  id: string;
  name: string;
  price: number;
  summary: string;
  overview: string;
  imageUrl: string;
  model: string;
  year: string;
}

export function CarsList() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [model, setModel] = useState("all");
  const [year, setYear] = useState("all");
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await getCars({
        priceRange: priceRange as [number, number],
        model,
        year,
      });
      setCars(cars);
    };

    fetchCars();
  }, [priceRange, model, year]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
      <FilterSection
        setPriceRange={setPriceRange}
        onModelChange={setModel}
        onYearChange={setYear}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}
