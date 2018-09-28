import Vue from 'vue'
import Router from 'vue-router'
// import DemoButton from '@/demoPages/demo-button'
// import DemoInput from '@/demoPages/demo-input'
// import DemoSelect from '@/demoPages/demo-select'
// import DemoDatePicker from '@/demoPages/demo-datePicker'
import DataSharingList from '@/pages/dataSharingModule/dataSharingList'
import DataSharingReport from '@/pages/dataSharingModule/report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dataSharingList'
    },
    {
      path: '/dataSharingList',
      component: DataSharingList
    },
    {
      path: '/dataSharingReport/:id',
      component: DataSharingReport
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/demoDatePicker'
  //   },
  //   {
  //     path: '/demoButton',
  //     component: DemoButton
  //   },
  //   {
  //     path: '/demoInput',
  //     component: DemoInput
  //   },
  //   {
  //     path: '/demoSelect',
  //     component: DemoSelect
  //   },
  //   {
  //     path: '/demoDatePicker',
  //     component: DemoDatePicker
  //   }
  // ]
})
