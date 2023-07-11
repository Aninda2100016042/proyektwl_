model
mendifinisikan data yang akan diterima oleh database.
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

view(vue)
yg bisa dilihat (front end mu)
login page/ halaman loginmu
register ya halaman registermu


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
authmiddleware akan ada fungsi dekripsi token 


