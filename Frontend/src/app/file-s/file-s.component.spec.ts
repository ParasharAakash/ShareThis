import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSComponent } from './file-s.component';

describe('FileSComponent', () => {
  let component: FileSComponent;
  let fixture: ComponentFixture<FileSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
