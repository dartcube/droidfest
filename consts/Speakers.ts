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
    name: "Rohit Kumar",
    position: "Android Developer @FloBiz",
    topic:"A Beginner's Guide to 100% Kotlin Full-Stack",
    image: "/rk.jpeg",
    linkedin: "https://www.linkedin.com/in/rohit115",
  },
  {
    name: "Narendra Nath Chatterjee",
    position: "Senior Android Engineer @Ajaib",
    topic: "Spec driven development with AI",
    image: "/nnc.JPG",
    linkedin: "https://www.linkedin.com/in/narendra-nath-chatterjee-8a7651133",
  },

  

  // Add more speakers as needed
];

export default speakers;
