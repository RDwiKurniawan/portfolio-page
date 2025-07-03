Markdown

# Portfolio Page Builder (React.js)

Aplikasi pembuat halaman portofolio sederhana yang dibangun dengan React.js. Aplikasi ini memungkinkan pengguna membuat portofolio dinamis yang menampilkan riwayat pekerjaan, dengan kemampuan kustomisasi seperti gambar latar belakang dan profil, detail profil singkat, dan daftar pengalaman kerja. Aplikasi ini juga menyediakan pratinjau real-time dan menyimpan data secara persisten di penyimpanan lokal browser.

## Fitur Utama

- **Pembuatan Portofolio Dinamis:** Pengguna dapat menambah, mengedit, dan menghapus detail portofolio mereka.
- **Kustomisasi Gambar:** Unggah gambar latar belakang (cover) dan gambar profil (avatar) untuk personalisasi halaman portofolio.
- **Profil Singkat:** Bagian untuk menampilkan nama, titel pekerjaan, dan deskripsi singkat tentang pengguna.
- **Bagian Pengalaman Kerja:** Tambah hingga 10 item portofolio, masing-masing memuat posisi pekerjaan, nama perusahaan, deskripsi singkat, dan tanggal mulai serta tanggal akhir pekerjaan.
- **Pratinjau Real-time:** Lihat perubahan yang Anda buat pada formulir secara instan di panel pratinjau tanpa perlu menyimpan terlebih dahulu.
- **Penyimpanan Data Persisten:** Data portofolio disimpan secara persisten di `localStorage` browser, sehingga data tetap ada saat form dibuka kembali atau saat browser ditutup dan dibuka lagi.
- **Validasi Formulir:** Setiap input data divalidasi untuk memastikan integritas dan format yang benar.
- **Desain Responsif:** Tampilan website dapat berjalan dengan baik di berbagai ukuran layar, termasuk desktop, tablet, dan mobile.

## Tumpukan Teknologi

- **Framework:** React.js (menggunakan Create React App)
- **Bahasa Pemrograman:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Routing:** `react-router-dom`
- **Manajemen Formulir:** `react-hook-form`
- **Validasi Data:** `zod` (dikombinasikan dengan `@hookform/resolvers`)
- **Penyimpanan Data Persisten:** Browser `localStorage` (melalui custom hook `useLocalStorage`)
- **ID Unik:** `nanoid` (untuk menghasilkan ID unik untuk setiap item portofolio)

## Struktur Proyek

portfolio-page-builder/
├── public/ // File statis (index.html, dll.)
├── src/
│ ├── App.js // Komponen utama aplikasi, menangani routing
│ ├── index.js // Titik masuk aplikasi React
│ ├── components/ // Komponen UI yang dapat digunakan kembali
│ │ ├── common/ // Komponen generik (Button, Input, Textarea, dll.)
│ │ │ ├── Button.js
│ │ │ ├── Input.js
│ │ │ └── Textarea.js
│ │ ├── layout/ // Komponen tata letak (Header, Footer)
│ │ │ ├── Header.js
│ │ │ └── Footer.js
│ │ ├── editor/ // Komponen khusus untuk tampilan editor
│ │ │ ├── ImageUploader.js
│ │ │ ├── PortfolioItemEditor.js
│ │ │ ├── PortfolioItemsSection.js
│ │ │ └── ProfileForm.js
│ │ └── viewer/ // Komponen khusus untuk tampilan pratinjau
│ │ ├── PortfolioCard.js
│ │ └── PortfolioViewer.js
│ ├── contexts/ // React Context API untuk manajemen state global
│ │ └── PortfolioContext.js
│ ├── hooks/ // Custom React Hooks
│ │ └── useLocalStorage.js
│ ├── lib/ // Fungsi utilitas (validasi data, dll.)
│ │ └── validation.js
│ ├── pages/ // Views/Halaman untuk react-router-dom
│ │ ├── EditPortfolioPage.js
│ │ └── ViewPortfolioPage.js
│ └── index.css // Global CSS (direktif Tailwind CSS di sini)
├── .gitignore // File yang akan diabaikan oleh Git
├── package.json // Metadata proyek dan daftar dependensi
├── jsconfig.json // Konfigurasi JavaScript untuk editor/linter
├── tailwind.config.js // Konfigurasi Tailwind CSS
└── postcss.config.js // Konfigurasi PostCSS

## Skema Data

Data portofolio disimpan sebagai string JSON di `localStorage` browser di bawah kunci `portfolioBuilderData`. Struktur umum data yang disimpan adalah sebagai berikut:

```javascript
const portfolioData = {
  backgroundImg: "string_base64_gambar_atau_null", // Gambar cover/background dalam format Base64
  profileImg: "string_base64_gambar_atau_null",   // Gambar profil/avatar dalam format Base64
  profile: {
    name: "Nama Anda",            // Nama lengkap pengguna
    title: "Titel Pekerjaan",     // Titel/posisi pekerjaan pengguna
    description: "Deskripsi singkat tentang diri Anda..." // Deskripsi singkat
  },
  portfolioItems: [ // Array objek pengalaman kerja (minimal 0, maksimal 10)
    {
      id: "unique_id_string", // ID unik untuk setiap item (dihasilkan oleh nanoid)
      position: "Software Engineer", // Posisi pekerjaan
      company: "Tech Solutions Inc.", // Nama perusahaan
      description: "Developed and maintained web applications...", // Deskripsi singkat pekerjaan
      startDate: "2022-01-15", // Tanggal mulai pekerjaan (format YYYY-MM-DD)
      endDate: "2024-05-30"    // Tanggal akhir pekerjaan (format YYYY-MM-DD)
    },
    // ... item portofolio lainnya
  ]
};
Cara Menjalankan Aplikasi
Ikuti langkah-langkah di bawah ini untuk menginisialisasi dan menjalankan aplikasi di lingkungan pengembangan lokal Anda:

Kloning repositori:
Buka terminal atau Git Bash, lalu jalankan:

Bash

git clone [https://github.com/RDwiKurniawan/portfolio-page.git](https://github.com/RDwiKurniawan/portfolio-page.git)
cd portfolio-page
(Ganti https://github.com/RDwiKurniawan/portfolio-page.git dengan URL repositori Anda jika berbeda, atau sesuaikan path cd jika Anda sudah memiliki folder proyek lokal.)

Instal dependensi:
Pastikan Anda berada di direktori proyek portfolio-page-builder (atau nama folder lokal Anda), lalu jalankan:

Bash

npm install
Ini akan mengunduh semua pustaka dan paket yang diperlukan.

Jalankan server pengembangan:
Setelah semua dependensi terinstal, jalankan perintah ini untuk memulai aplikasi:

Bash

npm start
Akses di browser:
Aplikasi akan secara otomatis terbuka di browser default Anda pada alamat http://localhost:3000.

Perubahan Desain dari Referensi Figma
Meskipun fungsionalitas inti dan tata letak utama berpegang pada desain Figma yang disediakan, beberapa perubahan dan penambahan dilakukan untuk meningkatkan UI/UX, memberikan pengalaman yang lebih lengkap, dan memenuhi persyaratan tambahan:

Navigasi Global (Header):

Perubahan: Menambahkan bilah navigasi persisten di bagian atas halaman yang berisi tautan ke halaman "Edit Portfolio" dan "View Portfolio".

Alasan: Memfasilitasi navigasi yang jelas dan mudah antara dua halaman utama aplikasi, membuat pengalaman pengguna lebih lancar dan aplikasi terasa lebih lengkap.

Footer:

Perubahan: Menambahkan footer dasar di bagian bawah halaman.

Alasan: Praktik web standar yang memberikan kesan kelengkapan dan profesionalisme pada sebuah website.

Tombol Minimize/Maximize Panel (Figma Note 1):

Perubahan: Mengimplementasikan tombol toggle di pojok kanan atas setiap panel (Editor dan Preview) untuk memperluas atau menyembunyikan panel tersebut. Ketika satu panel dimaksimalkan, panel lainnya akan disembunyikan.

Alasan: Sesuai dengan catatan Figma "minimize dan maksimize", memungkinkan pengguna untuk mengoptimalkan ruang kerja mereka, baik fokus pada pengisian formulir maupun pada pratinjau penuh.

Pratinjau Real-time (Figma Note 2):

Perubahan: Pratinjau di panel samping diperbarui secara otomatis setiap kali ada perubahan input pada formulir, tanpa perlu mengklik tombol "Simpan Perubahan" terlebih dahulu.

Alasan: Mengimplementasikan catatan Figma "Preview diberikan secara 'real-time', tanpa perlu melakukan save terlebih dahulu", memberikan umpan balik instan kepada pengguna saat mereka mengedit portofolio mereka.

Hapus Item Portofolio (Figma Note 3):

Perubahan: Menambahkan tombol "X" yang jelas pada setiap item pengalaman kerja di bagian editor untuk memungkinkan pengguna menghapus item tersebut.

Alasan: Mengimplementasikan catatan Figma "Delete portfolio card item", sebuah fitur krusial untuk manajemen entri portofolio yang efisien.

Desain Halaman View Portfolio:

Perubahan: Halaman View Portfolio telah dirancang sebagai tampilan mandiri yang bersih dan terstruktur untuk menampilkan portofolio yang sudah jadi, bukan hanya sekadar panel pratinjau. Ini mencakup penempatan gambar cover dan profil yang lebih menonjol serta presentasi item portofolio yang elegan.

Alasan: Untuk memberikan tampilan portofolio yang dapat dibagikan dan profesional, sesuai dengan kebutuhan halaman "View Portfolio" yang terpisah.

Validasi Ukuran Gambar:

Perubahan: Menambahkan validasi sederhana pada unggahan gambar untuk membatasi ukuran file maksimal 2MB.

Alasan: Mencegah masalah kinerja dan penggunaan localStorage yang berlebihan, karena gambar Base64 bisa sangat besar.

Pesan Default & Placeholder:

Perubahan: Formulir diinisialisasi dengan nilai default atau placeholder untuk memandu pengguna.

Alasan: Meningkatkan pengalaman pengguna pertama kali dan membuat formulir lebih intuitif.
```
