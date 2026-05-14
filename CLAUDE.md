# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Facebook clone frontend implementation using vanilla HTML, CSS, and JavaScript. The project consists of three files:

- `index.html` - Main HTML structure with semantic markup
- `style.css` - CSS styles for layout, colors, and responsive design
- `script.js` - JavaScript for interactivity (post creation, like/unlike, XSS protection)

The application mimics a basic Facebook feed with:
- Top navigation bar
- Left sidebar with navigation links
- Main content area with post creation and feed
- Right sidebar with trending topics and friends

## Development Commands

Since this is a static frontend project with no build process, the commands are straightforward:

### Run the application
```bash
# Open the HTML file in your default browser
start facebook-clone\index.html
# Or on macOS/Linux:
open facebook-clone/index.html
```

### Edit files
```bash
# Edit the main HTML file
code facebook-clone/index.html

# Edit the CSS file
code facebook-clone/style.css

# Edit the JavaScript file
code facebook-clone/script.js
```

### Test the application
There are no automated tests configured. To test functionality:
1. Open `index.html` in a browser
2. Try creating a new post by typing in the textarea and pressing Enter
3. Click the Like button to toggle between Like/Unlike

### Deploy (if needed)
This is a static site. To deploy:
- Copy the entire `facebook-clone` folder to a web server
- Or use a static site hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Code Architecture

### HTML Structure
The HTML follows a semantic, component-based structure:

```html
<body>
  <nav class="navbar">...</nav>
  <div class="container">
    <aside class="sidebar-left">...</aside>
    <main class="main-content">...</main>
    <aside class="sidebar-right">...</aside>
  </div>
</body>
```

### CSS Architecture
- Uses CSS Flexbox for layout (navbar, container, sidebars, main content)
- Mobile-first responsive design with a media query breakpoint at 1024px
- Variables are not used; colors and spacing are hardcoded (could be improved)
- BEM-like naming convention for classes

### JavaScript Architecture
- Vanilla JavaScript with no external dependencies
- Event delegation used for handling like button clicks
- DOM manipulation for creating new posts
- XSS protection via `escapeHTML()` function
- Time formatting for relative timestamps

## Common Development Tasks

### Adding new features
1. Update `index.html` to add new HTML elements
2. Add corresponding CSS in `style.css`
3. Add JavaScript logic in `script.js` if interactivity is needed

### Modifying existing features
- Navbar: edit `.navbar`, `.nav-left`, `.nav-right` in CSS
- Sidebar: edit `.sidebar-left`, `.sidebar-right` in CSS
- Posts: edit `.post`, `.post-header`, `.post-content`, `.post-actions` in CSS and JavaScript

### Responsive adjustments
The breakpoint is at `max-width: 1024px`. Adjust the media query in `style.css` if different responsiveness is needed.

### Improving performance
- Consider adding CSS custom properties (variables) for colors and spacing
- Minify CSS and JavaScript for production
- Add lazy loading for images if needed

## Tips for Development

- The project is intentionally simple and uses vanilla technologies
- No build tools or package managers are required
- All three files are in the same directory; relative paths work as expected
- The JavaScript is loaded at the end of the body to ensure DOM is ready
- No external frameworks means you have full control but also full responsibility for all code

## Limitations

- No backend or data persistence (posts disappear on refresh)
- No user authentication
- No real comments or shares (only like/unlike implemented)
- No image uploads (uses placeholder images)
- No error handling for edge cases

## Future Improvements

If extending this project, consider:
1. Adding a simple backend (Node.js, Python, etc.) for persistence
2. Implementing real comment functionality
3. Adding image upload capabilities
4. Using a framework like React or Vue for better state management
5. Adding CSS variables for easier theming
6. Implementing dark mode toggle
7. Adding real user authentication

## Support and Documentation

- The code is self-documenting with comments
- For CSS questions, refer to the class names in HTML and their corresponding styles
- For JavaScript questions, refer to the function comments and event listeners

This project is intended as a learning exercise or prototype. For production use, significant architectural changes would be needed.