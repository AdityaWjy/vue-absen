<template>
<div class="form-absen">
<form v-on:submit.prevent="submit">
    <div class="form-group">
        <label for="name">Nama</label>
        <input v-model="absen.nama"  type="text" class="form-control" placeholder="Masukkan nama pekerja">
    </div>

    <div class="form-group">
        <label for="email">Email</label>
        <input v-model="absen.email"   type="email" class="form-control" placeholder="Masukkan email pekerja">
    </div>

    <div class="form-group">
        <label for="Job">Pekerjaan</label>
        <input v-model="absen.pekerjaan"   type="text" class="form-control" placeholder="Masukkan nama pekerjaan">
    </div>

    <div class="form-group">
        <label for="Detail">Keterangan</label>
        <input v-model="absen.keterangan"   type="text" class="form-control" placeholder="Masukkan keterangan absen">
    </div>
    
    <div class="form-group">
        <label for="Absen">Absen</label>
        <input v-model="absen.Jumlahabsen"   type="text" class="form-control" placeholder="Masukkan jumlah absen">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>


<script>
    export default {
        name: 'FormAbsen',
        data () {
            return {
                absen: {
                nama: '',
                email: '',
                pekerjaan: '',
                keterangan: '',
                Jumlahabsen: '',
                }
            }
        },
        methods: {
            submit () {
                this.$emit('add-absen', this.absen)
                this.absen = {
                    nama : '',
                    email: '',
                    pekerjaan : '',
                    keterangan : '',
                    Jumlahabsen : '',
                }
            }
        }
    }

</script>

<style scoped>

</style>