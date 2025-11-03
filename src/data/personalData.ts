import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export interface SocialLink {
  icon: typeof FaGithub
  href: string
  label: string
}

export interface ContactInfo {
  icon: typeof FaEnvelope
  label: string
  value: string
  href?: string
}

export interface PersonalData {
  name: string
  title: string
  email: string
  phone: string
  location: string
  heroDescription: string
  aboutParagraphs: string[]
  skills: string[]
  socialLinks: {
    github: string
    linkedin: string
  }
}

export const personalData: PersonalData = {
  name: 'Juel Rei Gacusan',
  title: 'Full Stack Developer',
  email: 'juelreigacusan22@gmail.com',
  phone: '+639773757020',
  location: 'Baguio City, Philippines',
  heroDescription:
    'I build beautiful, responsive web applications with modern technologies. Passionate about creating elegant solutions to complex problems.',
  aboutParagraphs: [
    "I'm a passionate developer with a love for creating elegant and efficient solutions. With a strong foundation in both frontend and backend technologies, I enjoy working on projects that challenge me to grow and learn.",
    "When I'm not coding, you can find me exploring new technologies, playing some video games, hiking, or cuddling with my cats.",
  ],
  skills: [
    'React',
    'Next.js',
    'Sveltekit',
    'Svelte',
    'TypeScript/JavaScript',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'AWS',
    'AI',
  ],
  socialLinks: {
    github: 'https://github.com/jrsgacusan',
    linkedin: 'https://www.linkedin.com/in/jrsgacusan/',
  },
}

// Helper function to get mailto link
export const getEmailLink = (email: string) => `mailto:${email}`

// Helper function to get social links array for components
export const getSocialLinks = (): SocialLink[] => {
  return [
    {
      icon: FaGithub,
      href: personalData.socialLinks.github,
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: personalData.socialLinks.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: getEmailLink(personalData.email),
      label: 'Email',
    },
  ]
}

// Helper function to get contact info array
export const getContactInfo = (): ContactInfo[] => {
  return [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalData.email,
      href: getEmailLink(personalData.email),
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone.replace(/\s/g, '')}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalData.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData.location)}`,
    },
  ]
}
