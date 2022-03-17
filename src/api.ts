import { shuffleArray } from "./utils"
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type questionState = Question & {
    answer: string[]
}

export type Question = {
    category: string;
    correct_aswer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty ) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=9`
    const data = await (await fetch(url)).json();
    return data.results.map((question: Question) => (
        {
        ...question,
        answer: shuffleArray([...question.incorrect_answers, question.correct_aswer])
        }
    ))
    
                
}


