"use client";
import React, { useEffect, useState } from "react";
import Product from "./components/Product";

export default function Home() {
  interface Product {
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

  interface ApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  const [data, setData] = useState<ApiResponse | null>(null);

  const categories = [
    { category: "Electronics", icon: "fa-regular fa-laptop" },
    { category: "Outdoor Gear", icon: "fa-regular fa-campground" },
    { category: "Sports Equipment", icon: "fa-regular fa-futbol" },
    { category: "Party and Events", icon: "fa-regular fa-birthday-cake" },
    { category: "Home and Garden", icon: "fa-regular fa-home" },
    { category: "Vehicles", icon: "fa-regular fa-car" },
    { category: "Fitness Equipment", icon: "fa-regular fa-dumbbell" },
    { category: "Water Sports", icon: "fa-regular fa-swimming-pool" },
    { category: "Children's Items", icon: "fa-regular fa-child" },
    { category: "Art and Hobbies", icon: "fa-regular fa-paint-brush" },
    { category: "Fashion and Accessories", icon: "fa-regular fa-tshirt" },
    { category: "Technology and Gadgets", icon: "fa-regular fa-laptop-code" },
    { category: "Catering and Cooking", icon: "fa-regular fa-utensils" },
    { category: "Tools and DIY", icon: "fa-regular fa-tools" },
    { category: "Musical Instruments", icon: "fa-regular fa-guitar" },
    { category: "Baby and Toddler Gear", icon: "fa-regular fa-baby" },
    { category: "Health and Wellness", icon: "fa-regular fa-heartbeat" },
    { category: "Photography and Videography", icon: "fa-regular fa-camera" },
    { category: "Educational Tools", icon: "fa-regular fa-book" },
    {
      category: "Board Games and Entertainment",
      icon: "fa-regular fa-gamepad",
    },
  ];

  useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await fetch(url);

      try {
        if (res.ok) {
          const resData = await res.json();
          setData(resData);
        } else {
          setData(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData("https://dummyjson.com/products?limit=12");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8 px-10">
      <div className="">
        <h1 className="text-3xl font-medium text-center">Kategorijos</h1>
        <div className="grid grid-cols-2 grid-rows-auto gap-y-3 gap-x-16 mt-7">
          {categories.map((c, index) => (
            <a className="inline-block link link-primary" key={index}>
              <i className={`fa-fw ${c.icon} me-2`} />
              {c.category}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-4xl font-medium text-center">
          Naujausi nuomos pasiūlymai
        </h1>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-y-5 gap-x-5 w-full mt-16">
          {data
            ? data.products.map((product, index) => (
                <Product
                  key={index}
                  images={product.images}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  id={product.id}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
