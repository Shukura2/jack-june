export type dataTypes = {
  [key: string]: string;
};

export type cardTypes = {
  id: number;
  bgImg: string;
  text: string;
  others: string;
};

export type featuredDataTypes = {
  id: number;
  bgImg: string[];
  isSale: boolean;
  name: string;
  amount: string;
  categories: string;
  modalCategories: string[];
  size: string[];
  ratings: number;
  color:
    | {
        type: string;
        image: string[] | null;
      }[]
    | string[];
};
