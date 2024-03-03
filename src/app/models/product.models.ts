/*
export class FaceBookPost {
    title: string;
    description: string;
    count: number;
    imageURL: string;
    icone1: string;
    icone2: string;

    constructor(title: string, description: string, count: number, imageURL: string, icone1: string, icone2: string) {
        this.title = title;
        this.description = description;
        this.count = count;
        this.imageURL = imageURL;
        this.icone1 = icone1;
        this.icone2 = icone2;
    }
}
*/

// forme alternative
export class Product {
    id!: string;
    title!: string;
    description!: string;
    count!: number;
    imageURL!: string;
    icone1!: string;
    icone2!: string;
    categorie?: string
    texte?: string

}