import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  constructor() { }
  getheros():string[]{
    return ['jishnu','jose','sarath']
  }
}
