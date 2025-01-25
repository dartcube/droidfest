export interface TeamMember {
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
    firstName: 'Johnathon',
    lastName: 'Doe',
    role: 'Android Developer',
    image: '/team-test.png',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    github: 'https://github.com/johndoe',
    website: 'https://johndoe.com',
  },
  {
    firstName: 'Janice',
    lastName: 'Smith',
    role: 'UI/UX Designer',
    image: '/team-test.png',
    linkedin: 'https://linkedin.com/in/janicesmith',
    twitter: 'https://twitter.com/janicesmith',
    github: 'https://github.com/janicesmith',
    website: 'https://janicesmith.com',
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    role: 'Full Stack Developer',
    image: '/team-test.png',
    linkedin: 'https://linkedin.com/in/michaelbrown',
    twitter: 'https://twitter.com/michaelbrown',
    github: 'https://github.com/michaelbrown',
    website: 'https://michaelbrown.com',
  },
  {
    firstName: 'Emily',
    lastName: 'Johnson',
    role: 'Data Scientist',
    image: '/team-test.png',
    linkedin: 'https://linkedin.com/in/emilyjohnson',
    twitter: 'https://twitter.com/emilyjohnson',
    github: 'https://github.com/emilyjohnson',
    website: 'https://emilyjohnson.com',
  },
  {
    firstName: 'David',
    lastName: 'Williams',
    role: 'DevOps Engineer',
    image: '/team-test.png',
    linkedin: 'https://linkedin.com/in/davidwilliams',
    twitter: 'https://twitter.com/davidwilliams',
    github: 'https://github.com/davidwilliams',
    website: 'https://davidwilliams.com',
  },
];
