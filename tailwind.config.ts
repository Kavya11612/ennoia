import type { Config } from 'tailwindcss';

// §5 — Design system. Every value here is transcribed from the locked
// brand book / PRD. Do not add colours, radii, shadows, or easing curves
// outside this file. Components must reference tokens, never hex.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      clay: '#C69C72',
      emboss: '#8E6E53',
      ink: '#433E3F',
      'ink-hover': '#332F30', // 8% darken of ink — primary button hover only
      gambit: '#7A7265',
      'landing-stone': '#C0B7B1',
      'open-board': '#F5F1EB',
      card: '#FBF8F3',
      'gambit-text': '#746C60',
      'emboss-link': '#87684F',
      'clay-on-ink': '#D0A478',
      rule: '#E4DED4',
      error: '#8C4A3A',
    },
    fontFamily: {
      sans: ['var(--font-rethink)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['var(--font-plex-mono)', 'ui-monospace', 'SF Mono', 'monospace'],
    },
    fontSize: {
      display: ['clamp(2.5rem, 1.5rem + 4.4vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      h1: ['clamp(2rem, 1.5rem + 2.2vw, 2.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
      h2: ['clamp(1.625rem, 1.4rem + 1vw, 2rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      h3: ['clamp(1.25rem, 1.15rem + 0.5vw, 1.4375rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      'body-l': ['clamp(1.125rem, 1.08rem + 0.2vw, 1.1875rem)', { lineHeight: '1.6' }],
      body: ['1rem', { lineHeight: '1.65' }],
      'body-s': ['0.875rem', { lineHeight: '1.5' }],
      eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.16em' }],
      label: ['0.8125rem', { lineHeight: '1.4' }],
      meta: ['0.75rem', { lineHeight: '1.4' }],
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '160px',
      px: '1px',
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '6px',
      full: '999px',
    },
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    boxShadow: {
      // §5.6.1 — the single permitted shadow: zero blur, zero spread.
      nav: '0 1px 0 0 var(--c-rule)',
      none: 'none',
    },
    extend: {
      maxWidth: {
        prose: '68ch',
        standfirst: '60ch',
        container: '1440px',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
