import React from "react";
class ClassCompEg extends React.Component{
render()
{
    var sty={
        fontSize: "30px",
        color: "yellow",
        textDecoration: "underline"
    }
    return(
        <div>
            <h1 style={sty}>
               DAY 4 -FULLSTACK 
            </h1>
        </div>
    )
}
}
export default ClassCompEg;
