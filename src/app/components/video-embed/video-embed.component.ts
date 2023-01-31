import {Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent {
  @Input() site: string = 'Youtube';
  @Input() key!: string;
  constructor(private sanitizer: DomSanitizer) {
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
