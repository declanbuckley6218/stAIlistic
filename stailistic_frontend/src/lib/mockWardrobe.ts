import { ClothingItem } from "@/types/wardrobe";

// Mock clothing data, needs to be turned into a api call.
export const mockClothingItems: ClothingItem[] = [
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "1",
    type: "Top",
    size: "M",
    material: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "2",
    type: "",
    size: "",
    material: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "3",
    type: "",
    size: "",
    material: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "4",
    type: "",
    size: "",
    material: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "5",
    type: "",
    size: "",
    material: "",
  },
];

// Hard coded filter for now, probably makes sense to make it dynamic later on
type FilterKey = keyof Pick<
  ClothingItem,
  "color" | "size" | "brand" | "type" | "material"
>;
export type FilterGroup = {
  key: FilterKey;
  label: string;
  options: string[];
};
export const filterGroups: FilterGroup[] = [
  {
    key: "color",
    label: "Color",
    options: ["Red", "Blue", "Green", "Black", "White"],
  },
  {
    key: "size",
    label: "Size",
    options: ["XS", "S", "M", "L", "XL"],
  },
  {
    key: "brand",
    label: "Brand",
    options: ["Nike", "Adidas", "Puma", "Reebok"],
  },
  {
    key: "type",
    label: "Type",
    options: ["Tops", "Bottoms", "Shoes", "Accessories"],
  },
  {
    key: "material",
    label: "Material",
    options: ["Cotton", "Polyester", "Leather", "Denim"],
  },
];

export const CLOTHING_TYPES = [
  "Tops",
  "Bottoms",
  "Shoes",
  "Accessories",
] as const;
