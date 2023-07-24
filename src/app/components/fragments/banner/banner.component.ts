import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  movie: Movie | null;
  bgImage: string = "#"

  constructor(private tmdbService: TmdbService){
  }

  ngOnInit(): void {
    this.tmdbService.getTrendingMoviesList().subscribe((moviesResult: {results: Movie[]}) => {
      const movies: Movie[] = moviesResult.results;
      const random: number = Math.floor(Math.random() * 20)
      this.movie = movies[random];
      this.bgImage = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    })
  }
}
