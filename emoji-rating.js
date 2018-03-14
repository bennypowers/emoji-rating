import { LitElement, html } from '../../@polymer/lit-element/lit-element.js';

const add = x => y => x + y;

const range = n =>
  Array.from(Array(Number(n)).keys()).map(add(1));

const content = ({emptyContent, fullContent, max, value}) =>
  [...range(   value   ).map(() => fullContent),
   ...range(max - value).map(() => emptyContent)].join('');

class EmojiRating extends LitElement {
  static get properties() {
    return {
      min: Number,
      max: Number,
      low: Number,
      high: Number,
      optimum: Number,
      value: Number,
      emptyContent: String,
      fullContent: String,
    };
  }

  constructor() {
    super();
    this.emptyContent = this.emptyContent || '☆';
    this.fullContent = this.fullContent || '⭐️';
  }

  render({min, max, low, high, optimum, value, emptyContent, fullContent}) {
    return html`
    <style>
    meter {
      visibility: hidden;
    }

    meter,
    meter + span {
      display: inline-block;
      width: var(--width);
      position: relative;
    }

    meter + span {
      height: var(--height);
    }

    meter + span::before {
      display: inline-flex;
      height: var(--height);
      width: var(--width);
      top: -0.2em;
      visibility: visible;
    }

    meter + span::before {
      content: '${ value != null ? content({emptyContent, fullContent, max, value}) : ''}';
    }
    </style>
    <meter id="meter"
        min="${min}"
        max="${max}"
        low="${low}"
        high="${high}"
        optimum="${optimum}"
        value="${value}"></meter>
      <span role="presentation"></span>
    `;
  }
}

customElements.define('emoji-rating', EmojiRating);
import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js';

const add = x => y => x + y;

const range = n =>
  Array.from(Array(Number(n)).keys()).map(add(1));

const content = ({emptyContent, fullContent, max, value}) =>
  [...range(   value   ).map(() => fullContent),
   ...range(max - value).map(() => emptyContent)].join('');

class EmojiRating extends LitElement {
  static get properties() {
    return {
      min: Number,
      max: Number,
      low: Number,
      high: Number,
      optimum: Number,
      value: Number,
      emptyContent: String,
      fullContent: String,
    };
  }

  constructor() {
    super();
    this.emptyContent = this.emptyContent || '☆';
    this.fullContent = this.fullContent || '⭐️';
  }

  render({min, max, low, high, optimum, value, emptyContent, fullContent}) {
    return html`
    <style>
    meter {
      visibility: hidden;
    }

    meter,
    meter + span {
      display: inline-block;
      width: var(--width);
      position: relative;
    }

    meter + span {
      height: var(--height);
    }

    meter + span::before {
      display: inline-flex;
      height: var(--height);
      width: var(--width);
      top: -0.2em;
      visibility: visible;
    }

    meter + span::before {
      content: '${ value != null ? content({emptyContent, fullContent, max, value}) : ''}';
    }
    </style>
    <meter id="meter"
        min="${min}"
        max="${max}"
        low="${low}"
        high="${high}"
        optimum="${optimum}"
        value="${value}"></meter>
      <span role="presentation"></span>
    `;
  }
}

customElements.define('emoji-rating', EmojiRating);
