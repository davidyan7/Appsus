import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
import mailSearch from '../cmps/mail-search.js'
import mailFilter from '../cmps/mail-filter.js'
import mailCompose from '../cmps/mail-compose.js'




export default {
    template: `
        <section class="mail-app">
        <mail-search @search="setSearch"></mail-search>
        <mail-filter @filter="setFilter"></mail-filter>
            <mail-list v-if="mails" @readChosen="readChosen" @readMail="readMail" :mails="mailsToShow" @remove="removeMail" />
            <mail-compose  @saveMail="saveMail"></mail-compose>
        </section>
    `,
    data() {
        return {
            mails: null,
            searchBy: null,
            filterBy: null
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
        readMail(mail) {
            console.log('ssss');
            mailService.saveMail(mail)
        },
        readChosen(mail) {
            console.log('ssss');
            mailService.readChosen(mail)
        },
        setSearch(searchBy) {
            this.searchBy = searchBy;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }

    },
    computed: {
        mailsToShow() {
            if (!this.searchBy && !this.filterBy) return this.mails
            if (this.searchBy) {
                const searchStr = this.searchBy.toLowerCase();
                const booksToShow = this.mails.filter(mail => {
                    return (
                        mail.to.toLowerCase().includes(searchStr) ||
                        mail.body.toLowerCase().includes(searchStr) ||
                        mail.subject.toLowerCase().includes(searchStr)
                    )
                })
                return booksToShow
            }
            if (this.filterBy === 'read') {
                console.log(this.filterBy);
                const booksToShow = this.mails.filter(mail => mail.isRead)
                return booksToShow
            } else {
                const booksToShow = this.mails.filter(mail => !mail.isRead)
                return booksToShow

            }
        }
    },
    components: {
        mailService,
        mailList,
        mailCompose,
        mailSearch,
        mailFilter
    }
};