"use-client";

import React, { useState } from "react";

const useFetch = () => {
  const fetchData = async (url: string) => {
    const res = await fetch(url);

    try {
      if (res.ok) {
        const resData = await res.json();
      } else {
        return "Nothing has been fetched"
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchData };
};

export default useFetch;
