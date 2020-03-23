<template>
  <div>
    <span v-html="html"></span>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                html:''
            }
        },
        created() {
            this.html = this.$route.query.html
            // console.log(window.localStorage.getItem("info"))
        },
        methods: {
        }
    }
</script>



