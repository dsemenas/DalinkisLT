"use-client";

import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async (url: string) => {
    const res = await fetch(url);

    if (res.ok) {
        co
    } else {
    }
  };
};
