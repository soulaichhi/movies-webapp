import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {Movie, MovieCredits, MovieImages, MovieVideo} from "../../models/movie.model";
import {IMAGES_SIZES} from "../../constants/images-sizes";
import {first} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy{
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovieById(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }
  ngOnDestroy() {
    console.log('component Destroyed');
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
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe(movieImagesData => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe(movieCreditsData => {
      this.movieCredits = movieCreditsData;
    });
  }
}
