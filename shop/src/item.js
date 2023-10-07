import React from "react";

function item(props){
    return(
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes"+props.idx+".jpg"} width="80%" />
            <h4>{props.name}</h4>
            <p>{props.info}</p>
        </div>
    )
}

export default item;