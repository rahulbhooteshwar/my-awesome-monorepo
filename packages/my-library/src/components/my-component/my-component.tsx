import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import * as greeter from 'my-awesome-greeter/lib';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @State() fullName: string;

  componentWillLoad() {
    console.log('mode: ', process.env.MODE);
    this.fullName = this.first + ' ' + this.last;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <br/>
        {greeter.Greeter(this.fullName)}
      </div>
    )
  }
}
