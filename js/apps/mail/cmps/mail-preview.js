export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <p>
            <span>{{mail.to}}</span>
            <span>{{mail.subject}}</span>
            <span>{{mail.body}}</span>
            <span>{{showTime}}</span>
            <button @click="remove(mail.id)">X</button>
        </p>
    </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        showTime() {
            return this.mail.sentAt
        }

    },
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
    },
    created() {

    },

}