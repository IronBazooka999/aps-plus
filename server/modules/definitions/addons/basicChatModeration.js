// Very basic spam prevention.
// Adds a simple ratelimit for sending too many messages.
// Allows you to spam if you have the allowSpam flag in your permissions.

let recent = {},
	ratelimit = 3,
	decay = 10_000;

module.exports = ({ Events, Config }) => {
	Events.on('chatMessage', ({ message, socket, preventDefault }) => {

		let perms = socket.permissions,
			id = socket.player.id

		// This will help us modify the players message
		function modifyIncomingMessage(string) {
			// Lets stop the message from coming through
			preventDefault()
			let _id = socket.player.body.id;
			if (!chats[_id]) {
				chats[_id] = [];
			}

			// Then lets modify the message!
			// message: string, is what modifies it.
			chats[_id].unshift({
				message: string, expires: new Date().getTime() + c.CHAT_MESSAGE_DURATION
			});
			// Lets log some information
			util.log(`\n${socket.player.body.name}:\n Original: "${message}"\n Modified: "${string}"\n`);
			chatLoop();
		}


		// Spam prevention!

		function preventSpam() {
			// They are allowed to spam ANYTHING they want INFINITELY.
			if (perms && perms.allowSpam) return;

			// If they're talking too much, they can take a break.
			// Fortunately, this returns false if 'recent[id] is 'undefined'.
			if (recent[id] >= ratelimit) {
				preventDefault(); // 'preventDefault()' prevents the message from being sent.
				socket.talk('m', 'Please slow down!');
				return;
			}

			// The more messages they send, the higher this counts up.
			if (!recent[id]) {
				recent[id] = 0;
			}
			recent[id]++;

			// Let it decay so they can talk later.
			setTimeout(() => {
				recent[id]--;

				// memoree leak NOes!
				if (!recent[id]) {
					delete recent[id];
				}
			}, decay);
		}


		// Lets add a character limit!
		function preventAboveCharacterLimit() {
			// If message is above 256
			if (message.length > Config.CHAT_MESSAGE_CHARACTER_LIMIT) {
				// lets truncate that message to the character limit
				let truncatedMessage = message.substring(0, Config.CHAT_MESSAGE_CHARACTER_LIMIT)

				// then lets modify the message!
				modifyIncomingMessage(truncatedMessage)
			}
		}

		// Now this is a bigone
		function preventBadWords() {
			// Lets make a function that finds if we have a bad word in our message
			function badWord(message) {
				let messageContainsBadWord = false

				let messageSplit = message.split(" ")
				let messageSplitSplit = []
				
				// We split the message into words so we can detect "hate you"
				for (let i = 0; i < messageSplit.length; i++) {
					for (let j = 0; j < Config.badWords.length; j++) {
						messageSplitSplit.push(messageSplit[i].split(Config.badWords[j]))
					}
				}

				// And we split the splitted message but now using
				// the bad words to split it so we can detect "hateyou"
				for (let i = 0; i < messageSplitSplit.length; i++) {
					for (let j = 0; j < messageSplitSplit[i].length; j++) {
						// If we see an empty string because
						// we splitted by the bad words
						if (messageSplitSplit[i][j] == '') {
							// we now know that it has a bad word
							messageContainsBadWord = true
						}
					}
				}
				return messageContainsBadWord
			}

			// If we have a bad word, (or allow bypass if we have perms)
			if (badWord(message) && !(perms && perms.allowBadWords)) {

				// We modify the message to a more nicer sentence
				let niceWord = Config.niceMessages[Math.floor(Math.random() * Config.niceMessages.length)]
				modifyIncomingMessage(niceWord)
			}
		}

		preventSpam()
		preventAboveCharacterLimit()
		preventBadWords()

		console.log('[basicChatModeration] Loaded spam prevention!');
	});
};

