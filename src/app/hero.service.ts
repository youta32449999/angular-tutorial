import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heros
    this.messagesService.add('HeroService: fetched heros');
    return of(HEROS);
  }
  
  constructor(private messagesService: MessageService) { }
}
