<template>
  <div class="button">
    <div style="margin-bottom: 20px">
      <h2>按钮类型</h2>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
    <div style="margin-bottom: 20px">
      <h2>幽灵按钮</h2>
      <Button ghost>Default</Button>
      <Button type="primary" ghost>Primary</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="text" ghost>Text</Button>
      <Button type="info" ghost>Info</Button>
      <Button type="success" ghost>Success</Button>
      <Button type="warning" ghost>Warning</Button>
      <Button type="error" ghost>Error</Button>
    </div>
    <div>
      <h2>图标按钮及按钮形状</h2>
      <Button type="primary" shape="circle" icon="ios-search"></Button>
      <Button type="primary" icon="ios-search">Search</Button>
      <Button type="primary" shape="circle" icon="ios-search">Search</Button>
      <Button type="primary" shape="circle">Circle</Button>
      <br><br>
      <Button shape="circle" icon="ios-search"></Button>
      <Button icon="ios-search">Search</Button>
      <Button shape="circle" icon="ios-search">Search</Button>
      <Button shape="circle">Circle</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/button'

export default {
  components: {
    Button
  }
}
</script>
<style>
.button .ivu-btn {
  margin-right: 20px;
}
</style>
