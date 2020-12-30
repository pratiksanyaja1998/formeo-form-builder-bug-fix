import { generateOptionConfig } from './shared'
import i18n from 'mi18n'
import Control from '../control'

class FormulaControl extends Control {
  constructor() {
    const selectConfig = {
      tag: 'formula',
      config: {
        label: i18n.get('controls.form.formula') || 'Formula',
      },
      attrs: {
        required: false,
        className: '',
      },
      meta: {
        group: 'common',
        icon: 'formula',
        id: 'formula',
      },
      options: generateOptionConfig('option'),
    }
    super(selectConfig)
  }
}

export default FormulaControl
