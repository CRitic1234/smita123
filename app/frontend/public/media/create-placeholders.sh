#!/bin/bash

# Script to create placeholder SVG images for the love letter
# Run this if you want to test the app before adding real media

cd /app/frontend/public/media

# Create placeholder images using SVG
cat > image-1.svg << 'EOF'
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FFE5E5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    First Memory
  </text>
  <text x="50%" y="60%" font-family="Arial" font-size="20" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    (Replace with your photo)
  </text>
</svg>
EOF

cat > image-2.svg << 'EOF'
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FFE5E5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    Happy Memory 1
  </text>
</svg>
EOF

cat > image-3.svg << 'EOF'
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FFE5E5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    Happy Memory 2
  </text>
</svg>
EOF

cat > image-4.svg << 'EOF'
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FFE5E5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    Happy Memory 3
  </text>
</svg>
EOF

cat > image-5.svg << 'EOF'
<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="800" fill="#FFE5E5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    Portrait of Smita
  </text>
  <text x="50%" y="60%" font-family="Arial" font-size="20" fill="#B76E79" text-anchor="middle" dominant-baseline="middle">
    💝
  </text>
</svg>
EOF

echo "✅ Placeholder SVG images created!"
echo "📝 Note: Replace these with your actual images (PNG/JPG format recommended)"
