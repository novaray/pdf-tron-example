<script setup lang="ts">
import WebViewer from '@pdftron/webviewer';
import { onMounted, ref } from 'vue';
interface Props {
  initialDoc: string;
}
const props = defineProps<Props>();

const viewerRef = ref();

onMounted(() => {
  const path = `${import.meta.env.BASE_URL}webviewer`;
  WebViewer(
    {
      path,
      licenseKey: import.meta.env.VITE_PDF_TRON_LICENSE_KEY,
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
    },
    viewerRef.value
  ).then((instance) => {
    const { docViewer } = instance;
    instance.UI.setTheme('dark');
    docViewer.on('documentLoaded', () => {
      console.log('document loaded');
    });
  });
});
</script>

<template>
  <div
    id="webviewer"
    ref="viewerRef"
  >
  </div>
</template>

<style scoped>
#webviewer {
  height: 100vh;
}
</style>
