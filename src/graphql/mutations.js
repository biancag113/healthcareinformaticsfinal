/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMMG = /* GraphQL */ `
  mutation CreateMMG(
    $input: CreateMMGInput!
    $condition: ModelMMGConditionInput
  ) {
    createMMG(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateMMG = /* GraphQL */ `
  mutation UpdateMMG(
    $input: UpdateMMGInput!
    $condition: ModelMMGConditionInput
  ) {
    updateMMG(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteMMG = /* GraphQL */ `
  mutation DeleteMMG(
    $input: DeleteMMGInput!
    $condition: ModelMMGConditionInput
  ) {
    deleteMMG(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
