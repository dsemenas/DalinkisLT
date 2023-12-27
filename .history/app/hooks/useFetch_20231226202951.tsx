"use-client";

import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<Object[]>(null);
  const [err, setErr] = useState(false);

  const fetchData = async (url: string) => {
    const res = await fetch(url);

    try {
      if (res.ok) {
        const resData = await res.json();
        setData(resData);
      } else {
        setErr(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { data, err, fetchData };
};

export default useFetch;
