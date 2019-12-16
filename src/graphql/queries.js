/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = `query GetGuest($id: ID!) {
  getGuest(id: $id) {
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
export const listGuests = `query ListGuests(
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
      isRsvp
      rsvpTimeStamp
      companies
      attendingEvents {
        nextToken
      }
      restLocation
      owner
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
export const listEvents = `query ListEvents(
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
      guests {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
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
    owner
  }
}
`;
export const listImages = `query ListImages(
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
      owner
    }
    nextToken
  }
}
`;
export const getDescriptions = `query GetDescriptions($id: ID!) {
  getDescriptions(id: $id) {
    id
    title
    context
    content
    signature
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
    imageLocation
    owner
  }
}
`;
export const listDescriptionss = `query ListDescriptionss(
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
      images {
        nextToken
      }
      imageLocation
      owner
    }
    nextToken
  }
}
`;
export const getVenue = `query GetVenue($id: ID!) {
  getVenue(id: $id) {
    id
    title
    shortName
    context
    address
    description
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
    defaultLocation
    owner
  }
}
`;
export const listVenues = `query ListVenues(
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
      defaultLocation
      owner
    }
    nextToken
  }
}
`;
