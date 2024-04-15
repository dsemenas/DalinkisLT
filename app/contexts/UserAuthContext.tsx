"use client";
import React, { useContext, createContext, useState } from "react";

type userAuthContextProviderProps = {
  children: React.ReactNode;
};

type UserAuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserAuthContext = createContext<UserAuthContext | null>(null);

export default function UserAuthContextProvider({
  children,
}: userAuthContextProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserAuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within UserAuthContextProvider"
    );
  }
  return context;
}
