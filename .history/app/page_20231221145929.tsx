import React from "react";

export default function Home() {
  const categories = [
    { category: "Electronics", icon: "" },
    { category: "Outdoor Gear", icon: "" },
    { category: "Sports Equipment", icon: "" },
    { category: "Party and Events", icon: "" },
    { category: "Home and Garden", icon: "" },
    { category: "Vehicles", icon: "" },
    { category: "Fitness Equipment", icon: "" },
    { category: "Water Sports", icon: "" },
    { category: "Children's Items", icon: "" },
    { category: "Art and Hobbies", icon: "" },
    { category: "Fashion and Accessories", icon: "" },
    { category: "Technology and Gadgets", icon: "" },
    { category: "Catering and Cooking", icon: "" },
    { category: "Tools and DIY", icon: "" },
    { category: "Musical Instruments", icon: "" },
    { category: "Baby and Toddler Gear", icon: "" },
    { category: "Health and Wellness", icon: "" },
    { category: "Photography and Videography", icon: "" },
    { category: "Educational Tools", icon: "" },
    { category: "Board Games and Entertainment", icon: "" },
  ];

  return <div className="grid grid-cols-2 grid-rows-auto">
    {categories.map((c, index) => (
      <a key={index} className="link link-hover gap-"><i/><span></span></a>
    ))}
  </div>;
}