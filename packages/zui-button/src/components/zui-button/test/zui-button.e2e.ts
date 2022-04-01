import { newE2EPage } from '@stencil/core/testing';

describe('zui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<zui-button></zui-button>');

    const element = await page.find('zui-button');
    expect(element).toHaveClass('hydrated');
  });
});
