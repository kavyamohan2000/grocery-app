import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubproductPageComponent } from './subproduct-page.component';

describe('SubproductPageComponent', () => {
  let component: SubproductPageComponent;
  let fixture: ComponentFixture<SubproductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubproductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubproductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
