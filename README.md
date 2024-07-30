# History of the Internet Gallery

Welcome to the **History of the Internet Gallery**, a virtual reality experience built with A-Frame. Explore the milestones that have shaped the internet as we know it today!

## Features

- **Interactive VR Gallery**: Navigate through a virtual corridor showcasing important milestones in the history of the internet.
- **Mobile-Friendly**: Optimized for mobile devices with touch controls.
- **Engaging UI**: Modern, responsive design for an immersive experience.
- **Loading Screen**: Custom loading screen with animated dots and a joke to entertain users while the experience loads.

## Live Demo

Experience the History of the Internet Gallery live at [https://internet-history.zigao.wang/](https://internet-history.zigao.wang/).

## Usage

1. **Start the Experience:**

   - Click the "Start Experience" button on the welcome screen.

2. **Navigate the Gallery:**

   - Use touch controls on mobile devices or standard WASD controls on desktop to move through the gallery.
   - Look around by moving your device or using the mouse.

## Components

### `twoway-motion`

A custom A-Frame component for two-way motion control, optimized for mobile devices.

**Schema:**

- `speed`: Speed of movement.
- `threshold`: Threshold angle for looking down to move backward.
- `nonMobileLoad`: Whether to load on non-mobile platforms.
- `removeCheckpoints`: Whether to hide checkpoint controls.
- `chatty`: Whether to log debug information.

**Usage:**

```html
<a-entity twoway-motion="speed: 35" camera look-controls wasd-controls position="1 1.6 4"></a-entity>
```

**Script:**

The script is located in `scripts/twoway-motion.js` and is registered within the `index.html`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with 💛 by [Zigao Wang](https://zigao.wang)

Feel free to open issues or submit pull requests for improvements. Happy exploring!