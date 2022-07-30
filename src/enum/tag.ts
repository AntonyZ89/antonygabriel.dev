export enum TagEnum {
  NextJS = 'NextJS',
  ReactJS = 'ReactJS',
  // NuxtJS = 'NuxtJS',
  // VueJS = 'VueJS',
  SASS = 'SASS',
  // LESS = 'LESS',
  HTML = 'HTML',
  CSS = 'CSS',
  Bootstrap = 'Bootstrap',

  PHP = 'PHP',
  // Yii2 = 'Yii2',
  // Laravel = 'Laravel',
  // NodeJS = 'NodeJS',
  // ExpressJS = 'ExpressJS',
  // NestJS = 'NestJS',

  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  // Python = 'Python',

  // Cypress = 'Cypress',
  // Cucumber = 'Cucumber',
  // Jest = 'Jest',
  // Codeception = 'Codeception',
  PHPUnit = 'PHPUnit',

  ReactNative = 'React Native',
  Flutter = 'Flutter',

  MySQL = 'MySQL',
  // PostgreSQL = 'PostgreSQL',

  // Heroku = 'Heroku',
  Vercel = 'Vercel'
  // AWS = 'AWS',
  // Docker = 'Docker',
  // GoogleCloud = 'Google Cloud',
  // Firebase = 'Firebase'
}

export function getTagColor(tag?: TagEnum): string | { [key in TagEnum]: string } {
  const colors = {
    [TagEnum.NextJS]: '#000000',
    // reactjs dark color
    [TagEnum.ReactJS]: '#190469',
    [TagEnum.NuxtJS]: '#2d4559',
    [TagEnum.VueJS]: '#00ba87',
    [TagEnum.SASS]: '#c26191',
    // LESS
    [TagEnum.HTML]: '#e34c26',
    [TagEnum.CSS]: '#00a2ff',
    [TagEnum.Bootstrap]: '#563d7c',

    [TagEnum.PHP]: '#8892bf',
    [TagEnum.Yii2]: '#1c7bbb',
    // Laravel
    // NodeJS
    // ExpressJS
    // NestJS

    [TagEnum.TypeScript]: '#2e72bb',
    [TagEnum.JavaScript]: '#ead41e',
    // Python

    // Cypress
    // Cucumber
    // Jest
    // Codeception
    [TagEnum.PHPUnit]: '#7f8bf1',

    [TagEnum.ReactNative]: '#02cdf1',
    [TagEnum.Flutter]: '#024f9e',

    [TagEnum.MySQL]: '#016288'
    // PostgreSQL

    // Heroku
    // Vercel
    // AWS
    // Docker
    // GoogleCloud
    // Firebase
  }

  return tag != null ? colors[tag] : colors
}
