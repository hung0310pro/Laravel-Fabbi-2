<template>
    <div id="app">
        <h1 v-if="name">Hi {{ name }}</h1>
        <h3 v-if="email">{{ email }}</h3>
        <p>{{ $t('common.select_lang') }}</p>
        <p>{{ $t('login.title') }}</p>
        <p>{{ $t('login.content') }}</p>
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
