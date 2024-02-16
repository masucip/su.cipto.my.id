import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'su.cipto.my.id';
  constructor(
    public modal : NgbModal
  ){

  }
  ngOnInit(): void {
      // this.openModalProfile()
  }
  openModalProfile(){
    // this.modal.open(ProfileComponent, {windowClass: 'modal-animation', modalDialogClass : 'modal-mode-1', centered:true, ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      
    
      
  }
}
