import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostbooksComponent } from './lostbooks.component';

describe('LostbooksComponent', () => {
  let component: LostbooksComponent;
  let fixture: ComponentFixture<LostbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
