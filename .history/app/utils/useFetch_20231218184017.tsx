"use-client";

import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  const fetchData = async (url: string) => {
    const res = await fetch(url);

    if (res.ok) {
      const resData = await res.json();
      setData(resData);
    } else {
        setErr
    }
  };
};
