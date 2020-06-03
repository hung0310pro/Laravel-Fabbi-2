<template>
    <div class="container">
        <table id="bang1" class="table table-bordered table-striped table-hover text-center">
            <thead>
            <tr>
                <th>{{ $t('login.name1') }}</th>
                <th>{{ $t('login.email') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td> {{ name }}</td>
                <td> {{ email }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import i18n from '../lang/i18n';

    export default {
        data() {
            return {
                email: "",
                name: "",
                errors: [],
            }
        },

        created() {
            this.getInFo();
        },

        methods: {
            getInFo() {
                axios.get('/Code/Laravel-Fabbi/laravel/public/auth/me')
                    .then(response => {
                        if (response.data.email) {
                            this.name = response.data.name;
                            this.email = response.data.email;
                        } else {
                            this.$router.push('logincustom');
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.statusText;
                    })
            }
        }
    }
</script>

<style>
    .container h1{
        text-align: center;
    }

    #bang1{
        margin-top: 30px;
    }
</style>
