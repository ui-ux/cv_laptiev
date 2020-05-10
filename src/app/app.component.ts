import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conditionEn: boolean=true;
  conditionRu: boolean=false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguageEn(language: string) {
    this.translate.use(language);
    this.conditionEn=true;
    this.conditionRu=false;
  }
  switchLanguageRu(language: string) {
    this.translate.use(language);
    this.conditionEn=false;
    this.conditionRu=true ;
  }


}
