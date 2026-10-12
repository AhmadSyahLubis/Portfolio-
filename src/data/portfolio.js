export const profile = {
  name: 'Ahmad Syah Lubis',
  role: 'Software Engineer',
  location: 'Medan, Indonesia',
  email: 'ahmadsyahlubis62@gmail.com',
  linkedin: 'https://linkedin.com/in/ahmadsyahlubis',
  github: 'https://github.com/ahmadsyahlubis',
  instagram: 'https://www.instagram.com/ahmadsyah_62/',
  cv: '/assets/Ahmad_Syah_Lubis_CV.pdf',
};

export const displayImage = (path) => path.replace('/assets/', '/assets/optimized/').replace(/\.png$/, '.webp');

export const displayLogo = (path) => path.replace('/assets/logos/', '/assets/optimized/logos/').replace(/\.png$/, '.webp');

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
    internal: true,
    screenshots: [
      { src: '/assets/project/zoom-monitor/login page.png', caption: 'Halaman login' },
      { src: '/assets/project/zoom-monitor/dashboard.png', caption: 'Dashboard monitoring' },
      { src: '/assets/project/zoom-monitor/schedule.png', caption: 'Jadwal meeting' },
      { src: '/assets/project/zoom-monitor/search and booking.png', caption: 'Pencarian dan booking' },
      { src: '/assets/project/zoom-monitor/cloud recording.png', caption: 'Cloud recording' },
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
    internal: true,
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
  { src: '/assets/project/sumut-cerdas/home-culture.png', caption: 'Beranda Sumut Cerdas' },
  { src: '/assets/project/sumut-cerdas/destinations.png', caption: 'Daftar destinasi wisata' },
  { src: '/assets/project/sumut-cerdas/destination-bawomataluo.png', caption: 'Detail Desa Bawomataluo' },
  { src: '/assets/project/sumut-cerdas/heritage-maimun.png', caption: 'Detail Istana Maimun' },
  { src: '/assets/project/sumut-cerdas/events.png', caption: 'Kalender kegiatan Sumut' },
];

export const experience = [
  {
    period: 'Jul 2026 \u2014 Sekarang',
    role: 'Backend Developer',
    company: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Utara',
    logo: '/assets/logos/pemprov-sumut.png',
    description: 'Mengembangkan API Pariwisata pada aplikasi Superrapp Sumatera Utara, mencakup modul destinasi wisata, cagar budaya, kalender event, transportasi, kuliner, dan akomodasi. Mengimplementasikan pencarian lokasi terdekat dengan Redis Geospatial Index.',
  },
  {
    period: 'Feb 2025 \u2014 Sekarang',
    role: 'Full Stack Web Developer',
    company: 'WOKA (Work Assistant) \u00B7 Freelance, Part-time',
    logo: '/assets/logos/woka.png',
    logoVariant: 'wide',
    description: 'Berkolaborasi dari analisis kebutuhan dan perancangan sistem hingga implementasi, deployment, perbaikan, dan pemeliharaan aplikasi web untuk klien.',
  },
  {
    period: 'Des 2025 \u2014 Jun 2026',
    role: 'Programmer Software & IT Support',
    company: 'PT Perkebunan Nusantara IV Regional I \u00B7 MagangHub Batch 3',
    logo: '/assets/logos/palmco.png',
    description: 'Mendukung pengembangan aplikasi internal, pengujian dan perbaikan fitur, serta troubleshooting perangkat, software, dan jaringan.',
  },
];

export const skillGroups = [
  { label: 'Backend & data', skills: ['Laravel', 'Go (Golang)', 'PHP', 'REST API', 'MySQL', 'PostgreSQL', 'Redis'] },
  { label: 'Frontend web', skills: ['React', 'Astro', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { label: 'Mobile', skills: ['Flutter', 'Dart', 'State Management', 'Responsive UI'] },
  { label: 'Engineering practices', skills: ['Docker', 'Git / GitHub', 'Testing & debugging', 'CI/CD', 'Deployment'] },
];

export const certifications = [
  { title: 'Assistant Web Developer', issuer: 'BNSP', image: '/assets/sertif/BNSP Web Development.png', document: '/assets/sertif/BNSP Web Development.pdf' },
  { title: 'MagangHub Batch 3', issuer: 'PTPN IV Regional 1', image: '/assets/sertif/sertif maganghub.png', document: '/assets/sertif/sertif maganghub.pdf' },
  { title: 'Database Course', issuer: 'Multimatics \u00B7 ITS', image: '/assets/sertif/multimatics-database-AhmadSyahLubis.png', document: '/assets/sertif/multimatics-database-AhmadSyahLubis.pdf' },
];
