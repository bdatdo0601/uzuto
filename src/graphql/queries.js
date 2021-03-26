/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
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
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEventAttendee = /* GraphQL */ `
  query GetEventAttendee($id: ID!) {
    getEventAttendee(id: $id) {
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
export const listEventAttendees = /* GraphQL */ `
  query ListEventAttendees(
    $filter: ModelEventAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const getDescriptions = /* GraphQL */ `
  query GetDescriptions($id: ID!) {
    getDescriptions(id: $id) {
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
export const listDescriptionss = /* GraphQL */ `
  query ListDescriptionss(
    $filter: ModelDescriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        context
        content
        signature
        imageLocation
        createdAt
        updatedAt
        images {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
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
export const listVenues = /* GraphQL */ `
  query ListVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
