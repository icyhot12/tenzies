import React from "react";

function Square(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59e391" : "#b9bab4"
    }

    return (
        <div className="square"
            style={style}
            onClick={() => props.handleClick(props.id)}
        >
            {props.number}
        </div>
    );
}

export default Square;
