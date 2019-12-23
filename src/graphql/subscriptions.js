/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
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
  }
}
`;
export const onDeleteDescriptions = `subscription OnDeleteDescriptions {
  onDeleteDescriptions {
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
      }
      nextToken
    }
  }
}
`;
export const onDeleteVenue = `subscription OnDeleteVenue {
  onDeleteVenue {
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
    }
  }
}
`;
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
    songName
    isRsvp
    rsvpTimeStamp
    companies
    restLocation
    attendingEvents {
      items {
        id
        eventID
        guestID
      }
      nextToken
    }
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
    songName
    isRsvp
    rsvpTimeStamp
    companies
    restLocation
    attendingEvents {
      items {
        id
        eventID
        guestID
      }
      nextToken
    }
  }
}
`;
export const onDeleteGuest = `subscription OnDeleteGuest {
  onDeleteGuest {
    id
    name
    email
    phoneNumber
    address
    description
    isVerified
    isAttending
    songName
    isRsvp
    rsvpTimeStamp
    companies
    restLocation
    attendingEvents {
      items {
        id
        eventID
        guestID
      }
      nextToken
    }
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
      time
      guests {
        nextToken
      }
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
    }
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
      time
      guests {
        nextToken
      }
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
    }
  }
}
`;
export const onDeleteEventAttendee = `subscription OnDeleteEventAttendee {
  onDeleteEventAttendee {
    id
    eventID
    guestID
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
    }
  }
}
`;
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
      }
      nextToken
    }
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
      }
      nextToken
    }
  }
}
`;
export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
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
  }
}
`;
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
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
  }
}
`;
export const onCreateDescriptions = `subscription OnCreateDescriptions {
  onCreateDescriptions {
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateDescriptions = `subscription OnUpdateDescriptions {
  onUpdateDescriptions {
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
      }
      nextToken
    }
  }
}
`;
export const onCreateVenue = `subscription OnCreateVenue {
  onCreateVenue {
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
    }
  }
}
`;
export const onUpdateVenue = `subscription OnUpdateVenue {
  onUpdateVenue {
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
    }
  }
}
`;
