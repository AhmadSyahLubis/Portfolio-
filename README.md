# Portfolio Ahmad Syah Lubis

Portfolio statis berbasis Astro untuk menampilkan profil, proyek, pengalaman, keahlian, dan sertifikasi Ahmad Syah Lubis.

## Jalankan lokal

```sh
npm install
npm run dev
```

Periksa dan buat hasil produksi:

```sh
npm run check
npm run build
npm run preview
```

Hasil build berada di `dist/` dan dapat di-host sebagai situs statis. Konten utama berada di `src/data/portfolio.js`; halaman ada di `src/pages/index.astro`, komponen proyek di `src/components/ProjectCard.astro`, dan gaya di `src/styles/global.css`. Screenshot serta dokumen sertifikasi berada di `public/assets/`.

CV dipakai sebagai referensi konten dan tidak disalin ke situs publik.

Gambar yang ditampilkan memakai salinan WebP ringan di `public/assets/optimized/`. File PNG asli tetap tersedia di `public/assets/`. Untuk membuat ulang salinan tersebut, jalankan `python scripts/optimize_images.py` dengan Pillow terpasang.
