
import { Pioneer } from "./types";

export const programmingLanguagePioneers: Pioneer[] = [
  {
    id: "dennis-ritchie",
    name: "Dennis Ritchie",
    birthYear: "1941",
    deathYear: "2011",
    shortBio: "Co-created the C programming language and Unix.",
    longBio: "Dennis MacAlistair Ritchie was an American computer scientist. He created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system and B programming language. Ritchie and Thompson were awarded the Turing Award from the ACM in 1983, the Hamming Medal from the IEEE in 1990 and the National Medal of Technology from President Bill Clinton in 1999.",
    contributions: [
      "Created the C programming language",
      "Co-developed the Unix operating system",
      "Co-authored 'The C Programming Language' book (K&R)",
      "Contributed to the Plan 9 and Inferno operating systems",
      "Won the Turing Award in 1983"
    ],
    quote: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Dennis_Ritchie"
      },
      {
        label: "Bell Labs Profile",
        url: "https://www.bell-labs.com/about/history/dennis-ritchie/"
      }
    ],
    tags: ["C Programming", "Unix", "Operating Systems", "Programming Languages"]
  },
  {
    id: "brian-kernighan",
    name: "Brian Kernighan",
    birthYear: "1942",
    deathYear: null,
    shortBio: "Co-author of 'The C Programming Language' and contributor to Unix development.",
    longBio: "Brian Wilson Kernighan is a Canadian computer scientist, professor, and author. He worked at Bell Labs and contributed to the development of Unix. He is the co-creator of the AWK and AMPL programming languages. He co-authored the first book on the C programming language with Dennis Ritchie, which became the definitive reference for the language. He is currently a professor at Princeton University.",
    contributions: [
      "Co-wrote 'The C Programming Language' book with Dennis Ritchie",
      "Contributed to the development of Unix",
      "Co-created the AWK programming language",
      "Developed the AMPL programming language",
      "Authored numerous influential books on programming"
    ],
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Brian_Kernighan"
      },
      {
        label: "Princeton Profile",
        url: "https://www.cs.princeton.edu/~bwk/"
      }
    ],
    tags: ["C Programming", "Unix", "Programming Languages", "AWK", "Computer Science Education"]
  },
  {
    id: "larry-wall",
    name: "Larry Wall",
    birthYear: "1954",
    deathYear: null,
    shortBio: "Creator of Perl programming language and influential in open-source development.",
    longBio: "Larry Wall is an American computer programmer and author. He created the Perl programming language in 1987, a widely used general-purpose programming language known for its text processing capabilities. Wall is known for his pragmatic approach to programming and his wit. He has received the Free Software Foundation Award for the Advancement of Free Software and the Dr. Dobb's Excellence in Programming Award.",
    contributions: [
      "Created the Perl programming language",
      "Developed the patch program for Unix",
      "Authored the rn Usenet client",
      "Pioneered many programming techniques used in open-source software",
      "Promoted the idea that programming languages should be adaptable and practical"
    ],
    quote: "There's more than one way to do it.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Larry_Wall"
      },
      {
        label: "Perl Foundation",
        url: "https://www.perl.org/community/larry-wall.html"
      }
    ],
    tags: ["Perl", "Programming Languages", "Open Source", "Text Processing", "Unix"]
  },
  {
    id: "john-backus",
    name: "John Backus",
    birthYear: "1924",
    deathYear: "2007",
    shortBio: "Led the development of FORTRAN, the first high-level programming language.",
    longBio: "John Warner Backus was an American computer scientist. He directed the team that invented and implemented FORTRAN, the first widely used high-level programming language, and was the inventor of the Backus-Naur form (BNF), a widely used notation to define formal language syntax. He later did research on functional programming and helped to popularize it. He received the Turing Award in 1977.",
    contributions: [
      "Led the team that created FORTRAN",
      "Invented the Backus-Naur Form (BNF) notation for describing syntax",
      "Developed the first FORTRAN compiler",
      "Pioneered work in functional programming",
      "Won the Turing Award in 1977"
    ],
    quote: "You need the willingness to fail all the time. You have to generate many ideas and then you have to work very hard only to discover that they don't work. And you keep doing that over and over until you find one that does work.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/John_Backus"
      },
      {
        label: "Computer History Museum",
        url: "https://www.computerhistory.org/fellowawards/hall/john-backus/"
      }
    ],
    tags: ["FORTRAN", "Programming Languages", "Compilers", "Formal Languages", "Functional Programming"]
  },
  {
    id: "guido-van-rossum",
    name: "Guido van Rossum",
    birthYear: "1956",
    deathYear: null,
    shortBio: "Creator of Python, one of the most widely used programming languages.",
    longBio: "Guido van Rossum is a Dutch programmer best known as the author of the Python programming language, for which he was the 'Benevolent Dictator For Life' until stepping down from that position in July 2018. He is currently a member of the Python Steering Council. In the Python community, Van Rossum is known as a 'BDFL', which stands for 'Benevolent Dictator For Life', a title given to him to reflect his long-term commitment and contributions to the project.",
    contributions: [
      "Created the Python programming language",
      "Designed Python's philosophy of readability and simplicity",
      "Developed Python at Google and Dropbox",
      "Promoted open-source software development",
      "Influenced modern programming language design"
    ],
    quote: "Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code; too little and expressiveness is endangered.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Guido_van_Rossum"
      },
      {
        label: "Python.org",
        url: "https://www.python.org/~guido/"
      }
    ],
    tags: ["Python", "Programming Languages", "Open Source", "Software Design"]
  },
  {
    id: "barbara-liskov",
    name: "Barbara Liskov",
    birthYear: "1939",
    deathYear: null,
    shortBio: "Made key contributions to programming languages and software engineering.",
    longBio: "Barbara Liskov is an American computer scientist who has made pioneering contributions to programming languages and distributed computing. Her work in data abstraction, modularity, object-oriented programming, and distributed computing has been foundational to the field. She was one of the first women to be granted a doctorate in computer science in the United States and is an Institute Professor at the Massachusetts Institute of Technology and Ford Professor of Engineering in its School of Engineering's electrical engineering and computer science department.",
    contributions: [
      "Developed the Liskov Substitution Principle",
      "Created the CLU programming language",
      "Pioneered work in object-oriented programming",
      "Advanced research in distributed systems",
      "Won the Turing Award in 2008"
    ],
    quote: "Don't be intimidated by what you don't know. That can be your greatest strength and ensure that you do things differently from everyone else.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Barbara_Liskov"
      },
      {
        label: "MIT Profile",
        url: "https://www.csail.mit.edu/person/barbara-liskov"
      }
    ],
    tags: ["Programming Languages", "Object-Oriented Programming", "Software Design", "Distributed Systems"]
  }
];
