<template>
  <div class="data-sharing-list page-content">
    <div class="filter-bar row-box">
      <Form>
        <FormItem label="就诊医院">
          <Select v-model="searchParams.clinicHospital" style="width: 224px;">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="时间筛选">
          <Select v-model="searchParams.seachTime" style="width: 120px;">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
          <DatePicker
            type="daterange"
            :options="datepickerOptions"
            style="width: 200px;margin-left: 8px;"
            placeholder="请选择时间">
          </DatePicker>
        </FormItem>
        <FormItem>
          <Select v-model="searchParams.seachType" style="width: 88px;">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
          <Input class="search-input" suffix="ios-search" placeholder="请输入。。。" style="width: 200px;"></Input>
          <Button type="text" size="large">重置</Button>
        </FormItem>
      </Form>
    </div>
    <div class="table-box pacs-table">
      <Table
        stripe
        :height="tableHeight"
        ref="dataSharingListTable"
        :columns="columns1"
        :data="data1"
        @on-row-dblclick="tableDblclick"
      ></Table>
      <Page :total="100" show-elevator show-sizer show-total></Page>
    </div>
  </div>
</template>
<script>
import Form from '@/components/form'
import { Select, Option } from '@/components/select'
import DatePicker from '@/components/date-picker'
import Input from '@/components/input'
import Button from '@/components/button'
import Table from '@/components/table'
import Page from '@/components/page'
export default {
  components: {
    Form,
    FormItem: Form.Item,
    Select,
    Option,
    DatePicker,
    Input,
    Button,
    Table,
    Page
  },
  data () {
    return {
      datepickerOptions: {
        shortcuts: [
          {
            text: '当天',
            value () {
              const time = new Date()
              return [time, time]
            }
          },
          {
            text: '昨天',
            value () {
              const time = new Date()
              time.setTime(time.getTime() - 3600 * 1000 * 24)
              return [time, time]
            }
          }
        ]
      },
      searchParams: {
        clinicHospital: 'beijing',
        seachTime: '1',
        seachType: ''
      },
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
          age: 18,
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
    this.tableHeight = window.innerHeight - this.$refs.dataSharingListTable.$el.offsetTop - 140 - 36
    const that = this
    window.onresize = () => {
      if (that.$refs.dataSharingListTable) {
        that.tableHeight = window.innerHeight - that.$refs.dataSharingListTable.$el.offsetTop - 140 - 36
      }
    }
  },
  methods: {
    tableDblclick (value) {
      this.$router.push({path: `/dataSharingReport/${value.id}`})
    }
  }
}
</script>
<style lang="less">
.data-sharing-list {
  .filter-bar {
    height: 50px;
    .ivu-form {
      display: flex;
      .ivu-form-item {
        display: flex;
      }
    }
  }
  .table-box {
    background: #FFFFFF;
    box-shadow: 0 0 4px 0 rgba(126,126,126,0.60);
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 20px;
    right: 20px;
    overflow: hidden;
  }
}

</style>
