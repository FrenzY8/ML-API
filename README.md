# ROUTE
https://testjkt.vercel.app/api/jkt48
# OUTPUT
```json
[
{
    "user": {
      "id": "50a27780-93e7-4e40-8474-60f6e0cca6da",
      "name": "JKT48",
      "username": "jkt48-official",
      "avatar": "https://cdn.idn.media/idnaccount/avatar/500/82baca53b222467300863a9f63b08d1b.webp?v=1731060895"
    },
    "image": "https://cdn.idntimes.com/content-images/post/20241126/50a27780-93e7-4e40-8474-60f6e0cca6da-241126153606.jpg",
    "stream_url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.4idUspKIZskG.m3u8",
    "title": "JKT48 TEMEN MAIN!",
    "slug": "jkt48-temen-main-241126153606",
    "view_count": 0,
    "embed_live": "https://www.idn.app/embed/jkt48-temen-main-241126153606",
    "live_at": "2024-11-26T08:36:15.000Z"
  }
]
```

```js
const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  try {
    const response = await axios.get('https://m.mobilelegends.com/rank');
    const $ = cheerio.load(response.data);

    // Seleksi elemen berdasarkan struktur HTML
    const heroes = [];
    $('.mt-2693412.mt-text span').each((index, element) => {
      const heroName = $(element).text().trim();
      heroes.push(heroName);
    });

    console.log('Heroes:', heroes);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
})();

```

```json
[{"user":{"id":"539f5185-1414-416c-b84d-2ad366b6d60a","name":"Indah JKT48","username":"jkt48_indah","avatar":"https://cdn.idn.media/idnaccount/avatar/500/909548d57b8bc9ce5b7784107fa36858.webp?v=1731411028"},"image":"https://cdn.idntimes.com/content-images/post/20241125/539f5185-1414-416c-b84d-2ad366b6d60a-241125193953.jpg","stream_url":"https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oKpAUHJSe6RM.m3u8","title":"Ayo ngobrol bareng!","slug":"ayo-ngobrol-bareng-241125193953","view_count":0,"live_at":"2024-11-25T12:40:03.000Z"}]
```

```markdown
# IDN API Live JKT48

Repositori ini berisi kode sumber untuk API yang menyediakan informasi live streaming dari JKT48.

## Penggunaan

1. **Instalasi**

   Pastikan Anda telah menginstal dependensi yang diperlukan:

   ```bash
   npm install
   ```

2. **Menjalankan API**

   Jalankan API dengan perintah:

   ```bash
   npm start
   ```

   API akan berjalan di `http://localhost:3000` secara default.

3. **Endpoint Tersedia**

   Mendapatkan informasi live streaming JKT48:

   ```
   GET http://localhost:3000/api/jkt48
   ```

   Pastikan untuk mengganti `http://localhost:3000` dengan URL aktual jika perlu.

## Kontribusi

1. *Fork* repositori.
2. Buat *branch* baru: `git checkout -b fitur_anda`.
3. Lakukan perubahan dan *commit*: `git commit -m 'Menambahkan fitur baru'`.
4. *Push* ke *branch* Anda: `git push origin fitur_anda`.
5. Buat *pull request*.

## Lisensi

Dilisensikan di bawah Lisensi MIT - lihat [LISENSI](LICENSE.md) untuk detail lebih lanjut.
```
MIT License

Copyright (c) 2024 Hanif

Izin ini diberikan secara bebas, tanpa biaya, kepada siapa pun yang memperoleh salinan perangkat lunak ini dan file dokumentasi terkait (Perangkat Lunak), untuk memperoleh izin tanpa batasan, termasuk tanpa batasan hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan dari Perangkat Lunak, dan untuk mengizinkan orang yang diberikan Perangkat Lunak ini untuk melakukannya, dengan syarat-syarat sebagai berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini akan disertakan dalam semua salinan atau bagian penting dari Perangkat Lunak.

PERANGKAT LUNAK INI DISEDIAKAN "APA ADANYA", TANPA JAMINAN APA PUN, BAIK TERSIRAT MAUPUN TERSURAT, TERMASUK TAPI TIDAK TERBATAS PADA JAMINAN KESESUAIAN UNTUK TUJUAN TERTENTU DAN NONPELANGGARAN. DALAM KEADAAN APA PUN, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB ATAS KLAIM, KERUSAKAN ATAU TANGGUNG JAWAB LAIN, BAIK DALAM SUATU TINDAKAN PERDATA, KEWAJIBAN, ATAU LAINNYA, YANG TIMBUL DARI, KELUAR DARI, ATAU BERHUBUNGAN DENGAN PERANGKAT LUNAK ATAU PENGGUNAAN ATAU PENGGUNAAN PERANGKAT LUNAK LAINNYA.
