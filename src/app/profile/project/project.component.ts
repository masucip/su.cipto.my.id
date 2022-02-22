import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/service/msg.service';

@Component({
  selector: 'profile-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project : any = [
    {
      icon : '../assets/project/medys.png',
      nama : 'MEDYS',
      ket : 'Medical Education System',
      des : '',
      status : 1,
      start : 'Juni 2017'
    },
    {
      icon : '../assets/project/aorta.png',
      nama : 'AORTA',
      ket : 'Administrasi Online Tertata',
      des : '',
      status : 1,
      start : 'Juni 2017'
    }
  ]
  constructor(
    private msg : MsgService
  ) { }

  ngOnInit(): void {
  }
  detailProject(project:any){
    this.msg.showMsg({
      typeMsg : 'danger',
      title : 'Akses ditolak',
      deskription : 'Anda tidak memiliki akses untuk melihat project ini.'
    })
  }
}
