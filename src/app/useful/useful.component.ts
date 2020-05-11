import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, style, animate, transition, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-useful',
  templateUrl: './useful.component.html',
  styleUrls: ['./useful.component.scss'],
  animations: [
    trigger('skills', [
      transition ('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('50ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class UsefulComponent  implements OnInit {
  public searchskills: string = '';
  public isSearch: boolean = true;


  public skills = [

    { name: "fonts.google", link: "https://fonts.google.com/", bg: "/cv_laptiev/assets/img/img_useful/fonts-google.png"},
    { name: "fontawesome", link: "https://fontawesome.com/", bg: "/cv_laptiev/assets/img/img_useful/fontawesome.png"},
    { name: "convert fonts", link: "https://convertio.co/ru/font-converter/", bg: "/cv_laptiev/assets/img/img_useful/convertio.png"},
    { name: "convert fonts", link: "http://www.freefontconverter.com/", bg: "/cv_laptiev/assets/img/img_useful/freefontconverter.png"},
    { name: "color converter", link: "https://colorscheme.ru/color-converter.html", bg: "/cv_laptiev/assets/img/img_useful/colorscheme.png"},
    { name: "table colors", link: "http://www.stm.dp.ua/web-design/color-html.php", bg: "/cv_laptiev/assets/img/img_useful/stm.dp.ua.png"},
    { name: "materialpalette", link: "https://www.materialpalette.com/", bg: "/cv_laptiev/assets/img/img_useful/materialpalette.png"},
    { name: "free stock photos", link: "https://pixabay.com/ru/", bg: "/cv_laptiev/assets/img/img_useful/pixabay.png"},
    { name: "online generators text", link: "https://online-generators.ru/text", bg: "/cv_laptiev/assets/img/img_useful/online-generators.png"},
    { name: "caniuse", link: "https://caniuse.com/", bg: "/cv_laptiev/assets/img/img_useful/caniuse.png"},
    { name: "validator-w3", link: "https://validator.w3.org/unicorn/", bg: "/cv_laptiev/assets/img/img_useful/validator-w3.png"},
    { name: "normalize css", link: "http://necolas.github.io/normalize.css/", bg: "/cv_laptiev/assets/img/img_useful/normalize-css.png"},
    { name: "reset css", link: "http://denweb.ru/verstka/sbros-stilej-css.html", bg: "/cv_laptiev/assets/img/img_useful/reset-css.png"},
    { name: "sass", link: "http://sass-lang.com/install", bg: "/cv_laptiev/assets/img/img_useful/sass.png"},
    { name: "lesscss", link: "http://lesscss.org/", bg: "/cv_laptiev/assets/img/img_useful/lesscss.png"},
    { name: "favicon link", link: "http://www.favicon.by/", bg: "/cv_laptiev/assets/img/img_useful/favicon.png"},
    { name: "angular.io", link: "https://angular.io", bg: "/cv_laptiev/assets/img/img_useful/angular-io.png"},
    { name: "angular | ngx-bootstrap", link: "https://valor-software.com/ngx-bootstrap/#/getting-started", bg: "/cv_laptiev/assets/img/img_useful/ngx-bootstrap.png"},
    { name: "angular | ngb-bootstrap", link: "https://ng-bootstrap.github.io/#/home", bg: "/cv_laptiev/assets/img/img_useful/ng-bootstrap.png"},
    { name: "jsonplaceholder", link: "http://jsonplaceholder.typicode.com", bg: "/cv_laptiev/assets/img/img_useful/jsonplaceholder.png"},
    { name: "nodejs", link: "https://nodejs.org/en/", bg: "/cv_laptiev/assets/img/img_useful/nodejs.png"},
    { name: "git download", link: "https://git-scm.com/", bg: "/cv_laptiev/assets/img/img_useful/git-scm.png"},
    { name: "git download linux", link: "https://git-scm.com/download/linux", bg: "/cv_laptiev/assets/img/img_useful/git-scm-linux.png"},
    { name: "gulpjs", link: "https://gulpjs.com/", bg: "/cv_laptiev/assets/img/img_useful/gulpjs.png"},
    { name: "bower.io", link: "https://bower.io/", bg: "/cv_laptiev/assets/img/img_useful/bower.png"},
    { name: "ng2-select", link: "https://valor-software.com/ng2-select/", bg: "/cv_laptiev/assets/img/img_useful/ng2-select.png"},
    { name: "ngx-select-ex", link: "https://optimistex.github.io/ngx-select-ex/", bg: "/cv_laptiev/assets/img/img_useful/ngx-select-ex.png"},
    { name: "slimscroll", link: "https://www.npmjs.com/package/angular-io-slimscroll", bg: "/cv_laptiev/assets/img/img_useful/angular-io-slimscroll.png"},
    { name: "slimscroll", link: "https://rd-dev-ukraine.github.io/angular-io-slimscroll/", bg: "/cv_laptiev/assets/img/img_useful/github-ngx-select-ex.png"},
    { name: "ng2-charts", link: "https://www.npmjs.com/package/ng2-charts", bg: "/cv_laptiev/assets/img/img_useful/ng2-charts.png"},
    { name: "toastr", link: "https://www.npmjs.com/package/toastr", bg: "/cv_laptiev/assets/img/img_useful/toastr.png"},
    { name: "html2pdf.js", link: "https://www.npmjs.com/package/html2pdf.js/v/0.9.1", bg: "/cv_laptiev/assets/img/img_useful/html2pdf-js.png"},
    { name: "ngx-mydatepicker", link: "https://kekeh.github.io/ngx-mydatepicker/", bg: "/cv_laptiev/assets/img/img_useful/ngx-mydatepicker.png"},
    { name: "toastr", link: "https://www.npmjs.com/package/toastr", bg: "/cv_laptiev/assets/img/img_useful/toastr.png"},
    { name: "ngxintltelinput", link: "https://www.npmjs.com/package/ngx-intl-tel-input", bg: "/cv_laptiev/assets/img/img_useful/NgxIntlTelInput.png"},
    { name: "kendo-angular-ui", link: "https://www.telerik.com/kendo-angular-ui", bg: "/cv_laptiev/assets/img/img_useful/kendo-angular-ui.png"},
    { name: "material-pro", link: "https://wrappixel.com/demos/admin-templates/material-pro/landingpage/index.html", bg: "/cv_laptiev/assets/img/img_useful/material-pro.png"},
    { name: "dribbble", link: "https://dribbble.com/shots", bg: "/cv_laptiev/assets/img/img_useful/dribbble.png"},
  ];

  constructor() { }

  ngOnInit() {
  }

@HostListener('window:scroll', ['$event'])
  onClick(event) {
    if(window.pageYOffset > 100) {
      this.isSearch = false;
    }
    else {
      this.isSearch = true;
    }
  }

}

