import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() moviesItems: Movie[] = [];
  @Input() title: string = '';
}
