import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export let Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1} />
            <Star selected={props.value > 1} onClick={props.onClick} value={2} />
            <Star selected={props.value > 2} onClick={props.onClick} value={3} />
            <Star selected={props.value > 3} onClick={props.onClick} value={4} />
            <Star selected={props.value > 4} onClick={props.onClick} value={5} />
        </div>

    )
}

type StarsPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingValueType) => void
}

const Star = (props: StarsPropsType) => {
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star-</b> : "star-"}
    </span>
}


//-------


//--------
// import React from "react";
//
// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// }
//
// export function Rating(props: RatingPropsType) {
//     console.log("Rating rendering");
//     return (
//         <div>
//             <Star selected={props.value > 0}/>
//             <Star selected={props.value > 1}/>
//             <Star selected={props.value > 2}/>
//             <Star selected={props.value > 3}/>
//             <Star selected={props.value > 4}/>
//         </div>
//     )
// }
//
// function Star(props: any) {
//     if (props.selected) {
//         return <span><b>star </b></span>
//     } else {
//         return <span>star </span>
//     }
// }