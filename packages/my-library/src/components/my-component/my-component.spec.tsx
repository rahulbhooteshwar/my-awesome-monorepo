import { MyComponent } from './my-component';

it('should toggle the checked property', () => {
  const comp = new MyComponent();

  expect(comp.fullName).not.toBeDefined();

  comp.componentWillLoad();

  expect(comp.fullName).toBeDefined();
});
