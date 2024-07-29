import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resource: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta:{
            label:'Dashboard',
            icon: <DashboardOutlined/>
        }
    },
    {
        name:'companies',
        list:'/companies',
        show:'/companies/:id',
        create:'/companies/new',
        edit:'/companies/edit/:id',
        meta:{
            label: 'Companies',
            icon: <ShopOutlined/>,
        }
    },
    {
        name:'task',
        list:'/task',
        show:'/task/:id',
        create:'/task/new',
        edit:'/task/edit/:id',
        meta:{
            label: 'Task',
            icon: <ProjectOutlined/>,
        }
    }
]