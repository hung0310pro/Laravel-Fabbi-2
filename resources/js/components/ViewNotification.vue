<template>
    <div id="app">
        <h1>New Post</h1>
        <div class="todo-list__item" v-for="(todo, index) in viewPost[0]">
            <span>{{ index }}</span> : <span>{{ todo }}</span>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                title: '',
                content: '',
                message: '',
            }
        },

        created() {
            this.getInFoPost();
        },

        methods: {
            getInFoPost() {
                // get id in url
                let id = this.$route.params.id;
                this.$store.dispatch('actionTodoChangeStatus', {id})
            },
        },

        computed: {
            viewPost() {
                return this.$store.state.notifications;
            },
        }
    }
</script>

<style>
    .todo-list__item span {
        color: green;
        font-size: 25px;
    }

    #app {
        text-align: center;
    }
</style>

