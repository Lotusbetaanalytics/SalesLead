import * as React from 'react';
import styles from './LeadsPivot.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemAddResult } from "@pnp/sp/items";
import {ViewLeads} from './ViewLeads/ViewLeads';
import {CreateLead} from './CreateLeads/CreateLead';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
import * as jQuery from 'jQuery';
// https://developer.microsoft.com/en-us/fabric#/controls/web

//Import fabric controls
import {
    TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
    IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType,
    IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
    IDocumentCardPreviewProps, autobind, Pivot, PivotItem
} from 'office-ui-fabric-react';

import { SideNav } from '../Nav/Nav';


export class LeadsPivot extends React.Component<{}, {}> {

    public render(): React.ReactElement<{}> {

        jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

{/**
 <HashRouter>
              <Switch>
                <Route path="/" exact={true} component={() => <Landing  {...this.props} />}/>
                <Route path="/Dashboard" component={Dashboard}/> 
                <Route path="/Leads/LeadsPivot" component={LeadsPivot}/>
                <Route path="/Leads/ViewLeads" component={ViewLeads}/> 
              </Switch>
            </HashRouter> */}

        return (
            <div className={styles.leadspivot}>
                <SideNav />
                <div className={styles.leadpivotcont}>
                    <Pivot aria-label="Basic Pivot Example">
                        <PivotItem headerText="Create Lead">
                            <CreateLead/>
                        </PivotItem>
                        <PivotItem headerText="View Leads">
                            
                            <ViewLeads/>
                        </PivotItem>
                    </Pivot>
                </div>
            </div>
        );
    }
}