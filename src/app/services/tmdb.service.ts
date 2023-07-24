import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Genre, Movie } from '../interfaces/movie';
import { environment } from '../environments/environment';

const httpHeaders = {
  accept: 'application/json',
  Authorization: environment.TMDB_READ_ACCESS_TOKEN
}

const httpOptions = {
  headers: new HttpHeaders(httpHeaders)
}


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor( private http: HttpClient ) { }

  getTrendingMoviesList(): Observable<{results: Movie[]}> {
    const url = 'https://api.themoviedb.org/3/trending/all/day'
    return this.http.get<{results: Movie[]}>(url, httpOptions)
  }

  getGenreList(): Observable<{genres: Genre[]}> {
    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    return this.http.get<{genres: Genre[]}>(url, httpOptions)
  }

  getMoviesListWithGenre(id: number): Observable<{results: Movie[]}>{
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
    return this.http.get<{results: Movie[]}>(url, httpOptions)
  }
}
