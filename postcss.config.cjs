module.exports = {
    plugins: {
        autoprefixer: {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
};