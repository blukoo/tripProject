import { Dispatch, createContext, useContext, useState } from "react";
interface AuthType {
  userInfo: { name: string; password: string };
  setUserInfo: Dispatch<any>;
  isLogin: boolean;
  setIsLogin: Dispatch<any>;
}
const AuthContext = createContext<AuthType>({
  userInfo: { name: "", password: "" },
  setUserInfo: () => {},
  isLogin: false,
  setIsLogin: () => {}
});

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<any>({ name: "", password: "" });
  const [login, setLogin] = useState<boolean>(false);
  return (
    // @ts-ignore
    <AuthContext.Provider
      value={{
        userInfo: user,
        setUserInfo: setUser,
        isLogin: login,
        setIsLogin: setLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
