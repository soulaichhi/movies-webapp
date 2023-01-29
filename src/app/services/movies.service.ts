import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'bfec547de689d181a4f15b9adac2d9b4';
  constructor(private http: HttpClient) { }
  getMovies(type: string = 'upcoming') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
      );
  }
}
