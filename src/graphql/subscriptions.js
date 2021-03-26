/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGuest = /* GraphQL */ `
  subscription OnCreateGuest {
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
      createdAt
      updatedAt
      attendingEvents {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateGuest = /* GraphQL */ `
  subscription OnUpdateGuest {
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
      createdAt
      updatedAt
      attendingEvents {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteGuest = /* GraphQL */ `
  subscription OnDeleteGuest {
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
      createdAt
      updatedAt
      attendingEvents {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateEventAttendee = /* GraphQL */ `
  subscription OnCreateEventAttendee {
    onCreateEventAttendee {
      id
      eventID
      guestID
      createdAt
      updatedAt
      event {
        id
        title
        description
        venue
        attire
        time
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        guests {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateEventAttendee = /* GraphQL */ `
  subscription OnUpdateEventAttendee {
    onUpdateEventAttendee {
      id
      eventID
      guestID
      createdAt
      updatedAt
      event {
        id
        title
        description
        venue
        attire
        time
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        guests {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteEventAttendee = /* GraphQL */ `
  subscription OnDeleteEventAttendee {
    onDeleteEventAttendee {
      id
      eventID
      guestID
      createdAt
      updatedAt
      event {
        id
        title
        description
        venue
        attire
        time
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        guests {
          nextToken
        }
      }
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      title
      description
      venue
      attire
      time
      createdAt
      updatedAt
      guests {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      title
      description
      venue
      attire
      time
      createdAt
      updatedAt
      guests {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      title
      description
      venue
      attire
      time
      createdAt
      updatedAt
      guests {
        items {
          id
          eventID
          guestID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDescriptions = /* GraphQL */ `
  subscription OnCreateDescriptions {
    onCreateDescriptions {
      id
      title
      context
      content
      signature
      imageLocation
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateDescriptions = /* GraphQL */ `
  subscription OnUpdateDescriptions {
    onUpdateDescriptions {
      id
      title
      context
      content
      signature
      imageLocation
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteDescriptions = /* GraphQL */ `
  subscription OnDeleteDescriptions {
    onDeleteDescriptions {
      id
      title
      context
      content
      signature
      imageLocation
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue {
    onCreateVenue {
      id
      title
      shortName
      context
      address
      description
      defaultLocation
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue {
    onUpdateVenue {
      id
      title
      shortName
      context
      address
      description
      defaultLocation
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue {
    onDeleteVenue {
      id
      title
      shortName
      context
      address
      description
      defaultLocation
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
    }
  }
`;
