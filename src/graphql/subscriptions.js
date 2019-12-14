/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGuest = `subscription OnCreateGuest {
  onCreateGuest {
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
export const onUpdateGuest = `subscription OnUpdateGuest {
  onUpdateGuest {
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
export const onDeleteGuest = `subscription OnDeleteGuest($owner: String!) {
  onDeleteGuest(owner: $owner) {
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
export const onCreateEventAttendee = `subscription OnCreateEventAttendee {
  onCreateEventAttendee {
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
export const onUpdateEventAttendee = `subscription OnUpdateEventAttendee {
  onUpdateEventAttendee {
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
export const onDeleteEventAttendee = `subscription OnDeleteEventAttendee($owner: String!) {
  onDeleteEventAttendee(owner: $owner) {
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
export const onCreateEvent = `subscription OnCreateEvent($owner: String!) {
  onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = `subscription OnUpdateEvent($owner: String!) {
  onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = `subscription OnDeleteEvent($owner: String!) {
  onDeleteEvent(owner: $owner) {
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
export const onCreateImage = `subscription OnCreateImage($owner: String!) {
  onCreateImage(owner: $owner) {
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
export const onUpdateImage = `subscription OnUpdateImage($owner: String!) {
  onUpdateImage(owner: $owner) {
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
export const onDeleteImage = `subscription OnDeleteImage($owner: String!) {
  onDeleteImage(owner: $owner) {
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
export const onCreateDescriptions = `subscription OnCreateDescriptions($owner: String!) {
  onCreateDescriptions(owner: $owner) {
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
export const onUpdateDescriptions = `subscription OnUpdateDescriptions($owner: String!) {
  onUpdateDescriptions(owner: $owner) {
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
export const onDeleteDescriptions = `subscription OnDeleteDescriptions($owner: String!) {
  onDeleteDescriptions(owner: $owner) {
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
export const onCreateVenue = `subscription OnCreateVenue($owner: String!) {
  onCreateVenue(owner: $owner) {
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
export const onUpdateVenue = `subscription OnUpdateVenue($owner: String!) {
  onUpdateVenue(owner: $owner) {
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
export const onDeleteVenue = `subscription OnDeleteVenue($owner: String!) {
  onDeleteVenue(owner: $owner) {
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
