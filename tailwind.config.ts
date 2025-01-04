import type {Config} from 'tailwindcss';
import svgToDataUri from 'mini-svg-data-uri';
import plugin from 'tailwindcss/plugin';
import {PluginCreator} from 'tailwindcss/types/config';

const {
    default: flattenColorPalette
// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('tailwindcss/lib/util/flattenColorPalette');

const addVariableForColors: PluginCreator = ({addBase, theme}) => {
    const allColors = flattenColorPalette(theme('colors'));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    addBase({':root': newVars});
};

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                'xs': '375px'
            },
            colors: {
                foreground: 'var(--foreground)',
                background: 'var(--background)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'var(--border)',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                shadow: 'var(--shadow)',
                netral: {
                    DEFAULT: 'var(--netral)',
                    foreground: 'var(--netral-foreground)'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '1px 1px 0 0 var(--shadow)',
                sm: '2px 2px 0 0 var(--shadow)',
                DEFAULT: '4px 4px 0 0 var(--shadow)',
                lg: '6px 6px 0 0 var(--shadow)',
                xl: '8px 8px 0 0 var(--shadow)',
                '2xl': '12px 12px 0 0 var(--shadow)',
                '3xl': '16px 16px 0 0 var(--shadow)'
            },
            fontFamily: {
                sans: [
                    'var(--font-archivo)'
                ],
                mono: [
                    'var(--font-space-mono)'
                ]
            },
            keyframes: {
                marquee: {
                    from: {
                        transform: 'translateX(0)'
                    },
                    to: {
                        transform: 'translateX(calc(-100% - var(--gap)))'
                    }
                },
                'marquee-vertical': {
                    from: {
                        transform: 'translateY(0)'
                    },
                    to: {
                        transform: 'translateY(calc(-100% - var(--gap)))'
                    }
                }
            },
            animation: {
                marquee: 'marquee var(--duration) infinite linear',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
            }
        }
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/line-clamp'),
        plugin(addVariableForColors),
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'bg-dot-thick': (value: unknown) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`
                    })
                },
                {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
            );
        })
    ]
} satisfies Config;
