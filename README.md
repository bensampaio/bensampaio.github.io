# Personal Website

I created this website to present the most interesting and relevant aspects about me and my work in a more clean and simplified way. The website is mobile ready and is composed by the following **sections**:

- **Home Page** - general information about me;
- **Experience** - my work experience;
- **Education** - my courses and qualifications;
- **Projects** - some of my personal projects;
- **About** - information about the website purpose and architecture.

It is built with [Next.js](https://nextjs.org/), [React](https://react.dev/), TypeScript and [Tailwind CSS](https://tailwindcss.com/), and exported as a static site hosted on GitHub Pages.

Below are described the file & folders structure and the usage instructions.

## Contents

- **app** - Next.js routes (one folder per section), the root layout and global styles (`layout.scss`, including the Tailwind theme);
- **src** - React components:
  - **screens** - one component per section of the website;
  - **shared** - reusable components and constants;
  - **layout** - the top navigation bar;
- **db** - TypeScript files with the data to be presented on each section of the website, with their images next to them:
  - **me/index.ts** - stores basic information about the person like its first, last and full name and its profile picture. This data is used to fill the top navigation bar and the page titles;
  - **info/index.ts** - stores general information about the person like its summary, skills, spoken languages, social profiles, interests and contacts. This data is used to fill the "Home Page" section;
  - **experience/index.ts** - stores information about personal work experience. This data is used to fill the "Experience" section;
  - **education/index.ts** - stores information about education. This data is used to fill the "Education" section;
  - **projects/index.ts** - stores information about personal projects. This data is used to fill the "Projects" section;
  - **about/index.ts** - stores information about the website purpose and architecture. This data is used to fill the "About" section;
- **dist** - the generated static website (created by `yarn build`, not committed);
- **package.json** - app metadata, dependencies and scripts.

## Usage

It is possible for you to use this website to present your personal information, but you will need to perform some actions and change some files. Besides the files referenced here, you can change whatever you want.

To start, first fork this repository and then clone it in your desktop.

### Install and run

This project uses the Node.js version in `.nvmrc` and Yarn 4 (enable it with `corepack enable`).

Run `yarn install` and then `yarn dev`. Afterwards you should be able to visualize the website in [http://localhost:3000/](http://localhost:3000/).

Other useful scripts:

- `yarn build` - generates the static website in the `dist` folder;
- `yarn lint:js` and `yarn lint:css` - lint the code and styles;
- `yarn format` - formats the code with Prettier;
- `yarn tsc` - checks the types.

### Change the data

Change the data in the files in the **db** folder to contain your own data, and the site description in `app/layout.tsx`. Long text fields support a small subset of markdown: one paragraph per line, list items starting with `* ` and links written as `[name](https://url)`. Make sure it looks as you expect it.

### Ready? Go!

When you are done, commit and push your changes to the `master` branch. The GitHub Actions workflow in `.github/workflows/nextjs.yml` builds the website and deploys it to GitHub Pages (make sure GitHub Pages is set to deploy from GitHub Actions in your repository settings). Your page should then be live on GitHub.
