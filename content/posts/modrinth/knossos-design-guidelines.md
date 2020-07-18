---
title: "Modrinth: Knossos design guidelines"
description: "Design directions for contributors and members of the Modrinth project"
date: 2020-07-17
---

## Basic guidelines
- Prefer background color shadow, shadow over border
- Don’t introduce new colors
- Larger element - larger border radius
- No pills (fully rounded boxes)
- Prefer spacing and color over font weight, font weight over font size, and avoid font style
- Smaller font - larger letter spacing and higher background contrast, especially when if font is bold
- Layout hierarchy always takes preference over semantics. For instance: don’t make the “Delete” button big and red, even if it is very dangerous, unless that button is the main action. If it isn’t, don’t draw unnecessary attention to it. You’ll have your warning displayed elsewhere elsehow more efficiently


## Typography

### Fonts
- Logo font is Montserrat Alternatives
- Brand font is Inter. It must be used for any landing page or page, containing information regarding the project itself (not necessarily the users’ content)
- Default font for any code presented on the project is Roboto Mono
- In user content editing tools Inter should be the default font
- Any other fonts in cases, not described above, should only be used if it is required by the environment

### Headers
- Primary headers should use the `<h1>` tag. They must be `2rem` big, be bold, have `2rem` and `1.5rem` top and bottom margins accordingly
- Section headers should use the `<h2>` tag. They must be `1.5rem` big, be bold, have `1.5rem` and `0.75rem` top and bottom margins accordingly
- Sub-section headers should use the `<h3>` tag. They must be `1.2rem` big, be bold, have `0.75rem` and `0.25rem` top and bottom margins accordingly
- If headers are stacked, smaller margins should be absorbed by the largest (i.e. largest margin wins). They MUST NOT add up


## Components

### Buttons, inputs and links
- `<a>` tag should NOT be dropped in favor of `<button>`. Both should be used as intended
- Button-like decoration for links, however, is preferred, when not in user content
- User content should not have an access to buttons. All links in user content must be plain text or images
- All inputs must be the same vertical size. No button must be larger than another
- All inputs must be have a small border radius
- Input font must be `1rem`, normal weight, normal letter spacing, normal register (i.e. neither uppercase, nor lowercase)
- Non-initial words SHOULD NOT be capitalized, e.g. "Login with my account", not "Login With My Account"
- Primary inputss should have brand color background, no visible border, white text
- Secondary inputs should have transparent or white background, `2px solid GREY-3` border, black text
- Tertiary inputs should have transparent background, no visible border, `GREY-8` text
- Icon-only inputs must have no border
- In inputs with both icon and text, text margin from icon must be the same as input's horizontal paddings
- Placeholder should be `GREY-6`
- All buttons, inputs and links should visibly react to hover and focus, unless disabled

### Boxes and containers
- All containers must be somehow separated from each other
- Don't overdo shadows. Look at what already existing containers use else
- Larger container - larger spacing and paddings
- Tabs MUST NOT be "glued" to the top of the container. They must be button-like and sit either inside or visibly outside the container
- Lists should be separated by spacing istead of borders or boxes
- Hierarchy should be denoted by spacing. Sibling containers should ideally have smaller spacing than parent containers. Although, when necessary this may be violated
- Boxes should have medium or large border radius

### Other elements
- Images should have medium border radius
