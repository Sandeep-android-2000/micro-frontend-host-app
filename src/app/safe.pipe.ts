import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  private domService = inject(DomSanitizer);

  transform(url: string): SafeResourceUrl {
    return this.domService.bypassSecurityTrustResourceUrl(url);
  }

}
