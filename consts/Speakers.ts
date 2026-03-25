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
    name: "Rajat Bhatia",
    position: "Program Coordinator at Google",
    topic: "Google Developer & Startup program overview",
    image: "/rb.jpeg",
    linkedin: "https://www.linkedin.com/in/rajatbhatia24",
  },
  {
    name: "Belal Khan",
    position: "Senior Engineer @American Express | Google Developer Expert",
    topic: "Google Developer & Startup program overview",
    image: "/bk.jpeg",
    linkedin: "https://www.linkedin.com/in/probelalkhan",
  },
  {
    name: "Rivu Chakrabarty",
    position: "GDE - Andriod & Kotlin | Founder Mobrio Studio",
    topic: "Compose Multiplatform Meets Music AI: Building FretPractice",
    image: "/rc.jpeg",
    linkedin: "https://www.linkedin.com/in/rivuchk",
  },
  {
    name: "Narendra Nath Chatterjee",
    position: "Senior Android Engineer @Ajaib",
    topic: "Spec driven development with AI",
    image: "/nnc.JPG",
    linkedin: "https://www.linkedin.com/in/narendra-nath-chatterjee-8a7651133",
  },
  {
    name: "Rohit Kumar",
    position: "Android Developer @FloBiz",
    topic:"A Beginner's Guide to 100% Kotlin Full-Stack",
    image: "/rk.jpeg",
    linkedin: "https://www.linkedin.com/in/rohit115",
  },
  {
    name: "Srijan Mukherjee",
    position: "AI/ML Engineer Intern @Mobrio Studio",
    topic:"Compose Multiplatform Meets Music AI: Building FretPractice",
    image: "/sm.jpeg",
    linkedin: "https://www.linkedin.com/in/technosrijan",
  },
];

export default speakers;
