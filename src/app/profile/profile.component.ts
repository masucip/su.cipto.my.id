import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbAccordionConfig]
})
export class ProfileComponent implements OnInit {
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
  constructor(
    public modalActive : NgbActiveModal,
    public config : NgbAccordionConfig
  ) { 
    config.closeOthers = true
  }

  ngOnInit(): void {
  }

}
