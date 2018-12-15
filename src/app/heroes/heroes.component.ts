import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Array<Hero>;
  // public selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log('hero comp init');
    var heroesObs = this.heroService.getHeroes();
    heroesObs.subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

  // public onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
