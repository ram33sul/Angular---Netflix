import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title: string;
  @Input() genreId: number;
  movies: Movie[];

  constructor(private tmdbService: TmdbService){
  }

  ngOnInit(): void {
    if(this.title === 'trending'){
      this.tmdbService.getTrendingMoviesList().subscribe((result: { results: Movie[] }) => {
        this.movies = result.results;
      })
      return;
    }
    this.tmdbService.getMoviesListWithGenre(this.genreId).subscribe((result: { results: Movie[] }) => {
      this.movies = result.results;
    })
  }
}
