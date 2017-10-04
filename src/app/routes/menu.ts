const Dashboard = {
    name: 'Dashboard',
    link: '/dashboard',
    // iconclass: 'ion-aperture',
    imgpath: 'assets/img/icons/aperture.svg',
    order: 1,
    label: {
        count: 1,
        classname: 'badge bg-success'
    }
};

const ServiceDesk = {
    name: 'Service Desk',
    link: '/servicedesk',
    // iconclass: 'ion-connection-bars',
    imgpath: 'assets/img/icons/connection-bars.svg',
    order: 2,
    subitems: [{
        name: 'New Ticket',
        link: '/servicedesk/newticket'
    }, {
        name: 'Monitor Matrix',
        link: '/servicedesk/monitormatrix'
    }, {
        name: 'Service Board',
        link: '/servicedesk/serviceboard'
    },{
        name: 'Alerts',
        link: '/servicedesk/alerts'
    }, {
        name: 'Customers',
        link: '/servicedesk/customers'
    }, {
        name: 'Dispatch',
        link: '/servicedesk/dispatch'
    },  {
        name: 'Devices',
        link: '/servicedesk/devices'
    }, {
        name: 'Knowledge Base',
        link: '/servicedesk/kb'
    },  {
        name: 'Online Backup',
        link: '/servicedesk/backup'
    }]
};

const Security = {
    name: '247 Security',
    link: '/security',
    // iconclass: 'ion-connection-bars',
    imgpath: 'assets/img/icons/connection-bars.svg',
    order: 3,
    subitems: [{
        name: 'Patching',
        link: '/security/patching'
    }, {
        name: 'Antivirus',
        link: '/security/antivirus'
    }, {
        name: 'App Control',
        link: '/security/appcontrol'
    },  {
        name: 'Cryptowatch',
        link: '/security/cryptowatch'
    }, {
        name: 'MDM',
        link: '/security/mdm'
    }, {
        name: 'Routing',
        link: '/security/routing'
    }, {
        name: 'SIEM',
        link: '/security/siem'
    },  {
        name: 'Password MGT',
        link: '/security/passwordmgt'
    }]
};

const PSACRM = {
    name: 'PSA & CRM',
    link: '/psacrm',
    // iconclass: 'ion-connection-bars',
    imgpath: 'assets/img/icons/connection-bars.svg',
    order: 4,
    subitems: [{
        name: 'Dashboard',
        link: '/psacrm/dashboard'
    }, {
        name: 'Accounts',
        link: '/psacrm/account'
    }, {
        name: 'Contacts',
        link: '/psacrm/contacts'
    }, {
        name: 'Leads',
        link: '/psacrm/leads'
    }, {
        name: 'Opportunities',
        link: '/psacrm/opportunities'
    }, {
        name: 'Activities',
        link: '/psacrm/activities'
    }, {
        name: 'Calandar',
        link: '/psacrm/calandar'
    }, {
        name: 'Library',
        link: '/psacrm/library'
    },{
        name: 'Workflows',
        link: '/psacrm/workflows'
    }, {
        name: 'Quotes',
        link: '/psacrm/quotes'
    }]
};

const SystemMenu = {
    name: 'System',
    link: '/system',
    // iconclass: 'ion-connection-bars',
    imgpath: 'assets/img/icons/connection-bars.svg',
    order: 5,
    subitems: [{
        name: 'Market Apps',
        link: '/system/market'
    }, {
        name: 'Setup-Tables',
        link: '/system/setuptables'
    }, {
        name: 'Security Rules',
        link: '/system/securityrules'
    }, {
        name: 'Members',
        link: '/system/members'
    }, {
        name: 'Maintenance',
        link: '/system/maintenance'
    },  {
        name: 'Reports',
        link: '/system/reports'
    }, {
        name: 'System Audit',
        link: '/system/systemaudit'
    }]
};

export const menu = [
    Dashboard,
    ServiceDesk,
    Security,
    PSACRM,
    SystemMenu
];
