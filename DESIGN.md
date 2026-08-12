# Design System

## Direction

Recruiter-first professional profile: clear, structured, and LinkedIn-inspired without being a clone. A pale blue-gray page supports white profile surfaces, confident blue actions, slate text, and a dark navy closing section.

## Color Palette

- Page blue-gray `#EEF3F7`: main background
- Surface white `#FFFFFF`: profile sections
- Professional blue `#0A66C2`: primary actions and identity
- Dark blue `#084F96`: hover states and strong links
- Soft blue `#E7F3FF`: supporting information
- Slate ink `#182431`: primary text
- Muted slate `#5B6670`: secondary text
- Divider `#D9E1E8`: one-pixel structure
- Navy `#123B5D`: contact footer

All normal text must meet WCAG AA contrast.

## Typography

Use a modern system sans-serif stack throughout. Headings are bold and compact with fluid sizing; body copy begins at 16 pixels, uses generous line height, and stays within a comfortable reading measure. Small labels use restrained uppercase lettering to clarify hierarchy.

## Layout

The page order is introduction, current experience, featured GitHub projects, about, and contact. Content sits in a centered 74-rem column. Desktop hero content uses a wide copy area with a circular LN profile mark. Project evidence is displayed as five full-width rows rather than a generic card grid. Below 800 pixels, major sections stack into one column.

## Components

- Site header: LN identity, internal section links, LinkedIn and GitHub destinations, accessible small-screen menu
- Hero: long-form introduction, two clear actions, circular LN fallback, technical focus line
- Current experience: latest Waystar role, dates, location, summary, four highlights, LinkedIn source
- Project list: five linked GitHub repositories with concise evidence and repository metadata
- About: short working philosophy and three principles
- Contact footer: LinkedIn, GitHub, and copyright with no email address

## Shape and Motion

Use restrained 8- to 14-pixel radii, one-pixel dividers, and a single soft surface shadow. Motion lasts roughly 220 milliseconds and is limited to small position and color changes. Remove all motion when reduced motion is requested.

## Accessibility

Use semantic landmarks and heading order, high-contrast three-pixel focus outlines, visible keyboard states, 44-pixel targets, safe external-link behavior, and resilient static content when JavaScript is disabled.
