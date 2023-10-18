import { createContext, useState } from "react";


export const AuthContext = createContext()


const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    


    const userInfo = {
        user,

        loader,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;