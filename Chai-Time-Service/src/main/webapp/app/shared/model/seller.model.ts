export interface ISeller {
    id?: number;
    name?: string;
}

export class Seller implements ISeller {
    constructor(public id?: number, public name?: string) {}
}
