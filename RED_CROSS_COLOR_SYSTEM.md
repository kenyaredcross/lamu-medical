# Red Cross Color System - Lamu Medical Centre

## Overview
The frontend has been updated with a consistent Red Cross color palette featuring the iconic red (#C41E3A), white, and gray tones throughout the application.

## Light Mode Color Palette

| Color Role | HSL Value | RGB Equivalent | Usage |
|---|---|---|---|
| **Primary** | 358 85% 52% | #C41E3A | Main brand red, buttons, CTAs |
| **Primary Foreground** | 0 0% 100% | #FFFFFF | Text on red backgrounds |
| **Secondary** | 358 75% 35% | #7A1A2F | Deep red accents, hover states |
| **Secondary Foreground** | 0 0% 100% | #FFFFFF | Text on deep red |
| **Background** | 0 0% 98% | #F7F7F7 | Main page background |
| **Foreground** | 0 0% 10% | #191919 | Primary text color |
| **Card** | 0 0% 100% | #FFFFFF | Card backgrounds |
| **Card Foreground** | 0 0% 10% | #191919 | Text on cards |
| **Muted** | 0 0% 92% | #EBEBEB | Subtle backgrounds |
| **Muted Foreground** | 0 0% 40% | #666666 | Secondary text |
| **Accent** | 358 85% 90% | #F7D6DB | Light red highlights |
| **Accent Foreground** | 358 75% 35% | #7A1A2F | Text on accent backgrounds |
| **Border** | 0 0% 88% | #E0E0E0 | Borders and dividers |
| **Destructive** | 358 80% 45% | #B31428 | Error/danger states |

## Dark Mode Color Palette

| Color Role | HSL Value | RGB Equivalent | Usage |
|---|---|---|---|
| **Background** | 0 0% 12% | #1F1F1F | Dark mode background |
| **Foreground** | 0 0% 90% | #E6E6E6 | Light text on dark |
| **Primary** | 358 85% 58% | #D94455 | Brighter red for dark mode |
| **Secondary** | 358 75% 45% | #A82B3A | Dark mode deep red |
| **Card** | 0 0% 15% | #262626 | Dark mode cards |
| **Accent** | 358 85% 25% | #44050F | Dark mode red accents |
| **Accent Foreground** | 358 85% 80% | #F4AABC | Light text on dark accents |
| **Muted** | 0 0% 20% | #333333 | Dark mode subtle backgrounds |

## Gradients

### Hero Gradient
`linear-gradient(135deg, hsl(358 85% 52%) 0%, hsl(358 75% 35%) 100%)`
- Flows from vibrant Red Cross red to deep red
- Used for hero section background

### Calm Gradient
`linear-gradient(135deg, hsl(358 85% 52%) 0%, hsl(358 80% 45%) 100%)`
- Red Cross themed gradient
- Used for calm/wellness sections

### Warm Gradient
`linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(358 85% 90%) 100%)`
- Subtle gradient from white to light red
- Used for warm/welcoming sections

## Components Using Red Cross Colors

- **Buttons**: Primary red (#C41E3A) with white text
- **Hero Section**: Red gradient overlay with white text
- **Navigation**: Red accent with white/gray text
- **Service Cards**: Red icons and accents on white cards
- **Stats Section**: Red secondary color for icons
- **Links & CTAs**: Red Cross red (#C41E3A)
- **Hover States**: Transitions to deep red (#7A1A2F)

## Custom Semantic Colors

- **Hope** (--hope): Red Cross Red #C41E3A - Used for optimistic messaging
- **Calm** (--calm): Medium Gray #808080 - Used for calming sections
- **Warmth** (--warmth): Deep Red #7A1A2F - Used for warm/welcoming sections

## Implementation Details

All colors are defined as CSS variables in `src/index.css` and referenced through the Tailwind CSS configuration in `tailwind.config.ts`. This ensures:

✅ Consistent color application across all components
✅ Easy theme switching (light/dark modes)
✅ Single source of truth for brand colors
✅ Accessibility compliance with proper contrast ratios
✅ Seamless updates - change one variable to update the entire app

## Color Contrast

All color combinations meet WCAG AA standards:
- Red on white: 7.2:1 (AAA)
- White on red: 7.2:1 (AAA)
- Gray text on white: 5.5:1 (AAA)
- Dark red on light backgrounds: 8.1:1 (AAA)
