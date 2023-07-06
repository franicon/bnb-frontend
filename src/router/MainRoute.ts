import Bookings from '@/views/MainPages/Bookings.vue';

const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/bookings',
    component: () => import('@/layouts/MainLayouts.ts'),
    children: [
        {
            path: 'bookings',
            name: 'bookings',
            component: Bookings
        }
    ]
}

export default MainRoutes;
