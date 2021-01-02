import i18n from 'mi18n'
import Control from '../control'

class FormulaControl extends Control {
  constructor() {
    const formulaConfig = {
      tag: 'input',
      attrs: {
        type: 'text',
        required: false,
        className: '',
      },
      config: {
        label: i18n.get('controls.form.formula') || 'Formula',
      },
      formula: {
        formula: '',
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
