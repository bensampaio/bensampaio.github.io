module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
    ],
    rules: {
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['theme'] }],
    }
};
