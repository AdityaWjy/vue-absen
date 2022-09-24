<template>
  <div class="container">
    <div class="sign-up">
        <signup-form tool-id="nkmbbm" />
    </div>
    
  </div>
</template>

<script>
import { SignupForm } from "@userfront/vue";

export default {
  components: {
    SignupForm,
  },
};
</script>

<style scoped>
.sign-up {
  position: absolute;
  right: 110px;
  top: 110px;  
}

</style>
