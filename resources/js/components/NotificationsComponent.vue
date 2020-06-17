<template>
    <div class="container">
        <h2>Create Notifications</h2>
        <p> {{ todos }}</p>

        <form class="form" v-on:submit.prevent="addNotifications($event)">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" placeholder="title" name="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" class="form-control" id="content"  placeholder="content" name="content" v-model="content">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
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

        methods: {
            addNotifications(e){
                let title = this.title.trim();
                let contents = this.content.trim();
                if (title && content) {
                    this.title = ''
                    this.content = ''
                    this.$store.dispatch('actionTodoAdd', { title, contents });
                }
            },
        },

        computed: {
            todos() {
                for(let index in this.$store.state.notifications[0]){
                    this.message  =  this.$store.state.notifications[0][index];
                }
            },
        },

    }
</script>

