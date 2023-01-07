const botToken = "5890973262:AAFq32eh1ftXPa18bG40ShH8qMky_rgBL7g";
const chatId = "-835924208";

const confirmRedMessage = `
💰ENTRADA CONFIRMADA💰

👉APOSTE NO PRETO ⚫
👉PROTEÇÃO NO ⚪
`;

const confirmRedMessage2 = `
🤖MARTIN GALE CONFIRMADO🤖


👉DOBRE APOSTA NO PRETO ⚫
👉PROTEÇÃO NO ⚪
`;

const confirmBlackMessage = `
💰ENTRADA CONFIRMADA💰

👉APOSTE NO VERELHO 🔴
👉PROTEÇÃO NO ⚪
`;

const confirmBlackMessage2 = `
💰ENTRADA CONFIRMADA💰

👉APOSTE NO VERELHO 🔴
👉PROTEÇÃO NO ⚪
`;

const resultWinRedMessage = `
💰RESULTADO DA APOSTA:

Green✅✅✅✅✅
➡️➡️⚫
`;

const resultWinBlackMessage = `
💰RESULTADO DA APOSTA:

Green✅✅✅✅✅
➡️➡️🔴
`;

const resultRed = `
💰RESULTADO DA APOSTA:

Red❌❌❌❌

✅VAMOS PARA A PROXIMA✅
`;

const urlSendRedBetMessage = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  confirmRedMessage
)};`;
const urlSendRedBetMessage2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  confirmRedMessage2
)};`;
const urlSendBlackBetMessage = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  confirmBlackMessage
)};`;
const urlSendBlackBetMessage2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  confirmBlackMessage2
)};`;
const urlSendWinRedBetMessage = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  resultWinRedMessage
)};`;
const urlSendWinBlackBetMessage = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  resultWinBlackMessage
)};`;
const urlSendRed = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
  resultRed
)};`;

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
