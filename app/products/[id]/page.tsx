"use client";
import { useEffect, useState } from "react";
import Review from "@/app/components/Review";
import Rating from "@/app/components/Rating";

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

  const quickInfo = [
    { property: "Miestas", placeHolder: "Vilnius" },
    { property: "Daikto vertė", placeHolder: "150 €" },
    { property: "Užstatas", placeHolder: "Nereikalingas" },
    { property: "Minimalus nuomos laikotarpis", placeHolder: "1 d." },
  ];

  const priceInfo = [
    { property: "Kaina už parą:", price: "10" },
    { property: "Kaina už savaitę:", price: "60" },
    { property: "Kaina už mėnesį:", price: "200" },
  ];

  const fetchData = async () => {
    const url = `https://dummyjson.com/products/${params.id}`;
    const res = await fetch(url);
    if (res.ok) {
      const resData = await res.json();
      console.log(resData);
      setData(resData);
    } else {
      console.log("Error fetching!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center py-24 px-24">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-28 grid-rows-auto justify-center">
        <div className="left-side flex flex-col space-y-16">
          <div className="carousel max-h-[35rem] w-full">
            {data?.images.map((image, index) => (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <img src={image} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${
                      index == 0 ? data.images.length - 1 : index - 1
                    }`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index == data.images.length - 1 ? 0 : index + 1
                    }`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="text-3xl">Prekės aprašymas</span>
            <p className="text-start mt-7 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aperiam maiores et veniam! Quas temporibus, similique expedita
              enim asperiores ratione, molestiae iste officia quos consequatur
              provident quia maxime natus tempora voluptas, omnis optio? Eveniet
              deserunt numquam, aut velit itaque temporibus quisquam, deleniti
              sequi optio quidem inventore voluptates maxime repellat beatae.
              Minima error, odio dolores in autem hic, sint enim modi
              perferendis quos eum exercitationem cumque! Rerum at iste alias
              expedita illum numquam nulla corrupti ab molestias quos. Ducimus
              beatae ab quidem assumenda porro aspernatur voluptas magni modi
              aliquam tempore accusamus rerum, dolore doloribus praesentium
              veritatis nam deserunt. Modi, fugiat odio voluptatum quaerat
              possimus asperiores soluta ipsam harum debitis nesciunt explicabo!
              Modi odio iste enim quasi? Saepe laudantium adipisci rem eveniet
              dignissimos alias libero eaque tempore velit, nisi consequatur
              quos voluptate? Excepturi illum amet, quasi, dolores praesentium
              laboriosam, autem odio soluta temporibus qui natus nihil voluptas
              molestiae itaque beatae id ipsam?
            </p>
          </div>
          <div className="text-center">
            <span className="text-3xl">Atsiliepimai</span>
            <div className="flex flex-col gap-y-10 mt-7">
              <Review />
              <Review />
            </div>
            <div className="text-start mt-10">
              <button className="btn btn-neutral text-white">
                <i className="fa-sharp fa-solid fa-comment" />
                <span>Rašyti atsiliepimą</span>
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="card bg-base-100 w-full">
            <div className="card-body pt-0">
              <span className="text-start text-3xl">{data?.title}</span>
              <hr className="border-gray-300" />
              <div className="grid grid-cols-2 mt-7">
                <div className="">
                  <ul className="mt-2 truncate">
                    {quickInfo.map((info, index) => (
                      <li key={index}>
                        <span className="me-2 text-gray-600">
                          {info.property}:
                        </span>
                        <span className="">{info.placeHolder}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="truncate mt-2">
                    {priceInfo.map((info, index) => (
                      <li key={index}>
                        <span className="me-2 text-gray-600">
                          {info.property}
                        </span>
                        <span>{info.price} €</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-2">
                    <li className="">
                      <span className="me-2 text-gray-600">Sąskaita:</span>
                      <span>
                        Sąskaita faktūra neišrašoma arba išrašoma ne visai
                        sumai.
                      </span>
                    </li>
                    <li className="mt-2">
                      <span className="me-2 text-gray-600">Pastabos:</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae earum quam repellendus vel eveniet natus! Porro
                        aperiam accusantium aut commodi magni sapiente eum
                        aspernatur cupiditate, recusandae architecto quos vero
                        maxime quo distinctio consectetur quibusdam dolorum,
                        fuga beatae nostrum dolorem. Nulla dignissimos quaerat
                        blanditiis iste. Molestias totam in recusandae nam ipsa?
                      </span>
                    </li>
                    <li className="mt-2">
                      <span className="me-2 text-gray-600">
                        Atšaukimo sąlygos:
                      </span>
                      <span>
                        Nuomininkui atšaukus apmokėtą sandorį likus mažiau negu
                        24 val. iki nuomos pradžios - nuomos mokestis
                        negrąžinamas.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 font-light text-gray-600">
                    Nežinai kaip išsinuomuoti? Spausk{" "}
                    <a href="/" className="link link-primary">
                      čia
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-col w-min gap-y-1">
                  <div className="flex items-center gap-x-3">
                    <div className="avatar offline">
                      <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4HQXmfC1hcblbT6LgrXFm-OfSAScC8dEhQ&usqp=CAU" />
                      </div>
                    </div>
                    <div className="truncate">
                      <span className="block text-xl">KajusLe</span>
                      <Rating rating={4.5} />
                      <span className="font-light text-sm text-gray-500">
                        Prisijungęs prieš 10 min.
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-neutral text-white w-full">
                    <i className="fa-sharp fa-solid fa-comments" />
                    <span>Susisiekti</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
