<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Dúvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li
                  :class="{ active: status === '' }"
                  @click="getMySupportsWithStatus('')"
                >
                  Todos
                </li>
                <li
                  :class="{ active: status === 'A' }"
                  @click="getMySupportsWithStatus('A')"
                >
                  Aguardando Minha Resposta
                </li>
                <li
                  :class="{ active: status === 'P' }"
                  @click="getMySupportsWithStatus('P')"
                >
                  Aguardando Professor
                </li>
                <li
                  :class="{ active: status === 'C' }"
                  @click="getMySupportsWithStatus('C')"
                >
                  Finalizados
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="content">
            <div class="comments">
              <supports-view />
            </div>
          </div>

          <pagination-view :pagination="mySupports" @changePage="changePage">
          </pagination-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupportsView from "@/components/Supports.vue"
import PaginationView from "@/components/Pagination.vue"

import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"
export default {
  name: "MySupports",

  setup() {
    const store = useStore()
    const status = ref("")

    const mySupports = computed(() => store.state.supports.supports)

    onMounted(() => store.dispatch("getMySupports", { status: status.value }))

    const getMySupportsWithStatus = (newStatus) => {
      status.value = newStatus

      store.dispatch("getMySupports", { status: newStatus })
    }

    const changePage = (page) =>
      store.dispatch("getMySupports", {
        status: status.value,
        page,
      })

    return {
      getMySupportsWithStatus,
      status,
      mySupports,
      changePage,
    }
  },

  components: {
    SupportsView,
    PaginationView,
  },
}
</script>
