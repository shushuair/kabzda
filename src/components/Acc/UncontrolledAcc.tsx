import React, {useState} from "react";

type AccPropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UncontrolledAcc = (props: AccPropsType) => {
    console.log("Acc rendering");
let[collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)} } />
            { !collapsed && <AccBody /> }
        </div>)
};

type AccTitlePropsType = {
    title: string
    onClick: () => void
}

function AccTitle(props: AccTitlePropsType) {
    console.log("AccTitle rendering");
    return (
        <h3 onClick={ ()=> {props.onClick()} } >{props.title}</h3>
    )
}

function AccBody() {
    console.log("AccBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

// export const Acc2 = (props:AccPropsType) => {
//     if(props.collapsed === true) {
//         return (
//             <div>
//                 <AccTitle title={props.titleValue}/>
//             </div>
//         )
//     }  else {
//         return (
//             <div>
//                 <AccTitle title={props.titleValue}/>
//                 <AccBody/>
//             </div>
//         )
//     }
// }





//--------------
// import React from 'react';
//
// type AccPropsType = {
//     titleValue: string
//     collapsed: boolean
// }
//

//
// const Acc2 = (props: AccPropsType) => {
//     console.log("Acc rendering");
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccTitle title={props.titleValue}/>
//             </div>)
//     } else {
//         return <div>
//             <AccTitle title={props.titleValue}/>
//             <AccBody/>
//         </div>
//     }
// };
//
//
// type AccTitlePropsType = {
//     title: string
// }
//

//

//
// export default Acc;



// import React, {useState} from "react";
//
// type RatingPropsType = {
//     // value: 0 | 1 | 2 | 3 | 4 | 5
// }
//
// export let UncontrolledRating = (props: RatingPropsType) => {
//     let [value, setValue] = useState(0)
//     return (
//         <div>
//             <Star selected={value > 0} setValue={setValue} value={1} />
//             <Star selected={value > 1} setValue={setValue} value={2} />
//             <Star selected={value > 2} setValue={setValue} value={3} />
//             <Star selected={value > 3} setValue={setValue} value={4} />
//             <Star selected={value > 4} setValue={setValue} value={5} />
//         </div>
//
//     )
// }
//
// type StarsPropsType = {
//     selected: boolean
//     value: 1 | 2 | 3 | 4 | 5
//     setValue: (value: 1 | 2 | 3 | 4 | 5) => void
// }
//
// const Star = (props: StarsPropsType) => {
//     return <span onClick={() => {
//         props.setValue(props.value)
//     }}>
//         {props.selected ? <b>star-</b> : "star-"}
//     </span>
// }