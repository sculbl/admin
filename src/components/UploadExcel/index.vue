<template>
  <div>
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleClick"
    >
    <el-button style="height: 100%;" :loading="loading" @click="handleUpload">导入</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    };
  },
  methods: {
    handleUpload() {
      this.$refs["excel-upload-input"].click();
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0];
      if (!rawFile) return;
      this.upload(rawFile);
    },
    upload(rawFile) {
      this.$refs["excel-upload-input"].value = null;

      var formData = new FormData();
      formData.append("file", rawFile); // 文件对象
      if (!this.isExcel(rawFile)) {
        this.$message.error("仅支持上载.xlsx、.xls、.csv后缀文件");
        return false;
      }
      this.$emit('on-success', rawFile, formData)
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    }
  }
};
</script>

<style scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
</style>
