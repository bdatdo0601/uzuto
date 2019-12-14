/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuest = `mutation CreateGuest($input: CreateGuestInput!) {
  createGuest(input: $input) {
    id
    name
    email
    phoneNumber
    address
    description
    isVerified
    isAttending
    isRsvp
    rsvpTimeStamp
    companies
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    restLocation
    owner
  }
}
`;
export const updateGuest = `mutation UpdateGuest($input: UpdateGuestInput!) {
  updateGuest(input: $input) {
    id
    name
    email
    phoneNumber
    address
    description
    isVerified
    isAttending
    isRsvp
    rsvpTimeStamp
    companies
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    restLocation
    owner
  }
}
`;
export const deleteGuest = `mutation DeleteGuest($input: DeleteGuestInput!) {
  deleteGuest(input: $input) {
    id
    name
    email
    phoneNumber
    address
    description
    isVerified
    isAttending
    isRsvp
    rsvpTimeStamp
    companies
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    restLocation
    owner
  }
}
`;
export const createEventAttendee = `mutation CreateEventAttendee($input: CreateEventAttendeeInput!) {
  createEventAttendee(input: $input) {
    id
    eventID
    guestID
    event {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    guest {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateEventAttendee = `mutation UpdateEventAttendee($input: UpdateEventAttendeeInput!) {
  updateEventAttendee(input: $input) {
    id
    eventID
    guestID
    event {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    guest {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteEventAttendee = `mutation DeleteEventAttendee($input: DeleteEventAttendeeInput!) {
  deleteEventAttendee(input: $input) {
    id
    eventID
    guestID
    event {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    guest {
      id
      title
      description
      venue
      attire
      guests {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    title
    description
    venue
    attire
    guests {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    title
    description
    venue
    attire
    guests {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    title
    description
    venue
    attire
    guests {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
    id
    imageLink
    subtitle
    width
    height
    descriptionID
    venueID
    owner
  }
}
`;
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    id
    imageLink
    subtitle
    width
    height
    descriptionID
    venueID
    owner
  }
}
`;
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
    id
    imageLink
    subtitle
    width
    height
    descriptionID
    venueID
    owner
  }
}
`;
export const createDescriptions = `mutation CreateDescriptions($input: CreateDescriptionsInput!) {
  createDescriptions(input: $input) {
    id
    title
    context
    content
    signature
    images {
      items {
        id
        imageLink
        subtitle
        width
        height
        descriptionID
        venueID
        owner
      }
      nextToken
    }
    imageLocation
    owner
  }
}
`;
export const updateDescriptions = `mutation UpdateDescriptions($input: UpdateDescriptionsInput!) {
  updateDescriptions(input: $input) {
    id
    title
    context
    content
    signature
    images {
      items {
        id
        imageLink
        subtitle
        width
        height
        descriptionID
        venueID
        owner
      }
      nextToken
    }
    imageLocation
    owner
  }
}
`;
export const deleteDescriptions = `mutation DeleteDescriptions($input: DeleteDescriptionsInput!) {
  deleteDescriptions(input: $input) {
    id
    title
    context
    content
    signature
    images {
      items {
        id
        imageLink
        subtitle
        width
        height
        descriptionID
        venueID
        owner
      }
      nextToken
    }
    imageLocation
    owner
  }
}
`;
export const createVenue = `mutation CreateVenue($input: CreateVenueInput!) {
  createVenue(input: $input) {
    id
    title
    shortName
    context
    address
    description
    image {
      id
      imageLink
      subtitle
      width
      height
      descriptionID
      venueID
      owner
    }
    defaultLocation
    owner
  }
}
`;
export const updateVenue = `mutation UpdateVenue($input: UpdateVenueInput!) {
  updateVenue(input: $input) {
    id
    title
    shortName
    context
    address
    description
    image {
      id
      imageLink
      subtitle
      width
      height
      descriptionID
      venueID
      owner
    }
    defaultLocation
    owner
  }
}
`;
export const deleteVenue = `mutation DeleteVenue($input: DeleteVenueInput!) {
  deleteVenue(input: $input) {
    id
    title
    shortName
    context
    address
    description
    image {
      id
      imageLink
      subtitle
      width
      height
      descriptionID
      venueID
      owner
    }
    defaultLocation
    owner
  }
}
`;
