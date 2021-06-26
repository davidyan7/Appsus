import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
import mailList from '../cmps/mail-list.js'
import mailSearch from '../cmps/mail-search.js'
import mailFilter from '../cmps/mail-filter.js'
import mailCompose from '../cmps/mail-compose.js'
import mailDetails from './/mail-details.js'




export default {
    template: `
        <section class="mail-app-container">
            <header class="mail-header ">
            <div class="mail-logo">
                <h1>Mail</h1>
                <img class="header-logo" src="img/gmail-icon.png" alt="">
                </div>
                <div class="filtering main-layout">
                    <mail-search @search="setSearch"></mail-search>
                    <mail-filter class="mail-filter " @notFilter="notFilter" @titleSort="titleSort" @dateSort="dateSort" @filter="setFilter" ></mail-filter>
                </div>
                </header>
                <div class="mail-app-body main-layout ">
                        <nav  v-if="mails" class="mail-nav-bar">
                            <div class="compose-container">
                                <img class="plus-img" src="img/gmail-plus.png" alt="">
                                <button @click="setCompose" class="compose-btn"><h3>   Compose </h3></button>
                            </div>
                    <button @click="setInbox" class="basic-btn inbox-btn"><h3>Inbox</h3> ({{unReadMails}})</button>
                    <button @click="filterstarred" class="basic-btn starred-btn"><h3>Starred</h3>({{starsMails}})</button>
                </nav>
                <div v-if="isInbox">
                    <mail-list v-if="mails" @showDetails="showDetails" @replayMail="replayMail" @mailStarred="mailStarred" @readChosen="readChosen" @readMail="readMail" :mails="mailsToShow" @remove="removeMail" />
                </div>
                <mail-compose :mail="mailToCompose" v-if="isCompose"  @saveMail="sendMail"></mail-compose>
                <mail-details v-if="selectedMail"  :mail="selectedMail" ></mail-details>
                <img src="https://www.google.co.il/maps/@31.2298655,34.7801791,15z" alt="">
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
            selectedMail: null,
            mailToCompose: null,

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

        sendMail(mail) {
            mailService.addMail(mail)
                .then(() => {
                    this.loadMails();
                })
            const msg = {
                txt: 'Mail send success',
                type: 'success'
            };
            eventBus.$emit('show-msg', msg, this.book);
            this.selectedMail = null
            this.filterStar = null
            this.isInbox = true
            this.isCompose = false
        },

        removeMail(mailId) {
            const isRemove = confirm('Remove Mail?')
            if (isRemove) {

                mailService.remove(mailId)
                    .then(() => {
                        this.loadMails();
                        const msg = {
                            txt: 'Mail Remove',
                            type: 'success'
                        };
                        eventBus.$emit('show-msg', msg, this.book);
                    })
            } else return

        },
        readMail(mail) {
            mailService.saveMail(mail)
        },
        replayMail(mail) {
            this.isInbox = false
            this.isCompose = true
            this.filterStar = false
            this.mailToCompose = mail
            this.selectedMail = null
        },
        showDetails(mail) {
            this.selectedMail = mail
            this.isInbox = false
            this.isCompose = false
        },
        readChosen(mail) {
            mailService.readChosen(mail)
        },
        mailStarred(mail) {
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
            this.filterStar = true
            this.mailToCompose = null
            this.isInbox = true
            this.isCompose = false
            this.selectedMail = null
        },
        setCompose() {
            this.mailToCompose = null
            this.isInbox = false
            this.isCompose = true
            this.filterStar = false
            this.selectedMail = null

        },
        setInbox() {
            this.filterStar = null
            this.mailToCompose = null
            this.isInbox = true
            this.isCompose = false
            this.selectedMail = null
        },
        dateSort() {
            if (this.isCompose) return
            mailService.dateSort(this.mails)

        },
        titleSort() {
            if (this.isCompose) return
            mailService.titleSort(this.mails)

        },
        notFilter() {
            this.filterBy = null
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

        },
        unReadMails() {
            var sum = 0
            this.mails.forEach(mail => {
                if (!mail.isRead) sum++
            })
            return sum
        },
        starsMails() {
            var sum = 0
            this.mails.forEach(mail => {
                if (mail.isStarred) sum++
            })
            return sum
        }
    },
    components: {
        mailService,
        mailList,
        mailCompose,
        mailSearch,
        mailFilter,
        mailDetails
    }
};