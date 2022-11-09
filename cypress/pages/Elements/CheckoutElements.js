export default new class CheckoutElements {
  iptFirstName = () => '[data-test=firstName]'

  iptLastName = () => '[data-test=lastName]'

  iptPostalCode = () => '[data-test=postalCode]'

  btnContinue = () => '[data-test=continue]'

  labelSubTotal = () => '.summary_subtotal_label'

  labelTaxa = () => '.summary_tax_label'

  labelTotal = () => '.summary_total_label'

  btnFinalizarCompra = () => '[data-test=finish]'
}