<template>
  <div class="container">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th class="text-center tol">Nama</th>
          <th class="text-center col">Email</th>
          <th class="text-center col">Pekerjaan</th>
          <th class="text-center col">Keterangan</th>
          <th class="text-center col">Absen</th>
          <th class="text-center col">Tindakan</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="absen in absensi" :key="absen.id">
        <template v-if="absenId === absen.id">

          <td>
            <label for="nama" class="font-weight-bold">Nama:</label>
            <div>
              <input type="text" v-model="absen.nama" class="form-control">
            </div>
          </td>

          <td>
            <label for="email" class="font-weight-bold">Email:</label>
            <div>
              <input type="email" v-model="absen.email" class="form-control">
            </div>
          </td>

          <td>
            <label for="pekerjaan" class="font-weight-bold">Pekerjaan:</label>
            <div>
              <input type="text" v-model="absen.pekerjaan" class="form-control">
            </div>
          </td>

          <td>
            <label for="keterangan" class="font-weight-bold">Keterangan:</label>
            <div>
              <input type="text" v-model="absen.keterangan" class="form-control">
            </div>
          </td>

          <td>
            <label for="absen" class="font-weight-bold">Absen:</label>
            <div>
              <input type="text" v-model="absen.Jumlahabsen" class="form-control">
            </div>
          </td>

          <td class="text-center">
            <button class="btn btn-success m-2" @click="saveEdit(absen)">Simpan</button>
            <button class="btn btn-danger" @click="cancelEdit(absen)">Batal</button>
          </td>
        </template>
        
        <template v-else>
          
        <td class="text-center p-10"> {{ absen.nama }}</td>
        <td class="text-center"> {{ absen.email }}</td>
        <td class="text-center"> {{ absen.pekerjaan }}</td>
        <td class="text-center"> {{ absen.keterangan }}</td>
        <td class="text-center"> {{ absen.Jumlahabsen }}</td>
        <td>
          <div class="text-center">
          <button class="btn btn-primary m-2" @click="editAbsen(absen)">Edit</button>
          <button class="btn btn-danger" @click="deleteAbsen(absen.id)">Hapus</button>
          </div>
        </td>
      
      </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailAbsen',
  data () {
    return {
      absenId: null,
    }
  },
  props: {
    absensi: Array,
  },

  methods: {
    editAbsen(absen) {
      this.data = Object.assign({}, absen)
      this.absenId = absen.id
      console.log(this.data);
    },

    saveEdit(absen) {
      let id = this.data.id
      this.$emit('edit-absen', id, absen)
      this.absenId = null
    },

    cancelEdit(absen) {
      Object.assign(absen, this.data)
      this.absenId = null;
    },
    
    deleteAbsen(id) {
      this.$emit('delete-absen', id)
    }
  }
}
</script>

<style scoped>

</style>
