"""Create lightweight display copies while keeping the original portfolio images."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "assets"
OUTPUT = ROOT / "optimized"

sources = []
sources.extend((ROOT / "sertif").glob("*.png"))
sources.extend((ROOT / "project").rglob("*.png"))

for source in sources:
    relative = source.relative_to(ROOT).with_suffix(".webp")
    target = OUTPUT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        max_width = 1400 if "project" in source.parts else 700
        image.thumbnail((max_width, 2400), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    print(f"{relative}: {target.stat().st_size // 1024} KB")

# Optimize portrait
portrait = ROOT / "portrait" / "ahmad-formal-transparent.png"
if portrait.exists():
    target = OUTPUT / "portrait" / "ahmad-formal-transparent.webp"
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(portrait) as image:
        image.thumbnail((1200, 2400), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    print(f"portrait: {target.stat().st_size // 1024} KB")

# Optimize pattern
pattern = ROOT / "patterns" / "ornamental-scroll.png"
if pattern.exists():
    target = OUTPUT / "patterns" / "ornamental-scroll.webp"
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(pattern) as image:
        image.thumbnail((800, 800), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=72, method=6)
    print(f"pattern: {target.stat().st_size // 1024} KB")

# Optimize logos
for logo in (ROOT / "logos").glob("*.png"):
    target = OUTPUT / "logos" / logo.with_suffix(".webp").name
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(logo) as image:
        image.thumbnail((300, 300), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    print(f"logo {logo.name}: {target.stat().st_size // 1024} KB")
