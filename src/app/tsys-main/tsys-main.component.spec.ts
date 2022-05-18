import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsysMainComponent } from './tsys-main.component';

describe('TsysMainComponent', () => {
  let component: TsysMainComponent;
  let fixture: ComponentFixture<TsysMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsysMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsysMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
