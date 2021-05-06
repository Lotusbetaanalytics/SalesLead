import * as React from 'react';
import styles from './ViewLeads.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
import * as jQuery from 'jQuery';
// https://developer.microsoft.com/en-us/fabric#/controls/web
import { TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
  IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType, 
  IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
  IDocumentCardPreviewProps } from 'office-ui-fabric-react';
import { SideNav } from '../../Nav/Nav';

export class ViewLeads extends React.Component<{}, {}> {

    public render(): React.ReactElement<{}> {
  
      jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
  
      return (
        <div className={styles.viewleads}>
          <SideNav />
          <div className={styles.viewleadscont}>
          <h2>ViewLeads</h2>
          </div>   
        </div>
      );
    }
  }
  