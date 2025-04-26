import {Card, CardContent, CardMedia, Divider, Stack, Typography} from "@mui/material";
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {useEffect, useState} from "react";
import IconForText from "./IconForText.tsx";

function useCharListener(onChar: (char: string) => void) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            onChar(e.key);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onChar]);
}

const modes = [
    {
        name: "Fingering Mode",
        description: "Conquer each keyboard row finger-by-finger with Thing guiding you through randomized drills.",
        image: "images/fingering_mode.jpg",
        benefit: "Build rock-solid muscle memory.",
        mode: "fingering"
    },
    {
        name: "Dictionary Mode",
        description: "See a word and its meaning, type it out like Pugsley, and lock in new vocab at speed.",
        image: "images/dictionary_mode.jpg",
        benefit: "Expand your vocabulary effortlessly.",
        mode: "dictionary"
    },
    {
        name: "Pro Mode",
        description: "Tackle full passages with real-time WPM/accuracy feedback—Wednesday-level challenge that scales as you improve.",
        image: "images/pro_mode.jpg",
        benefit: "Master real-world typing speed and precision.",
        mode: "pro"
    }
];

interface HomePageProps {
    setMode: (mode: string) => void
}

function HomePage({setMode}: HomePageProps) {

    const [focusedCard, setFocusedCard] = useState(modes[0].mode);

    const onChar = (char: string) => {
        if (char === "ArrowRight" || char === "ArrowDown") {
            setFocusedCard(prev => {
                const currentIndex = modes.findIndex(mode => mode.mode === prev);
                const nextIndex = (currentIndex + 1) % modes.length;
                return modes[nextIndex].mode;
            });
        } else if (char === "ArrowLeft" || char === "ArrowUp") {
            setFocusedCard(prev => {
                const currentIndex = modes.findIndex(mode => mode.mode === prev);
                const nextIndex = (currentIndex - 1 + modes.length) % modes.length;
                return modes[nextIndex].mode;
            });
        } else if (char === "Enter") {
            setMode(focusedCard)
        }
        console.log(focusedCard);
    };

    useCharListener(onChar);

    const modeItems = modes.map(value => {
        return (
            <Card key={value.name} data-mode={value.mode}
                  elevation={focusedCard === value.mode ? 10 : 1} sx={{
                width: {md: '400px', sm: '100%'},
                mx: {md: 4, sm: 1, xs: 1},
                display: 'flex',
                flexDirection: 'column',
                scale: focusedCard === value.mode ? 1.015 : 1
            }}>
                <CardMedia component='img' height={400} image={value.image}/>
                <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <Typography variant={"h6"} gutterBottom>{value.name}</Typography>
                    <Typography variant={"body1"} gutterBottom sx={{flexGrow: 1}}>{value.description}</Typography>
                    <Divider sx={{my: 2}}/>
                    <Typography variant={"body1"}><IconForText icon={LightbulbIcon}/>{value.benefit}
                    </Typography>
                </CardContent>
            </Card>
        )
    });

    return <>
        <Stack spacing={3} justifyContent={"center"} alignItems={"stretch"}
               direction={{xs: "column", sm: "column", md: "row"}} mt={10} mx={2}>
            {modeItems}
        </Stack>
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} mt={5}>
            <Typography variant={"h6"}>Use <IconForText icon={KeyboardArrowLeftIcon}/><IconForText icon={KeyboardArrowRightIcon}/> to navigate and press <IconForText icon={KeyboardReturnIcon}/> to select a
                mode</Typography>
        </Stack>
    </>
}

export default HomePage;