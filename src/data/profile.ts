
// Type definitions
export interface MainInfo {
	title: string;
	name: string;
	email: string;
	logo: string;
}

export interface SocialLinks {
	twitter: string;
	github: string;
	linkedin: string;
	instagram: string;
	stackoverflow: string;
	facebook: string;
}

export interface HomepageInfo {
	title: string;
	description: string;
}

export interface AboutInfo {
	title: string;
	description: string;
	download: {
		link: string;
		title: string;
	};
}

export interface ArticlesInfo {
	title: string;
	description: string;
}

export interface ProjectItem {
	title: string;
	description: string;
	tech: string[];
	linkText: string;
	link: string;
}

export interface ProjectsInfo {
	title: string;
	description: string;
	list: ProjectItem[];
}

export interface ProfileInfo {
	main: MainInfo;
	socials: SocialLinks;
	homepage: HomepageInfo;
	about: AboutInfo;
	articles: ArticlesInfo;
	projects: ProjectsInfo;
}

// Utility function
export const buildImgShieldLink = (
	techName: string,
	bgColor: string,
	logoColor: string,
	logoName?: string
): string => {
	const logo = logoName
		? logoName
		: techName
				.toLowerCase()
				.replace(/[^a-zA-Z0-9\s.]/g, "")
				.split(" ")
				.join("");
	return `https://img.shields.io/badge/-${techName}-${bgColor}?logo=${logo}&logoColor=${logoColor}&style=for-the-badge&logoWidth=30`;
};

const defaultBgColor = "141414";

const profileInfo: ProfileInfo = {
	main: {
		title: "Sumanth Chinnaobireddy",
		name: "Sumanth Reddy",
		email: "sumanthcob@gmail.com",
		logo: "../logo.png",
	},
	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/rumanstheddy",
		linkedin: "https://www.linkedin.com/in/sumanthcob/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},
	homepage: {
		title: "Sumanth Chinnaobireddy",
		description:
			"I'm a Software Engineer specializing in JavaScript and TypeScript. Proficient in crafting scalable, secure, and dependable web applications, I leverage various frameworks and technologies. I thrive on tackling intricate challenges and acquiring new skills. My passion lies in producing high-quality code adhering to best practices and industry standards. Eager for fresh challenges, I continually seek opportunities to enhance my skills and evolve as a developer.",
	},
	about: {
		title: "About",
		description:
			"Dive into my journey – from academic milestones to professional endeavours. Discover my story in a resumé format.",
		download: {
			link: "https://dl.dropboxusercontent.com/scl/fi/m3ejqbey5pj1pedrzwztl/Sumanth-Reddy-Resume.pdf?rlkey=yw6uhdxolu8xhfsgcmflvb0b6&st=g6va213b&dl=0",
			title: "My Resumé",
		},
	},
	articles: {
		title:
			"I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},
	projects: {
		title: "My Projects",
		description:
			"I've been involved in diverse projects throughout my career, and I take pride in the strides we've made. If any of these projects catch your interest, explore the code and share any suggestions for improvements or enhancements. Collaboration is a fantastic opportunity for learning and development, and I welcome new ideas and feedback with open arms. Feel free to connect and share your insights!",
		list: [
			{
				title: "SeizureCare",
				description:
					"Designed and developed SeizureCare, a responsive website with React, Material UI, and SCSS, enabling EEG test requests and customer service enquiries while optimizing performance to a 90+ score on Lighthouse.",
				tech: [
					buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
					buildImgShieldLink("React", defaultBgColor, "61DAFB"),
					buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
					buildImgShieldLink("AWS Amplify", defaultBgColor, "8C6FE6"),
					buildImgShieldLink("Lighthouse", defaultBgColor, "E34F26"),
					buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://seizurecarenet.com/",
			},
			{
				title: "Playscore Pal",
				description:
					"Playscore Pal is a web-based platform built with Next.js, Node.js, Express, GraphQL, and MongoDB, utilizing the IGDB API. It empowers users to rate, review, and recommend games.",
				tech: [
					buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
					buildImgShieldLink("Next.js", defaultBgColor, "FFFFFF", "next.js"),
					buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
					buildImgShieldLink("GraphQL", defaultBgColor, "DA0393"),
					buildImgShieldLink("Tailwind CSS", defaultBgColor, "06B6D4"),
					buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/ss-play-score-pal",
			},
			{
				title: "Textful",
				description:
					"Textful is a web-based application, made using React, Node.js and MongoDb that enables its users to exchange text messages directly.",
				tech: [
					buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
					buildImgShieldLink("React", defaultBgColor, "61DAFB"),
					buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
					buildImgShieldLink("CSS3", defaultBgColor, "1572B6"),
					buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
					buildImgShieldLink("Express", defaultBgColor, "FFFFFF"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/project-textful",
			},
			{
				title: "Meteoscope",
				description:
					"Meteoscope is a weather forecast app I made using React, Chakra UI and Open Meteo API.",
				tech: [
					buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
					buildImgShieldLink("React", defaultBgColor, "61DAFB"),
					buildImgShieldLink("chakra--ui", defaultBgColor, "67C9CB"),
					buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/meteoscope",
			},
			{
				title: "AngularChrono",
				description:
					"Exploring Angular basics and SASS, I built a hands-on mobile-responsive Stop Watch web app.",
				tech: [
					buildImgShieldLink("Angular", defaultBgColor, "D70230"),
					buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
					buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
					buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/Ang-Stop-Watch",
			},
		],
	},
};

export default profileInfo;
