import { InjectionToken } from '@angular/core';

export interface Person {
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    adress: Adress;
    advenced: Advenced;
    categories: string[];
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

export interface Config {
    personLimit: number;
}

export const CONFIG = new InjectionToken<Config>('app.config');