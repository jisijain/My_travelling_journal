import Card from "./Card";
import data from "./data"

function Main(){

    const cardData = data.map((item, index)=>{
        return(
            <Card
            key = {index}
            item = {item}
            />
        )
    })
    return <div className="card-container">
        {cardData}
    </div>
}

export default Main;