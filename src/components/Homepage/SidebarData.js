export const sidebarData = [
    {
        'key': 'group0',
        'title': {
            'icon': 'dashboard',
            'text': '数据分析'
        },
        'children': [
            {
                'key': '1',
                'text': '数据监控',
                'path': '/dashboard/monitor'
            },
            {
                'key': '2',
                'text': '数据分析',
                'path': '/dashboard/analyze'
            }
        ]
    },
    {
        'key': 'group1',
        'title': {
            'icon': 'play-circle',
            'text': '音频管理'
        },
        'children': [
            {
                'key': '6',
                'text': '声兮列表',
                'path': '/voice/sxlist'
            },
            {
                'key': '7',
                'text': '回声列表',
                'path': '/voice/calllist'
            }
        ]
    },
    {
        'key': 'group2',
        'title': {
            'icon': 'schedule',
            'text': '活动中心'
        },
        'children': [
            {
                'key': '11',
                'text': '活动列表',
                'path': '/active/list'
            },
            {
                'key': '12',
                'text': '新建活动',
                'path': '/active/add'
            }
        ]
    }
];

export const groupKey = sidebarData.map(item => item.key);
