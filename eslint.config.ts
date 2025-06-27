import antfu from '@antfu/eslint-config'

export default antfu({}, {
  files: ['**/*.vue'],
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-indent': 'off',
    'eslint vue/component-name-in-template-casing': 'off',
  },
})
