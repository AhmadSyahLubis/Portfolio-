"""Create lightweight display copies while keeping the original portfolio images."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "assets"
OUTPUT = ROOT / "optimized"

sources = [ROOT / "foto ahmad" / "ahmad_nobg.png"]
sources.extend((ROOT / "sertif").glob("*.png"))
sources.extend((ROOT / "project").rglob("*.png"))

for source in sources:
    relative = source.relative_to(ROOT).with_suffix(".webp")
    target = OUTPUT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        image.thumbnail((1000 if "foto ahmad" in source.parts else 1400 if "project" in source.parts else 700, 2400), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    print(f"{relative}: {target.stat().st_size // 1024} KB")
