import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, style, animate, transition, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
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
export class SkillsComponent implements OnInit {
  searchskills: string = '';
  public isSearch: boolean = true;
  public skills = [
    {id: 1, name: "html5", url: "../assets/img/html5.png"},
    {id: 2, name: "css3", url: "../assets/img/Css3.png"},
    {id: 3, name: "flexbox", url: "../assets/img/flexbox.png"},
    {id: 4, name: "bootstrap 3/4", url: "../assets/img/bootstrap.png"},
    {id: 5, name: "ng-bootstrap", url: "../assets/img/ng-bootstrap.png"},
    {id: 6, name: "w3css", url: "../assets/img/w3css.png"},
    {id: 7, name: "sass", url: "../assets/img/sass.png"},
    {id: 8, name: "js", url: "../assets/img/js.png"},
    {id: 9, name: "jquery", url: "../assets/img/jquery.png"},
    {id: 10, name: "angular js/io", url: "../assets/img/angular.png"},
    {id: 11, name: "reactivex", url: "../assets/img/reactivex.png"},
    {id: 12, name: "angular material", url: "../assets/img/angular.png"},
    {id: 13, name: "npm", url: "../assets/img/npm.png"},
    {id: 14, name: "git", url: "../assets/img/git.png"},
    {id: 15, name: "gulp", url: "../assets/img/gulp.png"},
    {id: 16, name: "bower", url: "../assets/img/bower.png"},
    {id: 17, name: "github", url: "../assets/img/github.png"},
    {id: 18, name: "photoshop", url: "../assets/img/photoshop.png"},
    {id: 19, name: "illustrator", url: "../assets/img/illustrator.png"},
    {id: 20, name: "zeplin", url: "../assets/img/zeplin.png"},
    {id: 21, name: "gwd", url: "../assets/img/google_web_designer.png"}
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