import React from "react";

const useFetch = () => {
  const fetchData = async (npm install -D @tailwindcss/typography) => {
    const res = await fetch(url);
    try {
      if (res.ok) {
        const resData = await res.json();
        return resData;
      } else {
        return "Nothing has been fetched";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchData };
};

export default useFetch;
