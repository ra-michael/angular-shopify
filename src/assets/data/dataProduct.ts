import { Product } from "src/assets/models/Product";

export const PRODUCTS:Product[] = [
    new Product(1, 2, "Converse", "/assets/images/products/ConverseBlackForest.jpeg", 50000 ,"Kiraro vaovao milay be", 50, true, true),
    new Product(2, 2, "Air Jordan", "/assets/images/products/AirJordanBrown.jpeg", 60000 ,"Kiraro vaovao milay be", 20, false, false),
    new Product(3, 3, "Boots", "/assets/images/products/boots.jpeg", 100000 ,"Kiraro vaovao milay be", 80, false, false),
    new Product(4, 4, "Montre", "/assets/images/products/Montre.jpeg", 30000 ,"Famatarana ora raitra be", 30, false, false),
    new Product(5, 4, "Playst 5", "/assets/images/products/PS5.jpeg", 200000 ,"Playsta anaovana jeu", 100, false, false),
]