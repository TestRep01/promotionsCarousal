import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { PromotionsCarousalComponent } from './app/promotions-carousal/promotions-carousal.component';
import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const Element = createCustomElement(PromotionsCarousalComponent, {
  injector: app.injector,
  });
  customElements.define('app-carousal', Element);
}
)();
