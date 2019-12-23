export const createEventAttendee = `mutation CreateEventAttendee($input: CreateEventAttendeeInput!) {
    createEventAttendee(input: $input) {
      id
      eventID
      guestID
    }
  }
  `;
