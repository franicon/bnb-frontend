import Bookings from '@/views/MainPages/Bookings.vue';
import Bookable from '@/views/MainPages/Bookable.vue';

const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/bookings',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
        {
            path: '/bookings',
            name: 'bookings',
            component: Bookings
        },
        {
            path: '/bookings/:id',
            name: 'bookable',
            component: Bookable
        }
    ]
}

export default MainRoutes;
