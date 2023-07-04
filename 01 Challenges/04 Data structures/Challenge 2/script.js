"use strict";

const game = {
  team1: "Bayern",
  team2: "Real",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martin",
      "Ala",
      "Davis",
      "Kim",
      "Gore",
      "Coman",
      "Muller",
      "Gnaby",
      "Lew",
    ],
    [
      "Burki",
      "Schult",
      "Humm",
      "Akanji",
      "Hakimi",
      "Wih",
      "Hazard",
      "Brand",
      "gotze",
      "flo",
      "sancho",
    ],
  ],
  score: "4:0",
  scored: ["Lew", "Gnaby", "Lew", "Humm"],
  date: "Nov 9th, 2040",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const goal = Object.entries(game);
// console.log(goal);

//1
for (const [key, value] of game.scored.entries())
  console.log(`Goal ${key + 1}: ${value}`);

//2
const odds = Object.values(game.odds);
// console.log(gameOdds);

let average = 0;
for (const odd of odds) average += odd;

average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
