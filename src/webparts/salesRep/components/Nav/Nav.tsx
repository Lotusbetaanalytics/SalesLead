import * as React from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react';


const navStyles: Partial<INavStyles> = {
    root: {
      width: '20%',
      height: '30rem',
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
      float: 'left',
      padding: '0px 0px 0px 3px',
    },
  };


const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Dashboard',
          url: '#/Dashboard/Dashboard',
          key: 'key1',
        //   expandAriaLabel: 'Expand Home section',
        //   collapseAriaLabel: 'Collapse Home section',
          isExpanded: true,
          icon: 'GoToDashboard',
        },
        {
          name: 'Leads',
          url: '',
          key: 'key2',
          //disabled: true,
          // isExpanded: true,
          // target: '_blank',
          //icon: 'ReportAdd',
              links: [
            {
              name: 'Create Leads',
              url: '#/Leads/CreateLead',
              key: 'key1.1',
              icon: 'Add'
              //target: '_blank',
            },
            {
              name: 'View Leads',
              url: '#/Leads/ViewLeads',
              key: 'key1.2',
              icon: 'View'
              //target: '_blank',
            },
          ],
        },
        {
          name: 'Sign Out',
          url: '#/',
          key: 'key5',
          // target: '_blank',
          icon: 'SignOut'
        },
      ],
    },
  ];

export class SideNav extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
      return (
        <Nav
        expandButtonAriaLabel="Expand or collapse" 
        // selectedKey="key1"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
    />
      );
    }
}