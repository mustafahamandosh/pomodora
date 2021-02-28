import React from "react";

type buttonProps = {
    color: string;
}
const Button = ({color}:buttonProps) => {
    return(
        <button type="button" style={{color: color}}>Botão</button>
    )
}

export default Button
