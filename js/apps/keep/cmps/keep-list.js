import keepPreview from "./keep-preview.js";

export default {
    components: {
        // keepDetails
        keepPreview
    },
    template: `
    <section class="keep-list">
        <h1>Keep-list</h1>
        <ul v-for>
            <li>
                <keep-preview></keep-preview>
            </li>
        </ul>
    </section>
    `,
};