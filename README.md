# Dikari Strategic

Migrasi `index.html` menjadi **Next.js App Router + React**. HTML asli dan folder `assets/` disimpan untuk referensi; aplikasi memakai salinan aset di `public/assets/`.

## Menjalankan

Memerlukan Node.js 20.9 atau lebih baru.

```sh
npm install
npm run dev
```

Buka <http://localhost:3000>.

Di PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd install` dan `npm.cmd run dev`.

## Produksi

```sh
npm run build
npm start
```

Build memakai `output: "export"` dan menghasilkan folder `out/`. `npm start` menyajikan folder tersebut untuk preview lokal, karena `next start` tidak digunakan untuk static export.

Jika memakai Bun:

```sh
bun install
bun run build
bun run start
```

Preview lokal tetap memakai Node.js melalui script `start`.

## Deploy ke Cloudflare Pages

Gunakan pengaturan build berikut:

| Pengaturan             | Nilai                                                 |
| ---------------------- | ----------------------------------------------------- |
| Framework preset       | Next.js (Static HTML Export)                          |
| Build command          | `bun run build` atau `bunx next build`                |
| Build output directory | `out`                                                 |
| Root directory         | Kosong, jika `package.json` berada di root repository |

Commit dan push perubahan konfigurasi, lalu deploy ulang. Folder `out/` dihasilkan oleh build Cloudflare dan tidak perlu di-commit.

Interaksi React, arena, game, dan formulir brief berjalan di browser dan tetap tersedia pada static export. Jika nanti menambah fitur yang memerlukan server Next.js, seperti Server Actions atau rendering per request, konfigurasi hosting perlu disesuaikan.

## Struktur

- `app/page.jsx`: halaman utama.
- `app/layout.jsx`: metadata, viewport, dan font.
- `app/globals.css`: CSS asli, termasuk font Departure Mono dan logo yang tertanam; path aset disesuaikan ke `/assets/`.
- `components/`: komponen tiap bagian halaman. Tab layanan, filter karya, pembuka gambar, navigasi mobile, dan form memakai state React.
- `lib/experience.js`: logika asli arena Matter.js, jejak pixel, animasi manifesto, quest, HUD, maskot, mini game, dan kode Konami.
- `lib/browser-scope.js`: pembersihan event listener, timer, observer, dan animasi ketika komponen dilepas atau Fast Refresh.
- `lib/use-brief.js`: formulir, preview brief, dan clipboard beserta fallback seleksi teks.
- `public/assets/`: gambar, logo, dan sprite untuk aplikasi Next.js.

Arena memakai `matter-js` **0.19.0**, sama dengan HTML asli, melalui paket lokal. Google Fonts tetap memakai keluarga dan bobot yang sama dengan sumber asli dan memerlukan koneksi internet.

Form mengikuti perilaku asli: membuat dan menyalin brief untuk dikirim sendiri ke alamat email Dikari.

## Memeriksa kesesuaian

```sh
npm run build
npm test
```

Tes memerlukan Google Chrome terpasang. Playwright menjalankan aplikasi produksi pada port `3100` dan HTML asli pada port `3101`. Tes membandingkan interaksi keduanya serta screenshot per bagian di lebar 1440, 768, dan 390 piksel. Canvas yang acak dan maskot berkedip dikecualikan dari perbandingan screenshot dan diperiksa melalui pengujian interaksi.

`scripts/reference-server.mjs` hanya digunakan oleh tes; HTML referensi tidak disajikan oleh aplikasi produksi.
