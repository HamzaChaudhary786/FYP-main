import React, { useContext, useState, useEffect } from "react";

const ContextApp = React.createContext();


// const api_url = ` https://apidata1.herokuapp.com/apidata`;
const api_url = ` http://localhost:3001/apidata`;

const AppProvider = (({ children }) => {

    const [fund, setFund] = useState([]);
    const[money , setMoney]=useState([]);
    const [query , setQuery]=useState("bussiness");
    const[query_cancer , setQuery_Cancer]=useState("cancer");


    const getProject = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setFund(data.Search);
                setMoney(data.Recived_Dollar)

            }
            else {
                console.log("Error Accurs");
            }




        }
        catch (error) {
            console.log("error");

        }

    }

    useEffect(() => {
        let timerOut=setTimeout(()=>{
            getProject(`${api_url}`);

        },2000);
        

    }, [query , query_cancer])




    return (
        <ContextApp.Provider value={{ fund ,money,query , setQuery ,query_cancer , setQuery_Cancer }}>
            {children}
        </ContextApp.Provider>
    )

})


const useGlobalContext = () => {
    return (
        useContext(ContextApp)
    )
}

export { AppProvider, ContextApp, useGlobalContext };