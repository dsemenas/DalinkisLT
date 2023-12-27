"use-client";

import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async (url: string) => {
    const res = fetch(url);

    if(res.ok) {

    }   else{

    }
  };
};
