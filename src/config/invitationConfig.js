/**
 * Centralized Configuration for Hindu Engagement Ceremony Invitation
 * All couple, parents, event, muhurtham, and venue details are managed here.
 */

export const INVITATION_CONFIG = {
  // Couple Details
  bride: {
    fullName: "Charishma Devi",
    shortName: "Charishma",
    role: "The Bride",
    fatherName: "Tigireddy Satyanarayana ",
    motherName: "Tigireddy Padmavathi",
  },
  groom: {
    fullName: "Sai Nirupam",
    shortName: "Sai Nirupam",
    role: "The Groom",
    fatherName: "Arepalli Bharavi",
    motherName: "Arepalli Radhika",
  },

  // Event Details
  event: {
    title: "ENGAGEMENT CEREMONY",
    auspiciousHeading: "Shubha Mangalam",
    tagline: "Two hearts... One journey...",
    invitationNote:
      "With the blessings of our families, we cordially invite you to celebrate the auspicious engagement ceremony of Charishma Devi and Sai Nirupam.",
    welcomeNote:
      "We would be delighted to have your gracious presence on this special occasion and share our happiness.",
    compliments: "With best compliments from both families.",
    presenceNote:
      "Your presence and blessings will make this auspicious occasion even more special.",
    thankYouNote: "Thank you for celebrating our happiness with us.",
  },

  // Date, Time & Muhurtham
  schedule: {
    dayOfWeek: "Thursday",
    dateFormatted: "29 October 2026",
    day: "29",
    month: "October",
    year: "2026",
    muhurthamTime: "11:03 AM",
    timeDescription: "Auspicious Muhurtham at 11:04 AM",
    // ISO Date string for Countdown / Calendar (India Standard Time is UTC+05:30)
    isoDate: "2026-10-29T11:04:00+05:30",
  },

  // Venue & Location
  venue: {
    name: "NVR Convention",
    street: "Cinema Road",
    city: "Kakinada",
    state: "Andhra Pradesh",
    country: "India",
    fullAddress: "NVR Convention, Cinema Road, Kakinada, Andhra Pradesh, India",
    googleMapsUrl: "https://maps.app.goo.gl/4vKda9CJNiAosMH56",
  },

  // Audio configuration
  audio: {
    src: "/assets/music1.mp3",
    title: "Traditional Shehnai / Nadaswaram Melody",
  },
};

export default INVITATION_CONFIG;
