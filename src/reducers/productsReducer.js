const productsReducer=(state=null,action)=>{

    var allProducts=[
        {
            "code": "NIKE234",
            "name": "Mens formal pants",
            "category": "Formals",
            "vendor": "Saradha Traders",
            "unitPrice": 230,
            "manufacturer": "Nike",
            "color":"Black",
            "size":"30",
            "replenishment_value":150,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "Mens black formal pants",
            "rating":4.5,
            "quantity": 300,
            "id": 1
          },
          {
            "code": "PUMA435",
            "name": "Puma Trousers",
            "category": "Formals",
            "vendor": "Mahin Fashions",
            "unitPrice": 154,
            "manufacturer": "PUMA",
            "color":"Black",
            "size":"30",
            "replenishment_value":50,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "Mens black formal pants",
            "rating":4.5,
            "quantity": 200,
            "id": 2
          },
          {
            "id": 3,
            "code": "AVA512",
            "name": "Avasaa kurta",
            "unitPrice": 250,
            "quantity": 240,
            "category": "Kurtas",
            "vendor": "Meera Fashions",
            "manufacturer": "AVASAA",
            "color":"Grey",
            "size":"M",
            "replenishment_value":10,
            "reorder_value":50,
            "idealFor":"women",
            "material":"Poly Cotton",
            "description": "Grey and Off-White printed kurta",
            "rating":4.5
          },
          {
            "code": "AVA234",
            "name": "Kurtas for women",
            "category": "Kurtas",
            "vendor": "Meera Fashions",
            "unitPrice": 400,
            "manufacturer": "Manyavar",
            "color":"Black",
            "size":"L",
            "replenishment_value":100,
            "reorder_value":50,
            "idealFor":"women",
            "material":"Poly Cotton",
            "description": "Women Multicoloured Floral Kurta",
            "rating":4.5,
            "quantity": 123,
            "id": 4
          },
          {
            "code": "LEVI341",
            "name": "Levi's Blue Jeans",
            "category": "Jeans",
            "vendor": "Tayab Fashion Traders",
            "unitPrice": 550,
            "manufacturer": "Levi's",
            "color":"Blue",
            "size":"30",
            "replenishment_value":20,
            "reorder_value":50,
            "idealFor":"men",
            "material":"Denim",
            "description": "Slim fit jeans in Planet Blue Color",
            "rating":4.5,
            "quantity": 123,
            "id": 5
          },
          {
            "code": "HIG231",
            "name": "Highlander Jeans",
            "category": "Jeans",
            "vendor": "Fajim Traders",
            "unitPrice": 320,
            "manufacturer": "Highlander",
            "color":"Black",
            "size":"32",
            "replenishment_value":150,
            "reorder_value":70,
            "idealFor":"women",
            "material":"Denim",
            "description": "Mid-Rise clean look stretchable jeans",
            "rating":4.5,
            "quantity": 263,
            "id": 6
          },
          {
            "code": "RDSTR613",
            "name": "Roadster Jeans",
            "category": "Jeans",
            "vendor": "Saradha Traders",
            "unitPrice": 250,
            "manufacturer": "Roadster",
            "color":"Grey",
            "size":"32",
            "replenishment_value":200,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Denim",
            "description": "Men Charcoal Grey Skinny Fit",
            "rating":4.5,
            "quantity": 424,
            "id": 7
          },
          {
            "code": "AND432",
            "name": "Banarasi Silk Works",
            "category": "Sarees",
            "vendor": "Anand Traders",
            "unitPrice": 200,
            "manufacturer": "Anand handlooms",
            "color":"Gold",
            "size":"-",
            "replenishment_value":150,
            "reorder_value":100,
            "idealFor":"women",
            "material":"Poly Cotton",
            "description": "Blue & Golden Woven Banarasi Saree",
            "rating":4.5,
            "quantity": 281,
            "id": 8
          },
          {
            "code": "HITE432",
            "name": "Hitesh Sarees ",
            "category": "Sarees",
            "vendor": "Hitesh Sarees",
            "unitPrice": 320,
            "color":"Black",
            "size":"-",
            "replenishment_value":200,
            "reorder_value":150,
            "idealFor":"women",
            "material":"Silk",
            "manufacturer": "Hitesh Sarees",
            "description": "Color Black Fashion Cotton Saree",
            "rating":4.5,
            "quantity": 283,
            "id": 9
          },
          {
            "code": "MITRA194",
            "name": "Mitra Black Saree",
            "category": "Sarees",
            "vendor": "Mitra Fashions",
            "unitPrice": 350,
            "manufacturer": "Mitra Handlooms",
            "color":"Black",
            "size":"-",
            "replenishment_value":150,
            "reorder_value":80,
            "idealFor":"women",
            "material":"Poly Silk",
            "description": "Black Embroidered Poly Georgette",
            "rating":4.5,
            "quantity": 271,
            "id": 10
          },
          {
            "code": "HIGL2014",
            "name": "Highlander Shorts",
            "category": "Shorts",
            "vendor": "Fajim Traders",
            "unitPrice": 325,
            "manufacturer": "Highlander",
            "color":"Black",
            "size":"32",
            "replenishment_value":200,
            "reorder_value":150,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "Mens Black Sports Shorts",
            "rating":4.5,
            "quantity": 210,
            "id": 11
          },
          {
            "code": "VANH213",
            "name": "Van Heusen",
            "category": "TShirt",
            "vendor": "Retailnet",
            "unitPrice": 400,
            "manufacturer": "Van Heusen",
            "color":"Black",
            "size":"M",
            "replenishment_value":150,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "Van Heusen Blue Tshirt for men",
            "rating":4.5,
            "quantity": 354,
            "id": 12
          },
          {
            "code": "PUM4123",
            "name": "Puma TShirt",
            "category": "TShirt",
            "vendor": "Manch  Fashions",
            "unitPrice": 365,
            "manufacturer": "PUMA",
            "color":"Black",
            "size":"L",
            "replenishment_value":250,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "PUMA Men Round Neck Dark Blue T-Shirt",
            "rating":4.5,
            "quantity": 512,
            "id": 13
          },
          {
            "code": "RDSTR3124",
            "name": "Roadster Jeans",
            "category": "Jeans",
            "vendor": "Mahin Fashions",
            "unitPrice": 340,
            "manufacturer": "Roadster",
            "color":"Blue",
            "size":"32",
            "replenishment_value":350,
            "reorder_value":200,
            "idealFor":"men",
            "material":"Poly Cotton",
            "description": "Roadster jeans blue",
            "rating":4.5,
            "quantity": 245,
            "id": 14
          },
          {
            "code": "PUMA4423",
            "name": "PUMA SHORTS",
            "category": "Shorts",
            "vendor": "Fajim fashions",
            "unitPrice": 523,
            "manufacturer": "PUMA",
            "color":"Blue",
            "size":"34",
            "replenishment_value":250,
            "reorder_value":100,
            "idealFor":"men",
            "material":"Denim",
            "description": "Puma Shorts Navi Blue",
            "rating":4.5,
            "quantity": 45,
            "id": 15
          }
    ]

    switch (action.type) {
      case "ADD_NEW_PRODUCT":
        console.log(action.payload);
        let newAllProducts=[...state,action.payload];
        allProducts = newAllProducts;
        console.log(allProducts);
        return allProducts;

      case "DELETE_CLICKED":
        console.log(action.payload);
        let newAllProd=state.filter(p=>p.id!=action.payload);
        allProducts = newAllProd;
        console.log(allProducts);
        return allProducts;

        case "EDIT_PRODUCT":
        console.log(action.payload);
        let editProd=state.map(p=>{
          if(p.id==action.payload.id){
            p=action.payload
          }
          return p;
        });

        console.log("edit prod "+editProd)
        allProducts = editProd;
        console.log(allProducts);
        return allProducts;

        

        
      default:
        break;
    }

    return allProducts;
}

export default productsReducer;