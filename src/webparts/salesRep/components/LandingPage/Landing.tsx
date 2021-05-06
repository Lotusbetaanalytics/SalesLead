import * as React from 'react';
import styles from './Landing.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jQuery';
import {
    BrowserRouter as Router, Route, Link, ILinkStyleProps, ILinkStyles, IStyle,
    Redirect, Switch, HashRouter, PropsRoute
} from 'react-router-dom';
// https://developer.microsoft.com/en-us/fabric#/controls/web
import {
    TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
    IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType,
    IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react';
import { Dashboard } from '../Dashboard/Dashboard';

import { LandingProps } from './LandingProps';


export class Landing extends React.Component<LandingProps>{


    public render(): React.ReactElement<LandingProps> {
        jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
        return (
            <div className={styles.landing}>
                <div className={styles.heading}>
                    SALES LEAD APP
                    </div>
                <div className={styles.landingimg}>
                    <img src={require('../assets/landingbg.jpg')} height="300" width="300" /><br />
                    <span style={{ color: "DodgerBlue", paddingLeft: "3rem" }}>Welcome back {this.props.context.pageContext.user.displayName}</span>
                </div>
                <Link to={'/Dashboard'} className={styles.linkbtn}>Proceed to Dashboard </Link>

            </div>
        );
    }
}
