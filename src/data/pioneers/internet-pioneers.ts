
import { Pioneer } from "./types";

export const internetPioneers: Pioneer[] = [
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
  }
];
