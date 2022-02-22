import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  profile : any = [
    {
      icon : 'bi-qr-code-scan',
      judul : 'Nama Lengkap',
      ket : 'Sucipto',
      type : 'Text'
    },
    {
      icon : 'bi-envelope',
      judul : 'Email',
      ket : 'su@cipto.my.id',
      type : 'Email'
    },
    {
      icon : 'bi-globe',
      judul : 'Website',
      ket : 'su.cipto.my.id',
      type : 'Link',
      link : 'https://su.cipto.my.id'
    },
    {
      icon : 'bi-facebook',
      judul : 'Facebook',
      ket : 'Sucipto',
      type : 'Link',
      link : 'https://www.facebook.com/masucip'
    },
    {
      icon : 'bi-instagram',
      judul : 'Instagram',
      ket : '5uc1pt0',
      type : 'Link',
      link : 'https://www.instagram.com/5uc1pt0'
    },
    {
      icon : 'bi-youtube',
      judul : 'Youtube',
      ket : 'Web App Project',
      type : 'Link',
      link : 'https://www.youtube.com/channel/UCFnRQAA7omStD9v02tMGg8A'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
