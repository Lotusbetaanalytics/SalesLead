import * as React from 'react';
import styles from './SalesRep.module.scss';
import { ISalesRepProps } from './ISalesRepProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
import * as jQuery from 'jQuery';
// https://developer.microsoft.com/en-us/fabric#/controls/web
import { TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
  IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType, 
  IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
  IDocumentCardPreviewProps } from 'office-ui-fabric-react';

import { Landing } from './LandingPage/Landing';
import { Dashboard } from './Dashboard/Dashboard';
import { CreateLead } from './Leads/CreateLeads/CreateLead';
import { ViewLeads } from './Leads/ViewLeads/ViewLeads';
import { LeadsPivot } from './Leads/LeadsPivot';

export default class SalesRep extends React.Component<ISalesRepProps, {}> {
  public render(): React.ReactElement<ISalesRepProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={ styles.salesRep }>
        <div className={ styles.container }>
          {/* <div className={ styles.row }> */}
            {/* <div className={ styles.column }> */}
            <HashRouter >
              <Switch>
                <Route path="/" exact={true} component={() => <Landing  {...this.props} />}/>
                <Route path="/Dashboard" component={Dashboard}/> 
                <Route path="/Leads/CreateLead" component={CreateLead}/> {/**CreateLead*/}
                <Route path="/Leads/ViewLeads" component={ViewLeads}/> 
              </Switch>
            </HashRouter>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}


{/* <span className={ styles.title }>Welcome to SharePoint!</span>
<p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
<p className={ styles.description }>{escape(this.props.description)}</p>
<a href="https://aka.ms/spfx" className={ styles.button }>
  <span className={ styles.label }>Learn more</span>
</a> */}
