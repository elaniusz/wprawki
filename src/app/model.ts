export interface Person {
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    adress: Adress;
    advenced: Advenced;
}

export interface Adress {
    street: string;
    houseNumber: number;
    city: string;
}

export enum Advenced {
    Poczatkujacy,
    Sredniozaawansowany,
    Zaawansowany
}
