<template>
  <div>
      <ul class="nav">
          <router-link to="/" exact active-class="active">Home</router-link>
          <router-link to="/battle" active-class="active">Battle</router-link>
          <router-link to="/popular" active-class="active">Popular</router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'nav-bar'
}
</script>

<style>
.nav{
    display: flex;
}

.active {
    font-weight: bold;
}

.nav li {
    margin-right: 15px;
}

a {
    text-decoration: none;
    color: #d0021b;
    padding-right: 8px;
}
</style>
