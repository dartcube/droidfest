interface Speaker {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  topic?:string;
}

export const speakers: Speaker[] = [
  {
    name: "Debayan Chatterjee",
    position: "Android Platform Engineer @UnderScore Technology",
    topic:"From Zero to AI,A Kotlin Developers Roadmap to Smarter Apps",
    image: "/dc.png",
    linkedin: "https://www.linkedin.com/in/debayan-androidista/",
    website: "https://sprect.com/pro/debayan",
  },
  {
    name: "Megh Deb",
    position: "Mentor @Hackquest",
    topic:"Establishing Connection Between Web3 & Android Apps",
    image: "/md.png",
    github:"https://github.com/Megh2005",
    linkedin: "https://www.linkedin.com/in/megh-deb/",
    twitter: "https://x.com/iammeghdeb",
  },
  {
    name: "Narendra Nath Chatterjee",
    position: "Android Developer @StockGro",
    topic:"Going Beyonds the basics with Kotlins",
    image: "/nnc.png",
    linkedin: "https://www.linkedin.com/in/narendra-nath-chatterjee-8a7651133/",
  },
  

  // Add more speakers as needed
];

export default speakers;
