<template>
  <div id="add-karyawan" class="container">
    <h1>
      PT Nganggur Indonesia Raya<br />
      Absen karyawan
    </h1>
    <form v-if="!submitted">
      <!-- Input text karyawan -->
      <label>Nama Karyawan :</label>
      <input type="text" v-model.lazy="karyawan.nama" required />
      <!-- Input text deskripsi-->
      <label>Deskripsi Karyawan :</label>
      <textarea v-model.lazy="karyawan.deskripsi"></textarea>
      <!-- Input checkbox Absen-->
      <div id="checkboxes">
        <h3>Pilih absen</h3>
        <label>Sakit</label>
        <input type="checkbox" value="sakit" v-model="karyawan.keterangan" />
        <label>Ijin</label>
        <input type="checkbox" value="Ijin" v-model="karyawan.keterangan" />
        <label>Support lapangan</label>
        <input type="checkbox" value="support" v-model="karyawan.keterangan" />

        <label>Jumlah Absen</label>
        <select v-model="karyawan.jumlahAbsen">
          <option v-for="(jumlahAbsen, index) in jumlahAbsensi" :key="index">{{
            jumlahAbsen
          }}</option>
        </select>
      </div>
      
    </form>
    <div v-if="submitted">
      <h3>Terimakasih telah mengisi absen dan selamat menganggur</h3>
    </div>
    <div id="preview">
      <h3>Preview Absen</h3>
      <p>Nama karyawan : {{ karyawan.nama }}</p>
      <p>Deskripsi Karyawan : {{ karyawan.deskripsi }}</p>
      <p>Keterangan Absen :</p>
      <ul>
        <li v-for="(detail, index) in karyawan.keterangan" :key="index">{{ detail }}</li>
      </ul>
      <p>Jumlah absen : {{ karyawan.jumlahAbsen }}</p>
    </div>
    <button v-if="!submitted" v-on:click.prevent="post">Absen</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      karyawan: {
        nama: '',
        deskripsi: '',
        keterangan: [],
        jumlahAbsen: ''
      },
      jumlahAbsensi: ['1 hari', '2 hari', '3 hari'],
      submitted: false
    }
  },
  methods: {
    post: function () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.karyawan.nama,
        pekerjaan: this.karyawan.deskripsi,
        userId: 1
      }).then(function (data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style scoped>
#add-karyawan * {
  box-sizing: border-box;
}

#add-karyawan {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px /* Padding right => */ 20px;
  border: 1px /* Border menjadi titik" => */ dotted #ccc;
  margin: /* jarak antara checkbox dan preview*/ 20px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  /* inline-block membuat text menjadi horizontal */
  display: inline-block;
  margin-top: 1px;
}

button {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  display: block;
}

.jumlah-absen {
  margin-top: 1px;
}
</style>
