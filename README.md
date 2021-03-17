<!-- TITLE/ -->
# nuxt-chargebee
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/nuxt-chargebee">
      <img
        src="https://img.shields.io/npm/v/nuxt-chargebee.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/nuxt-chargebee/actions">
      <img
        src="https://github.com/dword-design/nuxt-chargebee/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/nuxt-chargebee">
      <img
        src="https://codecov.io/gh/dword-design/nuxt-chargebee/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/nuxt-chargebee">
      <img src="https://img.shields.io/david/dword-design/nuxt-chargebee" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/nuxt-chargebee">
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
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Chargebee module for Nuxt.js that allows to checkout and open the self-service portal inside a Nuxt.js app.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# npm
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

Then you can checkout in your components or open the self-service portal:
```js
export default {
  props: {
    ...
  },
  methods: {
    checkout() {
      this.$chargebee.checkout('my-plan-id')
    },
    portal() {
      this.$chargebee.portal()
    },
  },
}
```

## User Sessions

It is possible to configure a session url. This url is used to create a session for checkout and the self-service portal:

```js
export default {
  ...
  modules: [
    ['nuxt-chargebee', { siteName: 'my-site', sessionUrl: '/api/create-session' }],
  ],
}
```

More information on portal sessions can be found in the [Chargebee API docs](https://apidocs.chargebee.com/docs/api/portal_sessions).

<!-- LICENSE/ -->
## Contributing

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/nuxt-chargebee/issues) or [pull request](https://github.com/dword-design/nuxt-chargebee/pulls)! ⚙️

## Support Me

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      height="32"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://dword-design.de/images/paypal.svg"
      alt="PayPal"
      height="32"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://dword-design.de/images/patreon.svg"
      alt="Patreon"
      height="32"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://dword-design.de)
<!-- /LICENSE -->
