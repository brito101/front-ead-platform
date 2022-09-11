<template>
  <header id="header">
    <nav>
      <span class="toggleMenu far fa-bars"></span>
      <span class="logo">
        <router-link :to="{ name: 'campus.home' }"
          ><img
            :src="require('@/assets/images/logo.svg')"
            alt="Estágio Premium"
          />
        </router-link>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-component",
}
</script>
