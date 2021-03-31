import options from './options'

export default (context, inject) => {
  const instance = window.Chargebee.init({ site: options.siteName })
  inject('chargebee', {
    checkout: planName => {
      const cart = instance.getCart()

      const product = instance.initializeProduct(planName)
      if (options.sessionUrl) {
        instance.setPortalSession(() =>
          context.app.$axios.$get(options.sessionUrl)
        )
      }
      cart.replaceProduct(product)
      cart.proceedToCheckout()
    },
    portal: () => {
      if (options.sessionUrl) {
        instance.setPortalSession(() =>
          context.app.$axios.$get(options.sessionUrl)
        )
      }

      const cbPortal = instance.createChargebeePortal()
      cbPortal.open()
    },
  })
}
