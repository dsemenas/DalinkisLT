"use client";
import React, { useEffect, useState } from "react";

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

  const [isFocused, setIsFocused] = useState<boolean>(false);
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

    fetchData("https://dummyjson.com/products");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8 px-10">
      <div
        className={`flex justify-center items-center w-full max-w-5xl py-3 px-5 border rounded-full bg-white ${
          isFocused ? "ring-2 ring-primary" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Ieškoti pagal raktažodį..."
          className="w-full bg-transparent outline-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <a className="cursor-pointer">
          <i className="fa-regular fa-magnifying-glass text-gray-400" />
        </a>
      </div>
      <div className="grid grid-cols-2 grid-rows-auto gap-y-3 gap-x-16 mt-16">
        {categories.map((c, index) => (
          <a className="inline-block link link-primary" key={index}>
            <i className={`fa-fw ${c.icon} me-2`} />
            {c.category}
          </a>
        ))}
      </div>
      <div className="mt-16">
        <h2 className="text-4xl font-medium text-center">
          Naujausi nuomos pasiūlymai
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-wrows-auto gap-y-5 gap-x-5 w-full mt-16">
          {data
            ? data.products.map((product, index) => (
                <div
                  className="card card-compact max-w-96 bg-base-100 shadow-md transition duration-150 hover:shadow-2xl text-start cursor-pointer bg-white"
                  key={index}
                  onClick={() => {}}
                >
                  <figure className="relative">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="object-cover h-56 w-full"
                    />
                    <span className="badge badge-primary absolute top-2 right-2 p-4 font-semibold text-lg text-white">
                      {product.price > 100 ? "99" : product.price}€/para
                    </span>
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center space-x-10">
                      <div className="flex items-center gap-2">
                        <div className="avatar">
                          <div className="w-12 rounded-full">
                            <img src={product.images[0]} />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base">Loreta</span>
                          <div className="flex justify-start items-center gap-1 text-accent">
                            <span>
                              {(Math.round(product.rating * 10) / 10).toFixed(
                                1
                              )}
                            </span>
                            <i className="fa-sharp fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="block whitespace-nowrap">
                        <i className="fa-regular fa-location-dot me-1" />
                        <span>Vilnius</span>
                      </div>
                    </div>
                    <h2 className="card-title truncate text-center">
                      {product.title}
                    </h2>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
