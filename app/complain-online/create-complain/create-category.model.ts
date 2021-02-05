export interface CreateCategoryModel {
  name: string,
  value: string,
  groupName: string,
}

export const categories: CreateCategoryModel[] = [

  { value: 'atm', name: 'ATM', groupName: 'category complain'},
  { value: 'echannel', name: 'e-Channel', groupName: 'category complain' },
];
