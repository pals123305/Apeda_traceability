// assets
import { IconTractor } from '@tabler/icons';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const tracenet_users = {
    id: 'tracenet_users',
    title: 'Tracenet',
    type: 'group',
    children: [
        {
            id: 'tracenet',
            title: 'Tracenet',
            type: 'collapse',
            icon: IconTractor,

            children: [
                {
                    id: 'create-user',
                    title: 'Create User',
                    type: 'item',
                    url: '/tracenet/create-user',
                    breadcrumbs: false
                },
                {
                    id: 'user-detail',
                    title: 'User Detail',
                    type: 'item',
                    url: '/tracenet/user-detail',
                    breadcrumbs: false
                }
            ]
        }
    ]
};


export default tracenet_users;
