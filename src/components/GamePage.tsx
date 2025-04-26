import {Box, Grid, Typography} from "@mui/material";
import {Text} from "./Text.tsx";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import getLevelTexts from "../services/LevelTexts.ts";

function useCharListener(onChar: (char: string) => void) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            onChar(e.key);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onChar]);
}

interface GamePageProps {
    mode: string,
    setMode: (mode: string) => void
}

function GamePage({mode, setMode}: GamePageProps) {

    const [cursor, setCursor] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>("waiting");
    const [text, setText] = useState<string>("Start")
    const [texts, setTexts] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [level, setLevel] = useState<number>(1);
    const [textIdx, setTextIdx] = useState<number>(0);

    useEffect(() => {
        setTexts(getLevelTexts(mode, level));
    }, [level, mode]);

    useEffect(() => {
        if (gameStatus === "started" && texts.length > 0) {
            setText(texts[textIdx]);
        }
    }, [textIdx, texts, gameStatus]);


    const onChar = (char: string) => {
        if (char === "Escape") {
            if (gameStatus === "waiting") {
                setMode("home");
            } else {
                // get confirmation to exit
                if (window.confirm("Are you sure you want to exit the game?")) {
                    setMode("home");
                }
            }
            return
        } else if (char.length === 1) {
            if (text[cursor] === char) {
                if (gameStatus === "started") {
                    setScore((prevScore) => prevScore + 1);
                    if (cursor === text.length - 1) {
                        setTextIdx((prevTextIdx) => {
                            if (prevTextIdx + 1 < texts.length) {
                                return prevTextIdx + 1;
                            } else {
                                setLevel((prevLevel) => prevLevel + 1);
                                return 0;
                            }
                        });
                        setCursor(0);
                        return
                    }
                }
                if (cursor === text.length - 1 && gameStatus === "waiting") {
                    setGameStatus("started");
                    setCursor(0);
                    return
                }
                setCursor((prevCursor) => prevCursor + 1);
            } else {
                if (gameStatus === "started") {
                    setScore((prevScore) => prevScore - 1);
                }
            }
        }
    };

    useCharListener(onChar)

    return <>
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{p: 1}}>
                <Grid size={{xs: 12, sm: 6, md: 8, lg: 9}} height={"inherit"}>
                    <Box height={"inherit"}>
                        <Typography component="span" variant="h6" pr={1}>Level:</Typography>
                        <Typography component="span" variant="h6">{level}</Typography>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} height={"inherit"}>
                    <Box height={"inherit"} sx={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                        <Typography component="span" variant="h6" pr={1}>Score: </Typography>
                        <Typography component="span" variant="h6">{score}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box  maxWidth={'xl'} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
            }}>
                {gameStatus === "waiting" ? (<Typography variant="h4">Type </Typography>) : null}
                <Typography variant="h4"
                            sx={{fontFamily: '"Merriweather", serif', fontWeight: 400, p: 3, wordBreak: 'break-word', textAlign:'center'}}>
                    <Text text={text} cursor={cursor}/>
                </Typography>
                {gameStatus === "waiting" ? (<Typography variant="h4"> to start the game!</Typography>) : null}
            </Box>
            <Box sx={{height: '5vh'}}>
                <Typography variant="h6" sx={{textAlign: 'center'}}>Press <Typography component='span' variant='h6'
                                                                                      sx={{
                                                                                          fontFamily: 'monospace',
                                                                                          fontWeight: 700,
                                                                                          color: 'inherit',
                                                                                          textDecoration: 'none',
                                                                                      }}>Esc</Typography> key to go back</Typography>
            </Box>
        </Container>
    </>
}

export default GamePage;