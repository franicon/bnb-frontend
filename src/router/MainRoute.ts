import Bookings from '@/views/MainPages/Bookings.vue';
import Bookable from '@/views/MainPages/Bookable.vue';

const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
        {
            path: '/',
            name: 'bookings',
            component: Bookings,
            meta: { title: 'BookMe - Bookings' }
        },
        {
            path: '/bookings/:id',
            name: 'bookable',
            component: Bookable,
            meta: { title: 'BookMe - Booking' }
        }
    ]
}

export default MainRoutes;
