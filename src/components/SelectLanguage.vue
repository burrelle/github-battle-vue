<template>
  <div>
      <ul class="languages">
          <li v-for="language in languages" @click="updateLanguage(language)" :key="language">{{ language }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'SelectLanguages',
    data() {
        return {
            selectedLanguage: 'All',
            repos: null,
            languages: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
            classObject: {
                isActive: true
            }
        }
    },
    methods: {
        updateLanguage: function(language){
            this.selectedLanguage = language;
        }
    }
}
</script>

<style>
.languages {
    display: flex;
    justify-content: center;
}

.languages li {
    margin: 10px;
    font-weight: bold;
    cursor: pointer;
}

ul{
    padding: 0;
}

li {
    list-style-type: none;
}
</style>
