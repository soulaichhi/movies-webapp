import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() items: Movie[] = [];
}
