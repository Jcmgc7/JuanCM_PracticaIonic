import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsiaOccPage } from './asia-occ.page';

describe('AsiaOccPage', () => {
  let component: AsiaOccPage;
  let fixture: ComponentFixture<AsiaOccPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsiaOccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
