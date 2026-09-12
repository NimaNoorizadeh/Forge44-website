# Forge 44 design direction

The converted workshop is the central idea. Typography behaves like building signage, while photography documents the work that happens inside.

- Palette: Forge Black #171715, Chalk #F1F0EA, Raw Steel #A7AAA7, Concrete #D1CEC5, Weight Plate Blue #244E78.
- Typography: Barlow Condensed at 600–700 for headlines and Barlow at 400–600 for body and controls. Left alignment and short line lengths.
- Layout: asymmetric opening, alternating broad photographs and open text areas. Timetable columns encode days; membership rows enable comparison.
- Images: natural photographic texture with modest desaturation; responsive crops preserve equipment and athletes. No decorative image card collection.
- Spacing: 24–80px horizontal gutters and 70–128px section spacing, with tighter spacing within related content.
- Interaction: visible keyboard focus, native modal focus containment, accessible menu button, native disclosures, understated hover states and reduced-motion support.

Hero studies:

```text
Chosen desktop                         Mobile
+-----------------+----------------+   +-------------------+
| headline        | UNIT           |   | compact navigation|
|                 |      44        |   | headline          |
| supporting copy | gym photograph |   | copy + actions    |
| actions         |                |   +-------------------+
| positioning     | caption        |   | UNIT 44 photograph|
+-----------------+----------------+   +-------------------+

Rejected: full-bleed image with centered headline and stacked centered buttons.
```

## Pre-build critique

The requested palette and condensed type are appropriate but could become a generic gym site. Avoid neon, performance statistics, decorative serial numbers and repeated feature cards. Unit 44 is the sole oversized number and explicitly identifies the workshop. Use quiet, useful structures below the hero; reserve the blue field for the closing invitation.
