import { useStorageState } from "@/hooks/useStorageState";
import { AuthContextState } from "@/types/context/auth-context";
import { router } from "expo-router";
import React from "react";

const AuthContext = React.createContext<AuthContextState>(null as any);

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[loadingToken, token], setToken] = useStorageState("token");
  const [[loadingUid, uid], setUid] = useStorageState("uid");

  async function signIn() {
    setToken("xxx");
    router.replace("/(app)");
  }

  function signOut() {
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        setToken,
        setUid,
        loadingToken,
        loadingUid,
        token,
        uid,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
