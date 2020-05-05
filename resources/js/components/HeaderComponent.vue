<template>
        <select class="select-language" v-model="selected" v-on:change="callSetLangActions($event)">
            <option v-for="lang in optionLangs" v-bind:value="lang.value">
                {{ lang.text }}
            </option>
        </select>
</template>

<script>
    import i18n from '../lang/i18n';

    export default {
        data() {
            return {
                selected: '',
                token: '',
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
            }
        }
    }
</script>

<style>
    .select-language{
        text-align: center;
        margin: auto;
    }
</style>
