<template>
  <div>
    <Input placeholder="Enter something..." clearable style="width: 300px"/>
    <br/>
    <br/>
    <Input type="textarea" placeholder="Enter something..." style="width: 300px" />
  </div>
</template>
<script>
import Input from '@/components/input'
export default {
  components: {
    Input
  }
}
</script>
