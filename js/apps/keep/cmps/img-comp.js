// import { eventBus } from "../../../services/event-bus-service.js";

export default {
    // props: ['note'],
    components: {
        // keepDetails
    },
    template: `
    <section class="img-comp" >
        <ul>
            <div class="img-container">
                <img :src="note.info.url" alt="">
            </div>
            <p>{{note.info.title}}</p>
        </ul>
    </section>
    `,
    created() {
    },
    data() {
        return {
            note: {
                type: "NoteImg",
                info: {
                    url: "https://www.calmsage.com/wp-content/uploads/2020/05/what-is-4me-time-and-10-ways-to-enjoy-your-me-time2-.jpg",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#fff"
                }
            },
        }
    },
};