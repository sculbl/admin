<template>
  <div
    class="page__wrap"
    :class="{
			'center': position === 'center',
			'left': position === 'left',
			'right': position === 'right'
		}"
  >
    <el-pagination
      v-if="page.total"
      :current-page="page.currentPage"
      :page-sizes="pageSizes"
      :page-size="page.pageSize"
      :total="page.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :layout="layout"
    ></el-pagination>
  </div>
</template>
<script>
/**
 * @param { position } String 分页所在位置 center left right 可选 默认 center
 * @param { pageSizes } Array 分页可选条数
 * @param { layout } String 组件布局，子组件名用逗号分隔 sizes, prev, pager, next, jumper, ->, total, slot
 * @param { page } Object
 *      {
 *          currentPage: 1, //当前页数
 *           pageSize: 10, // 每页展示条数
 *          total: 100, // 总条数
 *      }
 * @method handleSizeChange 改变每页条数
 * @method handleCurrentChange 分页改变
 */
export default {
  name: "Pagination",
  props: {
    position: {
      type: String,
      default: "center"
    },
    page: {
      type: Object,
      default: () => {
        return {
          currentPage: 1, //当前页数
          pageSize: 10, // 每页展示条数
          total: 0 // 总条数
        };
      }
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100];
      }
    },
    layout: {
      type: String,
      default: "prev, pager, next, sizes, jumper"
    }
  },
  methods: {
    // 改变每页条数
    handleSizeChange(pageSize) {
      this.$emit("size-change", pageSize);
    },
    // 翻页
    handleCurrentChange(currentPage) {
      this.$emit("current-change", currentPage);
    }
  }
};
</script>
<style lang="scss" scoped>
.page__wrap {
  display: flex;
  padding: 15px;
  &.center {
    justify-content: center;
  }
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }
}
</style>