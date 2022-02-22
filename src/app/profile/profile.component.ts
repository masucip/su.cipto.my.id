import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionConfig, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbAccordionConfig]
})
export class ProfileComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalProfile') modalProfile:any;
  constructor(
    public modal : NgbModal,
    private route : Router
  ) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
      if(this.modal.hasOpenModals()){
        this.modal.dismissAll()
      }
  }
  ngAfterViewInit(): void {
    this.modal.open(this.modalProfile, {windowClass: 'modal-animation', modalDialogClass : 'modal-mode-1', centered:true, ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.route.navigate(['/'])
    }, (reason) => {
      this.route.navigate(['/'])
    })
  }
}
