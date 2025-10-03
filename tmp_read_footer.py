from pathlib import Path
text = Path("src/components/site-footer.tsx").read_text(encoding="utf-8")
print(text.encode("unicode_escape").decode("ascii"))
