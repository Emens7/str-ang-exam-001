import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private hero: Hero[] = [
    {
        "name": "antimage",
        "id": 1,
        "superPower": "Anti-Mage",
        "address": "New-York"
    },
    {
        "name": "axe",
        "id": 2,
        "superPower": "Axe",
        "address": "LA"
    },
    {
        "name": "bane",
        "id": 3,
        "superPower": "Bane",
        "address": "Seattle"
    },
    {
        "name": "bloodseeker",
        "id": 4,
        "superPower": "Bloodseeker",
        "address": "San-Francisco"
    },
    {
        "name": "crystal_maiden",
        "id": 5,
        "superPower": "Crystal Maiden",
        "address": "Chichago"
    },
    {
        "name": "drow_ranger",
        "id": 6,
        "superPower": "Drow Ranger",
        "address": "Austin"
    },
    {
        "name": "earthshaker",
        "id": 7,
        "superPower": "Earthshaker",
        "address": "Atalanta"
    },
    {
        "name": "juggernaut",
        "id": 8,
        "superPower": "Juggernaut",
        "address": "Washington"
    },
    {
        "name": "mirana",
        "id": 9,
        "superPower": "Mirana",
        "address": "Baltimore"
    }

  ];

  hero$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.hero);

  constructor(

  ) { }

  getAll(): void{
    this.hero$.next(this.hero);
  }

}
