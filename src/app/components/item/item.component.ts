import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {IMAGES_SIZES} from "../../constants/images-sizes";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData!: Movie;
  images_sizes = IMAGES_SIZES;
}
