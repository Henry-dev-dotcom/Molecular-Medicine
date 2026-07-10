# Scroll-to-Top QA Report

## Result

Passed for deployment.

## Checks completed

- Confirmed the `#scrollToTop` button is present once in `index.html`.
- Confirmed the button has a descriptive accessible name and a visible keyboard focus style.
- Confirmed it is hidden at the top of the page and becomes available after 480 pixels of scrolling.
- Confirmed the click handler uses `window.scrollTo` to return to the page top.
- Confirmed smooth scrolling is disabled when the user requests reduced motion.
- Confirmed mobile sizing and fixed lower-right positioning are defined.
- Confirmed the control is hidden in print layouts.
- Confirmed JavaScript and service-worker syntax with Node.js.
- Confirmed all HTML IDs and local deployment references with the project QA script.
- Updated the service-worker cache name so GitHub Pages users receive the new assets.

## Environment note

A live headless-browser interaction test could not be executed because this QA environment blocks both local HTTP and `file://` page navigation. Static validation, JavaScript syntax validation and deployment-reference validation all passed.
