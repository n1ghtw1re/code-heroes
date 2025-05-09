
import { Pioneer } from "./types";

export const osAndSystemsPioneers: Pioneer[] = [
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
