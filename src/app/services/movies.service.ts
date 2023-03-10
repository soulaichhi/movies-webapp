import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto} from "../models/movie.model";
import {of, switchMap} from "rxjs";
import {GenresDto} from "../models/genre.model";

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
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http.get<MovieDto>(
      `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.results);
      }));
  }
  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMoviesGenres() {
    return this.http.get<GenresDto>(
      `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.genres);
      }));
  }
  getMoviesByGenre(genreId: string, pageNum: number) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNum}&api_key=${this.apiKey}`)
      .pipe(switchMap( (res) => {
        return of(res.results);
      }));
  }
}
