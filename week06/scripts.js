import appid from "./environment.js";

let BASE_URL = "http://api.wolframalpha.com/v1/conversation.jsp";
let HOST;

const year = document.querySelector("#year");
const inputField = document.querySelector("#chat");
const messages = document.querySelector("#messages");
let currentMessage = {};

const getCurrentYear = () => {
  let thisYear = new Date().getFullYear();
  year.innerHTML = thisYear;
};

const validate = (input) => {
  let valid = true;
  valid = input != "" ? true : false;
  return valid;
};

const resetInput = () => {
  const sendMessageBlock = document.querySelector("#sendMessage");
  sendMessageBlock.removeChild(sendMessageBlock.firstChild);
  inputField.value = "";
  sendMessageBlock.prepend(inputField);
};

getCurrentYear();

const uri = (message) => {
  let uriMessage = message.replaceAll("?", "%3f");
  return uriMessage.replaceAll(" ", "+");
};

const callApi = async (message) => {
  if (await currentMessage.conversationID) {
  }
  let uriMessage = uri(message);
  let auth = `${BASE_URL}?appid=${appid}`;
  let params = `&i=${uriMessage}`;
  if (currentMessage.conversationID) {
    HOST = currentMessage.host;
    auth = `http://${HOST}/api/v1/conversation.jsp?appid=${appid}`;
    params = `&conversationid=${currentMessage.conversationID}&i=${uriMessage}`;
  }
  let call = auth + params;

  const data = await fetch(call);
  currentMessage = await data.json();

  console.log(call);
  console.log(currentMessage);

  createRecipientMessage(await currentMessage);
};

const createRecipientMessage = (message) => {
  const newMessage = document.createElement("div");
  const messageContent = document.createElement("p");
  messageContent.innerHTML = message.result || message.error;
  newMessage.appendChild(messageContent);
  newMessage.setAttribute("class", "recipient");
  messages.appendChild(newMessage);
  if (message.error) console.log(message.error);
  messages.lastChild.scrollIntoView({
    behavior: "smooth",
  });
  resetInput();
};

const createSenderMessage = (message) => {
  const newMessage = document.createElement("div");
  const messageContent = document.createElement("p");
  messageContent.innerHTML = message;
  newMessage.appendChild(messageContent);
  newMessage.setAttribute("class", "sender");
  messages.appendChild(newMessage);
  messages.lastChild.scrollIntoView({
    behavior: "smooth",
  });
  resetInput();
};

const sendMessage = () => {
  const message = inputField.value;
  if (validate(message)) {
    createSenderMessage(message);
    callApi(message);
  }
};

document.querySelector("#button").addEventListener("click", sendMessage);
