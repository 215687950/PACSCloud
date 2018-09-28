<template>
  <div class="data-sharing-report-left">
    <div class="related-check-header">
      <div class="title-info">相关检查</div>
      <Input class="search-input" suffix="ios-search" placeholder="项目名称或医院名称" style="width: 180px;"></Input>
      <RadioGroup type="button" v-model="radioValue">
        <Radio label="身份证"></Radio>
        <Radio label="姓名"></Radio>
      </RadioGroup>
    </div>
    <div class="table-box pacs-table" ref="relatedCheckTableBox">
      <Table
        stripe
        :height="tableHeight"
        ref="relatedCheckTable"
        :columns="columns1"
        :data="data1"
      ></Table>
      <Page :total="100" show-total></Page>
    </div>
  </div>
</template>
<script>
import Input from '@/components/input'
import Button from '@/components/button'
import Radio from '@/components/radio'
import Table from '@/components/table'
import Page from '@/components/page'
export default {
  components: {
    Input,
    Button,
    Radio,
    RadioGroup: Radio.Group,
    Table,
    Page
  },
  data () {
    return {
      radioValue: '身份证',
      tableHeight: '',
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          id: 1,
          name: 'John Brown',
          age: 1888,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          id: 2,
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          id: 3,
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          id: 4,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 5,
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          id: 6,
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          id: 7,
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          id: 8,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 1,
          name: 'John Brown',
          age: 1888,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          id: 2,
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          id: 3,
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          id: 4,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 5,
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          id: 6,
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          id: 7,
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          id: 8,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  mounted () {
    this.tableHeight = this.$refs.relatedCheckTableBox.offsetHeight - 44
    const that = this
    window.onresize = () => {
      if (that.$refs.relatedCheckTableBox) {
        that.tableHeight = this.$refs.relatedCheckTableBox.offsetHeight - 44
      }
    }
  }
}
</script>
<style lang="less">
.data-sharing-report-left {
  width: 40%;
  position: absolute;
  left: 20px;
  top: 50px;
  bottom: 0;
  box-shadow: 0 0 4px 0 rgba(126,126,126,0.60);
  background: #ffffff;
  overflow: hidden;
  .related-check-header {
    padding: 10px;
    display: flex;
    .title-info {
      margin-right: 20px;
    }
    .ivu-input {
      height: 20px;
      padding-right: 20px;
    }
    .ivu-input-suffix i {
      font-size: 20px;
      line-height: 20px;
    }
    .ivu-radio-group {
      position: absolute;
      right: 10px;
      .ivu-radio-wrapper {
        border: 0 none;
        padding: 0;
        width: 60px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        background: #efefef;
        margin-left: 4px;
        &:before, &:after {
          width: 0px;
        }
      }
      .ivu-radio-focus {
        box-shadow: none;
      }
      .ivu-radio-wrapper-checked {
        background: #dcf3f1;
      }
    }
  }
  .table-box {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    .ivu-page {
      margin-right: 10px;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
      .ivu-page-prev,
      .ivu-page-next,
      .ivu-page-item-jump-prev,
      .ivu-page-item-jump-next,
      .ivu-page-item {
        min-width: 20px;
        height: 20px;
        line-height: 18px;
        .ivu-page-item a {
          margin: 0;
        }
      }
    }
  }
}
</style>
