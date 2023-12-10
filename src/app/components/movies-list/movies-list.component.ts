import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Film } from '../../models/film.models';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule,AppComponent,MoviesListComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {


@Input() liste: Film[] = [];


addItem(item: Film) {
  const id = this.liste[this.liste.length - 1].nom;
  if (id !== undefined) {
    const newId = id + 1;
    item.nom = newId;
    this.liste.push(item);
  }
}

edit(item: Film) {
  const index = this.liste.findIndex(l => l.nom === item.nom);
  if (index !== -1) {
    this.liste[index] = item;
  }
}

removeItem(index: number): void {
  this.liste.splice(index, 1);
}

}
