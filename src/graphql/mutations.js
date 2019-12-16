/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteEventAttendee = `mutation DeleteEventAttendee($input: DeleteEventAttendeeInput!) {
  deleteEventAttendee(input: $input) {
    id
    eventID
    guestID
    owner
    event {
      id
      title
      description
      venue
      attire
      time
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
      time
      guests {
        nextToken
      }
      owner
    }
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
    time
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
    time
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
    time
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
    url
    imageLink
    subTitle
    thumbUrl
    name
    width
    height
    type
    descriptionID
    venueID
    owner
  }
}
`;
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    id
    url
    imageLink
    subTitle
    thumbUrl
    name
    width
    height
    type
    descriptionID
    venueID
    owner
  }
}
`;
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
    id
    url
    imageLink
    subTitle
    thumbUrl
    name
    width
    height
    type
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
    imageLocation
    images {
      items {
        id
        url
        imageLink
        subTitle
        thumbUrl
        name
        width
        height
        type
        descriptionID
        venueID
        owner
      }
      nextToken
    }
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
    imageLocation
    images {
      items {
        id
        url
        imageLink
        subTitle
        thumbUrl
        name
        width
        height
        type
        descriptionID
        venueID
        owner
      }
      nextToken
    }
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
    imageLocation
    images {
      items {
        id
        url
        imageLink
        subTitle
        thumbUrl
        name
        width
        height
        type
        descriptionID
        venueID
        owner
      }
      nextToken
    }
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
    defaultLocation
    image {
      id
      url
      imageLink
      subTitle
      thumbUrl
      name
      width
      height
      type
      descriptionID
      venueID
      owner
    }
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
    defaultLocation
    image {
      id
      url
      imageLink
      subTitle
      thumbUrl
      name
      width
      height
      type
      descriptionID
      venueID
      owner
    }
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
    defaultLocation
    image {
      id
      url
      imageLink
      subTitle
      thumbUrl
      name
      width
      height
      type
      descriptionID
      venueID
      owner
    }
    owner
  }
}
`;
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
    restLocation
    owner
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
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
    restLocation
    owner
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
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
    restLocation
    owner
    attendingEvents {
      items {
        id
        eventID
        guestID
        owner
      }
      nextToken
    }
  }
}
`;
export const createEventAttendee = `mutation CreateEventAttendee($input: CreateEventAttendeeInput!) {
  createEventAttendee(input: $input) {
    id
    eventID
    guestID
    owner
    event {
      id
      title
      description
      venue
      attire
      time
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
      time
      guests {
        nextToken
      }
      owner
    }
  }
}
`;
export const updateEventAttendee = `mutation UpdateEventAttendee($input: UpdateEventAttendeeInput!) {
  updateEventAttendee(input: $input) {
    id
    eventID
    guestID
    owner
    event {
      id
      title
      description
      venue
      attire
      time
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
      time
      guests {
        nextToken
      }
      owner
    }
  }
}
`;
