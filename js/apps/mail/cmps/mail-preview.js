export default {
    props: ['mail'],
    template: `
    <section @click="readMail(mail)" class="mail-preview" >
        <p :class="isRead"  class="mail-li">
            <span>{{mail.to}}</span>
            <span>{{mail.subject}}</span>
            <span>{{showTime}}
                <button class="starred" @click.stop="mailStarred(mail)" v-if="mail.isStarred"></button>
                <button class="not-starred" @click.stop="mailStarred(mail)"  v-if="!mail.isStarred">☆</button>
                <button  class="read" v-if="mail.isRead" @click.stop="readChosen(mail)"></button>
                <button class="not-read" v-if="!mail.isRead" @click.stop="readChosen(mail)" ></button>
                <button class="trash" @click.stop="remove(mail.id)"  ></button>
        </span>
        </p>
        <div class="open-mail" v-if="isOpen"> 
            <h2>{{mail.subject}}</h2>
            <h3><{{mail.to}}@gmail.com></h3>
            <p>{{mail.body}}</p>
            <button @click.stop="replayMail(mail)">Reply</button>
            <button @click.stop="showDetails(mail)">details</button>

        </div>
    </section>
    `,
    data() {
        return {
            isOpen: false,
            isReaden: false,
            isStarred: false
        }
    },
    computed: {
        readChose() {
            return (this.mail.isRead)
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
        replayMail(mail) {
            this.$emit('replayMail', mail);
        },
        showDetails(mail) {
            this.$emit('showDetails', mail);
        },
        readChosen(mail) {
            this.isReaden = !this.isReaden
            this.$emit('readChosen', mail);
        },
        mailStarred(mail) {
            this.isStarred = !this.isStarred
            this.$emit('mailStarred', mail);
        }

    },
    created() {

    },

}