import { eventBus } from "../../../services/event-bus-service.js";
import { mapService } from "../services/map-service.js";


export default {
    props: ['color'],
    components: {},
    template: `
    <section class="add-map">
        <form @submit.prevent="onGoToLoc">
            <input class="color-effect" type="text" v-model="urlToEdit" @input="logNote" placeholder="Search Location" :style="bgcColor">
        </form>
            <div id="map" class="map-container">
            

            </div>
            <input class="color-effect" type="text" v-model="note.info.title" @input="logNote" placeholder="Enter description" :style="bgcColor">
    </section>
`,
    created() {
        mapService.initMap()
            .then(this.addMapListener)
            .catch((e) => console.log('Error: cannot init map', e));
        eventBus.$on('noteAdded', this.clearFields)
    },
    mounted() {

    },
    watch: {
        color: function (val) {
            console.log(val);
            this.note.style.backgroundColor = this.color = val
            console.log('updated', this.note.style.backgroundColor);
            this.logNote()
        }
    },
    data() {
        return {
            note: {
                id: 'as12322j2a23',
                type: "noteMap",
                info: {
                    url: null,
                    title: null,
                },
                style: {
                    backgroundColor: "#fff"
                }
            },
            urlToEdit: null
        }
    },
    methods: {
        logNote() {
            // console.log(this.note.info.title);
            // console.log(this.note.info.txt);
            this.$emit('logNote', this.note)
        },
        addMapListener(map) {
            map.addListener('click', function (e) {
                // console.log(this.onClickMap);
                // this.onClickMap(e)
                var lat = e.latLng.lat()
                var lng = e.latLng.lng()
                mapService.panTo(lat, lng);
                mapService.addMarker(lat, lng)
            })
        },
        onGoToLoc() {
            mapService.getLocationFromInput(this.urlToEdit)
                .then(obj => {
                    // console.log(obj.lat);
                    mapService.panTo(obj.lat, obj.lng)
                    mapService.addMarker(obj.lat, obj.lng)
                    this.note.info.url = `https://maps.googleapis.com/maps/api/staticmap?center=${obj.lat},${obj.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:red|${obj.lat},${obj.lng}&key=AIzaSyC-aFirhd5EzuWZ5AsMDq_-OKMONox8TYg`
                    this.logNote
                })
        },
        clearFields() {
            this.urlToEdit = ''
            this.note.info.title = ''
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}