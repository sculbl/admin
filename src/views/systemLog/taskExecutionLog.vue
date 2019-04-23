<template>
  <div class="calibration__wrap">
    <div class="calibration__content">
      <div class="actions">
        <el-select size="small" value="1" placeholder="请选择状态" style="width: 120px; margin: 0 10px;">
          <el-option label="全部" value="1"></el-option>
          <el-option label="已执行" value="2"></el-option>
          <el-option label="未执行" value="3"></el-option>
        </el-select>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <el-input size="small" placeholder="输入中文或英文名称" style="width: 200px; margin: 0 10px"/>
        <el-button size="small" type="primary">查询</el-button>
      </div>
      <v-table
        :total="100"
        :height="scrollY"
        :column="columns"
        :tableData="data"
        :action="[{
            text: '查看'
        }]"
        :action-click="actionClick"
      />
    </div>
  </div>
</template>
<script>
import { VTable } from "component";
export default {
  data() {
    return {
      columns: [
        {
          title: "XSXH",
          key: "id"
        },
        {
          title: "XSXH",
          key: "name"
        },
        {
          title: "XSXH",
          key: "date"
        },
        {
          title: "XSXH",
          key: "names"
        },
        {
          title: "XSXH",
          key: "n"
        }
      ],
      data: [
        {
          id: 20190305,
          name: "杨心怡",
          date: "2019-02-02 12:00",
          names: "杨心怡",
          n: "杨心怡"
        }
      ]
    };
  },
  computed: {
    scrollY() {
      const h = this.$store.getters.scrollY - 230;
      return h >= 150 ? h : 150;
    }
  },
  components: {
    VTable
  },
  methods: {
    actionClick() {
      this.$router.push("/dataCollection/onlineDataBase/executiveReport");
    }
  }
};
</script>
<style lang="scss" scoped>
.calibration__wrap {
  display: flex;
}
.calibration__content {
  background: #fff;
  width: 100%;
  .title {
    height: 50px;
    border-bottom: 1px solid #e7e7e7;
    padding: 0 28px;
    line-height: 50px;
    font-size: 16px;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
}
</style>