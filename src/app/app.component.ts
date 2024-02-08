import {
  Component,
  EnvironmentInjector,
  createComponent,
  inject,
} from '@angular/core';
import { Test2Component } from './test/test2/test2.component';
// import { TestModule } from './test/test.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-create-ng-module-component-bug';
  constructor() {
    createComponent(Test2Component, {
      environmentInjector: inject(EnvironmentInjector),
    });
  }
}
