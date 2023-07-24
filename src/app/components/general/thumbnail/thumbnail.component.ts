import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() movie: Movie;
  imageSrc: string;

  ngOnInit(): void {
    this.imageSrc = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`
  }
}
