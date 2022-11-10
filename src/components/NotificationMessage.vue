<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NotificationMessage',
  computed: {
    ...mapGetters(['messagePool'])
  },
  watch: {
    messagePool: 'showNotification',
  },
  methods: {
    showNotification({ variant, msg, title }) {
      this.$bvToast.toast(msg, {
          title,
          variant,
          solid: true,
          autoHideDelay: 5000,
          appendToast: true
        });
    }
  },
};
</script>


<style scoped>

</style>