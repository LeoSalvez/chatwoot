<script>
import { mapGetters } from 'vuex';
import Spinner from 'shared/components/Spinner.vue';
// esse componente é usado para criar os botoes de opção do appcrc, todos fazem uma chamada externa pro appcrc
export default {
    components: {
        Spinner,
    }, 
    computed: {
        ...mapGetters({
            isLoading: 'conversation/isLoading',
        }),
    },
    data() {
    return {
      idConta: null
    };
    },
    mounted() {
        this.idConta = this.$route.params.accountId;
    },
    props: {
        telefone: {
            type: String,
            required: true
        }
    },
    methods: {
        abrirLeadAppCRC() {
            window.open(`https://www.appcrc.com.br/abrir-lead-chat-icom?phone=${this.telefone}&account_id=${this.idConta}`, '_blank');
        }
    }
}
</script>

<template>
    <div class="contact-conversation--panel">
        <button class="button clear [&>span]:hidden xs:[&>span]:block info" id="abrir_lead_appcrc" @click="abrirLeadAppCRC">
            Abrir Lead
        </button>

    </div>
</template>
