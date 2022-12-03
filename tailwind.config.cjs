/** @type {import('tailwindcss').Config} */

module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        colors: {
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000',
            'gray-1': '#111',
            'gray-2': '#222',
            'gray-3': '#333',
            'gray-4': '#444',
            'gray-5': '#555',
            'gray-6': '#666',
            'gray-7': '#777',
            'gray-8': '#888',
            'gray-9': '#999',
            'gray-a': '#aaa',
            'gray-b': '#bbb',
            'gray-c': '#ccc', 
            'gray-d': '#ddd', 
            'gray-e': '#eee', 
            white: '#fff',
            primary: '#0077b5',
            info: '#3aa6cb',
            experience: '#1fe0ba',
            education: '#c6adf5',
            projects: '#efa96c',
            about: '#f1c40f',
            linkedin: '#007bb6',
            github: '#000',
            facebook: '#3b5998',
            twitter: '#1da1f2',
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '980px',
            xl: '1200px',
        },
        spacing: {
            auto: 'auto',
            0: '0',
            '2xs': '0.25rem',
            xs: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2.5rem',
            '2xl': '3rem',
            '3xl': '3.5rem',
            '4xl': '4rem',
        },
        extend: {
            fontSize: {
                base: '1rem',
                '10xl': '10rem',
                '12xl': '12rem',
                spinner: '10vh'
            },
            transitionProperty: {
                'h': 'height',
                'margin-top': 'margin-top'
            },
        },
    },
    plugins: [],
};
