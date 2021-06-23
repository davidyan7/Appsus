export default {
    props: ['mail'],
    template: `
    <section @click="readMail(mail)" class="mail-preview" >
        <p :class="isRead">
            <span>{{mail.to}}</span>
            <span>{{mail.subject}}</span>
            <span>{{showTime}}</span>
            <button @click="remove(mail.id)">X</button>
            <button @click.stop="readChosen(mail)">{{readChose}}</button>
        </p>
        <div v-if="isOpen"> 
            <h2>{{mail.subject}}</h2>
            <h3><{{mail.to}}@gmail.com></h3>
            <p>{{mail.body}}</p>

        </div>
    </section>
    `,
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {
        readChose() {
            if (this.mail.isRead) return 'Unread'
            else return 'Read'

        },

        showTime() {
            return new Date(this.mail.sentAt).getHours() + ':' + new Date(this.mail.sentAt).getMinutes()
        },
        isRead() {
            return { marked: !this.mail.isRead }

        },

    },
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        readMail(mail) {
            this.isOpen = !this.isOpen
            this.$emit('readMail', mail);
        },
        readChosen(mail) {
            this.$emit('readChosen', mail);
        }

    },
    created() {

    },

}