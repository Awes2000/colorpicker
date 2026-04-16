# Colorpicker

A browser-based random HSL color palette generator. Generates 99 unique color swatches on page load - click any swatch to instantly copy its HSL value to your clipboard.

## Features

- Generates 99 random HSL color swatches on load
- Click a swatch to copy its HSL value to clipboard
- Page title updates to display the copied color code
- Built with OOP JavaScript (ES6 classes)
- Styled with SCSS

## Tech Stack

- Vanilla JavaScript (ES6 classes)
- SCSS (compiled to CSS)
- HTML5

## How It Works

Three classes drive the app:

| Class | Responsibility |
|---|---|
| HSLGenerator | Generates random hue (0-360), saturation (11-79%), and lightness (11-100%) values |
| ColorList | Creates and renders a ul container in the DOM |
| ColorCard | Renders each color swatch and handles click-to-copy behavior |

On load, 99 ColorCard instances are created using fresh HSLGenerator values.

## Running Locally

If you want to edit the SCSS, compile it first:

```bash
npx sass scss/style.scss css/style.css --watch
```

Then open index.html directly in a browser - no server needed.