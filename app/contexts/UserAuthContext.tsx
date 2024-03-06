"use-client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

export type UserAuth = {
  isLoggedIn: boolean;
};

export interface UserAuthContextInterface {
  userAuth: UserAuth;
  setUserAuth: Dispatch<SetStateAction<UserAuth>>;
}

const defaultState = {
  userAuth: {
    isLoggedIn: false,
  },
  setUserAuth: (userAuth: UserAuth) => {},
} as UserAuthContextInterface;

export const UserContext = createContext(defaultState);

type ProviderProps = {
  children: ReactNode;
};

export function UserAuthProvider({ children }: ProviderProps) {
  const [userAuth, setUserAuth] = useState<UserAuth>({ isLoggedIn: false });

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
}
