import options from './options'

export default (context, inject) => {
  const instance = window.Chargebee.init({ site: options.siteName })
  inject('chargebee', {
    checkout: planName => {
      const cart = instance.getCart()
      const product = instance.initializeProduct(planName)
      instance.setPortalSession(() =>
        context.app.$axios.$get('/api/portal-session')
      )
      cart.replaceProduct(product)
      cart.proceedToCheckout()
    },
    portal: () => {
      instance.setPortalSession(() =>
        context.app.$axios.$get('/api/portal-session')
      )
      const cbPortal = instance.createChargebeePortal()
      cbPortal.open()
    },
  })
}
