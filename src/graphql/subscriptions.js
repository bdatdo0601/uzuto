/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onDeleteEventAttendee = `subscription OnDeleteEventAttendee($owner: String!) {
  onDeleteEventAttendee(owner: $owner) {
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
export const onCreateEvent = `subscription OnCreateEvent($owner: String!) {
  onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = `subscription OnUpdateEvent($owner: String!) {
  onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = `subscription OnDeleteEvent($owner: String!) {
  onDeleteEvent(owner: $owner) {
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
export const onCreateImage = `subscription OnCreateImage($owner: String!) {
  onCreateImage(owner: $owner) {
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
export const onUpdateImage = `subscription OnUpdateImage($owner: String!) {
  onUpdateImage(owner: $owner) {
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
export const onDeleteImage = `subscription OnDeleteImage($owner: String!) {
  onDeleteImage(owner: $owner) {
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
export const onCreateDescriptions = `subscription OnCreateDescriptions($owner: String!) {
  onCreateDescriptions(owner: $owner) {
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
export const onUpdateDescriptions = `subscription OnUpdateDescriptions($owner: String!) {
  onUpdateDescriptions(owner: $owner) {
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
export const onDeleteDescriptions = `subscription OnDeleteDescriptions($owner: String!) {
  onDeleteDescriptions(owner: $owner) {
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
export const onCreateVenue = `subscription OnCreateVenue($owner: String!) {
  onCreateVenue(owner: $owner) {
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
export const onUpdateVenue = `subscription OnUpdateVenue($owner: String!) {
  onUpdateVenue(owner: $owner) {
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
export const onDeleteVenue = `subscription OnDeleteVenue($owner: String!) {
  onDeleteVenue(owner: $owner) {
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
export const onCreateGuest = `subscription OnCreateGuest($owner: String!) {
  onCreateGuest(owner: $owner) {
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
export const onUpdateGuest = `subscription OnUpdateGuest($owner: String!) {
  onUpdateGuest(owner: $owner) {
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
export const onCreateEventAttendee = `subscription OnCreateEventAttendee($owner: String!) {
  onCreateEventAttendee(owner: $owner) {
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
export const onUpdateEventAttendee = `subscription OnUpdateEventAttendee($owner: String!) {
  onUpdateEventAttendee(owner: $owner) {
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
