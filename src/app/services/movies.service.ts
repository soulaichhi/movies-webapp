import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie, MovieDto, MovieVideoDto} from "../models/movie.model";
import {of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'bfec547de689d181a4f15b9adac2d9b4';
  constructor(private http: HttpClient) { }
  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.results.slice(0, count));
      }));
  }
  getMovieVideos(id: string ) {
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.results);
      }));
  }
  searchMovies(page: number) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.results);
      }));
  }
  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}
