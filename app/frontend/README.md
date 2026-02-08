# Interactive Love Letter for Smita 💌

An immersive two-part romantic experience featuring a terminal lock screen that unlocks to reveal a beautifully animated love letter.

## 🎯 Features

### Part 1: Terminal Lock Screen
- Retro hacker aesthetic with green monospace text
- Boot sequence animation with typewriter effect
- Password protection (password: `23122003`)
- Matrix-style binary cascade unlock transition

### Part 2: Love Letter Scroll
- Elegant typography with custom fonts (Playfair Display, Lora)
- 4 main content sections with embedded media
- Scroll-based animations using Intersection Observer
- Background music with toggle controls
- Fully responsive design (mobile, tablet, desktop)

## 📁 Project Structure

```
frontend/
├── public/
│   └── media/              # Media files directory
│       ├── image-1.png     # First memory (Polaroid)
│       ├── image-2.png     # Grid photo 1
│       ├── image-3.png     # Grid photo 2
│       ├── image-4.png     # Grid photo 3
│       ├── image-5.png     # Portrait of Smita
│       ├── video-1.mp4     # Funny/candid video
│       ├── video-2.mp4     # Cinematic video
│       └── background-music.mp3  # Romantic instrumental
├── src/
│   ├── components/
│   │   ├── TerminalLockScreen.tsx
│   │   ├── LoveLetterScroll.tsx
│   │   ├── MediaSection.tsx
│   │   └── MusicPlayer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd /app/frontend
yarn install
```

### 2. Add Media Files
Place your media files in `/app/frontend/public/media/` with these exact filenames:
- `image-1.png` - First memory/meeting photo
- `image-2.png`, `image-3.png`, `image-4.png` - Happy photos for grid
- `image-5.png` - Solo portrait of Smita
- `video-1.mp4` - Funny/candid video
- `video-2.mp4` - Cinematic/sentimental video
- `background-music.mp3` - Romantic background music

**Note:** The app includes placeholder error handling, so it will run even if media files are missing. You'll see friendly placeholders indicating where each file should go.

### 3. Start Development Server
```bash
yarn dev
```

The app will be available at the configured URL.

## 🎨 Customization

### Color Palette
Edit `tailwind.config.js` to customize colors:
- `cream`: Background color (#FFFBF5)
- `charcoal`: Text color (#2C2C2C)
- `blush`: Accent pink (#FFE5E5)
- `rosegold`: Interactive elements (#B76E79)
- `terminal`: Green terminal text (#00FF00)

### Typography
Fonts are loaded from Google Fonts:
- Headlines: Playfair Display
- Body: Lora
- Terminal: VT323

### Password
To change the unlock password, edit line 41 in `src/components/TerminalLockScreen.tsx`:
```typescript
if (password === '23122003') {  // Change this value
```

### Love Letter Text
Edit the text in `src/components/LoveLetterScroll.tsx` to customize the message.

## 🎭 User Flow

1. **Load** → Terminal lock screen with boot sequence
2. **Enter Password** → Type `23122003` and press Enter
3. **Unlock** → Binary cascade animation → fade to white
4. **Music Starts** → Background music begins playing
5. **Scroll** → Animated sections reveal as you scroll
6. **Enjoy** → Interactive experience with media and animations

## 📱 Responsive Design

- **Mobile** (320px - 640px): Single column, touch-optimized
- **Tablet** (640px - 1024px): Optimized layout with adjusted grid
- **Desktop** (1024px+): Full experience with all animations

## 🎵 Music Controls

- Music auto-plays after unlock (with fade-in)
- Toggle button in top-right corner
- Loops continuously
- Volume set to 40% by default

## 🛠️ Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Intersection Observer API** for scroll animations
- **Native HTML5** for audio/video (no external libraries)

## 📝 Notes

- All animations use native CSS and Web APIs (no external libraries)
- Media files use lazy loading for performance
- Videos are set to autoplay (muted) and loop
- Graceful error handling for missing media files

## 💝 Credits

Created with love for Smita ❤️

---

**Status:** Ready for deployment
**Last Updated:** February 2026
