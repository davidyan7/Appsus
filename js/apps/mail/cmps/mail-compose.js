export default {
    props: ['mail'],
    template: `
    <section class="mail-compose">
    <form @submit.prevent="save">
            <ul>
                <h3>New Mail</h3>
                <li> <input type="text" v-model="eMail.to" placeholder="To" ></li>
                <li> <input type="text" v-model="eMail.cc" placeholder="Cc"></li>
                <li> <input type="text" v-model="eMail.bcc" placeholder="Bcc"></li>
                <li> <input type="text" v-model="eMail.subject" placeholder="Subject"></li>
                <li> <textarea type="text" v-model="eMail.body"  ></textarea></li>  
        </ul>
        <button class="send-btn ">Send</button>
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
                isRead: false,
                isStarred: false,
            }

        }
    },
    methods: {
        save() {
            this.$emit('saveMail', this.eMail);
        }
    },
    created() {
        if (this.mail) {
            this.eMail.to = this.mail.to
            this.eMail.subject = 'RE: ' + this.mail.subject
            this.eMail.body = this.mail.body + '\n\n\n\n RE: \n'
        }
    },

}