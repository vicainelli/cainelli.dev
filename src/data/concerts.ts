import { z } from "zod";

const ConcertsSchema = z.object({
	artist: z.string(),
	attends: z.array(
		z.object({
			date: z.string(),
			venue: z.string(),
			city: z.string(),
			country: z.string(),
			notes: z.string().optional(),
		}),
	),
});

export type Concert = z.infer<typeof ConcertsSchema>;

export const CONCERTS: Concert[] = [
	{
		artist: "Forfun",
		attends: [
			{
				date: "2015-11-14",
				venue: "Carioca Club",
				city: "São Paulo, SP",
				country: "Brasil",
				notes: "",
			},
		],
	},
	{
		artist: "Dead Fish",
		attends: [
			{
				date: "2008-04-25",
				venue: "",
				city: "Santos, SP",
				country: "Brazil",
			},
			{
				date: "2008-04-25",
				venue: "Kazebre Rock Bar",
				city: "São Paulo",
				country: "Brazil",
			},
			{
				date: "2024-12-08",
				venue: "Audio",
				city: "São Paulo, SP",
				country: "Brasil",
				notes:
					'Incredible. Celebrating 20 years of the album "Zero E Um". They played the entire album live.',
			},
			{
				date: "2024-08-18",
				venue: "Toekomstmuziek",
				city: "Amsterdam",
				country: "The Netherlands",
				notes:
					"Was nice to see a brazilian band where I'm living now, I can't remember the last time I saw them live.",
			},
		],
	},
	{
		artist: "Sepultura",
		attends: [
			{
				date: "2024-11-03",
				venue: "Sepulfest",
				city: "Den Bosch",
				country: "The Netherlands",
				notes: "First time seeing Sepultura live, it was amazing!",
			},
		],
	},
	{
		artist: "Jinjer",
		attends: [
			{
				date: "2024-11-03",
				venue: "Sepulfest",
				city: "Den Bosch",
				country: "The Netherlands",
				notes: "First time seeing Jinjer live, they were fantastic!",
			},
		],
	},
	{
		artist: "Joe Satriani",
		attends: [
			{
				date: "2022-04-04",
				venue: "Muziekcentrum Enschede",
				city: "Enschede",
				country: "The Netherlands",
				notes: "Incredible guitar skills, a true master of his craft.",
			},
		],
	},
	{
		artist: "Red Hot Chili Peppers",
		attends: [
			{
				date: "2022-06-10",
				venue: "Goffertpark",
				city: "Nijmegen",
				country: "The Netherlands",
				notes: "Not what I was expecting, but still a good show.",
			},
		],
	},
	{
		artist: "John Butler",
		attends: [
			{
				date: "2022-06-01",
				venue: "TivoliVredenburg Grote Zaal",
				city: "Utrecht",
				country: "The Netherlands",
				notes: "Amazing performance, great atmosphere.",
			},
			{
				date: "2023-07-03",
				venue: "Amsterdamse Bostheater",
				city: "Amstelveen",
				country: "The Netherlands",
				notes: "Beautiful outdoor venue, beside the storm it was great.",
			},
		],
	},
	{
		artist: "Chitãozinho & Xororó",
		attends: [
			{
				date: "2016-11-04",
				venue: "Espaço das Américas",
				city: "São Paulo, SP",
				country: "Brasil",
				notes: "A classic Brazilian country duo, great show!",
			},
		],
	},
	{
		artist: "Lady Gaga",
		attends: [
			{
				date: "2022-07-26",
				venue: "Gelredome",
				city: "Arnhem",
				country: "The Netherlands",
				notes: "Surprisingly good live performance.",
			},
		],
	},
	{
		artist: "Dropkick Murphys",
		attends: [
			{
				date: "2023-02-17",
				venue: "Ziggo Dome",
				city: "Amsterdam",
				country: "The Netherlands",
				notes: "",
			},
		],
	},
	{
		artist: "Pennywise",
		attends: [
			{
				date: "2023-02-17",
				venue: "Ziggo Dome",
				city: "Amsterdam",
				country: "The Netherlands",
				notes: "",
			},
		],
	},
	{
		artist: "Marcelo D2",
		attends: [
			{
				date: "2016-03-05",
				venue: "Audio Club",
				city: "São Paulo, SP",
				country: "Brasil",
				notes: "",
			},
			{
				date: "2024-07-28",
				venue: "Melkweg",
				city: "Amsterdam",
				country: "The Netherlands",
				notes: "",
			},
		],
	},
	{
		artist: "Raimundos",
		attends: [
			{
				date: "2000-11-26",
				venue: "Show da Mix Ceret",
				city: "São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Planet Hemp",
		attends: [
			{
				date: "2000-11-26",
				venue: "Show da Mix Ceret",
				city: "São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Charlie Brown Jr.",
		attends: [
			{
				date: "2000-11-26",
				venue: "Show da Mix Ceret",
				city: "São Paulo",
				country: "Brazil",
			},
			{
				date: "1998-12-01",
				venue: "Sesc Itaquera",
				city: "São Paulo",
				country: "Brazil",
			},
			{
				date: "2000-12-10",
				venue: "Sesc Itaquera",
				city: "São Paulo",
				country: "Brazil",
			},
			{
				date: "2000-07-09",
				venue: "Sesc Itaquera",
				city: "São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Incubus",
		attends: [
			{
				date: "2010-10-11",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Linkin Park",
		attends: [
			{
				date: "2010-10-11",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Queens of the Stone Age",
		attends: [
			{
				date: "2010-10-11",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Avenged Sevenfold",
		attends: [
			{
				date: "2010-10-11",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Rage Against The Machine",
		attends: [
			{
				date: "2010-10-09",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Kings Of Leon",
		attends: [
			{
				date: "2010-10-09",
				venue: "Fazenda Maeda",
				city: "Itu, São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Emicida",
		attends: [
			{
				date: "2023-04-29",
				venue: "Tolhuistuin",
				city: "Amsterdam",
				country: "The Netherlands",
			},
		],
	},
	{
		artist: "CPM 22",
		attends: [
			{
				date: "2024-06-07",
				venue: "Kazebre Rock Bar",
				city: "São Paulo",
				country: "Brazil",
			},
		],
	},
	{
		artist: "Racionais MC's",
		attends: [],
	},
	{
		artist: "Metallica",
		attends: [],
	},
	{
		artist: "blink-182",
		attends: [],
	},
	{
		artist: "Millencolin",
		attends: [],
	},
	{
		artist: "Slipknot",
		attends: [],
	},
	{
		artist: "Foo Fighters",
		attends: [],
	},
	{
		artist: "Machete Bomb",
		attends: [],
	},
	{
		artist: "Turnstile",
		attends: [],
	},
];
