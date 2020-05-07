<template>
    <div class="container">
        <h2>Create Notifications</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" placeholder="title" name="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" class="form-control" id="content"  placeholder="content" name="content" v-model="content">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                title: '',
                content: '',
            }
        },
    }
</script>

