import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoriesComponent } from './page-categories.component';

describe('PageCategoriesComponent', () => {
  let component: PageCategoriesComponent;
  let fixture: ComponentFixture<PageCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
