import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

interface CharParams {
    char: string,
    position: number,
    cursor: number
}

export function Char({char, position, cursor}: CharParams) {
    const [active, setActive] = useState(false);
    const [color, setColor] = useState("darkgrey");

    useEffect(() => {
        if (position < cursor) {
            if (char === " ") {
                setColor("lightgrey");
            } else {
                setColor("darkseagreen");
            }
        } else {
            if (char === " ") {
                setColor("lightgrey");
            } else {
                setColor("darkgrey");
            }
        }
        if (position === cursor) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [cursor, position, char]);

    return (
        <Typography component="span" variant="inherit"
                    sx={{
                        color: color,
                        fontFamily: '"Merriweather", serif',
                        fontWeight: 400,
                        textDecoration: active ? "underline" : null,
                        ...(char === " " && {
                            position: "relative",
                            mx: 0.5,
                            fontSize: 0,
                            // mx: 1,
                            "&::after": {
                                content: '"•"',
                                // position: "absolute",
                                left: 0,
                                fontSize: 'h4.fontSize',
                                // top: "50%", // Position at the middle vertically
                                // transform: "translateY(-50%)", // Center it properly
                                width: "100%",
                                textAlign: "center",
                                color: color, // Match the parent color
                                pointerEvents: "none" // Prevent interference with text selection
                            }
                        })
                    }}>
            {char}
        </Typography>
    )
}