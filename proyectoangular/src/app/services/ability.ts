import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Ability {

    constructor(private http: HttpClient) {}

    getAbility(name: string) {
        return this.http.get<any>(`https://pokeapi.co/api/v2//ability/${name}`);
    }

}
