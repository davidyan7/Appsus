import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
import mailCompose from '../cmps/mail-compose.js'




export default {
    template: `
        <section class="mail-app">
            <mail-list  :mails="mailsToShow" @remove="removeMail" />
            <mail-compose @saveMail="saveMail"></mail-compose>
        </section>
    `,
    data() {
        return {
            mails: null,
        };
    },
    created() {
        this.loadMails();
    },
    methods: {
        loadMails() {
            mailService.query()
                .then(mails => this.mails = mails);
        },

        saveMail(mail) {
            mailService.addMail(mail)
                .then(() => {
                    this.loadMails();
                })
        },

        removeMail(mailId) {
            console.log(mailId);
            mailService.remove(mailId)
                .then(() => {
                    this.loadMails();
                    console.log('remove');
                })
                .catch(() => {
                    console.log('error');
                })

        },

    },
    computed: {
        mailsToShow() {
            return this.mails
        }


    },
    components: {
        mailService,
        mailList,
        mailCompose
    }
};