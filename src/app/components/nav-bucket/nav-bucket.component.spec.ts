import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBucketComponent } from './nav-bucket.component';

describe('NavBucketComponent', () => {
  let component: NavBucketComponent;
  let fixture: ComponentFixture<NavBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBucketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
