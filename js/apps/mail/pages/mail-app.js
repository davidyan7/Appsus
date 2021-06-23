import { mailservice } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'




export default {
    template: `
        <section class="mail-app">
            <book-list  :mails="mailsToShow" />
        </section>
    `,
    data() {
        return {
            mails: [],
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
        mailsToShow() {
            return this.mails
        }

        // removeBook(id) {
        //     mailService.remove(id)
        //         .then(() => {
        //             const msg = {
        //                 txt: 'Deleted successfuly',
        //                 type: 'success'
        //             };
        //             eventBus.$emit('show-msg', msg);
        //             this.loadmails();
        //         })
        // },

    },
    computed: {



    },
    components: {
        mailservice,
        mailList
    }
};