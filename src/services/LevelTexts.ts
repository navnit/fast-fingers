import getFingeringTexts from "./FingeringTexts.ts";

function getLevelTexts(mode:string, level:number){
    const levelTexts = {
        "easy": [
            "Hello World",
            "This is a test",
            "How are you?",
            "I am fine",
            "This is a typing test",
            "I love programming",
            "This is a simple text",
            "I am learning to type",
            "This is a typing game",
            "I am having fun"
        ],
        "medium": [
            "The quick brown fox jumps over the lazy dog",
            "A journey of a thousand miles begins with a single step",
            "To be or not to be, that is the question",
            "All that glitters is not gold",
            "A picture is worth a thousand words",
            "Actions speak louder than words",
            "The pen is mightier than the sword",
            "When in Rome, do as the Romans do",
            "The early bird catches the worm",
            "A watched pot never boils"
        ],
        "hard": [
            "The only thing we have to fear is fear itself",
            "In the end, we will remember not the words of our enemies, but the silence of our friends",
            "The greatest glory in living lies not in never falling, but in rising every time we fall",
            "Life is either a daring adventure or nothing at all",
            "Success is not final, failure is not fatal: It is the courage to continue that counts",
            "It does not matter how slowly you go as long as you do not stop",
            "You are never too old to set another goal or to dream a new dream",
            "The future belongs to those who believe in the beauty of their dreams",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us",
            "Believe you can and you're halfway there"
        ]
    }

    if (mode === "fingering") {
        return getFingeringTexts(level);
    } else if (mode === "dictionary") {
        return levelTexts.medium;
    } else if (mode === "pro") {
        return levelTexts.hard;
    } else {
        return [];
    }
}

export default getLevelTexts;