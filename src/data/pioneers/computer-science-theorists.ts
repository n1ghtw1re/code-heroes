
import { Pioneer } from "./types";

export const computerScienceTheorists: Pioneer[] = [
  {
    id: "donald-knuth",
    name: "Donald Knuth",
    birthYear: "1938",
    deathYear: null,
    shortBio: "Revolutionized algorithms and programming with 'The Art of Computer Programming.'",
    longBio: "Donald Ervin Knuth is an American computer scientist, mathematician, and professor emeritus at Stanford University. He is the author of the multi-volume work The Art of Computer Programming and has been called the 'father of the analysis of algorithms'. He also created the TeX computer typesetting system and the METAFONT font design system, and pioneered the concept of literate programming.",
    contributions: [
      "Wrote 'The Art of Computer Programming' book series",
      "Created the TeX typesetting system",
      "Developed the METAFONT system for font design",
      "Innovated literate programming concepts",
      "Pioneered the analysis of algorithms"
    ],
    quote: "Science is what we understand well enough to explain to a computer. Art is everything else we do.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Donald_Knuth"
      },
      {
        label: "Stanford Profile",
        url: "https://profiles.stanford.edu/donald-knuth"
      }
    ],
    tags: ["Algorithms", "TeX", "Computer Programming", "Typography", "Mathematics"]
  },
  {
    id: "leslie-lamport",
    name: "Leslie Lamport",
    birthYear: "1941",
    deathYear: null,
    shortBio: "Made fundamental contributions to distributed computing and formal verification.",
    longBio: "Leslie B. Lamport is an American computer scientist who has made seminal contributions to the theory of distributed and concurrent systems. He is best known for his work on temporal logic and the development of LaTeX document preparation system. His concepts like the Lamport timestamp, the bakery algorithm, and Paxos algorithm are fundamental to distributed computing. He received the Turing Award in 2013 for his work in distributed computing systems.",
    contributions: [
      "Developed the concept of logical clocks and Lamport timestamps",
      "Created the LaTeX document preparation system",
      "Invented the Paxos consensus algorithm",
      "Made fundamental contributions to fault-tolerant distributed computing",
      "Won the Turing Award in 2013"
    ],
    quote: "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Leslie_Lamport"
      },
      {
        label: "Microsoft Research",
        url: "https://www.microsoft.com/en-us/research/people/lamport/"
      }
    ],
    tags: ["Distributed Systems", "LaTeX", "Formal Verification", "Concurrent Computing", "Algorithms"]
  },
  {
    id: "edsger-dijkstra",
    name: "Edsger Dijkstra",
    birthYear: "1930",
    deathYear: "2002",
    shortBio: "Influential in algorithms, software engineering, and structured programming.",
    longBio: "Edsger Wybe Dijkstra was a Dutch computer scientist, programmer, software engineer, systems scientist, science essayist, and pioneer in computing science. A theoretical physicist by training, he worked as a programmer at the Mathematisch Centrum from 1952 to 1962. He was a professor of mathematics at the Eindhoven University of Technology and a research fellow at the Burroughs Corporation. He held the Schlumberger Centennial Chair in Computer Sciences at the University of Texas at Austin from 1984 until his retirement in 1999.",
    contributions: [
      "Developed Dijkstra's algorithm for finding shortest paths in graphs",
      "Pioneered structured programming concepts",
      "Invented the semaphore for process synchronization",
      "Developed solutions to the dining philosophers problem",
      "Won the Turing Award in 1972"
    ],
    quote: "Computer science is no more about computers than astronomy is about telescopes.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Edsger_W._Dijkstra"
      },
      {
        label: "UT Austin Memorial",
        url: "https://www.cs.utexas.edu/~EWD/"
      }
    ],
    tags: ["Algorithms", "Structured Programming", "Concurrency", "Computer Science Theory"]
  },
  {
    id: "frances-allen",
    name: "Frances Allen",
    birthYear: "1932",
    deathYear: "2020",
    shortBio: "First woman to win the Turing Award for optimizing compilers.",
    longBio: "Frances Elizabeth Allen was an American computer scientist and pioneer in the field of optimizing compilers. Allen was the first woman to become an IBM Fellow and in 2006 became the first woman to win the Turing Award. Her achievements include seminal work in compilers, program optimization, and parallelization. She worked for IBM from 1957 to 2002 and made significant contributions to programs for IBM supercomputers.",
    contributions: [
      "Pioneered techniques for compiler optimization and parallelization",
      "First woman to win the Turing Award (2006)",
      "Made fundamental contributions to automatic program optimization",
      "Led research teams at IBM for high-performance computing",
      "Developed code optimization techniques still used today"
    ],
    quote: "I have always had the view that people should do what they find they're good at. And I found I was good at programming.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Frances_Allen"
      },
      {
        label: "IBM Profile",
        url: "https://www.ibm.com/ibm/history/witexhibit/wit_fellows_allen.html"
      }
    ],
    tags: ["Compilers", "Program Optimization", "Parallel Computing", "IBM", "Turing Award"]
  }
];
