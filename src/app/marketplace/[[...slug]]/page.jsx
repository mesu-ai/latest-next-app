'use client';

import React, { useState } from 'react';


const arr = [
  {
      "categoryId": 1,
      "categoryName": "Clothing & Fashion",
      "url": "clothing-and-fashion",
      "slug": "clothing-and-fashion",
      "firstChildren": [
          {
              "categoryId": 2,
              "categoryName": "Mens Fashion",
              "url": "mens-fashion",
              "slug": "mens-fashion",
              "secondChildren": [
                  {
                      "categoryId": 3,
                      "categoryName": "Mens Top Wear",
                      "url": "mens-top-wear",
                      "slug": "mens-top-wear",
                      "thirdChild": [
                          {
                              "categoryId": 4,
                              "categoryName": "Panjabi",
                              "url": "panjabi",
                              "slug": "panjabi"
                          },
                          {
                              "categoryId": 6,
                              "categoryName": "Casual Shirt",
                              "url": "casual-shirt",
                              "slug": "casual-shirt"
                          },
                          {
                              "categoryId": 7,
                              "categoryName": "Formal Shirt",
                              "url": "formal-shirt",
                              "slug": "formal-shirt"
                          },
                          {
                              "categoryId": 9,
                              "categoryName": "Katwa & Fatua",
                              "url": "katwa-and-fatua",
                              "slug": "katwa-and-fatua"
                          },
                          {
                              "categoryId": 10,
                              "categoryName": "T-Shirt",
                              "url": "t-shirt",
                              "slug": "t-shirt"
                          },
                          {
                              "categoryId": 11,
                              "categoryName": "Polo",
                              "url": "polo",
                              "slug": "polo"
                          },
                          {
                              "categoryId": 167,
                              "categoryName": "Mens Coti",
                              "url": "mens-coti",
                              "slug": "mens-coti"
                          }
                      ]
                  },
                  {
                      "categoryId": 12,
                      "categoryName": "Mens Bottom Wear",
                      "url": "mens-bottom-wear",
                      "slug": "mens-bottom-wear",
                      "thirdChild": [
                          {
                              "categoryId": 13,
                              "categoryName": "Formal Pant",
                              "url": "formal-pant",
                              "slug": "formal-pant"
                          },
                          {
                              "categoryId": 14,
                              "categoryName": "Chino Pant",
                              "url": "chino-pant",
                              "slug": "chino-pant"
                          },
                          {
                              "categoryId": 15,
                              "categoryName": "Jeans Pant",
                              "url": "jeans-pant",
                              "slug": "jeans-pant"
                          },
                          {
                              "categoryId": 16,
                              "categoryName": "Cargo Pant",
                              "url": "cargo-pant",
                              "slug": "cargo-pant"
                          },
                          {
                              "categoryId": 17,
                              "categoryName": "Joggers",
                              "url": "joggers",
                              "slug": "joggers"
                          },
                          {
                              "categoryId": 18,
                              "categoryName": "Shorts",
                              "url": "shorts",
                              "slug": "shorts"
                          },
                          {
                              "categoryId": 99,
                              "categoryName": "Payjama",
                              "url": "payjama",
                              "slug": "payjama"
                          },
                          {
                              "categoryId": 145,
                              "categoryName": "Lungi",
                              "url": "lungi",
                              "slug": "lungi"
                          }
                      ]
                  },
                  {
                      "categoryId": 27,
                      "categoryName": "Sports Wear",
                      "url": "sports-wear",
                      "slug": "sports-wear",
                      "thirdChild": [
                          {
                              "categoryId": 28,
                              "categoryName": "Sports Wear Set",
                              "url": "sports-wear-set",
                              "slug": "sports-wear-set"
                          },
                          {
                              "categoryId": 29,
                              "categoryName": "Jersey",
                              "url": "jersey",
                              "slug": "jersey"
                          }
                      ]
                  },
                  {
                      "categoryId": 30,
                      "categoryName": "Mens Innerwear & Sleepwear",
                      "url": "mens-innerwear-and-sleepwear",
                      "slug": "mens-innerwear-and-sleepwear",
                      "thirdChild": [
                          {
                              "categoryId": 31,
                              "categoryName": "Mens Innerwear",
                              "url": "mens-innerwear",
                              "slug": "mens-innerwear"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 5,
              "categoryName": "Womens Fashion",
              "url": "womens-fashion",
              "slug": "womens-fashion",
              "secondChildren": [
                  {
                      "categoryId": 41,
                      "categoryName": "Womens Top Wear",
                      "url": "womens-top-wear",
                      "slug": "womens-top-wear",
                      "thirdChild": [
                          {
                              "categoryId": 33,
                              "categoryName": "Single Ethnic",
                              "url": "single-ethnic",
                              "slug": "single-ethnic"
                          },
                          {
                              "categoryId": 34,
                              "categoryName": "Women Ethnic 3 Pcs",
                              "url": "women-ethnic-3-pcs",
                              "slug": "women-ethnic-3-pcs"
                          },
                          {
                              "categoryId": 35,
                              "categoryName": "Fashion Tops",
                              "url": "fashion-tops",
                              "slug": "fashion-tops"
                          },
                          {
                              "categoryId": 36,
                              "categoryName": "Women Shirt",
                              "url": "women-shirt",
                              "slug": "women-shirt"
                          },
                          {
                              "categoryId": 37,
                              "categoryName": "Womens Tees and Tank",
                              "url": "womens-tees-and-tank",
                              "slug": "womens-tees-and-tank"
                          },
                          {
                              "categoryId": 38,
                              "categoryName": "Scarf",
                              "url": "scarf",
                              "slug": "scarf"
                          },
                          {
                              "categoryId": 39,
                              "categoryName": "Saree",
                              "url": "saree",
                              "slug": "saree"
                          },
                          {
                              "categoryId": 199,
                              "categoryName": "Maternity Wear",
                              "url": "maternity-wear",
                              "slug": "maternity-wear"
                          }
                      ]
                  },
                  {
                      "categoryId": 42,
                      "categoryName": "Womens Bottom Wear",
                      "url": "womens-bottom-wear",
                      "slug": "womens-bottom-wear",
                      "thirdChild": [
                          {
                              "categoryId": 40,
                              "categoryName": "Womens Pant",
                              "url": "womens-pant",
                              "slug": "womens-pant"
                          },
                          {
                              "categoryId": 44,
                              "categoryName": "Womens Chino Pant",
                              "url": "womens-chino-pant",
                              "slug": "womens-chino-pant"
                          },
                          {
                              "categoryId": 45,
                              "categoryName": "Womens Jeans Pant",
                              "url": "womens-jeans-pant",
                              "slug": "womens-jeans-pant"
                          },
                          {
                              "categoryId": 46,
                              "categoryName": "Womens Cargo Pant",
                              "url": "womens-cargo-pant",
                              "slug": "womens-cargo-pant"
                          },
                          {
                              "categoryId": 47,
                              "categoryName": "Womens Joggers",
                              "url": "womens-joggers",
                              "slug": "womens-joggers"
                          }
                      ]
                  },
                  {
                      "categoryId": 144,
                      "categoryName": "Womens Western Set",
                      "url": "womens-western-set",
                      "slug": "womens-western-set",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 57,
                      "categoryName": "Womens Innerwear & Sleepwear",
                      "url": "womens-innerwear-and-sleepwear",
                      "slug": "womens-innerwear-and-sleepwear",
                      "thirdChild": [
                          {
                              "categoryId": 59,
                              "categoryName": "Womens Sleepwear",
                              "url": "womens-sleepwear",
                              "slug": "womens-sleepwear"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 60,
              "categoryName": "Kids",
              "url": "kids",
              "slug": "kids",
              "secondChildren": [
                  {
                      "categoryId": 61,
                      "categoryName": "New Born",
                      "url": "new-born",
                      "slug": "new-born",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 62,
                      "categoryName": "3 to 18 (Month)",
                      "url": "3-to-18-month",
                      "slug": "3-to-18-month",
                      "thirdChild": [
                          {
                              "categoryId": 63,
                              "categoryName": "Boys",
                              "url": "boys",
                              "slug": "boys"
                          },
                          {
                              "categoryId": 64,
                              "categoryName": "Girls",
                              "url": "girls",
                              "slug": "girls"
                          }
                      ]
                  },
                  {
                      "categoryId": 65,
                      "categoryName": "Baby boys (2-7Y)",
                      "url": "baby-boys-2-7y",
                      "slug": "baby-boys-2-7y",
                      "thirdChild": [
                          {
                              "categoryId": 67,
                              "categoryName": "Polo & T-Shirt",
                              "url": "polo-and-t-shirt",
                              "slug": "polo-and-t-shirt"
                          },
                          {
                              "categoryId": 68,
                              "categoryName": "Panjabi & Kabli",
                              "url": "panjabi-and-kabli",
                              "slug": "panjabi-and-kabli"
                          },
                          {
                              "categoryId": 69,
                              "categoryName": "Pant & Payjama",
                              "url": "pant-and-payjama",
                              "slug": "pant-and-payjama"
                          },
                          {
                              "categoryId": 70,
                              "categoryName": "Shirt & Katua",
                              "url": "shirt-and-katua",
                              "slug": "shirt-and-katua"
                          },
                          {
                              "categoryId": 71,
                              "categoryName": "Boys Set",
                              "url": "boys-set",
                              "slug": "boys-set"
                          }
                      ]
                  },
                  {
                      "categoryId": 66,
                      "categoryName": "Baby Girls (2-7Y)",
                      "url": "baby-girls-2-7y",
                      "slug": "baby-girls-2-7y",
                      "thirdChild": [
                          {
                              "categoryId": 72,
                              "categoryName": "Girls Kurti",
                              "url": "girls-kurti",
                              "slug": "girls-kurti"
                          },
                          {
                              "categoryId": 73,
                              "categoryName": "Frock & Dungaree",
                              "url": "frock-and-dungaree",
                              "slug": "frock-and-dungaree"
                          },
                          {
                              "categoryId": 74,
                              "categoryName": "Tops & Skirt",
                              "url": "tops-and-skirt",
                              "slug": "tops-and-skirt"
                          },
                          {
                              "categoryId": 75,
                              "categoryName": "Girls 3 Pcs",
                              "url": "girls-3-pcs",
                              "slug": "girls-3-pcs"
                          },
                          {
                              "categoryId": 76,
                              "categoryName": "Girls Pant",
                              "url": "girls-pant",
                              "slug": "girls-pant"
                          },
                          {
                              "categoryId": 77,
                              "categoryName": "Polo & T-Shirt",
                              "url": "polo-and-t-shirt",
                              "slug": "polo-and-t-shirt"
                          },
                          {
                              "categoryId": 79,
                              "categoryName": "Girls Set & Jumpsuit",
                              "url": "girls-set-and-jumpsuit",
                              "slug": "girls-set-and-jumpsuit"
                          }
                      ]
                  },
                  {
                      "categoryId": 80,
                      "categoryName": "Boys (8-15Y)",
                      "url": "boys-8-15y",
                      "slug": "boys-8-15y",
                      "thirdChild": [
                          {
                              "categoryId": 81,
                              "categoryName": "Shirt & Katua",
                              "url": "shirt-and-katua",
                              "slug": "shirt-and-katua"
                          },
                          {
                              "categoryId": 82,
                              "categoryName": "Panjabi & Kabli",
                              "url": "panjabi-and-kabli",
                              "slug": "panjabi-and-kabli"
                          },
                          {
                              "categoryId": 83,
                              "categoryName": "Polo & T-Shirt",
                              "url": "polo-and-t-shirt",
                              "slug": "polo-and-t-shirt"
                          },
                          {
                              "categoryId": 84,
                              "categoryName": "Pant & Payjama",
                              "url": "pant-and-payjama",
                              "slug": "pant-and-payjama"
                          },
                          {
                              "categoryId": 146,
                              "categoryName": "Boys Set",
                              "url": "boys-set",
                              "slug": "boys-set"
                          }
                      ]
                  },
                  {
                      "categoryId": 85,
                      "categoryName": "Girls (8-15Y)",
                      "url": "girls-8-15y",
                      "slug": "girls-8-15y",
                      "thirdChild": [
                          {
                              "categoryId": 86,
                              "categoryName": "Girls Pant",
                              "url": "girls-pant",
                              "slug": "girls-pant"
                          },
                          {
                              "categoryId": 87,
                              "categoryName": "Tops & Ethnic",
                              "url": "tops-and-ethnic",
                              "slug": "tops-and-ethnic"
                          },
                          {
                              "categoryId": 88,
                              "categoryName": "Girls 3 Pcs",
                              "url": "girls-3-pcs",
                              "slug": "girls-3-pcs"
                          },
                          {
                              "categoryId": 138,
                              "categoryName": "Frock & Dungaree",
                              "url": "frock-and-dungaree",
                              "slug": "frock-and-dungaree"
                          },
                          {
                              "categoryId": 139,
                              "categoryName": "Polo & T-Shirt",
                              "url": "polo-and-t-shirt",
                              "slug": "polo-and-t-shirt"
                          },
                          {
                              "categoryId": 140,
                              "categoryName": "Girls Set & Jumpsuit",
                              "url": "girls-set-and-jumpsuit",
                              "slug": "girls-set-and-jumpsuit"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 19,
              "categoryName": "Winter Collection",
              "url": "winter-collection",
              "slug": "winter-collection",
              "secondChildren": [
                  {
                      "categoryId": 91,
                      "categoryName": "Mens",
                      "url": "mens",
                      "slug": "mens",
                      "thirdChild": [
                          {
                              "categoryId": 97,
                              "categoryName": "Jacket",
                              "url": "jacket",
                              "slug": "jacket"
                          },
                          {
                              "categoryId": 21,
                              "categoryName": "Hoodie",
                              "url": "hoodie",
                              "slug": "hoodie"
                          },
                          {
                              "categoryId": 132,
                              "categoryName": "Denim",
                              "url": "denim",
                              "slug": "denim"
                          },
                          {
                              "categoryId": 288,
                              "categoryName": "Full sleeve T-shirt",
                              "url": "full-sleeve-t-shirt",
                              "slug": "full-sleeve-t-shirt"
                          },
                          {
                              "categoryId": 137,
                              "categoryName": "Windbreaker",
                              "url": "windbreaker",
                              "slug": "windbreaker"
                          }
                      ]
                  },
                  {
                      "categoryId": 92,
                      "categoryName": "Womens",
                      "url": "womens",
                      "slug": "womens",
                      "thirdChild": [
                          {
                              "categoryId": 51,
                              "categoryName": "Jacket",
                              "url": "jacket",
                              "slug": "jacket"
                          },
                          {
                              "categoryId": 52,
                              "categoryName": "Hoodie",
                              "url": "hoodie",
                              "slug": "hoodie"
                          },
                          {
                              "categoryId": 136,
                              "categoryName": "Sweater",
                              "url": "sweater",
                              "slug": "sweater"
                          },
                          {
                              "categoryId": 133,
                              "categoryName": "Denim",
                              "url": "denim",
                              "slug": "denim"
                          }
                      ]
                  },
                  {
                      "categoryId": 93,
                      "categoryName": "Kids",
                      "url": "kids",
                      "slug": "kids",
                      "thirdChild": [
                          {
                              "categoryId": 90,
                              "categoryName": "Boys",
                              "url": "boys",
                              "slug": "boys"
                          },
                          {
                              "categoryId": 98,
                              "categoryName": "Girls",
                              "url": "girls",
                              "slug": "girls"
                          }
                      ]
                  },
                  {
                      "categoryId": 134,
                      "categoryName": "Unisex",
                      "url": "unisex",
                      "slug": "unisex",
                      "thirdChild": [
                          {
                              "categoryId": 135,
                              "categoryName": "Shawl",
                              "url": "shawl",
                              "slug": "shawl"
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 147,
      "categoryName": "Footwear",
      "url": "footwear",
      "slug": "footwear",
      "firstChildren": [
          {
              "categoryId": 148,
              "categoryName": "Mens",
              "url": "mens",
              "slug": "mens",
              "secondChildren": [
                  {
                      "categoryId": 153,
                      "categoryName": "Shoe",
                      "url": "shoe",
                      "slug": "shoe",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 154,
                      "categoryName": "Sneaker",
                      "url": "sneaker",
                      "slug": "sneaker",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 155,
                      "categoryName": "Sandal",
                      "url": "sandal",
                      "slug": "sandal",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 308,
                      "categoryName": "Clog",
                      "url": "clog",
                      "slug": "clog",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 149,
              "categoryName": "Womens",
              "url": "womens",
              "slug": "womens",
              "secondChildren": [
                  {
                      "categoryId": 156,
                      "categoryName": "Shoe",
                      "url": "shoe",
                      "slug": "shoe",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 157,
                      "categoryName": "Sneaker",
                      "url": "sneaker",
                      "slug": "sneaker",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 158,
                      "categoryName": "Sandal",
                      "url": "sandal",
                      "slug": "sandal",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 166,
                      "categoryName": "Canvas",
                      "url": "canvas",
                      "slug": "canvas",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 285,
                      "categoryName": "Heels",
                      "url": "heels",
                      "slug": "heels",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 309,
              "categoryName": "Unisex",
              "url": "unisex",
              "slug": "unisex",
              "secondChildren": [
                  {
                      "categoryId": 310,
                      "categoryName": "Sneaker",
                      "url": "sneaker",
                      "slug": "sneaker",
                      "thirdChild": []
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 100,
      "categoryName": "Fashion Accessories",
      "url": "fashion-accessories",
      "slug": "fashion-accessories",
      "firstChildren": [
          {
              "categoryId": 101,
              "categoryName": "Mens Accessories",
              "url": "mens-accessories",
              "slug": "mens-accessories",
              "secondChildren": [
                  {
                      "categoryId": 102,
                      "categoryName": "Mens Bag",
                      "url": "mens-bag",
                      "slug": "mens-bag",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 104,
                      "categoryName": "Mens Belt",
                      "url": "mens-belt",
                      "slug": "mens-belt",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 105,
                      "categoryName": "Mens Wallet",
                      "url": "mens-wallet",
                      "slug": "mens-wallet",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 107,
                      "categoryName": "Mens Face Mask",
                      "url": "mens-face-mask",
                      "slug": "mens-face-mask",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 109,
              "categoryName": "Womens Accessories",
              "url": "womens-accessories",
              "slug": "womens-accessories",
              "secondChildren": [
                  {
                      "categoryId": 110,
                      "categoryName": "Womens Bag & Purse",
                      "url": "womens-bag-and-purse",
                      "slug": "womens-bag-and-purse",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 115,
                      "categoryName": "Womens Face Mask",
                      "url": "womens-face-mask",
                      "slug": "womens-face-mask",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 117,
              "categoryName": "Kids Accessories",
              "url": "kids-accessories",
              "slug": "kids-accessories",
              "secondChildren": []
          },
          {
              "categoryId": 142,
              "categoryName": "Unisex Accessories",
              "url": "unisex-accessories",
              "slug": "unisex-accessories",
              "secondChildren": [
                  {
                      "categoryId": 143,
                      "categoryName": "Bags",
                      "url": "bags",
                      "slug": "bags",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 276,
                      "categoryName": "Caps & Hats",
                      "url": "caps-and-hats",
                      "slug": "caps-and-hats",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 287,
                      "categoryName": "Key Holder",
                      "url": "key-holder",
                      "slug": "key-holder",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 277,
              "categoryName": "Eyewear",
              "url": "eyewear",
              "slug": "eyewear",
              "secondChildren": [
                  {
                      "categoryId": 278,
                      "categoryName": "Sunglasses",
                      "url": "sunglasses",
                      "slug": "sunglasses",
                      "thirdChild": [
                          {
                              "categoryId": 279,
                              "categoryName": "Mens Collection",
                              "url": "mens-collection",
                              "slug": "mens-collection"
                          },
                          {
                              "categoryId": 280,
                              "categoryName": "Womens Collection",
                              "url": "womens-collection",
                              "slug": "womens-collection"
                          }
                      ]
                  },
                  {
                      "categoryId": 283,
                      "categoryName": "Accessories",
                      "url": "accessories",
                      "slug": "accessories",
                      "thirdChild": []
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 170,
      "categoryName": "Lifestyle Accessories",
      "url": "lifestyle-accessories",
      "slug": "lifestyle-accessories",
      "firstChildren": [
          {
              "categoryId": 171,
              "categoryName": "Watch",
              "url": "watch",
              "slug": "watch",
              "secondChildren": [
                  {
                      "categoryId": 174,
                      "categoryName": "Smart Watches",
                      "url": "smart-watches",
                      "slug": "smart-watches",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 207,
                      "categoryName": "Analog Watches",
                      "url": "analog-watches",
                      "slug": "analog-watches",
                      "thirdChild": [
                          {
                              "categoryId": 208,
                              "categoryName": "Men",
                              "url": "men",
                              "slug": "men"
                          },
                          {
                              "categoryId": 209,
                              "categoryName": "Women",
                              "url": "women",
                              "slug": "women"
                          },
                          {
                              "categoryId": 210,
                              "categoryName": "Unisex",
                              "url": "unisex",
                              "slug": "unisex"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 173,
              "categoryName": "Headphones",
              "url": "headphones",
              "slug": "headphones",
              "secondChildren": [
                  {
                      "categoryId": 175,
                      "categoryName": "In-Ear/Earbuds",
                      "url": "in-ear/earbuds",
                      "slug": "in-ear/earbuds",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 177,
                      "categoryName": "Neckband",
                      "url": "neckband",
                      "slug": "neckband",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 178,
                      "categoryName": "Over Ear",
                      "url": "over-ear",
                      "slug": "over-ear",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 179,
              "categoryName": "Power Bank",
              "url": "power-bank",
              "slug": "power-bank",
              "secondChildren": []
          },
          {
              "categoryId": 198,
              "categoryName": "Bluetooth Speaker",
              "url": "bluetooth-speaker",
              "slug": "bluetooth-speaker",
              "secondChildren": []
          }
      ]
  },
  {
      "categoryId": 241,
      "categoryName": "Personal Care",
      "url": "personal-care",
      "slug": "personal-care",
      "firstChildren": [
          {
              "categoryId": 242,
              "categoryName": "Shaving and Trimming",
              "url": "shaving-and-trimming",
              "slug": "shaving-and-trimming",
              "secondChildren": [
                  {
                      "categoryId": 243,
                      "categoryName": "Men",
                      "url": "men",
                      "slug": "men",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 244,
                      "categoryName": "Women",
                      "url": "women",
                      "slug": "women",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 260,
              "categoryName": "Hair Care",
              "url": "hair-care",
              "slug": "hair-care",
              "secondChildren": [
                  {
                      "categoryId": 261,
                      "categoryName": "Hair Dryers & Styling Tools",
                      "url": "hair-dryers-and-styling-tools",
                      "slug": "hair-dryers-and-styling-tools",
                      "thirdChild": [
                          {
                              "categoryId": 262,
                              "categoryName": "Hair Dryers",
                              "url": "hair-dryers",
                              "slug": "hair-dryers"
                          },
                          {
                              "categoryId": 263,
                              "categoryName": "Hair Straighteners",
                              "url": "hair-straighteners",
                              "slug": "hair-straighteners"
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 124,
      "categoryName": "Home Decor",
      "url": "home-decor",
      "slug": "home-decor",
      "firstChildren": [
          {
              "categoryId": 125,
              "categoryName": "Furniture",
              "url": "furniture",
              "slug": "furniture",
              "secondChildren": [
                  {
                      "categoryId": 128,
                      "categoryName": "Living Room Furniture",
                      "url": "living-room-furniture",
                      "slug": "living-room-furniture",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 211,
                      "categoryName": "Dining Room Furniture",
                      "url": "dining-room-furniture",
                      "slug": "dining-room-furniture",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 126,
              "categoryName": "Bedding & Bath",
              "url": "bedding-and-bath",
              "slug": "bedding-and-bath",
              "secondChildren": [
                  {
                      "categoryId": 141,
                      "categoryName": "Comforter",
                      "url": "comforter",
                      "slug": "comforter",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 231,
                      "categoryName": "Bedsheet",
                      "url": "bedsheet",
                      "slug": "bedsheet",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 212,
              "categoryName": "Home Accessories",
              "url": "home-accessories",
              "slug": "home-accessories",
              "secondChildren": [
                  {
                      "categoryId": 213,
                      "categoryName": "Decorative Pillows",
                      "url": "decorative-pillows",
                      "slug": "decorative-pillows",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 236,
                      "categoryName": "Lighting",
                      "url": "lighting",
                      "slug": "lighting",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 237,
                      "categoryName": "Wall Decor",
                      "url": "wall-decor",
                      "slug": "wall-decor",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 240,
                      "categoryName": "Clocks",
                      "url": "clocks",
                      "slug": "clocks",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 238,
                      "categoryName": "Table Decor",
                      "url": "table-decor",
                      "slug": "table-decor",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 239,
                      "categoryName": "Indoor Gardening",
                      "url": "indoor-gardening",
                      "slug": "indoor-gardening",
                      "thirdChild": []
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 214,
      "categoryName": "Handicrafts",
      "url": "handicrafts",
      "slug": "handicrafts",
      "firstChildren": [
          {
              "categoryId": 215,
              "categoryName": "Living",
              "url": "living",
              "slug": "living",
              "secondChildren": []
          },
          {
              "categoryId": 216,
              "categoryName": "Dining",
              "url": "dining",
              "slug": "dining",
              "secondChildren": [
                  {
                      "categoryId": 220,
                      "categoryName": "Trays & Basket",
                      "url": "trays-and-basket",
                      "slug": "trays-and-basket",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 217,
              "categoryName": "Decoration",
              "url": "decoration",
              "slug": "decoration",
              "secondChildren": [
                  {
                      "categoryId": 221,
                      "categoryName": "Vase & Sculpture",
                      "url": "vase-and-sculpture",
                      "slug": "vase-and-sculpture",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 218,
              "categoryName": "Gardening",
              "url": "gardening",
              "slug": "gardening",
              "secondChildren": []
          },
          {
              "categoryId": 222,
              "categoryName": "Accessories",
              "url": "accessories",
              "slug": "accessories",
              "secondChildren": [
                  {
                      "categoryId": 223,
                      "categoryName": "Bags",
                      "url": "bags",
                      "slug": "bags",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 219,
              "categoryName": "Animal Care",
              "url": "animal-care",
              "slug": "animal-care",
              "secondChildren": []
          }
      ]
  },
  {
      "categoryId": 180,
      "categoryName": "Electronics",
      "url": "electronics",
      "slug": "electronics",
      "firstChildren": [
          {
              "categoryId": 203,
              "categoryName": "TV",
              "url": "tv",
              "slug": "tv",
              "secondChildren": [
                  {
                      "categoryId": 204,
                      "categoryName": "LED TV",
                      "url": "led-tv",
                      "slug": "led-tv",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 205,
                      "categoryName": "Smart TV",
                      "url": "smart-tv",
                      "slug": "smart-tv",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 255,
              "categoryName": "Sound Devices",
              "url": "sound-devices",
              "slug": "sound-devices",
              "secondChildren": [
                  {
                      "categoryId": 256,
                      "categoryName": "Speaker",
                      "url": "speaker",
                      "slug": "speaker",
                      "thirdChild": [
                          {
                              "categoryId": 259,
                              "categoryName": "Home Theater System",
                              "url": "home-theater-system",
                              "slug": "home-theater-system"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 224,
              "categoryName": "Camera & Photography",
              "url": "camera-and-photography",
              "slug": "camera-and-photography",
              "secondChildren": [
                  {
                      "categoryId": 228,
                      "categoryName": "Camera Support and Stabilization",
                      "url": "camera-support-and-stabilization",
                      "slug": "camera-support-and-stabilization",
                      "thirdChild": [
                          {
                              "categoryId": 229,
                              "categoryName": "Gimbals and Stabilizers",
                              "url": "gimbals-and-stabilizers",
                              "slug": "gimbals-and-stabilizers"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 226,
              "categoryName": "Phone & Tablets",
              "url": "phone-and-tablets",
              "slug": "phone-and-tablets",
              "secondChildren": [
                  {
                      "categoryId": 230,
                      "categoryName": "Accessories",
                      "url": "accessories",
                      "slug": "accessories",
                      "thirdChild": [
                          {
                              "categoryId": 248,
                              "categoryName": "Charger & Cables",
                              "url": "charger-and-cables",
                              "slug": "charger-and-cables"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 181,
              "categoryName": "Home Appliances",
              "url": "home-appliances",
              "slug": "home-appliances",
              "secondChildren": [
                  {
                      "categoryId": 197,
                      "categoryName": "Iron",
                      "url": "iron",
                      "slug": "iron",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 200,
                      "categoryName": "Air Conditioner",
                      "url": "air-conditioner",
                      "slug": "air-conditioner",
                      "thirdChild": [
                          {
                              "categoryId": 201,
                              "categoryName": "Residential Air Conditioner",
                              "url": "residential-air-conditioner",
                              "slug": "residential-air-conditioner"
                          },
                          {
                              "categoryId": 202,
                              "categoryName": "Industrial Air Conditioner",
                              "url": "industrial-air-conditioner",
                              "slug": "industrial-air-conditioner"
                          }
                      ]
                  },
                  {
                      "categoryId": 249,
                      "categoryName": "Washing Machine",
                      "url": "washing-machine",
                      "slug": "washing-machine",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 184,
              "categoryName": "Kitchen Appliances",
              "url": "kitchen-appliances",
              "slug": "kitchen-appliances",
              "secondChildren": [
                  {
                      "categoryId": 185,
                      "categoryName": "Blender & Mixer Grinder",
                      "url": "blender-and-mixer-grinder",
                      "slug": "blender-and-mixer-grinder",
                      "thirdChild": [
                          {
                              "categoryId": 189,
                              "categoryName": "Blender and Juicer",
                              "url": "blender-and-juicer",
                              "slug": "blender-and-juicer"
                          },
                          {
                              "categoryId": 191,
                              "categoryName": "Mixer Grinder",
                              "url": "mixer-grinder",
                              "slug": "mixer-grinder"
                          }
                      ]
                  },
                  {
                      "categoryId": 193,
                      "categoryName": "Kettle",
                      "url": "kettle",
                      "slug": "kettle",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 186,
                      "categoryName": "Rice Cooker",
                      "url": "rice-cooker",
                      "slug": "rice-cooker",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 192,
                      "categoryName": "Induction & Infrared Cookers",
                      "url": "induction-and-infrared-cookers",
                      "slug": "induction-and-infrared-cookers",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 264,
                      "categoryName": "Air Fryer",
                      "url": "air-fryer",
                      "slug": "air-fryer",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 265,
                      "categoryName": "Microwave Oven",
                      "url": "microwave-oven",
                      "slug": "microwave-oven",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 194,
                      "categoryName": "Refrigerators & Freezers",
                      "url": "refrigerators-and-freezers",
                      "slug": "refrigerators-and-freezers",
                      "thirdChild": [
                          {
                              "categoryId": 195,
                              "categoryName": "Refrigerators",
                              "url": "refrigerators",
                              "slug": "refrigerators"
                          },
                          {
                              "categoryId": 196,
                              "categoryName": "Freezers",
                              "url": "freezers",
                              "slug": "freezers"
                          }
                      ]
                  },
                  {
                      "categoryId": 282,
                      "categoryName": "Water Dispensers & Purifiers",
                      "url": "water-dispensers-and-purifiers",
                      "slug": "water-dispensers-and-purifiers",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 245,
              "categoryName": "Home security",
              "url": "home-security",
              "slug": "home-security",
              "secondChildren": [
                  {
                      "categoryId": 246,
                      "categoryName": "Security Camera",
                      "url": "security-camera",
                      "slug": "security-camera",
                      "thirdChild": [
                          {
                              "categoryId": 247,
                              "categoryName": "WiFi-Connected Cameras",
                              "url": "wifi-connected-cameras",
                              "slug": "wifi-connected-cameras"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 250,
              "categoryName": "Computers & Accessories",
              "url": "computers-and-accessories",
              "slug": "computers-and-accessories",
              "secondChildren": [
                  {
                      "categoryId": 270,
                      "categoryName": "Monitor",
                      "url": "monitor",
                      "slug": "monitor",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 251,
                      "categoryName": "Networking Devices",
                      "url": "networking-devices",
                      "slug": "networking-devices",
                      "thirdChild": [
                          {
                              "categoryId": 252,
                              "categoryName": "Router",
                              "url": "router",
                              "slug": "router"
                          },
                          {
                              "categoryId": 266,
                              "categoryName": "LAN Card",
                              "url": "lan-card",
                              "slug": "lan-card"
                          }
                      ]
                  },
                  {
                      "categoryId": 267,
                      "categoryName": "Accessories",
                      "url": "accessories",
                      "slug": "accessories",
                      "thirdChild": [
                          {
                              "categoryId": 268,
                              "categoryName": "Mouse",
                              "url": "mouse",
                              "slug": "mouse"
                          },
                          {
                              "categoryId": 269,
                              "categoryName": "Keyboard",
                              "url": "keyboard",
                              "slug": "keyboard"
                          },
                          {
                              "categoryId": 271,
                              "categoryName": "Mousepad",
                              "url": "mousepad",
                              "slug": "mousepad"
                          },
                          {
                              "categoryId": 272,
                              "categoryName": "Webcam",
                              "url": "webcam",
                              "slug": "webcam"
                          },
                          {
                              "categoryId": 273,
                              "categoryName": "Hubs & docs",
                              "url": "hubs-and-docs",
                              "slug": "hubs-and-docs"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 274,
              "categoryName": "Office Equipment",
              "url": "office-equipment",
              "slug": "office-equipment",
              "secondChildren": [
                  {
                      "categoryId": 275,
                      "categoryName": "Printer",
                      "url": "printer",
                      "slug": "printer",
                      "thirdChild": []
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 130,
      "categoryName": "Gift Cards",
      "url": "gift-cards",
      "slug": "gift-cards",
      "firstChildren": [
          {
              "categoryId": 131,
              "categoryName": "SaRa Lifestyle Gift Cards",
              "url": "sara-lifestyle-gift-cards",
              "slug": "sara-lifestyle-gift-cards",
              "secondChildren": []
          },
          {
              "categoryId": 165,
              "categoryName": "Bay Digital Gift Cards",
              "url": "bay-digital-gift-cards",
              "slug": "bay-digital-gift-cards",
              "secondChildren": []
          },
          {
              "categoryId": 169,
              "categoryName": "Lotto Digital Gift Cards",
              "url": "lotto-digital-gift-cards",
              "slug": "lotto-digital-gift-cards",
              "secondChildren": []
          }
      ]
  },
  {
      "categoryId": 292,
      "categoryName": "Appliance",
      "url": "appliance",
      "slug": "appliance",
      "firstChildren": [
          {
              "categoryId": 293,
              "categoryName": "Kitchen Appliance",
              "url": "kitchen-appliance",
              "slug": "kitchen-appliance",
              "secondChildren": [
                  {
                      "categoryId": 294,
                      "categoryName": "Cookware & Bakeware",
                      "url": "cookware-and-bakeware",
                      "slug": "cookware-and-bakeware",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 297,
                      "categoryName": "Gas stoves",
                      "url": "gas-stoves",
                      "slug": "gas-stoves",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 304,
                      "categoryName": "Food Preparation Appliance",
                      "url": "food-preparation-appliance",
                      "slug": "food-preparation-appliance",
                      "thirdChild": [
                          {
                              "categoryId": 305,
                              "categoryName": "Blender & Mixer",
                              "url": "blender-and-mixer",
                              "slug": "blender-and-mixer"
                          },
                          {
                              "categoryId": 306,
                              "categoryName": "Coffee Makers",
                              "url": "coffee-makers",
                              "slug": "coffee-makers"
                          },
                          {
                              "categoryId": 307,
                              "categoryName": "Juicer",
                              "url": "juicer",
                              "slug": "juicer"
                          }
                      ]
                  }
              ]
          },
          {
              "categoryId": 295,
              "categoryName": "Home Comfort Appliances",
              "url": "home-comfort-appliances",
              "slug": "home-comfort-appliances",
              "secondChildren": [
                  {
                      "categoryId": 298,
                      "categoryName": "Fan",
                      "url": "fan",
                      "slug": "fan",
                      "thirdChild": [
                          {
                              "categoryId": 299,
                              "categoryName": "Ceiling Fan",
                              "url": "ceiling-fan",
                              "slug": "ceiling-fan"
                          }
                      ]
                  },
                  {
                      "categoryId": 300,
                      "categoryName": "Air Conditioner",
                      "url": "air-conditioner",
                      "slug": "air-conditioner",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 296,
                      "categoryName": "Geyser",
                      "url": "geyser",
                      "slug": "geyser",
                      "thirdChild": []
                  }
              ]
          },
          {
              "categoryId": 301,
              "categoryName": "Laundry Appliance",
              "url": "laundry-appliance",
              "slug": "laundry-appliance",
              "secondChildren": [
                  {
                      "categoryId": 302,
                      "categoryName": "Washing Machine",
                      "url": "washing-machine",
                      "slug": "washing-machine",
                      "thirdChild": []
                  },
                  {
                      "categoryId": 303,
                      "categoryName": "Iron & Steamer",
                      "url": "iron-and-steamer",
                      "slug": "iron-and-steamer",
                      "thirdChild": []
                  }
              ]
          }
      ]
  },
  {
      "categoryId": 286,
      "categoryName": "Gift Box",
      "url": "gift-box",
      "slug": "gift-box",
      "firstChildren": []
  }
]

const MarketplacePage = () => {

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredFirstChildren, setHoveredFirstChildren] = useState(null);

  const handleMouseEnter = (categoryId) => {
    setHoveredCategory(categoryId);
  };

  console.log({ hoveredCategory, hoveredFirstChildren })

  return (

     <div className='bg-white w-60 h-96 relative'>
        {arr.map((item, index) => 
        
          <ul key={index} className='group'>
            <li onMouseOver={()=>setHoveredCategory(index)}>{item?.categoryName}</li>

            <div className={`${hoveredCategory === index ? 'block' : 'hidden'} bg-yellow-500 absolute left-60 top-0 h-full w-60`}>
              {item?.firstChildren.map((firstChild, firstIndex) =>
                <ul key={firstIndex} className='group'>
                  <li onMouseOver={()=>setHoveredFirstChildren(firstIndex)} >{firstChild?.categoryName}</li>

                  <div  className={`hidden bg-green-600  absolute left-60 top-0 h-full w-60`}>
                    {firstChild?.secondChildren?.map((secondChild, secondIndex) =>
                      <ul key={secondIndex} className=''>
                        <li>{secondChild?.categoryName}</li>

                      </ul>
                    )}

                  </div>

                </ul>
              )}

            </div>
           
          </ul>
        
        )}

<ul className='group'>
  <li className=' group-hover:bg-red text-red-600'>
    hello
  </li>
  <li className='group'>
    <div className='group-hover:bg-blue-500'>
      Some content
    </div>
  </li>
</ul>


      </div> 



      


  );
};

export default MarketplacePage;


 {/* <div className='bg-white w-60 h-96 relative'>
        {arr.map((item, index) => 
        
          <ul key={index} className=''>
            <li>{item?.name}</li>

            <div className='h-full bg-yellow-500 absolute left-60 top-0  w-60'>
              {item?.firstChild.map((firstChild, firstIndex) =>
                <ul key={firstIndex} className='group'>
                  <li>{firstChild?.name}</li>

                  <div className='hidden group-hover:block h-full bg-green-600 absolute left-60 top-0 w-60'>
                    {firstChild?.secondChild?.map((secondChild, secondIndex) =>
                      <ul key={secondIndex} className=''>
                        <li>{secondChild?.name}</li>

                      </ul>
                    )}

                  </div>

                </ul>
              )}

            </div>
           
          </ul>
        
        )}

      </div> */}