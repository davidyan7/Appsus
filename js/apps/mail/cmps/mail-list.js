import mailPreview from '../cmps/mail-preview.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">    
                <mail-preview :mail="mail"  @showDetails="showDetails" @replayMail="replayMail" @mailStarred="mailStarred" @readChosen="readChosen" @readMail="readMail" @remove="removeMail"></mail-preview>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            unread: null
        }
    },
    computed: {
        unReadMails() {
            var sumUnread = 0
            this.mails.forEach(mail => {
                if (!mail.isRead) sumUnread++
            })
            return sumUnread
        }
    },
    methods: {
        removeMail(mailId) {
            this.$emit('remove', mailId);
        },
        readMail(mail) {
            this.$emit('readMail', mail);
        },
        showDetails(mail) {
            this.$emit('showDetails', mail);
        },
        readChosen(mail) {
            this.$emit('readChosen', mail);
        },
        mailStarred(mail) {
            this.$emit('mailStarred', mail);
        },
        replayMail(mail) {
            this.$emit('replayMail', mail);
        },

    },
    created() {

    },
    components: {
        mailPreview
    }

}