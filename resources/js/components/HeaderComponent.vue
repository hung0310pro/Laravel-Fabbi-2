<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <div class="col-md-12">
                    <div class="col-md-2">
                        <h3>{{ $t('login.title') }}</h3>
                        <h4>{{ checkAuth() }}</h4>
                    </div>
                    <div class="col-md-2" v-if="checkAuth()">
                        <a @click="logout($event)">{{ $t('login.status') }}</a>
                    </div>
                    <div class="col-md-2" v-if="!checkAuth()">
                        <a @click="register($event)">{{ $t('login.register') }}</a>
                    </div>
                    <div class="col-md-2">
                        <select class="select-language form-control chosen-select" v-model="selected"
                                v-on:change="callSetLangActions($event)">
                            <option v-for="lang in optionLangs" v-bind:value="lang.value">
                                {{ lang.text }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    import i18n from '../lang/i18n';

    export default {
        data() {
            return {
                status:1,
                selected: '',
                token: '',
                name1:'',
                errors:[],
                optionLangs: [
                    {
                        text: 'Vietnamese',
                        value: 'vn'
                    },
                    {
                        text: 'English',
                        value: 'en'
                    },
                    {
                        text: 'JaPan',
                        value: 'jp'
                    }
                ]
            }
        },

        methods: {
            callSetLangActions(event) {
                /*i18n.locale = this.selected;*/
                this.$store.dispatch('setLang', this.selected);
            },

            logout() {
                axios.get('/Code/Laravel-Fabbi/laravel/public/auth/logout')
                    .then(response => {
                        if (response.status == 200) {
                            this.$store.name = '';
                            this.$router.push('/logincustom');
                        }
                    })
                    .catch(error => {

                    })
            },

            register(e){
                this.$router.push('/registerComponent');
            },

            checkAuth(){
                return this.$store.state.name;
            }
        },

    }
</script>

<style>
    .navbar-expand-md .container {
        width: 100%;
        max-width: 100%;
    }

    .navbar-expand-md{
        margin-bottom: 30px !important;
    }

    .container .col-md-2 {
        float: left;
    }

    .container a {
        line-height: 30px;
        color: blue;
    }

    .container a:hover {
        cursor: pointer;
    }
</style>
