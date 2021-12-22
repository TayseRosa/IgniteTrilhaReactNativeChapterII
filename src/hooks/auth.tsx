import React, { 
  createContext, 
  ReactNode, 
  useContext
} from "react";

interface AuthProviderProps{
  children: ReactNode;
}

interface User{
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider ({ children } : AuthProviderProps){
  const user = {
    id: '21313899',
    name: 'Tayse Rosa',
    email:'developer@tayserosa.dev'
  };

  return(
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>   
  )
}

//Vamos transformar nosso contexto em nosso Hook
function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }