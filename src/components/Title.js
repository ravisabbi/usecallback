import React from "react"

const Title = () => {
    console.log("Usecallback rendering");
    return (
        <div>
            <h1>UseCallback Hook</h1>
        </div>
    )
}

export default React.memo(Title);