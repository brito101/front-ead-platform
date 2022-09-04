<template>
  <div class="comments">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports-view />
  </div>
</template>

<script>
  import SupportsView from "@/components/Supports.vue"

export default {
  name: "SupportsLesson",
  components: {
    SupportsView,
  }
}
</script>
