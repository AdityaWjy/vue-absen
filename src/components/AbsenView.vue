<template>
  <div id="absen-view">
    <div class="container">
      <h3 class="mb-4">PT Nganggur Indonesia Raya Absensi</h3>
      <hr />
      <p>
        <button
          class="btn btn-primary"
          type="button"
          @click.prevent="showForm = !showForm"
        >Tambah Absensi
      </button>
      </p>

      <DetailAbsen :absensi="absensi" />

      <div v-show="showForm">
        <div class="card card-body">
          <h2>Input Data Absen</h2>
          <hr>

          <FormAbsen />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailAbsen from "./DetailAbsen.vue";
import FormAbsen from "./FormAbsen.vue";
export default {
  data() {
    return {
      showForm: false,
      absensi: [
        {
          id: 1,
          nama: "Bayu",
          email: "Bayou@gmail.com",
          pekerjaan: "Teknisi Air",
          keterangan: "Sakit",
          Jumlahabsen: "2 Hari",
        },
        {
          id: 2,
          nama: "Saitan",
          email: "Saitan@gmail.com",
          pekerjaan: "Tukang",
          keterangan: "Ijin",
          Jumlahabsen: "1 Hari",
        },
        {
          id: 3,
          nama: "Lucy",
          email: "Luucyyy@gmail.com",
          pekerjaan: "MC",
          keterangan: "Support",
          Jumlahabsen: "2 Hari",
        },
      ],
    };
  },
  components: {
    DetailAbsen,
    FormAbsen
},
};
</script>

<style scoped>
h3 {
  font-family: Arial;
  text-align: left;
  margin-left: 10px;
  margin-top: 20px;
  color: #2c3e50;
}

#absen-view {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
