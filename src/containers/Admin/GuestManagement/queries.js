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
        songName
        isRsvp
        rsvpTimeStamp
        companies
        restLocation
        owner
        attendingEvents {
          nextToken
          items {
              event {
                  title
              }
          }
        }
      }
      nextToken
    }
  }
  `;
