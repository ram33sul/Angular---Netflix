import { Component } from '@angular/core';
import { TmdbService } from './services/tmdb.service';
import { Genre, Movie } from './interfaces/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tmdbService: TmdbService){}

  genres: Genre[];

  ngOnInit(): void {
    this.tmdbService.getGenreList().subscribe((data) => {
      this.genres = data.genres;
    })
  }
}
