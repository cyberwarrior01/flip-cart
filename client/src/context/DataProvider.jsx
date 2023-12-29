import React, { useContext, useState } from "react";



const Datacontext = React.createContext();

export const useAuth = () =>{
    return ( useContext(Datacontext))
}

const DataProvider = (props)=>{

    const [account, setAccount ] = useState(null);
    const values = {account , setAccount}
    return(

        <Datacontext.Provider value={values}>
{props.children}
        </Datacontext.Provider>
    )
}

export default DataProvider;    