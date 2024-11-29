export interface AuthContextState {
  signIn: () => void;
  signOut: () => void;
  setToken: (value: string | null) => void;
  loadingToken: boolean;
  loadingUid: boolean;
  token?: string | null;
  uid: string | null;
  setUid: (value: string) => void;
}
