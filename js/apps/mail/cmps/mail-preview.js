export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <p>
            {{mail.subject}}
            {{mail.body}}
            {{mail.isRead}}
            {{mail.sentAt}}
            {{mail.id}}
            <button @click="remove(mail.id)">X</button>
        </p>
    </section>
    `,
    data() {
        return {

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