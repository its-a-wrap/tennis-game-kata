import {Player} from "./Player.js";

export class TennisGame {
    constructor() {
        this.playerOne = new Player('Patrick');
        this.playerTwo = new Player('Stu');
        this.winningPlayer = null;
    }

    getCurrentGameScore() {
        if (this.isGameOver()) {
            return this.winningPlayer.getName() + ' wins'
        }
        if (this.isDeuce()) {
            return 'Deuce';
        }
        if (this.isAdvantage()) {
            const advantagePlayer = this.playerOne.getCurrentScore() > this.playerTwo.getCurrentScore() ? this.playerOne.getName() : this.playerTwo.getName();
            return 'Advantage ' + advantagePlayer;
        }
        return this.playerOne.getFormattedScore() + ' - ' + this.playerTwo.getFormattedScore();
    }

    isGameOver() {
        if (this.playerOne.getCurrentScore() > 3 && this.playerTwo.getCurrentScore() < 3) {
            this.winningPlayer = this.playerOne;
            return true;
        }
        if (this.playerTwo.getCurrentScore() > 3 && this.playerOne.getCurrentScore() < 3) {
            this.winningPlayer = this.playerTwo;
            return true;
        }

        if (this.playerTwo.getCurrentScore() > 4 && this.playerOne.getCurrentScore() === 3) {
            this.winningPlayer = this.playerTwo;
            return true;
        }

        if (this.playerTwo.getCurrentScore() === 3 && this.playerOne.getCurrentScore() > 4) {
            this.winningPlayer = this.playerOne;
            return true;
        }
        return false;
    }

    awardPointToPlayerOne() {
        if (this.playerOne.getCurrentScore() === 3 && this.playerTwo.getCurrentScore() === 4) {
            this.playerTwo.bringBackToDeuce();
        } else {
            this.playerOne.awardPoint();
        }
    }

    awardPointToPlayerTwo() {
        if (this.playerTwo.getCurrentScore() === 3 && this.playerOne.getCurrentScore() === 4) {
            this.playerOne.bringBackToDeuce();
        } else {
            this.playerTwo.awardPoint();
        }
    }

    isDeuce() {
        return this.playerOne.getCurrentScore() === 3 && this.playerTwo.getCurrentScore() === 3;
    }

    isAdvantage() {
        return (this.playerOne.getCurrentScore() === 4 && this.playerTwo.getCurrentScore() === 3)
            || (this.playerTwo.getCurrentScore() === 4 && this.playerOne.getCurrentScore() === 3);
    }
}
