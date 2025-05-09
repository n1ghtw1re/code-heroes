export interface Pioneer {
  id: string;
  name: string;
  birthYear: string;
  deathYear: string | null;
  shortBio: string;
  longBio: string;
  contributions: string[];
  quote: string;
  imageUrl: string;
  links: {
    label: string;
    url: string;
  }[];
  tags: string[];
}

export const pioneers: Pioneer[] = [
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
    id: "radia-perlman",
    name: "Radia Perlman",
    birthYear: "1951",
    deathYear: null,
    shortBio: "Developed the Spanning Tree Protocol, crucial for internet scalability.",
    longBio: "Radia Joy Perlman is an American computer programmer and network engineer. She is most famous for her invention of the Spanning Tree Protocol (STP), which is fundamental to the operation of network bridges. Her innovations have made a huge impact on how networks self-organize and move data, and she has been called the 'Mother of the Internet'.",
    contributions: [
      "Invented the Spanning Tree Protocol (STP)",
      "Contributed to link-state routing protocols",
      "Invented TRILL protocol to improve upon limitations of spanning trees",
      "Made significant contributions to network security"
    ],
    quote: "Don't call me the Mother of the Internet. I don't like the title. So much of the work I did was about keeping things going after something goes wrong, and the Internet still has a lot of wrong in it.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Radia_Perlman"
      },
      {
        label: "Internet Hall of Fame",
        url: "https://www.internethalloffame.org/inductees/radia-perlman"
      }
    ],
    tags: ["Networking", "Protocols", "Internet Infrastructure", "Security"]
  },
  {
    id: "tim-berners-lee",
    name: "Tim Berners-Lee",
    birthYear: "1955",
    deathYear: null,
    shortBio: "Inventor of the World Wide Web, ensuring it remained open-source.",
    longBio: "Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA FBCS is an English computer scientist best known as the inventor of the World Wide Web. He is a Professorial Fellow of Computer Science at the University of Oxford and a professor at the Massachusetts Institute of Technology (MIT). Berners-Lee proposed an information management system on March 12, 1989, and implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in mid-November.",
    contributions: [
      "Invented the World Wide Web",
      "Created the first web browser and web server",
      "Established HTTP, HTML, and URL standards",
      "Founded the World Wide Web Consortium (W3C)",
      "Advocates for net neutrality and open web standards"
    ],
    quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Tim_Berners-Lee"
      },
      {
        label: "W3C",
        url: "https://www.w3.org/People/Berners-Lee/"
      }
    ],
    tags: ["World Wide Web", "Internet Standards", "Open Source", "W3C"]
  },
  {
    id: "katherine-johnson",
    name: "Katherine Johnson",
    birthYear: "1918",
    deathYear: "2020",
    shortBio: "NASA mathematician whose calculations enabled space missions.",
    longBio: "Katherine Johnson was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 35-year career at NASA and its predecessor, she calculated the trajectories, launch windows, and emergency return paths for many flights including early NASA missions in the 1960s and the Earth Resources Technology Satellite, and she was known for verifying the calculations made by early electronic computers.",
    contributions: [
      "Calculated flight trajectories for Project Mercury and other missions",
      "Helped calculate the trajectory for the 1969 Apollo 11 flight to the Moon",
      "One of the first African-American women to work as a NASA scientist",
      "Co-authored 26 scientific papers"
    ],
    quote: "Like what you do, and then you will do your best.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Katherine_Johnson"
      },
      {
        label: "NASA Biography",
        url: "https://www.nasa.gov/content/katherine-johnson-biography"
      }
    ],
    tags: ["Space Exploration", "Mathematics", "NASA", "Civil Rights"]
  },
  {
    id: "vint-cerf",
    name: "Vint Cerf",
    birthYear: "1943",
    deathYear: null,
    shortBio: "Co-designed TCP/IP protocols, foundational to the internet.",
    longBio: "Vinton Gray Cerf is an American Internet pioneer and is recognized as one of the 'fathers of the Internet', sharing this title with TCP/IP co-developer Bob Kahn. He has received honorary degrees and awards that include the National Medal of Technology, the Turing Award, the Presidential Medal of Freedom, and membership in the National Academy of Engineering.",
    contributions: [
      "Co-designed the TCP/IP protocols",
      "Helped lay the foundation for the modern Internet",
      "Worked on early ARPANET development",
      "Served as chairman of ICANN",
      "Pioneered commercial email services"
    ],
    quote: "The internet is a reflection of our society and that mirror is going to be reflecting what we see. If we do not like what we see in that mirror the problem is not to fix the mirror, we have to fix society.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Vint_Cerf"
      },
      {
        label: "Internet Hall of Fame",
        url: "https://www.internethalloffame.org/inductees/vint-cerf"
      }
    ],
    tags: ["Internet Protocols", "TCP/IP", "Internet Infrastructure", "ICANN"]
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
  },
  {
    id: "mary-jackson",
    name: "Mary Jackson",
    birthYear: "1921",
    deathYear: "2005",
    shortBio: "NASA's first Black female engineer, advancing aerodynamics.",
    longBio: "Mary Winston Jackson was an American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which in 1958 was succeeded by the National Aeronautics and Space Administration (NASA). She worked at Langley Research Center in Hampton, Virginia, for most of her career. She started as a computer at the segregated West Area Computing division in 1951. She became NASA's first black female engineer in 1958.",
    contributions: [
      "Became NASA's first Black female engineer",
      "Conducted research in wind tunnels and on flight problems",
      "Advanced the hiring and promotion of women in NASA's science and engineering programs",
      "Helped many women and minorities advance their careers at NASA"
    ],
    quote: "Every time we get in front of a kid, it's important. We never know what impact we'll make.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)"
      },
      {
        label: "NASA Biography",
        url: "https://www.nasa.gov/content/mary-w-jackson-biography"
      }
    ],
    tags: ["Aerospace Engineering", "NASA", "Civil Rights", "STEM Education"]
  },
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
    id: "linus-torvalds",
    name: "Linus Torvalds",
    birthYear: "1969",
    deathYear: null,
    shortBio: "Creator of Linux and Git, shaping open-source software.",
    longBio: "Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git and the scuba dive logging and planning software Subsurface.",
    contributions: [
      "Created and maintains the Linux kernel",
      "Developed Git version control system",
      "Championed open-source software development",
      "Created the Subsurface dive log software",
      "Received the Millennium Technology Prize in 2012"
    ],
    quote: "Talk is cheap. Show me the code.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Linus_Torvalds"
      },
      {
        label: "Linux Foundation",
        url: "https://www.linuxfoundation.org/about/linus-torvalds"
      }
    ],
    tags: ["Linux", "Git", "Open Source", "Operating Systems", "Version Control"]
  },
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
    id: "margaret-hamilton",
    name: "Margaret Hamilton",
    birthYear: "1936",
    deathYear: null,
    shortBio: "Led software development for NASA's Apollo missions.",
    longBio: "Margaret Heafield Hamilton is an American computer scientist, systems engineer, and business owner. She was director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA's Apollo program. She later founded two software companies—Higher Order Software in 1976 and Hamilton Technologies in 1986, both focused on systems design approaches and a development paradigm called Development Before the Fact.",
    contributions: [
      "Led the team that developed the on-board flight software for NASA's Apollo missions",
      "Coined the term 'software engineering'",
      "Developed error detection and recovery techniques still used today",
      "Created concepts of asynchronous software and priority scheduling",
      "Received the Presidential Medal of Freedom in 2016"
    ],
    quote: "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)"
      },
      {
        label: "NASA Profile",
        url: "https://www.nasa.gov/feature/margaret-hamilton-apollo-software-engineer-awarded-presidential-medal-of-freedom"
      }
    ],
    tags: ["Apollo Program", "Software Engineering", "NASA", "Space Exploration"]
  },
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
    id: "sophie-wilson",
    name: "Sophie Wilson",
    birthYear: "1957",
    deathYear: null,
    shortBio: "Designed the ARM architecture, powering billions of devices.",
    longBio: "Sophie Wilson is a British computer scientist and software engineer who designed the Acorn Micro-Computer, the first of a line of computers sold by Acorn Computers Ltd, including its programming language BBC BASIC. She later designed the instruction set for the ARM processor, which is used in most smartphones and tablet computers today. Wilson is a Fellow of the Royal Society, a Fellow of the Royal Academy of Engineering, and a Fellow of the British Computer Society.",
    contributions: [
      "Designed the ARM instruction set architecture",
      "Created the BBC BASIC programming language",
      "Co-designed the BBC Micro computer",
      "Contributed to the Acorn Archimedes development",
      "Inducted into the Computer History Museum Hall of Fellows"
    ],
    quote: "If I had known how much of an impact the work I was doing would have on the world, I would have charged more for it.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Sophie_Wilson"
      },
      {
        label: "Computer History Museum",
        url: "https://www.computerhistory.org/fellowawards/hall/sophie-wilson/"
      }
    ],
    tags: ["ARM Architecture", "Computer Architecture", "BBC Micro", "Programming Languages"]
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
  },
  {
    id: "shirley-ann-jackson",
    name: "Shirley Ann Jackson",
    birthYear: "1946",
    deathYear: null,
    shortBio: "Physicist whose research contributed to fiber optics and telecommunications.",
    longBio: "Dr. Shirley Ann Jackson is an American physicist and the 18th president of Rensselaer Polytechnic Institute. She is the first African-American woman to have earned a doctorate at MIT in any field and the second African-American woman in the United States to earn a doctorate in physics. Her research in theoretical physics at Bell Labs from 1976 to 1991 enabled others to invent the portable fax, touch tone telephone, solar cells, fiber optic cables, and the technology behind caller ID and call waiting.",
    contributions: [
      "Conducted breakthrough research in theoretical physics",
      "First African-American woman to earn a doctorate from MIT",
      "Research at Bell Labs laid groundwork for fiber optic cables",
      "Chaired the US Nuclear Regulatory Commission",
      "Pioneered telecommunications technologies"
    ],
    quote: "We need to go back to the discovery, to posing a question, to having a hypothesis and having kids know that they can discover the answers and can solve problems.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Shirley_Ann_Jackson"
      },
      {
        label: "RPI Profile",
        url: "https://president.rpi.edu/president-biography"
      }
    ],
    tags: ["Physics", "Telecommunications", "Nuclear Regulation", "Education"]
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
  },
  
  {
    id: "ken-thompson",
    name: "Ken Thompson",
    birthYear: "1943",
    deathYear: null,
    shortBio: "Co-creator of Unix and the B programming language, laying the foundation for modern operating systems.",
    longBio: "Kenneth Lane Thompson is an American pioneer of computer science. He has worked at Bell Labs and Google. While at Bell Labs, he co-designed the original Unix operating system, the B programming language (the predecessor to C), and was one of the creators and early developers of the Plan 9 operating systems. Thompson also invented the Go programming language along with Rob Pike and Robert Griesemer.",
    contributions: [
      "Co-created the Unix operating system",
      "Developed the B programming language, predecessor to C",
      "Created the ed text editor",
      "Contributed to the UTF-8 encoding",
      "Helped develop the Go programming language"
    ],
    quote: "When in doubt, use brute force.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Ken_Thompson"
      },
      {
        label: "Turing Award",
        url: "https://amturing.acm.org/award_winners/thompson_4588371.cfm"
      }
    ],
    tags: ["Unix", "Operating Systems", "Programming Languages", "B Language", "Go"]
  },
  {
    id: "richard-stallman",
    name: "Richard Stallman",
    birthYear: "1953",
    deathYear: null,
    shortBio: "Founder of the Free Software Foundation and creator of GNU, championing software freedom.",
    longBio: "Richard Matthew Stallman, often known as RMS, is an American free software movement activist and programmer. He campaigns for software to be distributed in a manner such that its users receive the freedoms to use, study, distribute, and modify that software. Stallman launched the GNU Project in 1983 to create a free Unix-like operating system, and has been the project's lead architect and organizer.",
    contributions: [
      "Founded the Free Software Foundation (FSF)",
      "Launched the GNU Project to create a free Unix-like operating system",
      "Developed the GNU Compiler Collection (GCC)",
      "Created the GNU Emacs text editor",
      "Authored the GNU General Public License (GPL)"
    ],
    quote: "Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech', not as in 'free beer'.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Richard_Stallman"
      },
      {
        label: "GNU Project",
        url: "https://www.gnu.org/gnu/rms-lisp.html"
      }
    ],
    tags: ["Free Software", "GNU", "GPL", "Software Freedom", "FSF"]
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
    id: "fernando-corbato",
    name: "Fernando Corbató",
    birthYear: "1926",
    deathYear: "2019",
    shortBio: "Developed time-sharing systems, enabling multiple users to interact with computers simultaneously.",
    longBio: "Fernando José Corbató was an American computer scientist, notable as a pioneer in the development of time-sharing operating systems. He was the leader of the CTSS (Compatible Time-Sharing System) project at MIT's Computation Center, and is also known for Corbató's Law, which states that 'The number of lines of code a programmer can write in a fixed period of time is the same independent of the language used.'",
    contributions: [
      "Led the development of CTSS, one of the first time-sharing systems",
      "Directed the Multics operating system project",
      "Pioneered computer password security",
      "Developed concepts that influenced modern operating systems",
      "Won the Turing Award in 1990"
    ],
    quote: "The best way to solve a problem is to avoid having the problem in the first place.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Fernando_J._Corbat%C3%B3"
      },
      {
        label: "MIT Memorial",
        url: "https://www.csail.mit.edu/news/remembering-fernando-corba-father-time-sharing"
      }
    ],
    tags: ["Time-sharing", "Operating Systems", "Computer Security", "Multics", "MIT"]
  },
  {
    id: "ted-nelson",
    name: "Ted Nelson",
    birthYear: "1937",
    deathYear: null,
    shortBio: "Coined the terms 'hypertext' and 'hypermedia,' influencing the development of the World Wide Web.",
    longBio: "Theodor Holm Nelson is an American pioneer of information technology, philosopher, and sociologist. He coined the terms 'hypertext' and 'hypermedia' in 1963 and published them in 1965. He founded Project Xanadu in 1960, which was his vision of a global hypertext system that predated the World Wide Web. Nelson's ideas have influenced generations of technologists, especially in the area of human-computer interaction.",
    contributions: [
      "Coined the terms 'hypertext' and 'hypermedia'",
      "Founded Project Xanadu, an early hypertext system",
      "Advocated for a different structure of the internet with two-way links",
      "Proposed the concept of transclusion for content reuse",
      "Influenced the development of the World Wide Web"
    ],
    quote: "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Ted_Nelson"
      },
      {
        label: "Project Xanadu",
        url: "https://www.xanadu.net/"
      }
    ],
    tags: ["Hypertext", "Information Systems", "Project Xanadu", "Human-Computer Interaction"]
  },
  {
    id: "alan-kay",
    name: "Alan Kay",
    birthYear: "1940",
    deathYear: null,
    shortBio: "Pioneered object-oriented programming and graphical user interfaces, shaping modern computing.",
    longBio: "Alan Curtis Kay is an American computer scientist. He has been a fellow at Hewlett-Packard, Disney, and Apple, as well as at several universities. He is best known for his work on object-oriented programming and windowing graphical user interface design. Kay conceived the Dynabook concept which defined the conceptual basis for laptop, tablet, and other personal computing devices. He is the president of the Viewpoints Research Institute and an adjunct professor at UCLA.",
    contributions: [
      "Pioneered object-oriented programming concepts",
      "Developed the Smalltalk programming language",
      "Conceived the Dynabook, a precursor to modern laptops and tablets",
      "Contributed to the development of graphical user interfaces at Xerox PARC",
      "Won the Turing Award in 2003"
    ],
    quote: "The best way to predict the future is to invent it.",
    imageUrl: "/placeholder.svg",
    links: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Alan_Kay"
      },
      {
        label: "Viewpoints Research Institute",
        url: "http://www.vpri.org/html/team_bios/alan_kay.htm"
      }
    ],
    tags: ["Object-Oriented Programming", "Smalltalk", "Graphical User Interfaces", "Dynabook", "Xerox PARC"]
  }
];
