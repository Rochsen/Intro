<script setup lang='ts'>
import { computed } from 'vue';
import { MyProjectList } from '../data/projectData.ts';

const props = defineProps({
  lang: {
    type: String,
    default: 'zh-CN',
    
  },
  projectId: {
    type: String,
    default: '1',
  },
});


const projectList = computed(() => MyProjectList[props.lang]);

</script>

<template>
<div></div>
</template>


<style scoped></style>