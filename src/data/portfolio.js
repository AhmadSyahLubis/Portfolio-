export const profile = {
  name: 'Ahmad Syah Lubis',
  role: 'Software Engineer',
  location: 'Medan, Indonesia',
  email: 'ahmadsyahlubis62@gmail.com',
  linkedin: 'https://linkedin.com/in/ahmadsyahlubis',
  github: 'https://github.com/ahmadsyahlubis',
};

export const displayImage = (path) => path.replace('/assets/', '/assets/optimized/').replace(/\.png$/, '.webp');

export const projects = [
  {
    number: '01',
    title: 'Zoom Monitor',
    category: 'Meeting operations platform',
    summary: 'Sistem terpusat untuk membuat, menjadwalkan, memantau, dan mencari rekaman meeting dari beberapa akun Zoom.',
    impact: 'Alur pembuatan meeting turun dari 3–4 menit menjadi kurang dari 1 menit.',
    contribution: 'Membangun pemeriksaan ketersediaan lintas akun, jadwal terpusat, recurring meeting, dan dashboard cloud recording.',
    stack: ['Laravel 11', 'Livewire 4', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    url: 'https://ptpn3.co.id/zoom-monitor',
    screenshots: [
      { src: '/assets/project/zoom-monitor/dashboard.png', caption: 'Dashboard monitoring' },
      { src: '/assets/project/zoom-monitor/schedule.png', caption: 'Jadwal meeting' },
      { src: '/assets/project/zoom-monitor/search and booking.png', caption: 'Pencarian dan booking' },
      { src: '/assets/project/zoom-monitor/cloud recording.png', caption: 'Cloud recording' },
      { src: '/assets/project/zoom-monitor/login page.png', caption: 'Halaman login' },
    ],
  },
  {
    number: '02',
    title: 'Smart Book / BRM QuickAccess',
    category: 'Internal business portal',
    summary: 'Portal satu pintu untuk akses aplikasi internal, memo dinas, dan administrasi pengguna di lingkungan perusahaan.',
    impact: 'Membuat akses ke aplikasi kerja lebih terpusat bagi Regional Management.',
    contribution: 'Mengembangkan dashboard, pengelolaan memo dan aplikasi, serta otorisasi untuk admin dan pengguna.',
    stack: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'PostgreSQL'],
    url: 'https://ptpn3.co.id/smart-book',
    screenshots: [
      { src: '/assets/project/BRM-QuickAccess/dashboard BRM.png', caption: 'Dashboard Smart Book' },
      { src: '/assets/project/BRM-QuickAccess/memo.png', caption: 'Memo dinas' },
      { src: '/assets/project/BRM-QuickAccess/kelola memo (admin).png', caption: 'Kelola memo' },
      { src: '/assets/project/BRM-QuickAccess/kelola aplikasi (admin).png', caption: 'Kelola aplikasi' },
      { src: '/assets/project/BRM-QuickAccess/kelola user (admin).png', caption: 'Kelola pengguna' },
    ],
  },
];

export const tourismScreenshots = [
  { src: '/assets/project/sumut-cerdas/overview.png', caption: 'Beranda Sumut Cerdas' },
  { src: '/assets/project/sumut-cerdas/destinations.png', caption: 'Daftar destinasi wisata' },
  { src: '/assets/project/sumut-cerdas/destination-bawomataluo.png', caption: 'Detail Desa Bawomataluo' },
  { src: '/assets/project/sumut-cerdas/heritage-maimun.png', caption: 'Detail Istana Maimun' },
  { src: '/assets/project/sumut-cerdas/events.png', caption: 'Kalender kegiatan Sumut' },
];

export const experience = [
  {
    period: 'Jul 2026 — Sekarang',
    role: 'Backend Developer',
    company: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Utara',
    logo: '/assets/logos/diskominfo-sumut.png',
    description: 'Mengembangkan API aplikasi Superrapp untuk pariwisata, cagar budaya, kalender event, transportasi, kuliner, dan akomodasi. Mengimplementasikan pencarian lokasi terdekat dengan Redis Geospatial Index.',
  },
  {
    period: 'Feb 2025 — Sekarang',
    role: 'Full Stack Web Developer',
    company: 'WOKA (Work Assistant) · Freelance',
    description: 'Berkolaborasi dari analisis kebutuhan dan perancangan sistem hingga implementasi, deployment, perbaikan, dan pemeliharaan aplikasi web untuk klien.',
  },
  {
    period: 'Des 2025 — Jun 2026',
    role: 'Programmer Software & IT Support',
    company: 'PT Perkebunan Nusantara IV Regional I · MagangHub Batch 3',
    logo: '/assets/logos/palmco.png',
    description: 'Mendukung pengembangan aplikasi internal, pengujian dan perbaikan fitur, serta troubleshooting perangkat, software, dan jaringan.',
  },
];

export const skillGroups = [
  { label: 'Backend & data', skills: ['Laravel', 'PHP', 'REST API', 'MySQL', 'PostgreSQL', 'Redis', 'Golang'] },
  { label: 'Frontend web', skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'Vite'] },
  { label: 'Mobile', skills: ['Flutter', 'REST API', 'JSON', 'Responsive UI'] },
  { label: 'Workflow', skills: ['Docker', 'UML', 'Testing & debugging', 'Deployment'] },
];

export const certifications = [
  { title: 'Assistant Web Developer', issuer: 'BNSP', image: '/assets/sertif/BNSP Web Development.png', document: '/assets/sertif/BNSP Web Development.pdf' },
  { title: 'MagangHub Batch 3', issuer: 'PTPN IV Regional 1', image: '/assets/sertif/sertif maganghub.png', document: '/assets/sertif/sertif maganghub.pdf' },
  { title: 'Database Course', issuer: 'Multimatics · ITS', image: '/assets/sertif/multimatics-database-AhmadSyahLubis.png', document: '/assets/sertif/multimatics-database-AhmadSyahLubis.pdf' },
  { title: 'TOEFL Score 450', issuer: 'Briton English Education', image: '/assets/sertif/sertif toefl ahmad.png', document: '/assets/sertif/sertif-toefl-landscape.pdf', rotatePreview: true },
];
