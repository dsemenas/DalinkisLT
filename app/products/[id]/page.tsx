"use client";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  interface ApiResponse {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  const [data, setData] = useState<ApiResponse | null>(null);
  const fetchData = async () => {
    const url = `https://dummyjson.com/products/${params.id}`;
    const res = await fetch(url);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
    } else {
      console.log("Error fetching!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="block justify-center">{data?.title}</div>;
}
