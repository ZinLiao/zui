import { newSpecPage } from '@stencil/core/testing';
import { ZuiButton } from '../zui-button';

describe('zui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZuiButton],
      html: `<zui-button></zui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <zui-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zui-button>
    `);
  });
});
