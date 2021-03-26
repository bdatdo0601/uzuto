/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteImage = /* GraphQL */ `
  mutation DeleteImage($input: DeleteImageInput!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteDescriptions = /* GraphQL */ `
  mutation DeleteDescriptions($input: DeleteDescriptionsInput!) {
    deleteDescriptions(input: $input) {
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
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue($input: DeleteVenueInput!) {
    deleteVenue(input: $input) {
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
export const createGuest = /* GraphQL */ `
  mutation CreateGuest($input: CreateGuestInput!) {
    createGuest(input: $input) {
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
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest($input: UpdateGuestInput!) {
    updateGuest(input: $input) {
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
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest($input: DeleteGuestInput!) {
    deleteGuest(input: $input) {
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
export const createEventAttendee = /* GraphQL */ `
  mutation CreateEventAttendee($input: CreateEventAttendeeInput!) {
    createEventAttendee(input: $input) {
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
export const updateEventAttendee = /* GraphQL */ `
  mutation UpdateEventAttendee($input: UpdateEventAttendeeInput!) {
    updateEventAttendee(input: $input) {
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
export const deleteEventAttendee = /* GraphQL */ `
  mutation DeleteEventAttendee($input: DeleteEventAttendeeInput!) {
    deleteEventAttendee(input: $input) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($input: DeleteEventInput!) {
    deleteEvent(input: $input) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage($input: CreateImageInput!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage($input: UpdateImageInput!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createDescriptions = /* GraphQL */ `
  mutation CreateDescriptions($input: CreateDescriptionsInput!) {
    createDescriptions(input: $input) {
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
export const updateDescriptions = /* GraphQL */ `
  mutation UpdateDescriptions($input: UpdateDescriptionsInput!) {
    updateDescriptions(input: $input) {
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
export const createVenue = /* GraphQL */ `
  mutation CreateVenue($input: CreateVenueInput!) {
    createVenue(input: $input) {
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
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue($input: UpdateVenueInput!) {
    updateVenue(input: $input) {
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
