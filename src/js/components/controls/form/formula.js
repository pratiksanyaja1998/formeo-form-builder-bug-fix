import i18n from 'mi18n'
import Control from '../control'

class FormulaControl extends Control {
  constructor() {
    const formulaConfig = {
      tag: 'input',
      attrs: {
        type: 'number',
        required: false,
        className: '',
      },
      config: {
        label: i18n.get('controls.form.formula') || 'Formula',
      },
      meta: {
        group: 'common',
        icon: 'formula',
        id: 'formula',
      },
    }
    super(formulaConfig)
  }
}

export default FormulaControl
