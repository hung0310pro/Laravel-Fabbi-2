<template>
    <div class="container">
        <table id="bang1" class="table table-bordered table-striped table-hover text-center">
            <thead>
            <tr>
                <th>STT</th>
                <th>Notifications</th>
                <th>Detail</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(todo, index) in listNotifications">
                <td>{{ index }}</td>
                <td>{{ todo.title }}</td>
                <td><a  href="#" @click="viewDetail($event,todo.id)">View Detail</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                email: "",
                name: "",
                errors: [],
                listNotifications: [],
            }
        },

        created() {
            this.getInFo();
        },

        methods: {
            getInFo() {
                axios.get('/Code/Laravel-Fabbi/laravel/public/auth/notifications')
                    .then(response => {
                        if (response.status == 200) {
                            this.listNotifications = response.data;
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.status;
                        if (this.errors == 403) {
                            this.$router.push('/redirectComponent');
                        } else if (this.errors == 401) {
                            this.$router.push('/logincustom');
                        }
                    })
            },

            viewDetail(e,id){
                this.$router.push('/viewDetailComponent/' + id);
            }
        }
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
