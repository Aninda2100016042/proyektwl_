#backend
model
mahasiswamode - mendifinisikan skema entitas mahaiswa yang akan diterima oleh database.
----------------------------------------------------
usermodel - mendifinisikan kebutuhan yang akan dipakai saat login melalui register

controller
logika fungsi yang akan di pakai
fungsi get
kode fungsi get ini - kontroller
crud
---------------------------------------------------
login ketika username dan password cocok akan menghasilkan token
register kita buat kunci baru supaya kita bisa login dengan kunci baru

router
router mendifinsikan link api dari fungsi2 yang ada di controller
router crud
---------------------------------------------------
router login /login
router register /register


server file
dmn km menjalankan express
konek ke mongodb
jalanin MCR-(sebuah tema data)


---------------------------------------------------
login 
username/password bagaimana kita dpt ini? -dengan register
ketika u/p = u/p yg ada di database user 
generated token (key)
key ini akan dibaca oleh front end

auth

u/p = u/p di db - token
pada saat bikin token akan ada fungsi enkripsi
authmiddleware akan ada fungsi dekripsi token (mendapatkan string token yang asli.)
middleware yang digunakan untuk melakukan autentikasi dengan menggunakan JSON Web Tokens (JWT).
Dengan menggunakan middleware ini, kita dapat memastikan bahwa hanya pengguna yang memiliki token JWT yang valid yang bisa mengakses rute-rute yang menggunakan middleware ini.

#frontend
view(vue)
yg bisa dilihat (front end mu)
3login page/ halaman loginmu
3register ya halaman registermu
Halaman LoginPage.vue merupakan komponen Vue untuk menampilkan halaman login kepada pengguna.
 Di dalamnya terdapat sebuah formulir dengan dua input untuk memasukkan username dan password, serta tombol Login.
Ketika pengguna menekan tombol Login, metode login() akan dipanggil. Didalamnya, kita menggunakan axios.post() untuk mengirim data ke endpoint login di server (http://localhost:3001/api/login) menggunakan metode HTTP POST. 
Data yang dikirimkan adalah this.credentials, yang berisi username dan password yang diisi oleh pengguna.

Jika permintaan berhasil, kita akan mendapatkan token dari respons server. Token ini kemudian disimpan di local storage menggunakan localStorage.setItem(). 
Setelah itu, sebuah pesan alert akan ditampilkan yang menginformasikan bahwa login berhasil. Setelah alert ditutup, pengguna akan diarahkan ke halaman /mahasiswa menggunakan this.$router.push().
Jika terjadi kesalahan dalam permintaan, pesan error akan ditampilkan di konsol, dan pesan alert akan muncul yang menginformasikan bahwa login gagal.

#mahasiswa vue
komponen Vue yang digunakan untuk membuat, mengedit, dan menampilkan daftar mahasiswa. 
Pada bagian <template>, terdapat HTML markup untuk tampilan aplikasi. 
Terdapat form untuk membuat dan mengedit mahasiswa, serta tabel untuk menampilkan daftar mahasiswa beserta tombol edit dan delete.

Pada bagian <script>, terdapat logika JavaScript untuk mengatur data dan interaksi dengan backend menggunakan Axios. 
Beberapa poin kunci dari kode tersebut antara lain:

Terdapat objek data yang berisi variabel-variabel yang digunakan dalam komponen.
Methode getToken() digunakan untuk mengambil token autentikasi dari local storage.
Methode-methode seperti createMahasiswa, getAllMahasiswa, getMahasiswaById, updateMahasiswa, dan deleteMahasiswa digunakan untuk berinteraksi dengan API backend menggunakan Axios.
Methode handleLogout digunakan untuk menghapus token autentikasi dari local storage dan melakukan redirect ke halaman login.
Pada bagian <style>, terdapat CSS styling untuk memperindah tampilan komponen.

#router (index js)
implementasi dari routing menggunakan Vue Router. 
mengimpor fungsi `createRouter` dan `createWebHistory` dari `vue-router`.
membuat instance router dengan menggunakan fungsi `createRouter` dan menyimpannya ke dalam variabel `router`. 
Objek konfigurasi router terdiri dari dua properti yaitu `history` dan `routes`. 
Properti `history` digunakan untuk mengatur jenis history mode yang digunakan dalam aplikasi, dalam kasus ini kita menggunakan `createWebHistory` dengan parameter `import.meta.env.BASE_URL`. 
Properti `routes` berisi daftar rute yang akan digunakan dalam aplikasi, setiap rute memiliki properti `path`, `name`, dan `component`. Properti `path` menentukan URL yang harus diakses untuk mengakses komponen, `name` adalah nama rute yang akan digunakan untuk navigasi programatik, dan `component` adalah komponen Vue yang akan ditampilkan.
terdapat tiga rute yang didefinisikan. Rute pertama memiliki path `/login`, nama `login`, dan menggunakan komponen `loginpage.vue`. Rute kedua memiliki path `/register`, nama `register`, dan menggunakan komponen `registerpage.vue`. Rute ketiga memiliki path `/mahasiswa`, nama `mahasiswa`, dan menggunakan komponen `mahasiswaview.vue`.

Akhirnya, kita meng-eksport instance router agar dapat digunakan di dalam aplikasi utama.

#main.js
Kode ini adalah entry point dari sebuah aplikasi Vue. 
mengimpor file css utama dengan menggunakan perintah import './assets/main.css'. Ini akan memastikan bahwa gaya yang didefinisikan dalam file css tersebut akan diterapkan pada halaman web kita.
mengimpor createApp dari modul Vue dengan menggunakan perintah import { createApp } from 'vue'. createApp adalah fungsi yang memungkinkan kita membuat instance aplikasi Vue.
mengimpor komponen App dari file App.vue dengan menggunakan perintah import App from './App.vue'. Komponen App.vue adalah komponen root dari aplikasi Vue kita.
mengimpor router dari file router.js dengan menggunakan perintah import router from './router'. Router digunakan untuk mengatur navigasi antar halaman dalam aplikasi Vue.
membuat instance aplikasi Vue dengan menggunakan perintah const app = createApp(App). Di sini, kita menggunakan createApp untuk membuat instance aplikasi dan menyimpannya dalam variabel app.
menggunakan plugin router dalam aplikasi Vue dengan menggunakan perintah app.use(router). Ini akan memasang router ke dalam instance aplikasi Vue kita.

Akhirnya, kita me-mount atau menempelkan aplikasi Vue ke elemen dengan id "app" dalam halaman HTML kita dengan menggunakan perintah app.mount('#app').

Dengan demikian, kode ini akan membuat aplikasi Vue kita berjalan dan menjalankan komponen root App.vue dengan menggunakan router yang telah dikonfigurasi.



cara run frontend:
npm run dev

cara run backend :
cd expressJS
npx nodemon server.js


