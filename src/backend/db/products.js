import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = 
[
  {
    "id": "thapaserialnoa",
    "name": "iphone x",
    "company": "apple",
    "price": 78000,
    "rating":5,
    "colors": [
      "#ff0000",
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "featured": true
  },
  {
    "id": "thapaserialnob",
    "name": "samsung s20",
    "company": "samsung",
    "price": 55000,
    "rating":3,
    "colors": [
      "#000",
      "#22D3EF"
    ],
    "image": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "shipping": true
  },
  {
    "id": "thapaserialnoc",
    "name": "Dell Series",
    "company": "dell",
    "price": 60000,
    "rating":2,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop"
  },
  {
    "id": "thapaserialnod",
    "name": "Nokia 420",
    "company": "nokia",
    "price": 12599,
    "rating":5,
    "colors": [
      "#000",
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "shipping": true
  },
  {
    "id": "thapaserialnoe",
    "name": "Mac Pc",
    "company": "apple",
    "rating":4,
    "price": 120000,
    "colors": [
      "#000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "computer",
    "shipping": true
  },
  {
    "id": "thapaserialnof",
    "name": "Macbook Pro",
    "company": "apple",
    "price": 120000,
    "rating":3,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop",
    "shipping": true
  },
  {
    "id": "thapaserialnog",
    "name": "Asus gseries",
    "company": "asus",
    "rating":2,
    "price": 23999,
    "colors": [
      "#CDD0D0",
      "#000"
    ],
    "image": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop",
    "shipping": true
  },
  {
    "id": "thapaserialnoh",
    "name": "Accessories",
    "price": 45000,
    "rating":1,
    "company": "lenova",
    "colors": [
      "#000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "accessories",
    "featured": true,
    "shipping": true
  },
  {
    "id": "thapaserialnoi",
    "name": "Iwatch",
    "price": 39999,
    "rating":4,
    "company": "apple",
    "colors": [
      "#000000"
    ],
    "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch",
    "shipping": true
  },
  {
    "id": "thapaserialnoj",
    "name": "user need",
    "company": "apple",
    "price": 149999,
    "rating":3,
    "colors": [
      "#ff0000",
      "#22D3EF",
      "#000000"
    ],
    "image": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "accessories"
  },
  {
    "id": "thapaserialnok",
    "name": "rolex premium",
    "company": "rolex",
    "price": 99999,
    "rating":4,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch"
  },
  {
    "id": "thapaserialnol",
    "name": "galaxy w20",
    "price": 31999,
    "rating":5,
    "company": "samsung",
    "colors": [
      "#22D3EF",
      "#ff0000",
      "#000000"
    ],
    "image": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch",
    "featured": true
  }
]
