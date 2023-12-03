  rules: {
    // Allow tag `jest-environment` to work around Jest bug
    // See: https://github.com/facebook/jest/issues/7780
    'jsdoc/check-tag-names': ['error', { definedTags: ['jest-environment'] }],
    'jsdoc/match-description': 'off',
