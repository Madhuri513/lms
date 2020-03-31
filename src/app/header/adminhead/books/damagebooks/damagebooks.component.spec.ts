import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagebooksComponent } from './damagebooks.component';

describe('DamagebooksComponent', () => {
  let component: DamagebooksComponent;
  let fixture: ComponentFixture<DamagebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
