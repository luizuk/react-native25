import { Dispatch, SetStateAction } from "react";

interface userDataProps {
  login: string;
  githubImage: string;
}

interface ApplicationContextState {
  userData: userDataProps | null;
  setUserData: Dispatch<SetStateAction<any>>;
}
