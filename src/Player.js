export class Player {
    constructor(name) {
        this.currentScore = 0;
        this.name = name;

        this.scoreMap = {
            0: 'Love',
            1: 'Fifteen',
            2: 'Thirty',
            3: 'Forty',
            4: 'Advantage'
        }
    }

    getFormattedScore() {
        return this.scoreMap[this.currentScore];
    }

    awardPoint() {
        this.currentScore++;
    }

    getCurrentScore() {
        return this.currentScore;
    }

    getName() {
        return this.name;
    }

    bringBackToDeuce() {
        this.currentScore--;
    }
}