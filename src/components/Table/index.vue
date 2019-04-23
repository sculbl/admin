<template>
    <div :style="{ marginTop: top }" class="tables__wrap">
        <h4 class="title" v-if="title">{{ title }}</h4>
        <el-table
            ref="vTable"
            :height="height"
            :data="tableData"
            :cell-style="cellStyle"
            @select="select"
            @select-all="selectAll"
            @selection-change="selectionChange"
            @cell-click="cellClick"
            size="medium">
            <el-table-column
                v-if="selection"
                type="selection"
                width="55"
            />
            <el-table-column
                v-if="serialNumber"
                type="index"
                width="50"
            />
            <el-table-column
                :prop="item.key"
                :label="item.title"
                :width="item.width"
                :align="item.align || 'left'"
                v-for="item in column"
                :key="item.key"
            />
            <el-table-column
                v-if="action.length"
                :width="actionWidth"
                fixed="right"
                :label="actionLabel">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        v-for="(item, index) in action"
                        :round="item.round || false"
                        :circle="item.circle || false"
                        :key="index"
                        :type="item.type || 'text'"
                        :style="item.style"
                        :icon="item.icon"
                        :disabled="actionFn && actionFn(scope.row, item)"
                        @click="actionClick(scope.row, item)">
                        {{ typeof item === 'String' ? item : item.text }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div
            v-if="total"
            class="page__wrap"
            :class="{
                'center': pagePasition === 'center',
                'right': pagePasition === 'right',
                'left': pagePasition === 'left'
            }"
        >
            <el-pagination
                :background="background"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                :total="total"
                :layout="layout">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VTable',
        props: {
            title: {
                type: String,
                default: ''
            },
            selection: { // 复选框
                type: Boolean,
                default: false
            },
            total: { // 表格总页数
                type: Number,
                default: 0
            },
            currentPage: { // 当前页数
                type: Number,
                default: 1
            },
            
            pageSizes: { // 选择显示个数
                type: Array,
                default: () => [10, 20, 50, 100]
            },
            pageSize: { // 每页展示条数
                type: Number,
                default: 10
            },
            layout: { // 组件布局
                type: String,
                default: 'prev, pager, next, sizes, jumper, total'
            },
            tableData: { // 表格数据
                type: Array,
                default: () => []
            },
            column: { // 表头
                type: Array,
                default: () => []
            },
            action: { // 操作按钮
                type: Array,
                default: () => []
            },
            /** 
             * 按钮回调方法
             * actionFn(row, item) {
             *   if (row.id === 20190305 && item.types === 'modify') return true;
             *   return false;
             * } 
            */
            actionFn: {
                type: Function
            },


            top: {
                type: String,
                default: "0"
            },
            height: {
                type: [String, Number]
            },
            /** 
             * 回调方法
             * cellStyle({ column, row, columnIndex, rowIndex }) {
             *   if (column.property === 'id') return color: red
             * }
            */
            cellStyle: {
                type: Function
            },
            serialNumber: {
                type: Boolean,
                default: false
            },
            actionWidth: {
                type: String,
                default: '100px'
            },
            actionLabel: { // 操作列名字
                type: String,
                default: '操作'
            },
            background: {
                type: Boolean,
                default: true
            },
            pagePasition: {
                type: String,
                default: 'center'
            }
        },
        methods: {
            handleSizeChange(value) { // 每页展示条数改变时触发
                this.$emit('handle-size-change', value);
            },
            handleCurrentChange(value) { // 翻页
                this.$emit('handle-current-change', value);
            },
            actionClick(row, item) {
                this.$emit('action-click', row, item)
            },
            select(selection, row) {
                this.$emit('select', selection, row)
            },
            selectAll(selection) {
                this.$emit('select-all', selection)
            },
            selectionChange(selection) {
                this.$emit('selection-change', selection)
            },
            cellClick(row, column, cell, event) { // 某个单元格点击
                this.$emit('cell-click', row, column, cell, event)
            },
        }
    }
</script>
<style lang="scss" scoped>
    .tables__wrap {
        flex: 1;
        .title {
            height: 50px;
            line-height: 50px;
            font-size:16px;
            color: #000;
            text-indent: 1em;
        }
    }
    .el-pagination >>> .el-pager li {
        background: none;
    }
    .el-pagination >>> .btn-next,
    .el-pagination >>> .btn-prev,
    .el-pagination >>> button:disabled {
        background: none;
    }
    .el-pagination {
        padding: 10px;
        text-align: right;
    }
    .el-pagination >>> .el-pagination__jump {
        margin: 0 10px 0 0;
    }

    .page__wrap {
        height: 60px;
        display: flex;
        align-items: center;
        &.center {
            justify-content: center;
        }
        &.rigth {
            justify-content: flex-end;
        }
        &.left {
            justify-content: flex-start;
        }
    }
</style>
