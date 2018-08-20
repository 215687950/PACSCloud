import Vue from 'vue'
import Router from 'vue-router'
import DemoButton from '@/demoPages/demo-button'
import DemoInput from '@/demoPages/demo-input'
import DemoSelect from '@/demoPages/demo-select'
import DemoDatePicker from '@/demoPages/demo-datePicker'
import wechatTitle from 'vue-wechat-title'

Vue.use(Router)
Vue.use(wechatTitle)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demoDatePicker'
    },
    {
      path: '/demoButton',
      component: DemoButton
    },
    {
      path: '/demoInput',
      component: DemoInput
    },
    {
      path: '/demoSelect',
      component: DemoSelect
    },
    {
      path: '/demoDatePicker',
      component: DemoDatePicker,
      meta: {
        title: 'haha'
      }
    }
  ]
})
