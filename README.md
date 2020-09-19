<!-- TITLE/ -->
# nuxt-chargebee
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/nuxt-chargebee.svg)](https://npmjs.org/package/nuxt-chargebee)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/nuxt-chargebee/workflows/build/badge.svg)](https://github.com/dword-design/nuxt-chargebee/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/nuxt-chargebee)](https://coveralls.io/github/dword-design/nuxt-chargebee)
[![Dependency status](https://img.shields.io/david/dword-design/nuxt-chargebee)](https://david-dm.org/dword-design/nuxt-chargebee)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->

<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install nuxt-chargebee

# Yarn
$ yarn add nuxt-chargebee
```
<!-- /INSTALL -->

## Usage

Add the module to your Nuxt.js modules list in `nuxt.config.js`:
```js
export default {
  ...
  modules: [
    ['nuxt-chargebee', { siteName: 'my-site' }],
  ],
}
```

Or use the top-level option:
```js
export default {
  ...
  modules: [
    'nuxt-chargebee',
  ],
  chargebee: {
    siteName: 'my-site',
  },
}
```

Then you can checkout in your components:
```js
export default {
  methods: {
    checkout() {
      this.$chargebee.checkout('my-plan-id')
    },
  },
}
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
