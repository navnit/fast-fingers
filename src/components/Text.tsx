import {Char} from "./Char.tsx";

interface TextParams {
    text: string,
    cursor: number
}

export function Text({text, cursor}: TextParams) {
    return (
        <>
            {text.split('').map((c, i) => (
                <Char key={"char"+i} char={c} position={i} cursor={cursor}/>
            ))}
        </>
    );
}