# Tools Used

No additional tools were installed. All assets were downloaded using `curl` (built-in on macOS).

## Asset Sources

- **Images**: Downloaded from `static.wixstatic.com` via curl
- **Video**: Downloaded from `video.wixstatic.com` (720p MP4) via curl
- **Fonts**: Loaded via Google Fonts CDN (no local install needed — see note below)

## Font Note

The Wix site uses:
- **Impact** (system font) for the hero "BORN ON" heading
- **Trajan Pro** for section headings — this is an Adobe/licensed font. We use Cinzel (Google Fonts) as the closest free match, falling back to Georgia.
- **Wix Madefor Text** for body — system-available via Wix CDN. Falls back to Segoe UI / Helvetica / Arial.

If Trajan Pro licensing is available, add it as a local @font-face in css/style.css.
