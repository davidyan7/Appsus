export default {
    props: ['mail'],
    template: `
    <section class="mail-details" >
            <p>{{showTime}}</p>  
            <h2>{{mail.subject}}</h2>
            <h3><{{mail.to}}@gmail.com></h3>
            <p>{{mail.body}}</p>
            <img v-if="mail.imgUrl" :src="mail.imgUrl" alt="">
    </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        showTime() {
            return new Date(this.mail.sentAt)
        },


    },
}