import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KebijakanPrivasiTokoQComponent } from './kebijakan-privasi-toko-q.component';

describe('KebijakanPrivasiTokoQComponent', () => {
  let component: KebijakanPrivasiTokoQComponent;
  let fixture: ComponentFixture<KebijakanPrivasiTokoQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KebijakanPrivasiTokoQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KebijakanPrivasiTokoQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
