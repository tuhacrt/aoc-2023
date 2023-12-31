import antfu from '@antfu/eslint-config';

export default antfu(
  { vue: false, ignores: ['node_modules', 'dist'] },
  {
    rules: {
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/curly': 'off',
      'style/semi': ['error', 'always'],
      'style/member-delimiter-style': ['error', { singleline: { delimiter: 'semi', requireLast: false } }],
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc' },
        },
      ],
      'ts/brace-style': 'off',
      'ts/array-type': ['error', { default: 'generic' }],
      'ts/consistent-type-imports': 'error',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': 'off',
    },
  },
);
