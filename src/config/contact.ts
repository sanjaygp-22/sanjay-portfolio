/**
 * Centralized Contact Configuration for Sanjay G.P.
 * Single source of truth for all contact channels, phone, email, and social profiles.
 * Every component in the application MUST import and consume from this file.
 */

export interface ContactConfig {
  name: string;
  email: string;
  emailHref: string;
  phone: string;
  phoneRaw: string;
  phoneHref: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  location: string;
  availability: string;
  note: string;
}

export const contactConfig: ContactConfig = {
  name: 'Sanjay G.P.',
  email: 'sanjayskcet@gmail.com',
  emailHref: 'mailto:sanjayskcet@gmail.com',
  phone: '+91 6374278990',
  phoneRaw: '6374278990',
  phoneHref: 'tel:+916374278990',
  github: 'https://github.com/sanjaygp-22',
  githubUsername: 'sanjaygp-22',
  linkedin: 'https://www.linkedin.com/in/sanjay-g-p-27497137b/',
  linkedinUsername: 'sanjay-g-p-27497137b',
  location: 'Coimbatore, India',
  availability: 'Open for AI Engineering, Software Development & Research Opportunities',
  note: 'Feel free to reach out directly via email, phone, or LinkedIn for technical roles or collaborative initiatives.',
};
