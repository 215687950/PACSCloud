<template>
  <div id="app">
    <Layout class="app-content">
      <PageHeader></PageHeader>
      <Content style="padding: 70px 0px 10px;overflow-y: hidden;">
        <Breadcrumb separator=">">
          <BreadcrumbItem v-for="(item, index) in breadcrumbs" :key="index">{{item.text}}</BreadcrumbItem>
        </Breadcrumb>
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/layout'
import PageHeader from '@/global/components/header'
import Content from '@/components/content'
import Breadcrumb from '@/components/breadcrumb'
export default {
  name: 'App',
  components: {
    Layout,
    PageHeader,
    Content,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item
  },
  data () {
    return {
      breadcrumbs: [
        {
          text: '数据共享',
          link: ''
        },
        {
          text: '患者列表',
          link: ''
        }
      ]
    }
  }
}
</script>
<style lang="less">
#app, .app-content {
  height: 100%;
  width: 100%;
  overflow: auto;
  .ivu-layout-content {
    display: flex;
  }
  .ivu-breadcrumb {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 40px;
    left: 20px;
  }
  .ivu-breadcrumb-item-separator {
    margin: 0 6px;
    color: #d8d8d8;
  }
  .ivu-breadcrumb > span:last-child {
    font-weight: normal;
    color: #666666;
  }
}
</style>
