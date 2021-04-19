import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

export default function (moduleOptions) {
  const options = { ...this.options.chargebee, ...moduleOptions }
  this.options.head.script.push({
    body: true,
    src: 'https://js.chargebee.com/v2/chargebee.js',
  })
  this.addTemplate({
    fileName: P.join('nuxt-chargebee', 'options.js'),
    options,
    src: require.resolve('./options.js.template'),
  })
  nuxtPushPlugins(this, {
    fileName: P.join('nuxt-chargebee', 'plugin.js'),
    mode: 'client',
    src: require.resolve('./plugin'),
  })
}
