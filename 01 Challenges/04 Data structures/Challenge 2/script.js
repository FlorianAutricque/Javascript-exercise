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
  scored: ["Lew, Gnaby, Lew, Humm"],
  date: "Nov 9th, 2040",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const team1Players = players1;
const team2Players = players2;
console.log(team1Players);

const [a, ...others] = team1Players;
console.log(a);
console.log(others);

//3
const allPlayers = [team1Players + team2Players];
console.log(...allPlayers);

//4
const playersFinal = ["Thiago", "Coutinho", "Perisic", ...team1Players];
console.log(playersFinal);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davis", "Muller", "Lew", "Kim");

//7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");
