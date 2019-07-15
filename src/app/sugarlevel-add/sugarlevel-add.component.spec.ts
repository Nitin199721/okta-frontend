import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarlevelAddComponent } from './sugarlevel-add.component';

describe('SugarlevelAddComponent', () => {
  let component: SugarlevelAddComponent;
  let fixture: ComponentFixture<SugarlevelAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarlevelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarlevelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
