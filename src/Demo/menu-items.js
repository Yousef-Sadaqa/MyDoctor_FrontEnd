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
                    title: 'HomePage',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'form-basic',
                    title: 'Form registration',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'breadcrumb-pagination',
                    title: 'Breadcrumb & Pagination',
                    type: 'item',
                    url: '/basic/breadcrumb-paging',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'badges',
                    title: 'medical services',
                    type: 'item',
                    url: '/basic/badges',
                    icon: 'feather',
                }, {
                    id: 'signup-1',
                    title: 'Sign up',
                    type: 'item',
                    url: '/auth/signup-1',
                    target: true,
                    breadcrumbs: false,
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'signin-1',
                    title: 'Sign in',
                    type: 'item',
                    url: '/auth/signin-1',
                    target: true,
                    breadcrumbs: false,
                    icon: 'feather icon-file-text'
                },
              

              ]}
            ]
        }
