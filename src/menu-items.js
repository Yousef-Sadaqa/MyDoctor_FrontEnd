export default {
    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Messages from users',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-mail',
                },
                {
                    id: 'form-basic',
                    title: 'Doctors',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-plus'
                },
                {
                    id: 'breadcrumb-pagination',
                    title: 'Pharmacies',
                    type: 'item',
                    url: '/basic/breadcrumb-paging',
                    icon: 'feather icon-plus'
                },
                {
                    id: 'badges',
                    title: 'Medical Labs',
                    type: 'item',
                    url: '/basic/badges',
                    icon: 'feather icon-plus'
                },
               {
                    id: 'disabled-menu',
                    title: 'log out',
                    type: 'item',
                    url: '/Logout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                },

              ]}
            ]
        }
