function scrabble(characterSet, word) {
	const newWord = word.toLowerCase().split('');
	const newCharacterSet = characterSet.split('');
	const stack = [];

	if(newWord.length > newCharacterSet.length) {
		return false;
	}

	for(const item of newWord) {
		if(newCharacterSet.includes(item)) {
			stack.push(item);
			newCharacterSet.splice(newCharacterSet.indexOf(item), 1);
		}
	}

	return stack.length === newWord.length;
}

export default scrabble;