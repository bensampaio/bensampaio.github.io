/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,tsx}"],
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
      info: '#3aa6cb',
      experience: '#1fe0ba',
      education: '#c6adf5',
      projects: '#efa96c',
      about: '#f1c40f',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '980px',
      xl: '1200px',
    },
    spacing: {
      0: '0',
      xxs: '0.25rem',
      xs: '0.5rem',
      s: '1rem',
      m: '1.5rem',
      l: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '3.5rem',
    },
    extend: {
      fontSize: {
        base: '1rem',
      },
      transitionProperty: {
        'margin-top': 'margin-top'
      },
    },
  },
  plugins: [],
};
