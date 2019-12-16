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
        }
        imageLocation
      }
      nextToken
    }
  }
  `;
