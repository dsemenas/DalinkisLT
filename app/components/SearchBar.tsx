"use-client";

import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

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

export default function SearchBar() {
  const [input, setInput] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchQuery = useDebounce(input);
  const [suggestions, setSuggestions] = useState<Product[] | undefined>();

  useEffect(() => {
    const fetchDataAndHandleResponse = async () => {
      try {
        if (debouncedSearchQuery.length >= 3) {
          setIsLoading(true);
          const data = await fetchData(
            `https://dummyjson.com/products/search?q=${debouncedSearchQuery}`
          );
          setSuggestions(data?.products);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchDataAndHandleResponse();
  }, [debouncedSearchQuery]);

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Ieškoti pagal raktažodį..."
        className="w-full bg-white rounded-full focus:outline-primary px-3 py-1.5 border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <a className="flex items-center absolute cursor-pointer right-0 inset-y-0 me-3">
        <i className="fa-regular fa-magnifying-glass text-gray-400" />
      </a>
      <div
        className={`${
          isFocused &&
          input.length >= 3 &&
          suggestions != undefined &&
          suggestions.length > 0
            ? ""
            : "hidden"
        } absolute start-0 w-full bg-white rounded-lg shadow-lg border mt-1`}
      >
        <ul className="text-gray-600">
          {!isLoading ? (
            suggestions?.map((i, index) => (
              <li
                key={index}
                className="px-3 py-1 hover:text-primary hover:font-medium cursor-pointer duration-100"
              >
                <a>{i.title}</a>
              </li>
            ))
          ) : (
            <div className="flex items-center px-3 h-[50px]">
              <span className="loading loading-dots loading-md"></span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: ApiResponse = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
