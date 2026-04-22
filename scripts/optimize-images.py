"""
Optimize landing page images: resize + convert to WebP.
Targets display dimensions × 2 (for retina).
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "images"

# (input, output, max_width, quality)
JOBS = [
    ("hero-product.png", "hero-product.webp", 1200, 82),
    ("white-label-example.png", "white-label-example.webp", 1200, 82),
    ("die-alterslue-cover.jpg", "die-alterslue-cover.webp", 700, 82),
    ("lara-portrait.jpg", "lara-portrait.webp", 600, 82),
    ("lonvy-logo.png", "lonvy-logo.webp", 600, 90),
]


def optimize(input_name: str, output_name: str, max_width: int, quality: int):
    src = ROOT / input_name
    dst = ROOT / output_name
    if not src.exists():
        print(f"  skip (missing): {input_name}")
        return

    img = Image.open(src)
    # Preserve alpha for PNG → WebP
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "A" in img.mode else "RGB")

    # Resize if wider than max
    if img.width > max_width:
        ratio = max_width / img.width
        new_size = (max_width, round(img.height * ratio))
        img = img.resize(new_size, Image.LANCZOS)

    img.save(dst, format="WEBP", quality=quality, method=6)
    before = src.stat().st_size
    after = dst.stat().st_size
    print(
        f"  {input_name} → {output_name}: "
        f"{before / 1024:.0f} KB → {after / 1024:.0f} KB "
        f"({100 * after / before:.0f}%)"
    )


def main():
    print("Optimizing images:")
    for job in JOBS:
        optimize(*job)
    print("Done.")


if __name__ == "__main__":
    main()
