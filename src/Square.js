import React from "react";

function Square(props) {

    const [clicked, setClicked] = React.useState(false)

    const style = {
        backgroundColor: clicked ? "#59e391" : "#b9bab4"
    }

    function handleClick() {
        setClicked(prevClicked => {
            return !prevClicked
        })
    }

    return (
        <div className="square" 
        style={style}
        onClick={handleClick}
        >{props.number}</div>
    );
}

export default Square;
