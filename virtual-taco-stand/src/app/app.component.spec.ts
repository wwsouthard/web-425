import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu/menu.component';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };
    const routes: Routes = [{ path: 'menu', component: MenuComponent }];
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /** Week 3: unit test 3 */
  it('should have correct route for Menu Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find((r) => r.path === 'menu');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(MenuComponent);
    }
  });
});
