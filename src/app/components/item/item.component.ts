import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData!: Movie;
}
