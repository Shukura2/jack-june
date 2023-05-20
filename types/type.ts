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
        image: string[];
      }[]
    | null;
  tags: string[];
};

export type blogAndUpdateTypes = {
  id: number;
  image: string;
  likes: number;
  share: number;
  tagOne: string;
  tagTwo: string;
  title: string;
};

export type accessoriesType = {
  id: number;
  image: string;
  isSale: boolean;
};
