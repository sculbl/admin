<template>
  <el-table
    :expand-row-keys="expands"
    :data="data"
    :rowKey="rowKey"
    :row-style="showRow"
    :height="height"
    @expand-change="expandSelect"
  >
    <el-table-column
      v-for="column in columns"
      :key="column.value"
      :label="column.text"
      :width="column.width"
    >
      <template slot-scope="scope">{{scope.row[column.value]}}</template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "treeTable",
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    height: {
      type: [String, Number]
    },
    rowKey: {
      type: String,
      default: "id"
    }
  },
  data() {
    return {
      expands: [163]
    };
  },
  methods: {
    showRow(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;"
        : "display:none;";
    }
  }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>