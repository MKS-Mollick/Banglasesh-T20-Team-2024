const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteTeam = {
  team: "Bangladesh",
  sport: "Cricket",
  year: 2024,
  headCoach: {
    coachName: "Chandika Haturu",
    matches: 60,
  },
  players: [
    {
      image: "images/Hridoy.webp",
      name: "Touhid Hridoy",
      type: "Batter",
      number: 1,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Liton.webp",
      name: "Liton Das",
      type: "Batter",
      number: 2,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Mahmudullah.webp",
      name: "Mahmudullah",
      type: "All Rounder",
      number: 3,
      isCaptain: false,
      nicname: "Riyad",
    },
    {
      image: "images/Mehedi.webp",
      name: "Mehedi Hasan",
      type: "All Rounder",
      number: 4,
      isCaptain: false,
      nicname: "Miraz",
    },
    {
      image: "images/Mustafiz.webp",
      name: "Mustafizur Rahman",
      type: "Bowler",
      number: 5,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Rishad.webp",
      name: "Rishad",
      type: "Batter",
      number: 6,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Sakib.webp",
      name: "Sakib Al Hasan",
      type: "All Rounder",
      number: 7,
      isCaptain: false,
      nicname: "Sakib",
    },
    {
      image: "images/shanto.webp",
      name: "Nazmul Hossain",
      type: "Batter",
      number: 8,
      isCaptain: true,
      nicname: "Shanto",
    },
    {
      image: "images/Shoriful.webp",
      name: "Shoriful Islam",
      type: "Bowler",
      number: 9,
      isCaptain: false,
      nicname: "N/A",
    },
    {
      image: "images/shoumya.webp",
      name: "Shoumya Sharker",
      type: "Batter",
      number: 10,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Tanvir.webp",
      name: "Tanvir",
      type: "All Rounder",
      number: 11,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Tanzid.webp",
      name: "Tanzid",
      type: "Bowler",
      number: 12,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Tanzim.webp",
      name: "Tanzim Sakib",
      type: "Bowler",
      number: 13,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/Taskin.webp",
      name: "Taskin Ahmed",
      type: "Bowler",
      number: 14,
      isCaptain: false,
      nicname: null,
    },
    {
      image: "images/ZakerAli.webp",
      name: "Zaker Ali",
      type: "Batter",
      number: 15,
      isCaptain: false,
      nicname: null,
    },
  ],
};

Object.freeze(myFavoriteTeam);
const { sport, team, year, players } = myFavoriteTeam;
const { coachName } = myFavoriteTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ image, name, type, number, isCaptain, nicname }) =>
        `
    <div class="player-card">
    <img src="${image}">
    <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
    <p>Number: ${number}</p>
    <p>${type}</p>
    <p>Nickname: ${nicname === null ? "N/A" : nicname}</p>
<a href="#">Detailed Biography</a>
    </div>
    `
    )
    .join("");
};
setPlayerCards();

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nicname !== null));
      break;
    case "batter":
      setPlayerCards(players.filter((player) => player.type === "Batter"));
      break;
    case "bowler":
      setPlayerCards(players.filter((player) => player.type === "Bowler"));
      break;
    case "allrounder":
      setPlayerCards(players.filter((player) => player.type === "All Rounder"));
      break;

    default:
      setPlayerCards();
  }
});
