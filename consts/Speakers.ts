interface Speaker {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export const speakers: Speaker[] = [
  {
    name: "John Doe",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  },
  {
    name: "Jane Doe",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
  },
  {
    name: "John Smith",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
  {
    name: "Jane Smith",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
  },
  {
    name: "John Doe",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Doe",
    position: "Android Developer",
    image: "/demo-speaker.jpg",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
  },

  // Add more speakers as needed
];

export default speakers;
