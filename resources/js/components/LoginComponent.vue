<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="error" v-if="errors.length">
               <span v-for="(err, index) in errors" :key="index">
                   {{ err }}
               </span>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $t('login.login') }}</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="login($event)">
                            <input type="hidden" name="_token" value="{!! csrf_token() !!}">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ $t('login.email')
                                    }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control" name="email" v-model="email"
                                           required autocomplete="email" autofocus>

                                    <div class="error" v-if="errors.email">
                                           <span v-for="(err, index) in errors.email" :key="index">
                                               {{ err }}
                                           </span>
                                        <hr>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{
                                    $t('login.password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           v-model="password"
                                           class="form-control" name="password"
                                           required autocomplete="current-password">

                                    <div class="error" v-if="errors.password">
                                           <span v-for="(err, index) in errors.password" :key="index">
                                               {{ err }}
                                           </span>
                                        <hr>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            {{ $t('login.remember') }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ $t('login.login') }}
                                    </button>

                                    <!--  @if (Route::has('password.request'))
                                      <a class="btn btn-link" href="{{ route('password.request') }}">
                                          {{ __('Forgot Your Password?') }}
                                      </a>
                                      @endif-->
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
    import apiuser from "../apiuser";

    export default {

        data() {
            return {
                status: '1',
                errors: [],
                email: '',
                password: ''
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
                            this.$router.push('/redirectComponent');
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.statusText;
                    })
            },

            login(e) {
                this.errors = [];
                axios.post('/auth/login', {
                    email: this.email,
                    password: this.password

                })
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.push('/redirectComponent');
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.statusText;
                    })
            }
        }
    }
</script>
