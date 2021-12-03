import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* ------------------- */
  /* Custom properties   */
  /* ------------------- */

  :root {
    /* colors */
    --clr-dark: 210 29% 24%;
    --clr-light: 192 15% 93%;
    --clr-white: 0 0% 100%;
    --clr-red: 6 78% 57%;
    --clr-green: 145 63% 49%;
    --clr-blue: 204 70% 53%;

    /* font-sizes */
    --fs-900: 9.375rem;
    --fs-800: 6.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-500: 1.75rem;
    --fs-400: 1.125rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
    
    /* font-families */
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
  }

  /* ------------------- */
  /* Reset               */
  /* ------------------- */

  /* https://piccalil.li/blog/a-modern-css-reset/ */

  /* Box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reset margins */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    font-weight: 400;
  }

  /* set up the body */
  body {
    font-family: var(--ff-sans-normal);
    font-size: var(--fs-400);
    color: hsl( var(--clr-white) );
    background-color: hsl( var(--clr-dark) );
    line-height: 1.5;
    min-height: 100vh;
  }

  /* make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* remove animations for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ------------------- */
  /* Utility classes     */
  /* ------------------- */

  /* GENERAL */

  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }

  .flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
    outline: 1px solid red;
  }

  .container {
    padding-inline: 2em; /* padding at left and right */
    margin-inline: auto; /* margin at left and right */
    max-width: 80rem;
  }

  /* screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  /* COLORS */
  .bg-dark { background-color: hsl( var(--clr-dark) );}
  .bg-accent { background-color: hsl( var(--clr-light) );}
  .bg-white { background-color: hsl( var(--clr-white) );}
  .bg-blue { background-color: hsl( var(--clr-blue) );}
  .bg-red { background-color: hsl( var(--clr-red) );}
  .bg-green { background-color: hsl( var(--clr-green) );}

  .text-dark { color: hsl( var(--clr-dark) );}
  .text-accent { color: hsl( var(--clr-light) );}
  .text-white { color: hsl( var(--clr-white) );}

  /* TYPOGRAPHY */
  .ff-serif { font-family: var(--ff-serif); } 
  .ff-sans-cond { font-family: var(--ff-sans-cond); } 
  .ff-sans-normal { font-family: var(--ff-sans-normal); } 

  .letter-spacing-1 { letter-spacing: 4.75px; } 
  .letter-spacing-2 { letter-spacing: 2.7px; } 
  .letter-spacing-3 { letter-spacing: 2.35px; } 

  .uppercase { text-transform: uppercase; }

  .fs-900 { font-size: var(--fs-900); }
  .fs-800 { font-size: var(--fs-800); }
  .fs-700 { font-size: var(--fs-700); }
  .fs-600 { font-size: var(--fs-600); }
  .fs-500 { font-size: var(--fs-500); }
  .fs-400 { font-size: var(--fs-400); }
  .fs-300 { font-size: var(--fs-300); }
  .fs-200 { font-size: var(--fs-200); }

  .fs-900,
  .fs-800,
  .fs-700,
  .fs-600 {
    line-height: 1.1;
  }
`

export default GlobalStyle
