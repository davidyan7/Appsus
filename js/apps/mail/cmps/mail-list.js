import mailPreview from '../cmps/mail-preview.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <div>

        </div>
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">    
                <mail-preview :mail="mail" @remove="removeMail"></mail-preview>
                
            </li>
        </ul>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        removeMail(mailId) {
            this.$emit('remove', mailId);
        },
    },
    created() {

    },
    components: {
        mailPreview
    }

}