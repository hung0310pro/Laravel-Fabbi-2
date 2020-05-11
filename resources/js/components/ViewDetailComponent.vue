<template>
    <div class="container">
        <h1>Detail For Notificaton</h1>
        <p>User sended : {{ usersCount }} </p>
        <p>Viewed : {{ countView }} </p>
        <p>Not Viewed  : {{ countNotView }} </p>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                countNotView: "",
                countView: "",
                usersCount: "",
            }
        },

        created() {
            this.getNotifications();
        },

        methods: {
            getNotifications() {
                let id = this.$route.params.id;
                axios.get('/Code/Laravel-Fabbi/laravel/public/auth/notifications/' + id)
                    .then(response => {
                        if (response.status == 200) {
                            this.countNotView = response.data.countNotView;
                            this.countView = response.data.countView;
                            this.usersCount = response.data.usersCount;
                        }
                    })
                    .catch(error => {

                    })
            },
        },
    }
</script>

<style>
    .container h1 {
        text-align: center;
    }

    #bang1 {
        margin-top: 30px;
    }
</style>
