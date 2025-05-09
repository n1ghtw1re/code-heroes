
import { Pioneer } from "./types";

export const earlyComputingPioneers: Pioneer[] = [
  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    birthYear: "1815",
    deathYear: "1852",
    shortBio: "The first computer programmer, envisioning the potential of computing in the 1800s.",
    longBio: "Augusta Ada King, Countess of Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and to have published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first computer programmer.",
    contributions: [
      "Wrote the first algorithm designed to be processed by a machine",
      "Recognized computing potential beyond simple calculations",
      "Developed the concept of looping in computer programs",
      "Created detailed notes on the analytical engine",
      "Envisioned computers creating music and graphics"
    ],
    quote: "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Ada_Lovelace"
      },
      {
        label: "Computer History Museum",
        url: "https://www.computerhistory.org/babbage/adalovelace/"
      }
    ],
    tags: ["First Programmer", "Algorithms", "Analytical Engine", "Mathematical Computing"]
  },
  {
    id: "john-von-neumann",
    name: "John von Neumann",
    birthYear: "1903",
    deathYear: "1957",
    shortBio: "Developed the architecture that underpins modern computers.",
    longBio: "John von Neumann was a Hungarian-American mathematician, physicist, computer scientist, engineer and polymath. He made major contributions to many fields, including mathematics, physics, economics, computing, and statistics. He was a pioneer of the application of operator theory to quantum mechanics, a member of the Manhattan Project and the Institute for Advanced Study in Princeton, and a key figure in the development of game theory and the concepts of cellular automata, the universal constructor and the digital computer.",
    contributions: [
      "Created the von Neumann architecture for computers",
      "Made foundational contributions to quantum mechanics",
      "Helped develop the first electronic computers",
      "Advanced game theory and economics",
      "Contributed to the Manhattan Project"
    ],
    quote: "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/John_von_Neumann"
      },
      {
        label: "Atomic Archive",
        url: "https://www.atomicarchive.com/resources/biographies/neumann.html"
      }
    ],
    tags: ["Computer Architecture", "Mathematics", "Game Theory", "Quantum Physics", "Manhattan Project"]
  },
  {
    id: "grace-hopper",
    name: "Grace Hopper",
    birthYear: "1906",
    deathYear: "1992",
    shortBio: "Pioneering computer scientist who helped develop early programming languages.",
    longBio: "Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. She was one of the first programmers of the Harvard Mark I computer and invented the first compiler for a computer programming language. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, one of the first high-level programming languages.",
    contributions: [
      "Invented the first compiler for a computer programming language",
      "Helped develop COBOL programming language",
      "Popularized the term 'debugging' after removing an actual moth from a computer",
      "Advocated for machine-independent programming languages"
    ],
    quote: "Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Grace_Hopper"
      },
      {
        label: "Yale University Profile",
        url: "https://cs.yale.edu/people/profile/grace-hopper/"
      }
    ],
    tags: ["Programming Languages", "Compilers", "COBOL", "US Navy"]
  },
  {
    id: "alan-turing",
    name: "Alan Turing",
    birthYear: "1912",
    deathYear: "1954",
    shortBio: "Father of theoretical computer science and artificial intelligence.",
    longBio: "Alan Mathison Turing OBE FRS was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalization of the concepts of algorithm and computation with the Turing machine. He led the team that cracked the German Enigma code during World War II, which was vital in helping the Allies win the war.",
    contributions: [
      "Created the concept of the Turing machine, laying the foundation for modern computing",
      "Helped break the German Enigma code during World War II",
      "Pioneered concepts in artificial intelligence with the Turing Test",
      "Made significant contributions to mathematical biology"
    ],
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Alan_Turing"
      },
      {
        label: "The Alan Turing Institute",
        url: "https://www.turing.ac.uk/"
      }
    ],
    tags: ["Artificial Intelligence", "Cryptography", "Theoretical Computer Science", "World War II"]
  },
  {
    id: "jean-bartik",
    name: "Jean Bartik",
    birthYear: "1924",
    deathYear: "2011",
    shortBio: "One of the original programmers of the ENIAC, one of the first computers.",
    longBio: "Jean Jennings Bartik was one of the original programmers for the ENIAC computer. She and her colleagues developed and codified many of the fundamentals of programming while working on the ENIAC, since their job was to make it functional. The ENIAC was the first all-electronic, programmable computer, a massive machine of nearly 18,000 vacuum tubes and 1,500 relays. Bartik was inducted into the Women in Technology International Hall of Fame in 1997 and the Computer History Museum Hall of Fellows in 2008.",
    contributions: [
      "Original programmer of ENIAC, the first electronic general-purpose computer",
      "Helped convert the ENIAC into a stored program computer",
      "Worked on the BINAC and UNIVAC I computers",
      "Developed the foundations of programming",
      "Advocated for women in computing"
    ],
    quote: "I'd like to be remembered as someone who really enjoyed life and contributed something useful. I hope to die at my terminal.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Jean_Bartik"
      },
      {
        label: "Computer History Museum",
        url: "https://www.computerhistory.org/fellowawards/hall/jean-bartik/"
      }
    ],
    tags: ["ENIAC", "Early Computing", "Programming Pioneers", "Women in Computing"]
  }
];
