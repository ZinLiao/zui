import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'zui-button',
  styleUrl: 'zui-button.css',
  shadow: true
})
export class ZuiButton {
  @State() num: number = 0;

  render() {
    return (
      <div>
        <h1>Number is {this.num}</h1>
        <button onClick={() => this.add()}>增加</button>
      </div>
    );
  }

  add() {
    this.num++;
  }
}
