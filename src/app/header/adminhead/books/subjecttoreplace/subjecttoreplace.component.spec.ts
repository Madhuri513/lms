import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecttoreplaceComponent } from './subjecttoreplace.component';

describe('SubjecttoreplaceComponent', () => {
  let component: SubjecttoreplaceComponent;
  let fixture: ComponentFixture<SubjecttoreplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjecttoreplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjecttoreplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
