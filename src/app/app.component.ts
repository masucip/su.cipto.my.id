import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'su.cipto.my.id';
  constructor(
    public modal : NgbModal
  ){

  }
  openModalProfile(){
    this.modal.open(ProfileComponent, {windowClass: 'modal-animation', centered:true, ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      
    }, (reason) => {
      
    })
  }
}
