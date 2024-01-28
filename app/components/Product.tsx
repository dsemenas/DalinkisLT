import { useRouter } from "@/node_modules/next/navigation";
import React from "react";

interface ProductProps {
  images: string[];
  title: string;
  price: number;
  rating: number;
  id: number;
}

const Product: React.FC<ProductProps> = ({
  images,
  title,
  price,
  rating,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      className="card card-compact max-w-96 bg-base-100 shadow-md transition duration-150 hover:shadow-2xl text-start cursor-pointer bg-white"
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      <figure className="relative">
        <img
          loading="lazy"
          src={images[0]}
          alt={title}
          className="object-cover h-56 w-full"
        />
        <span className="badge badge-primary absolute top-2 right-2 p-4 font-semibold text-lg text-white">
          {price > 100 ? "99" : price}€/para
        </span>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center space-x-10">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={images[0]} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Loreta</span>
              <div className="flex justify-start items-center gap-1 text-accent">
                <span>{(Math.round(rating * 10) / 10).toFixed(1)}</span>
                <i className="fa-sharp fa-solid fa-star" />
              </div>
            </div>
          </div>
          <div className="block whitespace-nowrap">
            <i className="fa-regular fa-location-dot me-1" />
            <span>Vilnius</span>
          </div>
        </div>
        <h2 className="card-title truncate text-center">{title}</h2>
      </div>
    </div>
  );
};

export default Product;
