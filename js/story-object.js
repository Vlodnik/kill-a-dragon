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
		heading: `Goblin time.`,
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
	searchTools: {
		heading: 'You find a stick.',
		copy: [
			`Nice.`,
			`It won't be much good against a dragon, but hey, you've gotta start somewhere?`,
		],
		options: [
			{
				buttonText: '',
				destination: '',
			},
		]
	},
	confirmDragon: {
		heading: 'Uh...you sure, bud?',
		copy: [
			`I just wanna double check here, because the smart money's on the dragon at this point.`,
		],
		options: [
			{
				buttonText: `We're doin' it.`,
				destination: 'fightDragon',
			},
			{
				buttonText: `Maybe I'll fight some goblins instead?`,
				destination: 'fightGoblins',
			},
			{
				buttonText: `On second thought, let's look for some tools.`,
				destination: 'findMagicalSword',
			},
		]
	},
	backToSleep: {
		heading: 'Nap time.',
		copy: [
			`What a good idea. That dragon's not going anywhere, you've got loads of time. You're feeling easy like a Sunday morning babyyyyyyyyyyyy.`
		],
		options: [
			{
				buttonText: ``,
				destination: ``,
			},
			{
				buttonText: ``,
				destination: ``,
			},
			{
				buttonText: ``,
				destination: ``,
			},
		]
	}
}
