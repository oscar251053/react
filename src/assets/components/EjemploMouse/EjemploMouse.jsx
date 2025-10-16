import { useState } from "react";

export const EjemploMouse = () => {
    const [hoover, setHover] = useState(false);

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{
                width: "200px",
                height: "100px",
                backgroundColor: hoover ? "red" : "blue",
                textAlign: "center",
                lineHeight: "100px",
            }}
        >
            {hoover ? "Con hover" : "Sin hover"}
        </div>
    );
};
