module.exports = {
  siteTitle: 'Alvian.ID | Computer Science',
  siteDescription:
    'I'm Computer Science, Student and supporter Of Persija Jakarta, From Klaten Regency',
  siteKeywords:
    'Alvian, Klaten, Sleman, Computer, PersonalWeb, Javascript, Persija, Supporter',
  siteUrl: 'https://alvian.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Alvian Dwi Pramudya',
  location: 'Sleman, Yogyakarta',
  email: 'alvian.1928@yahoo.com',
  github: 'https://github.com/pxal',
  twitterHandle: '#',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/pxal',
    },
    {
      name: 'Linkedin',
      url: '#',
    },
    {
      name: 'Codepen',
      url: '#',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alvian_cyber',
    },
    {
      name: 'Twitter',
      url: '#',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
