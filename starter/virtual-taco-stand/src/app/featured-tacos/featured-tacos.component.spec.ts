import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTacosComponent } from './featured-tacos.component';

describe('FeaturedTacosComponent', () => {
  let component: FeaturedTacosComponent;
  let fixture: ComponentFixture<FeaturedTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FeaturedTacosComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display all featured tacos', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featuredTacoItems = compiled.querySelectorAll('.featured-taco');
    expect(featuredTacoItems.length).toEqual(component.featuredTacos.length);
  });

  it('should display the Chef\'s Pick section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const chefsPickSection = compiled.querySelector('.chefs-pick');
    expect(chefsPickSection).toBeTruthy();
    expect(chefsPickSection?.textContent).toContain('Chef\'s Pick');
    expect(chefsPickSection?.textContent).toContain(component.chefsPick?.name);
  });
});
