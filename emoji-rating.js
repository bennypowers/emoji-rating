import { LitElement, html } from '../../@polymer/lit-element/lit-element.js';

const add = x => y => x + y;

const range = n =>
  Array.from(Array(Number(n)).keys()).map(add(1));

const content = ({emptyContent, fullContent, max, value}) =>
  [...range(   value   ).map(() => fullContent),
   ...range(max - value).map(() => emptyContent)].join('');

/**
 * # Super Semantic Star Rating with ⭐ Emoji!
 * `<emoji-rating>` makes your UI delightful and super-semantic.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 * for information on the html `<meter>` API, on which this element relies.
 *
 * ## Usage
 * ```html
 * <emoji-rating id="rating"
 *     min="1" max="5"
 *     low="2" high="4"
 *     optimum="5" value="3"></emoji-rating>
 * ```
 * @extends LitElement
 */
class EmojiRating extends LitElement {
  static get properties() {
    return {
      /**
       * The lower numeric bound of the measured range.
       *
       * This must be less than the maximum value (max attribute), if specified.
       * If unspecified, the minimum value is 0.
       *
       * @type {[type]}
       */
      min: Number,

      /**
       * The upper numeric bound of the measured range.
       *
       * This must be greater than the minimum value (min attribute), if specified.
       * If unspecified, the maximum value is 1.
       *
       * @type {Number}
       */
      max: Number,

      /**
       * The upper numeric bound of the low end of the measured range.
       *
       * This must be greater than the minimum value (min attribute),
       * and it also must be less than the high value and maximum value
       * (high attribute and max attribute, respectively), if any are specified.
       * If unspecified, or if less than the minimum value, the low value is
       * equal to the minimum value.
       *
       * @type {Number}
       */
      low: Number,

      /**
       * The lower numeric bound of the high end of the measured range.
       *
       * This must be less than the maximum value (max attribute),
       * and it also must be greater than the low value and minimum value
       * (low attribute and min attribute, respectively), if any are specified.
       * If unspecified, or if greater than the maximum value,
       * the high value is equal to the maximum value.

       * @type {Number}
       */
      high: Number,

      /**
       * This attribute indicates the optimal numeric value.
       *
       * It must be within the range (as defined by the min attribute and max attribute).
       * When used with the low attribute and high attribute,
       * it gives an indication where along the range is considered preferable.
       * For example, if it is between the min attribute and the low attribute,
       * then the lower range is considered preferred.
       * @type {Number}
       */
      optimum: Number,

      /**
       * The current numeric value.
       *
       * This must be between the minimum and maximum values
       * (min attribute and max attribute) if they are specified.
       * If unspecified or malformed, the value is 0.
       * If specified, but not within the range given by the min attribute and
       * max attribute, the value is equal to the nearest end of the range.
       * @type {Number}
       */
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
