<div align="center">

# ⚡ Quis SMP Negri 12 Yogyakarta Voxpayana
### Cyber Challenge: Klik atau Skip? — Think Before You Click!

Aplikasi web kuis interaktif *real-time* berbasis WebSocket untuk kegiatan edukasi keamanan digital bagi siswa **SMP Negeri 12 Yogyakarta (Voxpayana)**.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=for-the-badge)](LICENSE)
[![Design: Neo-Brutalism](https://img.shields.io/badge/Design-Neo--Brutalism-FFE600.svg?style=for-the-badge&logoColor=black)](https://github.com/errymaricha/quizCyberVoxpayana)
[![SMP Negeri 12 Yogyakarta](https://img.shields.io/badge/School-SMPN%2012%20Yogyakarta-00F0FF.svg?style=for-the-badge)](https://smpn12jogja.sch.id/)

---

</div>

## 📌 Sumber Asli (Upstream Attribution)

Proyek ini dibangun dan dimodifikasi dari repositori *open-source*:  
🔗 **[Lawndlwd/quizz](https://github.com/Lawndlwd/quizz)** (Dilisensikan di bawah **MIT License**).  
Terima kasih kepada pengembang aslinya atas arsitektur kuis *real-time* yang kokoh berbasis **Node.js, Express, Socket.IO, React, Vite, dan SQLite**.

---

## 🛠️ Modifikasi & Kustomisasi yang Dilakukan

Aplikasi ini telah mengalami perombakan besar baik dari sisi antarmuka (*UI/UX*), identitas sekolah, maupun konten soal:

### 1. Perombakan Total UI ke Gaya Neo-Brutalism
- **Bold Outlines**: Menambahkan garis batas hitam pekat (*3px – 4px solid black border*) pada seluruh kartu, tombol, badge stiker, kolom input, dan kartu kuis.
- **Hard Offset Shadows**: Menerapkan bayangan tegas tanpa efek kabur (*blur*) khas Neo-Brutalism (`shadow-[4px_4px_0px_#000]`, `shadow-[6px_6px_0px_#000]`, hingga `shadow-[10px_10px_0px_#000]`).
- **Palet Warna Pop & Kontras Tinggi**:
  - 🟡 **Cyber Yellow (`#FFE600`)**: Tombol aksi utama, PIN display besar, kartu utama, dan podium Juara 1.
  - 🔵 **Electric Cyan (`#00F0FF`)**: Tombol sekunder dan aksen podium Juara 2.
  - 🔴 **Punchy Pink (`#FF3366`)**: Tombol salah/skip, peringatan, dan badge bahaya.
  - 🟢 **Vibrant Green (`#22C55E`)**: Status jawaban benar dan konfirmasi aman.
  - 🟠 **Retro Orange (`#FF8A00`)**: Aksen podium Juara 3.
- **Dot-Grid Canvas**: Latar belakang kanvas krem hangat (`#FFFDF5`) dengan pola titik-titik (*dot grid*) retro poster modern.
- **Interaksi Tombol Taktil**: Efek tombol timbul yang bergeser ke kiri-atas saat di-*hover* dan menekan ke bawah saat di-*klik*.
- **Podium Juara Neo-Brutalism**: Blok podium 3D dengan outline tebal, nomor juara kontras, serta avatar peserta bergaya stiker retro.

### 2. Integrasi Identitas Sekolah (SMP Negeri 12 Yogyakarta)
- Terpasang tulisan resmi: **"Quis SMP Negri 12 Yogyakarta Voxpayana"** dan badge lencana stiker: **"VOXPAYANA • SMPN 12 YOGYAKARTA"**.
- Tampil di seluruh halaman:
  - Halaman Beranda / *Landing Page* (`/`)
  - Halaman Masuk Siswa / *Join Screen* (`/play`)
  - Layar Presentasi Proyektor / *Screen Lobby* (`/screen/:pin`)
  - Layar Hasil Akhir & Podium Juara (`ScreenEnded` & `PodiumScreen`)
  - Bilah Navigasi Pemateri / *Admin Dashboard* (`CreatorNavBar`)

### 3. Bank Soal Edukasi Keamanan Digital (*Pre-Seeded*)
Telah ditanamkan 8 skenario interaktif bertema **"Klik atau Skip?"** langsung ke database lokal SQLite dan file cadangan `quizzes/cyber_challenge_quiz.json`:

| No | Situasi Skenario | Pilihan Jawaban | Jawaban Benar | Penjelasan Singkat |
|:--:|---|:---:|:---:|---|
| **1** | **Diamond Gratis ML** (WhatsApp minta password) | KLIK / SKIP | **SKIP** | Phishing pencurian akun game. |
| **2** | **Link dari Teman di Medsos** (Gaya bahasa kaku) | KLIK / SKIP | **SKIP** | Akun teman diduga telah diretas. |
| **3** | **Permintaan Kode OTP** (Mengaku admin WhatsApp) | KLIK / SKIP | **SKIP** | OTP rahasia, jangan dibagikan ke siapa pun. |
| **4** | **Update Aplikasi Resmi** (Play Store terverifikasi) | KLIK / SKIP | **KLIK** | Aman, unduh pembaruan resmi dari developer sah. |
| **5** | **Story Rumah Kosong** (Share alamat rumah kosong) | KLIK / SKIP | **SKIP** | Oversharing bahaya mengundang aksi pencurian. |
| **6** | **Informasi Sekolah Resmi** (Jadwal di kanal resmi) | KLIK / SKIP | **KLIK** | Mengakses informasi dari sumber resmi sekolah. |
| **7** | **Undangan / Paket File .APK** (File mencurigakan) | KLIK / SKIP | **SKIP** | Bahaya Trojan Sniffer pencuri saldo & SMS. |
| **8** | **Autentikasi Dua Langkah (2FA)** (Perlindungan ganda) | KLIK / SKIP | **KLIK** | Sangat disarankan untuk mengamankan akun. |

---

## 🚀 Panduan Menjalankan

### Persyaratan Sistem
- **Node.js**: Versi 20 atau 22.
- **pnpm**: Versi 9 atau 10 (`npm install -g pnpm`).

### 1. Instalasi Dependensi
```powershell
cd d:\Code\gemini\tts
pnpm install
pnpm approve-builds # pilih semua native module (bcrypt, sqlite3, esbuild)
```

### 2. Konfigurasi Lingkungan (`.env`)
Salin file `.env.example` ke `.env`:
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=cyberschool2024
JWT_SECRET=cyberchallengesupers3cretkunci2024xyzabcdef1234567890
PUBLIC_URL=http://localhost:3000
```
> **Catatan untuk Mode Wi-Fi Lokal (LAN):**  
> Ganti `PUBLIC_URL` dengan alamat IP laptop Anda (misal `http://192.168.1.20:3000`) agar QR Code bisa langsung discan oleh HP siswa.

### 3. Build & Jalankan
```powershell
# Build frontend client
pnpm --filter client build

# Jalankan server
pnpm dev
```

### 4. Akses Aplikasi
- **Pemateri / Proyektor:** [http://localhost:3000/admin](http://localhost:3000/admin) *(User: `admin` | Pass: `cyberschool2024`)*
- **Layar Siswa:** [http://localhost:3000/play](http://localhost:3000/play) atau scan QR Code di proyektor.

---

## ☁️ Rekomendasi Deployment (Railway.app)

Jika laptop pemateri memiliki spesifikasi terbatas (RAM 8 GB), disarankan melakukan deploy ke **Railway.app**:
1. Hubungkan repositori GitHub ini ke **Railway.com**.
2. Masukkan *Variables* (`ADMIN_USERNAME`, `ADMIN_PASSWORD`, `JWT_SECRET`).
3. Railway akan otomatis membangun dan menyediakan URL publik ber-HTTPS yang ringan diakses oleh siswa di kelas tanpa membebani laptop pemateri.

---

## 📄 Lisensi

Proyek ini berada di bawah naungan **[MIT License](LICENSE)** sejalan dengan lisensi repositori asal [Lawndlwd/quizz](https://github.com/Lawndlwd/quizz).
