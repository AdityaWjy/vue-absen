<template>
  <div class="container">
    <table class="table">
      <thead class="table-light">
        <tr>
          <th class="col">Nama</th>
          <th class="col">Email</th>
          <th class="col">Pekerjaan</th>
          <th class="col">Keterangan</th>
          <th class="col">Absen</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="absen in absensi" :key="absen.id">
        <td> {{ absen.nama }}</td>
        <td> {{ absen.email }}</td>
        <td> {{ absen.pekerjaan }}</td>
        <td> {{ absen.keterangan }}</td>
        <td> {{ absen.Jumlahabsen }}</td>

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
      
    }
  },
  props: {
    absensi: Array,
  }
}
</script>

<style scoped>

</style>
