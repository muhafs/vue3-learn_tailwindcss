import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UtilityOneView from '../views/UtilityOneView.vue';
import UtilityTwoView from '../views/UtilityTwoView.vue';
import PseudoClassesView from '../views/PseudoClassesView.vue';
import AnimationsView from '../views/AnimationsView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/utility-one',
		name: 'utility-one',
		component: UtilityOneView,
	},
	{
		path: '/utility-two',
		name: 'utility-two',
		component: UtilityTwoView,
	},
	{
		path: '/pseudo-class',
		name: 'pseudo-class',
		component: PseudoClassesView,
	},
	{
		path: '/animation',
		name: 'animation',
		component: AnimationsView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
