import Component2 from "./ContextComponent/Component2";
import React from "react";
export var ThemeProvider =React.createContext();
const ExamResults=()=>{
    return(
        <section>
            <ThemeProvider.Provider value={{sgpa:"9.5"}}>
            <h2>This is example Usecontext</h2>
            <Component2 />
            </ThemeProvider.Provider>
        </section>
    );
};
export default ExamResults;