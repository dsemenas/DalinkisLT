"use client";
import React, { createContext, useState } from "react";

type userAuthContextProviderProps = {
  children: React.ReactNode;
};

type userAuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const userAuthContext = createContext<userAuthContext | null>(null);

export default function UserAuthContextProvider({
  children,
}: userAuthContextProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <userAuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = createContext(userAuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within UserAuthContextProvider"
    );
  }
  return context;
}
