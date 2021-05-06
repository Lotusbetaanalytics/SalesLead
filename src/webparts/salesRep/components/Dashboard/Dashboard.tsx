import * as React from 'react';
import styles from './Dashboard.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jQuery';
import { BrowserRouter as Router, Route, Link, ILinkStyleProps, ILinkStyles, IStyle, 
    Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
// https://developer.microsoft.com/en-us/fabric#/controls/web
import { TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
    IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType, 
    IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
    IDocumentCardPreviewProps } from 'office-ui-fabric-react';
    
    import {SideNav} from '../Nav/Nav';

    export class Dashboard extends React.Component<{}, {}>{
        public render(): React.ReactElement<{}> {
            jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
            return (
                <div className={styles.dashboard}>
                    <SideNav/>
                    <div className={styles.dashcontainer}>
                           <h1>Dashboard</h1> 
                    </div>
                </div>
            );
        }
    }