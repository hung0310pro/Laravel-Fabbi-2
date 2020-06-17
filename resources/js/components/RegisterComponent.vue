<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $t('login.register') }}</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="register($event)">
                            <input type="hidden" name="_token" value="{!! csrf_token() !!}">

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ $t('login.name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" v-model="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus>
                                    <div class="error" v-if="errors.name">
                                           <span v-for="(err, index) in errors.name" :key="index">
                                               {{ err }}
                                           </span>
                                        <hr>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ $t('login.email') }}</label>

                                <div class="col-md-6">
                                    <input id="email" v-model="email" type="email" class="form-control" name="email" required autocomplete="email">
                                        <div class="error" v-if="errors.email">
                                           <span v-for="(err, index) in errors.email" :key="index">
                                               {{ err }}
                                           </span>
                                            <hr>
                                        </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{ $t('login.password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" v-model="password" type="password" class="form-control" name="password" required autocomplete="new-password">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ $t('login.password_confirmation') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" v-model="password_confirmation" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ $t('login.register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from '../lang/i18n';

    export default {
        data() {
            return {
                errors: [],
                email: '',
                password: '',
                name: '',
                password_confirmation: '',
            }
        },

        created() {
            this.getInFo();
        },

        methods: {
            getInFo() {
                axios.get('/auth/me')
                    .then(response => {
                        if (response.data.email) {
                            this.$router.push('redirectComponent');
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.statusText;
                    })
            },

            register(e) {
                this.errors = [];
                axios.post('/auth/register', {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.push('redirectComponent');
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    })
            }
        }
    }
</script>
