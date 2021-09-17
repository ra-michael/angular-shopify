export class Product {
    id : number;
    userId : number;
    title : string;
    img : string;
    price: number;
    description : string;
    numberOfLikes : number;
    isLiked : boolean;
    isInCart : boolean;

    constructor(id:number,userId:number,title:string, img:string, price:number, description:string, numberOfLikes:number, isLiked : boolean, isInCart:boolean) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.img = img;
        this.price = price;
        this.description = description;
        this.numberOfLikes = numberOfLikes;
        this.isLiked = isLiked;
        this.isInCart = isInCart;
    }
}