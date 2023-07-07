import Bookings from '@/views/MainPages/Bookings.vue';

const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/bookings',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
        {
            path: 'bookings',
            name: 'bookings',
            component: Bookings
        }
    ]
}

export default MainRoutes;
