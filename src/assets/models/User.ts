export class User {
    id: number;
    name: string;
    pdp: string;

    constructor(id: number, name: string, pdp: string) {
        this.id = id;
        this.name = name;
        this.pdp = pdp;
    }
}