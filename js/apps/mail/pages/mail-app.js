import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
import mailSearch from '../cmps/mail-search.js'
import mailFilter from '../cmps/mail-filter.js'
import mailCompose from '../cmps/mail-compose.js'




export default {
    template: `
        <section class="mail-app-container">
            <header class="mail-header">
                <h1>Appsus Mail</h1>
                <mail-search @search="setSearch"></mail-search>
                </header>
                <div class="filter">
                    <mail-filter @filter="setFilter"></mail-filter>
                </div>
            <div class="mail-app-body">
                <nav class="mail-nav-bar">
                    <button @click="setCompose" class="compose-btn">+Compose</button>
                    <button @click="setInbox" class="basic-btn">Inbox</button>
                    <button @click="filterstarred" class="basic-btn">Starred</button>
                    <button class="basic-btn">Sent Mail</button>
                </nav>
                <div v-if="isInbox">
                    <mail-list v-if="mails" @mailStarred="mailStarred" @readChosen="readChosen" @readMail="readMail" :mails="mailsToShow" @remove="removeMail" />
                </div>
                <mail-compose v-if="isCompose"  @saveMail="saveMail"></mail-compose>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            searchBy: null,
            filterBy: null,
            filterStar: null,
            isInbox: true,
            isCompose: false,

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
                .catch((err) => {
                    console.log('error', err);
                })

        },
        readMail(mail) {
            mailService.saveMail(mail)
        },
        readChosen(mail) {
            mailService.readChosen(mail)
        },
        mailStarred(mail) {
            console.log('app');
            mailService.mailStarred(mail)
        },
        setStarred() {
            this.filterStar = true
        },
        setSearch(searchBy) {
            this.searchBy = searchBy;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        filterstarred() {
            console.log('star');
            this.filterStar = true
            this.isInbox = true
            this.isCompose = false
        },
        setCompose() {
            this.isInbox = false
            this.isCompose = true
            this.filterStar = false

        },

        setInbox() {
            this.filterStar = null
            this.isInbox = true
            this.isCompose = false

        }

    },
    computed: {
        mailsToShow() {
            if (!this.searchBy && !this.filterBy && !this.filterStar) return this.mails
            if (this.filterStar) {
                const booksToShow = this.mails.filter(mail => mail.isStarred)
                return booksToShow
            }
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