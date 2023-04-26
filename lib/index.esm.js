import React from 'react';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n}\n\n.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n}\n\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n}\n\n.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n}\n\n.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n}";
styleInject(css_248z$2);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "primary" : _b, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? "medium" : _c, onClick = _a.onClick, label = _a.label;
    return (React.createElement("button", { type: "button", className: classNames("storybook-button", "storybook-button--".concat(size), "storybook-button--".concat(type)), style: textColor ? { color: textColor } : {}, onClick: onClick }, label));
};

var css_248z$1 = ":root {\n    --systemWhite: rgb(255, 255, 255);\n    --systemBlack: rgb(0, 0, 0);\n    --systemGreen: rgb(52, 199, 89);\n    --systemGreenDark: rgb(48, 209, 88);\n    --systemBlue: rgb(0, 122, 255);\n    --systemBlueDark: rgb(10, 132, 255);\n    --systemRed: rgb(255, 59, 48);\n    --systemRedDark: rgb(255, 69, 58);\n\n    --systemGray1: rgb(142, 142, 147);\n    --systemGrayDark1: rgb(142, 142, 147);\n    --systemGray2: rgb(174, 174, 178);\n    --systemGrayDark2: rgb(99, 99, 102);\n    --systemGray3: rgb(199, 199, 204);\n    --systemGrayDark3: rgb(72, 72, 74);\n    --systemGray4: rgb(209, 209, 214);\n    --systemGrayDark4: rgb(58, 58, 60);\n    --systemGray5: rgb(229, 229, 234);\n    --systemGrayDark5: rgb(44, 44, 46);\n    --systemGray6: rgb(242, 242, 247);\n    --systemGrayDark6: rgb(28, 28, 30);\n\n    --app-bg: #fcfbf9;\n}\n\nhtml {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--app-bg);\n}\n\n*,\nbody {\n    font-family: 'Poppins', sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n@keyframes scaleFadeIn {\n    0% {\n        opacity: 0;\n        filter: blur(3px);\n        transform: scale(1.5) translateX(20px);\n    }\n\n    100% {\n        opacity: 1;\n        filter: blur(0);\n        transform: scale(1) translateX(0);\n    }\n}";
styleInject(css_248z$1);

var css_248z = ".button {\n    --disable: var(--systemGray6);\n    --disableColor: var(--systemGray4);\n\n    --primary: var(--systemBlue);\n    --primaryColor: var(--systemWhite);\n    --primaryHover: var(--systemBlueDark);\n    --primaryActive: var(--systemBlue);\n\n    --secondary: var(--systemWhite);\n    --secondaryColor: var(--systemBlue);\n    --secondaryHover: var(--systemGray6);\n    --secondaryHoverColor: var(--systemBlue);\n    --secondaryActive: var(--systemWhite);\n\n    --success: var(--systemGreen);\n    --successColor: var(--systemWhite);\n    --successHover: var(--systemGreenDark);\n    --successActive: var(--systemGreen);\n\n    --danger: var(--systemRed);\n    --dangerColor: var(--systemWhite);\n    --dangerHover: var(--systemRedDark);\n    --dangerActive: var(--systemRed);\n\n    cursor: pointer;\n    outline: none;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    border: 2px solid transparent;\n    padding: 14px 22px;\n    border-radius: 12px;\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.2s color ease, 0.2s border-color ease, 0.2s background-color ease;\n\n    > :nth-child(2) {\n        margin-left: 8px;\n    }\n\n    > :nth-child(3) {\n        margin-left: 8px;\n    }\n\n    svg {\n        width: 24px;\n        height: 24px;\n    }\n\n    &.small {\n        padding: 6px 14px;\n        font-size: 14px;\n    }\n\n    &.disabled {\n        cursor: not-allowed;\n        color: var(--disableColor);\n        border-color: transparent;\n        background-color: var(--disable);\n\n        svg {\n            fill: var(--disableColor);\n        }\n\n        &:hover {\n            color: var(--disableColor);\n            border-color: transparent;\n            background-color: var(--disable);\n\n            svg {\n                fill: var(--disableColor);\n            }\n        }\n\n        &:active {\n            color: var(--disableColor);\n            border-color: transparent;\n            background-color: var(--disable);\n\n            svg {\n                fill: var(--disableColor);\n            }\n        }\n    }\n}\n\n.primary {\n    color: var(--primaryColor);\n    border-color: var(--primary);\n    background-color: var(--primary);\n\n    svg {\n        fill: var(--primaryColor);\n    }\n\n    &:hover {\n        border-color: var(--primaryHover);\n        background-color: var(--primaryHover);\n    }\n\n    &:active {\n        border-color: var(--primaryActive);\n        background-color: var(--primaryActive);\n    }\n\n    &:focus:not(:active) {\n        border-color: var(--primaryActive);\n        background-color: var(--primaryHover);\n    }\n}\n\n.secondary {\n    color: var(--secondaryColor);\n    border-color: var(--secondary);\n    background-color: var(--secondary);\n\n    svg {\n        fill: var(--secondaryColor);\n    }\n\n    &:hover {\n        color: var(--secondaryHoverColor);\n        border-color: var(--secondaryHover);\n        background-color: var(--secondaryHover);\n\n        svg {\n            fill: var(--secondaryHoverColor)\n        }\n    }\n\n    &:active {\n        color: var(--secondaryHoverColor);\n        border-color: var(--secondaryActive);\n        background-color: var(--secondaryActive);\n\n\n        svg {\n            fill: var(--secondaryHoverColor)\n        }\n    }\n\n    &:focus:not(:active) {\n        color: var(--secondaryHoverColor);\n        border-color: var(--secondaryHoverColor);\n        background-color: var(--secondaryHover);\n\n        svg {\n            fill: var(--secondaryHoverColor)\n        }\n    }\n}\n\n.success {\n    color: var(--successColor);\n    border-color: var(--success);\n    background-color: var(--success);\n\n    svg {\n        fill: var(--successColor);\n    }\n\n    &:hover {\n        border-color: var(--successHover);\n        background-color: var(--successHover);\n    }\n\n    &:active {\n        border-color: var(--successActive);\n        background-color: var(--successActive);\n    }\n\n    &:focus:not(:active) {\n        border-color: var(--successActive);\n        background-color: var(--successHover);\n    }\n}\n\n.danger {\n    color: var(--dangerColor);\n    border-color: var(--danger);\n    background-color: var(--danger);\n\n    svg {\n        fill: var(--dangerColor);\n    }\n\n    &:hover {\n        border-color: var(--dangerHover);\n        background-color: var(--dangerHover);\n    }\n\n    &:active {\n        border-color: var(--dangerActive);\n        background-color: var(--dangerActive);\n    }\n\n    &:focus:not(:active) {\n        border-color: var(--dangerActive);\n        background-color: var(--dangerHover);\n    }\n}";
styleInject(css_248z);

var AppButton = function (_a) {
    var id = _a.id, text = _a.text, _b = _a.type, type = _b === void 0 ? 'button' : _b, disable = _a.disable, _c = _a.size, size = _c === void 0 ? 'default' : _c, _d = _a.variant, variant = _d === void 0 ? 'primary' : _d, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, onClick = _a.onClick, className = _a.className;
    var buttonClassName = classNames('button', "".concat(size), "".concat(variant), 
    // {
    //     [classes.disabled]: disable
    // },
    className);
    return (React.createElement("button", { id: id, type: type, className: buttonClassName, disabled: disable, onClick: onClick, "data-testid": 'button' },
        !!leftIcon && React.createElement("span", { "data-testid": 'left-icon' }, leftIcon),
        !!text && React.createElement("span", null, text),
        !!rightIcon && React.createElement("span", { "data-testid": 'right-icon' }, rightIcon)));
};
AppButton.defaultProps = {
    type: 'button',
    size: 'default',
    variant: 'primary'
};

export { AppButton, Button };
//# sourceMappingURL=index.esm.js.map
