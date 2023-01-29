import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.moviesService.getMovies('popular')
      .subscribe(
        (response) => {
          this.popularMovies = response.results;
        }
      );
    this.moviesService.getMovies('upcoming')
      .subscribe(
        (response) => {
          this.upcomingMovies = response.results;
        }
      );
    this.moviesService.getMovies('top_rated')
      .subscribe(
        (response) => {
          this.topRatedMovies = response.results;
        }
      );
  }
}
