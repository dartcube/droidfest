interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export const team: TeamMember[] = [
  {
    firstName: "Johnathon",
    lastName: "Doe",
    role: "Android Developer",
    image: "/team-test.png",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
  }, {
    firstName: "Janice",
    lastName: "Doe",
    role: "Android Developer",
    image: "/team-test.png",
    linkedin: "https://linkedin.com/in/janedoe",
  }
]