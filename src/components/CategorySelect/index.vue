<template>
  <div class="category__select">
    <tree-select v-model="selectCategory" :options="list" placeholder="请选择分类"/>
  </div>
</template>
<script>
import TreeSelect from "../TreeSelect";
export default {
  components: {
    TreeSelect
	},
	props: {
		value: {
			type: [Number, String]
		}
	},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  computed: {
    selectCategory: {
			get() {
				return this.value
			},
			set(selectCategory) {
				this.$emit('input', selectCategory)
			}
		}
  },
  methods: {
    getList() {
      this.$store.dispatch("category/fetchGetCategoryList").then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.category__select {
  width: 200px;
}
</style>