const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controller/mahasiswacontroller');
const isAuthenticated = require('../middleware/authmiddleware')

router.post('/', mahasiswaController.createMahasiswa);
router.get('/', isAuthenticated,mahasiswaController.getAllMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.put('/:id', mahasiswaController.updateMahasiswa);
router.delete('/:id', isAuthenticated,mahasiswaController.deleteMahasiswa);

module.exports = router;