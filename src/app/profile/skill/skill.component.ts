import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill : any = [
    {
      bidang : 'Font-End',
      teknologi : [
        {
          nama : 'Javascript',
          icon : './assets/teknologi/js.png',
          framework : [
            {
              nama : 'Angular',
              icon : './assets/teknologi/angular.png'
            },
            {
              nama : 'JQuery',
              icon : './assets/teknologi/jquery.png'
            },
          ]
        },
        {
          nama : 'CSS',
          icon : './assets/teknologi/css.png',
          framework : [
            {
              nama : 'Bootstrap',
              icon : './assets/teknologi/bootstrap.png'
            },
          ]
        },
      ]
    },
    {
      bidang : 'Back-End',
      teknologi : [
        {
          nama : 'Javascript',
          icon : './assets/teknologi/js.png',
          framework : [
            {
              nama : 'NodeJS',
              icon : './assets/teknologi/nodejs.png'
            },
            {
              nama : 'ExpressJS',
              icon : './assets/teknologi/express.png'
            },
            {
              nama : 'NestJS',
              icon : './assets/teknologi/nestjs.png'
            },
          ]
        },
        {
          nama : 'PHP',
          icon : './assets/teknologi/php.png',
          framework : [
            {
              nama : 'Laravel',
              icon : './assets/teknologi/laravel.png'
            },
          ]
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
