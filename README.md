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
