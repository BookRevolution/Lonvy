"""
Remove the cream background from the Lonvy logo with a color-distance threshold.
Keeps the sage-green symbol and dark navy wordmark, makes the paper background transparent.
"""

import math
from PIL import Image
from pathlib import Path

INPUT = Path("public/images/lonvy-logo-cropped.png")
OUTPUT = Path("public/images/lonvy-logo.png")

# Sample of the cream background colour from the mockup card
BG = (235, 229, 215)
# Euclidean distance thresholds in RGB space
FULLY_TRANSPARENT = 35   # below this distance -> transparent
FULLY_OPAQUE = 80        # above this distance -> keep original

def main():
    img = Image.open(INPUT).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            dist = math.sqrt((r - BG[0]) ** 2 + (g - BG[1]) ** 2 + (b - BG[2]) ** 2)
            if dist < FULLY_TRANSPARENT:
                pixels[x, y] = (r, g, b, 0)
            elif dist < FULLY_OPAQUE:
                # smooth transition
                t = (dist - FULLY_TRANSPARENT) / (FULLY_OPAQUE - FULLY_TRANSPARENT)
                pixels[x, y] = (r, g, b, int(a * t))

    img.save(OUTPUT)
    print(f"Saved {OUTPUT} ({w}x{h})")


if __name__ == "__main__":
    main()
