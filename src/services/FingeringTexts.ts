function getFingeringTexts(level: number): string[] {
    const rightHomeRow = "hjkl;'";
    const leftHomeRow = "asdfg";
    const rightTopRow = "yuiop[]\\";
    const leftTopRow = "qwert";
    const rightBottomRow = "bnm,./";
    const leftBottomRow = "zxcv";
    const rightBottomRowShift = "BNM<>?";
    const leftBottomRowShift = "ZXCV";
    const rightTopRowShift = "YUIOP{}|";
    const leftTopRowShift = "QWERT";
    const rightHomeRowShift = "HJKL:\"";
    const leftHomeRowShift = "ASDFG";

    switch (level) {
        case 1:
            // select a random 50 letters from home row of right hand side of the keyboard
            return rightHomeRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 2:
            // select a random 50 letters from home row of left hand side of the keyboard
            return leftHomeRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 3:
            // select a random 50 letters from top row of right hand side of the keyboard
            return rightTopRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 4:
            // select a random 50 letters from top row of left hand side of the keyboard
            return leftTopRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 5:
            // select a random 50 letters from bottom row of right hand side of the keyboard
            return rightBottomRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 6:
            // select a random 50 letters from bottom row of left hand side of the keyboard
            return leftBottomRow.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 7:
            // select a random 50 letters from top row of right hand side of the keyboard with shift
            return rightTopRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 8:
            // select a random 50 letters from top row of left hand side of the keyboard with shift
            return leftTopRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 9:
            // select a random 50 letters from bottom row of right hand side of the keyboard with shift
            return rightBottomRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 10:
            // select a random 50 letters from bottom row of left hand side of the keyboard with shift
            return leftBottomRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 11:
            // select a random 50 letters from home row of right hand side of the keyboard with shift
            return rightHomeRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        case 12:
            // select a random 50 letters from home row of left hand side of the keyboard with shift
            return leftHomeRowShift.repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
        default:
            // select a random 50 letters from all rows of right hand side of the keyboard
            return (rightHomeRow + rightTopRow + rightBottomRow + rightHomeRowShift + rightTopRowShift + rightBottomRowShift).repeat(50).split("").sort(() => Math.random() - 0.5).slice(0, 50);
    }
}

export default getFingeringTexts;
