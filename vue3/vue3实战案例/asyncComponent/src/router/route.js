// import Home from '../components/Home.vue';
// import About from "../components/About.vue";

import { getAsyncPage } from "../utils";


const Home = getAsyncPage('../components/Home.vue');
const About = getAsyncPage("../components/About.vue")
export default [
    {path:"/",component:Home},
    {path:"/About",component:About},
]