<template>
    <div id="searchBar">
        <div class="input-group mb-3" align="center">
            <input
                type="text" 
                class="form-control"
                @input="onInput"
            />
            <button 
                type="button" 
                class="btn btn-outline-secondary" 
                @click="onClick"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                <span class="visually-hidden">Button</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textInput: ""
        }
    },
    name: 'SearchBar',
    methods: {
        onClick() {
            this.$emit('clickSearch', this.textInput);
        },
        onInput(event) {
            this.textInput = event.target.value;
        }
    }
};
</script>

<style scoped>
input {
    width: 75%;      
}

#searchBar {
    text-align: center;
    margin: 20px;
}
</style>