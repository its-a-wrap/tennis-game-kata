import chai from 'chai';
import {TennisGame} from "./TennisGame.js";

const {expect} = chai;

describe('GIVEN TennisGame class', () => {
    let currentScore;

    describe('AND no points have been played', () => {
        it(`SHOULD return the game's score as 0-0`, () => {
            const tennisGame = new TennisGame();

            currentScore = tennisGame.getCurrentGameScore();
            expect(currentScore).to.eql("Love - Love");
        })
    })

    describe('AND a player wins the first point', () => {
        it(`SHOULD return the game's current score as 'Fifteen - Love'`, () => {
            const tennisGame = new TennisGame();

            tennisGame.awardPointToPlayerOne();
            currentScore = tennisGame.getCurrentGameScore();

            expect(currentScore).to.eql("Fifteen - Love");
        })
    })

    describe('AND a full game is played out', () => {
        it('SHOULD return the correct winning player', () => {
            const tennisGame = new TennisGame();

            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();

            currentScore = tennisGame.getCurrentGameScore();

            expect(currentScore).to.eql("Patrick wins");
        })
    })

    describe('AND a game where deuce is reached', () => {
        it('SHOULD return Deuce', () => {
            const tennisGame = new TennisGame();

            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();

            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();

            currentScore = tennisGame.getCurrentGameScore();

            expect(currentScore).to.eql("Deuce");
        })

    })

    describe('AND a game where deuce is reached', () => {
        it('SHOULD return Advantage Stu', () => {
            const tennisGame = new TennisGame();

            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();

            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();

            currentScore = tennisGame.getCurrentGameScore();

            expect(currentScore).to.eql("Advantage Stu");
        })

    })

    describe('AND a full game where deuce is reached and a player wins after winning a point after reaching advantage', () => {
        it('SHOULD return Patrick wins', () => {
            const tennisGame = new TennisGame();

            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();

            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();
            tennisGame.awardPointToPlayerTwo();

            tennisGame.awardPointToPlayerOne();
            tennisGame.awardPointToPlayerOne();

            currentScore = tennisGame.getCurrentGameScore();

            expect(currentScore).to.eql("Patrick wins");
        })

    })
});
