import React from "react";
import {
  ApplicationContextState,
  userDataProps,
} from "@/types/context/application-context";

const ApplicationContext = React.createContext<ApplicationContextState>(
  null as any
);

export function useApplicationContext() {
  const value = React.useContext(ApplicationContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error(
        "useApplicationContext must be wrapped in an <ApplicationProvider />"
      );
    }
  }
  return value;
}

export function ApplicationProvider(props: React.PropsWithChildren) {
  const [userData, setUserData] = React.useState<userDataProps | null>(null);

  return (
    <ApplicationContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </ApplicationContext.Provider>
  );
}
