import { Injectable, Input } from "@angular/core";
import { Product } from "../models/product.models";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  tableau: Product[] =
    [
      {
        id: "001",
        title: "Robot",
        description: "L'original",
        count: 1,
        imageURL: "assets/robot1.jpg",
        icone1: "https://img.freepik.com/vecteurs-premium/pouce-leve-main_1056-764.jpg?w=740",
        icone2: "https://sgen-cfdt.fr/contenu/uploads/sites/8/2020/07/unnamed.png",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
      },
      {
        id: "002",
        title: "Robot 1",
        description: "Le beau gosse",
        count: 1,
        imageURL: "assets/robot2.jpg",
        icone1: "https://img.freepik.com/vecteurs-premium/pouce-leve-main_1056-764.jpg?w=740",
        icone2: "https://sgen-cfdt.fr/contenu/uploads/sites/8/2020/07/unnamed.png",
        categorie: "Soldat",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: "003",
        title: "Robot 3",
        description: "Le très grand",
        count: 1,
        imageURL: "assets/robot3.jpg",
        icone1: "https://img.freepik.com/vecteurs-premium/pouce-leve-main_1056-764.jpg?w=740",
        icone2: "https://sgen-cfdt.fr/contenu/uploads/sites/8/2020/07/unnamed.png",
        categorie: "Soldat",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }

    ]

  getAllProducts(): Product[] {
    return this.tableau;
  }
  likePoductById(id: string) {

  }

}