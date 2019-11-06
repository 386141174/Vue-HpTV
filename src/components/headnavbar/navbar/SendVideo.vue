<template>
  <a href="javascript:;">
     <button>上传</button>
     <input type="file" name="file" @change="uploadUp($event)" 
       enctype="multipart/form-data">
    </a>

</template>
<script>
export default {
  name: "SendVideo",
  uploadUp(event) {
      var files = event.target.files.file;
       let formData = new FormData();
       formData.append('file', files[0]);
       axios({
          url:"",
          data:formData,
          method:"post"
       }).then(resp=>{
         console.log(resp);
       })
  }
};
</script>
<style scoped>

</style>