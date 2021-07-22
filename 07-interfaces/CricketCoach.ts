import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    getDailyWorkout(): string {
        return "swing racket 1000 times";
    }

}