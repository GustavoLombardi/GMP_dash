import { Children } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.nome) {
    return <h1>VocÊ não tem acesso</h1>;
  }

  return children;
};
