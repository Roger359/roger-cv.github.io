import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Microsoft365 } from "@/components/ui/svgs/microsoft365";

export const DATA = {
	name: "Roger Acosta",
	initials: "RA",
	url: "https://roger-cv.github.io",
	location: "Bogotá, Colombia",
	locationLink: "https://www.google.com/maps/place/bogota",
	description:
		"Software Engineer turned Entrepreneur. I love building things and helping people. ",
	summary:
		"Computer Engineer and web developer based in Colombia. I build reliable web platforms, cloud systems, and automated business processes, working extensively with the Microsoft 365 ecosystem, and SaaS solutions. Curious by habit, I support open-source software and Linux, and I’m expanding my career into cybersecurity—combining practical engineering, curiosity, and a mindset of constant learning to design systems that are robust, secure, and grounded in real-world use",
	avatarUrl: "/me.png",
	skills: [
		{ name: "React", icon: ReactLight },
		{ name: "Next.js", icon: NextjsIconDark },
		{ name: "Typescript", icon: Typescript },
		{ name: "Node.js", icon: Nodejs },
		{ name: "Python", icon: Python },
		{ name: "Microsoft 365", icon: Microsoft365 },
		// { name: "Postgres", icon: Postgresql },
		// { name: "Docker", icon: Docker },
		// { name: "Kubernetes", icon: Kubernetes },
		// { name: "Java", icon: Java },
		// { name: "C++", icon: Csharp },
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
		{ href: "https://calendly.com", icon: Icons.calendly, label: "Schedule" },
	],
	contact: {
		email: "roger@mnlinnovation.com",
		tel: "+1234",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://dub.sh/2szIU9J",
				icon: Icons.github,
				navbar: true,
			},

			LinkedIn: {
				name: "LinkedIn",
				url: "https://dub.sh/wUz9wk7",
				icon: Icons.linkedin,

				navbar: true,
			},

			email: {
				name: "Send Email",
				url: "mailto:roger@mnlinnovation.com",
				icon: Icons.email,

				navbar: false,
			},

			Calendly: {
				name: "Schedule Meeting",
				url: "https://calendly.com",
				icon: Icons.calendly,
				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Freelance / Self-Employed",
			href: "https://roger-cv.github.io",
			badges: [],
			location: "Remote",
			title: "Software Engineer / Web Developer / Consultant",
			logoUrl: "/roger359.webp",
			start: "July 2025",
			end: "Present",
			description:
				"Building custom software solutions for clients in various industries, focusing on web development, cloud systems, cybersecurity, Power Platform and automation. Helping businesses streamline their operations and improve efficiency through tailored software applications.",
		},
		{
			company: "LER Operational Risk Surveyors",
			badges: [],
			href: "https://dub.sh/SBNr5Lh",
			location: "Remote",
			title: "Microsoft 365 Sysadmin / Vulnerability Analyst",
			logoUrl: "/ler.png",
			start: "July 2025",
			end: "Present",
			description:
				"Managing and securing the Microsoft 365 environment, implementing best practices for user access, data protection, and threat mitigation. Conducting vulnerability assessments to identify and address potential security risks to the clients systems and data.",
		},
		{
			company: "Iceberg Cultures of Inclusion",
			badges: [],
			href: "https://dub.sh/Oc3fREP",
			location: "Remote",
			title: "Power BI Analyst",
			logoUrl: "/icebergci.png",
			start: "July 2025",
			end: "Present",
			description:
				"Managing and securing the Microsoft 365 environment, implementing best practices for user access, data protection, and threat mitigation. Conducting vulnerability assessments to identify and address potential security risks to the clients systems and data.",
		},
		{
			company: "MNL Innovation LLC",
			badges: [],
			href: "https://dub.sh/Sawt6SR",
			location: "Remote",
			title: "Software Engineer / Web Developer",
			logoUrl: "/MNL.ico",
			start: "July 2025",
			end: "Present",
			description:
				"Managing and securing the Microsoft 365 environment, implementing best practices for user access, data protection, and threat mitigation. Conducting vulnerability assessments to identify and address potential security risks to the clients systems and data.",
		},

		{
			company: "CPVEN Sucursal Colombia",
			badges: [],
			href: "https://dub.sh/zjNmL2w",
			location: "Onsite - Bogotá, Colombia",
			title: "IT Manager / Sysadmin / Microsoft 365 Developer",
			logoUrl: "/cpven.png",
			start: "August 2019",
			end: "July 2025",
			description:
				"Overseeing the IT infrastructure and operations, ensuring the smooth functioning of all systems and networks. Developing custom Microsoft 365 solutions to enhance productivity and streamline business processes.",
		},
		{
			company: "Cementaciones Petroleras Venezolanas S.A.S. (CPVEN)",
			badges: [],
			href: "https://dub.sh/zjNmL2w",
			location: "Onsite - Maracaibo, Venezuela",
			title: "IT Manager / Sysadmin / Microsoft 365 Developer",
			logoUrl: "/cpven.png",
			start: "August 2015",
			end: "July 2019",
			description:
				"Overseeing the IT infrastructure and operations, ensuring the smooth functioning of all systems and networks. Developing custom Microsoft 365 solutions to enhance productivity and streamline business processes.",
		},
	],
	education: [
		{
			school: "Universidad Rafael Urdaneta",
			href: "https://dub.sh/veAH6gI",
			degree: "Ingeniería de Computación",
			logoUrl: "/uru.png",
			start: "2011",
			end: "2017",
		},
		{
			school: "Microsoft Certified: Azure Fundamentals",
			href: "https://dub.sh/DAkbAvI",
			degree: "Ingeniería de Computación",
			logoUrl: "/microsoft.png",
			start: "2023",
			end: "2023",
		},
		{
			school: "CS50’s Introduction to Computer Science",
			href: "https://dub.sh/cabS8Ga",
			degree: "Ingeniería de Computación",
			logoUrl: "/harvard.ico",
			start: "2024",
			end: "2024",
		},
	],
	projects: [
		{
			title: "Tasty Bites 212",
			href: "https://tastybites212.vercel.app/",
			dates: "Jan 2026 - Jan 2026",
			active: true,
			description:
				"Ecommerce website for a local restaurant, built with Next.js and TailwindCSS as Frontend and Shopify as Backend.",
			technologies: [
				"Next.js",
				"Typescript",
				"TailwindCSS",
				"Shopify",
				"Storefront API",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://tastybites212.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/tastybites212.png",
		},
		{
			title: "MNL Innovation LLC",
			href: "https://mnlinnovation.com",
			dates: "June 2025 - August 2025",
			active: true,
			description:
				"Corporate website for MNL Innovation LLC, built with Astro and TailwindCSS.",
			technologies: ["Astro", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://mnlinnovation.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/MNL.png",
		},
		{
			title: "Psicodari Website",
			href: "https://psicodari.com",
			dates: "April 2023 - September 2023",
			active: true,
			description:
				"Corporate website for Psicodari, a mental health services provider, built with Astro and TailwindCSS.",
			technologies: ["Astro", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://psicodari.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/psicodari.png",
		},
		{
			title: "LER Operational Risk Surveyors",
			href: "https://lersurveyors.com",
			dates: "April 2023 - March 2024",
			active: true,
			description:
				"Corporate website for LER Operational Risk Surveyors, built with Astro and TailwindCSS.",
			technologies: ["Astro", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://lersurveyors.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/LER-page.png",
			
		},
	],
} as const;
