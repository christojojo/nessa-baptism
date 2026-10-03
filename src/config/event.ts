export interface Coordinates {
  lat: number;
  lng: number;
}

export interface BaptismEventConfig {
  baby: {
    childName: string;
    dateOfBirth: string;
    dateOfBirthFormatted?: string;
    photoSrc: string;
    galleryPhotos: {
      collage: string;
      family: string;
      portrait: string;
    };
  };
  parents: {
    father: string;
    mother: string;
    photoSrc?: string;
  };
  godparents: {
    godfather: string;
    godmother: string;
  };
  baptism: {
    date: string;
    day: string;
    time: string;
    timezone: string;
    churchName: string;
    churchAddress: string;
    city: string;
    district: string;
    state: string;
    googleMapsUrl: string;
    coordinates: Coordinates;
    mapQuery: string;
  };
  celebration: {
    afterBaptism: boolean;
    afterBaptismLabel: string;
    venueName: string;
    venueAddress: string;
    venueTime: string;
    city: string;
    district: string;
    state: string;
    googleMapsUrl: string;
    coordinates: Coordinates;
    mapQuery: string;
  };
  anniversary?: {
    celebrating: boolean;
    message: string;
  };
  bible: {
    verse: string;
    reference: string;
  };
  preciousMoments: {
    label: string;
    heading: string;
    supportingText: string;
    familyCaption: string;
    portraitCaption: string;
  };
  attendance: {
    preTitle: string;
    heading: string;
    description: string;
    yesButtonText: string;
    noButtonText: string;
  };
  rsvp: {
    whatsappNumber: string;
    rsvpMessage: string;
    declineMessage: string;
  };
  calendar: {
    title: string;
    description: string;
    durationMinutes: number;
  };
}

export const eventConfig: BaptismEventConfig = {
  baby: {
    childName: "Nessa Sanju",
    dateOfBirth: "04/07/2026",
    dateOfBirthFormatted: "July 4, 2026",
    photoSrc: "/images/IMG-20260928-WA0073.jpg.jpeg",
    galleryPhotos: {
      collage: "/images/nessa-collage.jpg",
      family: "/images/nessa-family.jpg",
      portrait: "/images/nessa-portrait-bw.jpg",
    },
  },
  parents: {
    father: "Sanju P Johnson",
    mother: "Neethu Sanju",
    photoSrc: "/images/nessa-parents-closing.jpg",
  },
  godparents: {
    godfather: "Johnson P A",
    godmother: "Mary Johnson",
  },
  baptism: {
    date: "Wednesday, October 14, 2026",
    day: "Wednesday",
    time: "5:00 PM",
    timezone: "Asia/Kolkata",
    churchName: "Holy Cross Shrine Church Mapranam",
    churchAddress: "Mapranam, Thrissur, Kerala",
    city: "Mapranam",
    district: "Thrissur",
    state: "Kerala",
    googleMapsUrl: "https://maps.app.goo.gl/6p6XBteBSkDMWnjJ8",
    coordinates: {
      lat: 10.3803555,
      lng: 76.2268501,
    },
    mapQuery: "Holy Cross Shrine Church Mapranam, Mapranam, Thrissur, Kerala",
  },
  celebration: {
    afterBaptism: true,
    afterBaptismLabel: "After Baptism",
    venueName: "KRK Hall",
    venueAddress: "Mapranam, Thrissur, Kerala",
    venueTime: "7:00 PM",
    city: "Mapranam",
    district: "Thrissur",
    state: "Kerala",
    googleMapsUrl: "https://maps.app.goo.gl/syQPxKQmkH5ZdhQP9",
    coordinates: {
      lat: 10.3806098,
      lng: 76.2244638,
    },
    mapQuery: "KRK Hall, Mapranam, Thrissur, Kerala",
  },
  anniversary: {
    celebrating: true,
    message: "On this special day, we also celebrate\nour second wedding anniversary.",
  },
  bible: {
    verse: "Let the little children come to me...",
    reference: "Matthew 19:14",
  },
  preciousMoments: {
    label: "PRECIOUS MOMENTS",
    heading: "Little moments, treasured forever.",
    supportingText: "A glimpse into the little moments that make Nessa so dearly loved.",
    familyCaption: "With love from her family",
    portraitCaption: "Precious little moments",
  },
  attendance: {
    preTitle: "WILL YOU JOIN US?",
    heading: "We'd be delighted to celebrate with you.",
    description: "Kindly let us know if you'll be joining us for this blessed day.",
    yesButtonText: "YES, I'LL BE THERE",
    noButtonText: "SORRY, I CAN'T MAKE IT",
  },
  rsvp: {
    // TEMPORARY RSVP TESTING NUMBER. Production number: 918891941164
    whatsappNumber: "917994836963",
    rsvpMessage:
      "Hello! Thank you for inviting me to the baptism. I’m happy to confirm that I’ll be attending. God bless!",
    declineMessage:
      "Hello! Thank you very much for inviting me to the baptism. Unfortunately, I won’t be able to attend. God bless!",
  },
  calendar: {
    title: "Baptism of Nessa Sanju",
    description: "Join us as we celebrate the baptism of Nessa Sanju.",
    durationMinutes: 120,
  },
};
