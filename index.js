const https = require("https");
const axios = require("axios");
const {
  botToken,
  chatId,
  confirmRedMessage,
  confirmRedMessage2,
  confirmBlackMessage,
  confirmBlackMessage2,
  resultWinRedMessage,
  resultWinBlackMessage,
  resultRed,
  urlSendBlackBetMessage,
  urlSendBlackBetMessage2,
  urlSendWinRedBetMessage,
  urlSendRedBetMessage,
  urlSendRedBetMessage2,
  urlSendWinBlackBetMessage,
  urlSendRed,
} = require("./send_telegram");

async function getRecentGames() {
  let lastData = null;

  setInterval(async function () {
    const response = await axios.get(
      "https://blaze.com/api/roulette_games/recent"
    );

    if (response.status === 200) {
      const data = response.data;
      const dataString = JSON.stringify(data);
      if (dataString !== lastData) {
        console.log("Searching for pattern...");
        lastData = dataString;

        const recentColors = data.map((game) => game.color).slice(0, 6);
        console.log(recentColors);

        // red
        if (
          recentColors.slice(0, 3).every((color) => color === 1) &&
          recentColors.slice(3, 4).every((color) => color !== 1)
        ) {
          console.log("red");
          https.get(urlSendRedBetMessage);
        } else if (
          recentColors.slice(0, 4).every((color) => color === 1) &&
          recentColors.slice(4, 5).every((color) => color !== 1)
        ) {
          console.log("red");
          https.get(urlSendRedBetMessage2);
        } else if (
          recentColors.slice(0, 5).every((color) => color === 1) &&
          recentColors.slice(5, 6).every((color) => color !== 1)
        ) {
          https.get(urlSendRedBetMessage2);
        } else if (recentColors.slice(0, 6).every((color) => color === 1)) {
          https.get(urlSendRed);
        }

        // black
        if (
          recentColors.slice(0, 3).every((color) => color === 2) &&
          recentColors.slice(3, 4).every((color) => color !== 2)
        ) {
          console.log("red");
          https.get(urlSendBlackBetMessage);
        } else if (
          recentColors.slice(0, 4).every((color) => color === 2) &&
          recentColors.slice(4, 5).every((color) => color !== 2)
        ) {
          console.log("red");
          https.get(urlSendBlackBetMessage2);
        } else if (
          recentColors.slice(0, 5).every((color) => color === 2) &&
          recentColors.slice(5, 6).every((color) => color !== 2)
        ) {
          https.get(urlSendBlackBetMessage2);
        } else if (recentColors.slice(0, 6).every((color) => color === 2)) {
          https.get(urlSendRed);
        }
      }
    } else {
      console.error("Error accessing API");
    }
  }, 1000);
}

getRecentGames();

module.exports = {
  botToken,
  chatId,
  confirmRedMessage,
  confirmRedMessage2,
  confirmBlackMessage,
  confirmBlackMessage2,
  resultWinRedMessage,
  resultWinBlackMessage,
  resultRed,
  urlSendBlackBetMessage,
  urlSendBlackBetMessage2,
  urlSendWinRedBetMessage,
  urlSendRedBetMessage,
  urlSendRedBetMessage2,
  urlSendWinBlackBetMessage,
  urlSendRed,
};
