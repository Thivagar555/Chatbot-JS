const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

const botReplies = {
  "hello": "Hi there! 👋 How can I assist you today?",
  "how are you": "I'm just a bunch of code, but I'm feeling awesome! 😄",
  "bye": "Goodbye! Take care! 👋",
  "help": "Sure! Ask me anything — I'm here to help. 💡",
  "default": "Hmm, I didn’t quite get that. Can you try asking something else? 🤔"
};

function appendMessage(message, className) {
  const messageElem = document.createElement('div');
  messageElem.className = `message ${className}`;
  messageElem.textContent = message;
  chatBox.appendChild(messageElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  const lower = message.toLowerCase();
  return botReplies[lower] || botReplies["default"];
}

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  appendMessage(message, 'user-message');
  userInput.value = '';
  setTimeout(() => {
    const botReply = getBotReply(message);
    appendMessage(botReply, 'bot-message');
  }, 600);
}

userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});
