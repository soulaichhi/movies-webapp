import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {Movie, MovieVideo} from "../../models/movie.model";
import {IMAGES_SIZES} from "../../constants/images-sizes";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovieById(id);
      this.getMovieVideos(id);
    });
  }
  getMovieById(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;

    });
  }
  getMovieVideos(id: string){
    this.moviesService.getMovieVideos(id).subscribe(movieVideoData => {
      this.movieVideos = movieVideoData;

    });
  }
}
