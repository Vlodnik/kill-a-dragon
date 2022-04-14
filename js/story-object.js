var rooms = {
	startScreen: {
		heading: 'Kill a Dragon',
		copy: [],
		options: [
			{
				buttonText: 'Begin',
				destination: 'firstRoom',
			}
		]
	},
	firstRoom: {
		heading: `You wake up.`,
		copy: [
			`A fine day for dragon killing! "Another day, another dragon," you always say. Although this would be the first dragon you killed, so how about "first dragon, first dollar?" This is probably the time to mention that you have no dollars. And nothing that can kill a dragon.`,
			`What a promising start!`
		],
		options: [
			{
				buttonText: `Fight some goblins!`,
				destination: 'fightGoblins',
			},
			{
				buttonText: 'Search for tools.',
				destination: 'searchTools',
			},
			{
				buttonText: 'Fight the dragon!',
				destination: 'confirmDragon',
			},
			{
				buttonText: `I'd like to go back to sleep, please.`,
				destination: 'backToSleep',
			},
		],
	},
	fightGoblins: {
		heading: `Fightin' time.`,
		copy: [
			`What better way to start your day than fighting some goblins. Certainly not brushing your teeth!`,
			`After a quick search, you discover a goblin camp. There are two goblins by a campfire engrossed in conversation.`
		],
		options: [
			{
				buttonText: 'Ambush them!',
				destination: 'ambushGoblins',
			},
			{
				buttonText: 'Eavesdrop on them.',
				destination: 'eavesdropGoblins',
			},
		]
	},
}
