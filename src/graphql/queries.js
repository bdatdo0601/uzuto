/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = `query GetGuest($id: ID!) {
  getGuest(id: $id) {
    id
    name
    description
    isRsvp
    rsvpTimeStamp
    response
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
      description
      isRsvp
      rsvpTimeStamp
      response
    }
    nextToken
  }
}
`;
