/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMMG = /* GraphQL */ `
  query GetMMG($id: ID!) {
    getMMG(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listMMG = /* GraphQL */ `
  query ListMMGs(
    $filter: ModelMMGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMMGs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
