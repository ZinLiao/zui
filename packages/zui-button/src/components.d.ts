/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ZuiButton {
    }
}
declare global {
    interface HTMLZuiButtonElement extends Components.ZuiButton, HTMLStencilElement {
    }
    var HTMLZuiButtonElement: {
        prototype: HTMLZuiButtonElement;
        new (): HTMLZuiButtonElement;
    };
    interface HTMLElementTagNameMap {
        "zui-button": HTMLZuiButtonElement;
    }
}
declare namespace LocalJSX {
    interface ZuiButton {
    }
    interface IntrinsicElements {
        "zui-button": ZuiButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zui-button": LocalJSX.ZuiButton & JSXBase.HTMLAttributes<HTMLZuiButtonElement>;
        }
    }
}