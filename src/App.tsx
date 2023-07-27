import React, {useState} from 'react';
import './App.css';
// import {UncontrolledAcc} from "./components/Acc/UncontrolledAcc";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Acc} from "./components/Acc/Acc";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAcc} from "./components/Acc/UncontrolledAcc";
// import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accCollapsed, setAccCollapsed] = useState<boolean>(false)
    // let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
      <div>
          {/*<OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}
          {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}**/}

          <UncontrolledAcc titleValue={"Menu"} />
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
          <PageTitle title={"this is App component"}/>
          {/*<UncontrolledRating />*/}

          {/*<Rating value = {5} />*/}

          {/*<Acc*/}
          {/*    titleValue={"Menu"}*/}
          {/*    collapsed={accCollapsed}*/}
          {/*    onChange={() => {setAccCollapsed(!accCollapsed)} } />*/}

      </div>
  )
}

type PageTitlePropsType = {title:string}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}


export default App;
