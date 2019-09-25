import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Title } from 'src/app/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  constructor() { }
}
