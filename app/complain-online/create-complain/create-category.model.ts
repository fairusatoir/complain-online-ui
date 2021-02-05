export interface CreateCategoryModel {
  name: string,
  value: string,
  groupName: string,
}

export const categories: CreateCategoryModel[] = [

  { value: 'ATM', name: 'ATM', groupName: 'category complain'},
  { value: 'e-Channel', name: 'e-Channel', groupName: 'category complain' },
];
