export default {

    template: `
    <section class="mail-compose">
    <form @submit.prevent="save">
            <ul>
                <li> <input type="text" v-model="eMail.to" placeholder="To" ></li>
                <li> <input type="text" v-model="eMail.cc" placeholder="Cc"></li>
                <li> <input type="text" v-model="eMail.bcc" placeholder="Bcc"></li>
                <li> <input type="text" v-model="eMail.subject" placeholder="Subject"></li>
                <li> <textarea type="text" v-model="eMail.body"  ></textarea></li>  
        </ul>
        <button>Save</button>
        </form>
        
    </section>
    `,
    data() {
        return {
            eMail: {
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                body: '',
                sentAt: Date.now(),
                isRead: false
            }

        }
    },
    methods: {
        save() {
            this.$emit('saveMail', this.eMail);
        }
    },
    created() {

    },

}