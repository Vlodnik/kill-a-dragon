let firstRoom = {
	heading: `You wake up.`,
	copy: [
		`A fine day for dragon killing! "Another day, another dragon," you always say. Although this would be the first dragon you killed, so how about "first dragon, first dollar?" This is probably the time to mention that you have no dollars. And no name, as of yet.`,
		`What an exciting start!`
	],
	options: [
		{
			buttonText: `I know my name!`,
			destination: 'nameEntry',
		},
		{
			buttonText: `I think I know my name...?`,
			destination: '',
		},
		{
			buttonText: `I'd like to go back to sleep, please.`,
			destination: '',
		},
	],
};
