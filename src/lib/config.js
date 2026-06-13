export const NAME = 'Kevin Lingk';
export const ROLE = 'Software Developer';
export const TAGLINE = 'currently playing with AI and agents';
export const EMAIL = 'kevin.lingk@proton.me';
export const GITHUB = 'https://github.com/kvnlnk';
export const LINKEDIN = 'https://www.linkedin.com/in/kevin-lingk-471595360';

export const GITHUB_USERNAME = 'kvnlnk';

export const PROJECTS = [
	{
		title: 'UtilityBelt',
		description:
			'A collection of 47 developer tools and 6 cheatsheets — format, encode, convert, debug, visualize. All client-side, no backend.',
		imgSrc: '/images/projects/utilitybelt.svg',
		link: 'https://github.com/kvnlnk/utilitybelt',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest']
	},
	{
		title: 'Deutschland Tour',
		description:
			'Self-guided GPS-activated audio walking tours through Germany\'s most beautiful cities. Multi-language, PWA-ready.',
		imgSrc: '/images/projects/deutschland_tour.svg',
		link: 'https://github.com/kvnlnk/deutschland-tour',
		tags: ['React', 'TypeScript', 'Leaflet', 'Express', 'PostgreSQL']
	},
	{
		title: 'stacylize',
		description:
			'Multi-language stack trace beautifier. Pipe in ugly JS/Python/Java traces, get colorized, collapsed, scannable output.',
		imgSrc: '/images/projects/stacylize.svg',
		link: 'https://github.com/kvnlnk/stacylize',
		tags: ['Node.js', 'Commander', 'Chalk', 'CLI']
	},
	{
		title: 'designtok',
		description:
			'Convert JSON design tokens to CSS custom properties, Tailwind config, or SASS — in your browser, no install needed.',
		imgSrc: '/images/projects/designtok.svg',
		link: 'https://github.com/kvnlnk/designtok',
		tags: ['Vanilla JS', 'HTML/CSS', 'Offline-first']
	},
	{
		title: 'crontrans',
		description:
			'Bidirectional cron expression translator — turn cryptic schedules into plain English or generate them from natural language.',
		imgSrc: '/images/projects/crontrans.svg',
		link: 'https://github.com/kvnlnk/crontrans',
		tags: ['Python', 'argparse', 'pytest', 'CLI']
	},
	{
		title: 'Smart Water Bottle',
		description:
			'An intelligent water bottle system for monitoring and promoting healthy drinking habits.',
		imgSrc: '/images/projects/smart_water_bottle.png',
		link: 'https://github.com/kvnlnk/swpm-smart-water-bottle',
		tags: ['Flutter', 'C#', 'FastEndpoints', 'C++', 'ESP32']
	},
	{
		title: 'Snake Game',
		description:
			'Classic Snake game with a dark retro aesthetic — React, Express, SQLite highscore leaderboard.',
		imgSrc: '/images/projects/snake_game.svg',
		link: 'https://github.com/kvnlnk/snake-game',
		tags: ['React', 'Express', 'SQLite', 'Canvas']
	}
];

export const SOCIAL_LINKS = [
	{ name: 'GitHub', url: GITHUB, icon: 'github' },
	{ name: 'LinkedIn', url: LINKEDIN, icon: 'linkedin' },
	{ name: 'Email', url: `mailto:${EMAIL}`, icon: 'email' }
];
