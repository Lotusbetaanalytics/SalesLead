import * as React from 'react';
import styles from '../CreateLead.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
import * as jQuery from 'jQuery';
// https://developer.microsoft.com/en-us/fabric#/controls/web
import {
  TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, Checkbox, Icon, PrimaryButton,
  IIconProps, Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps, Dropdown, DropdownMenuItemType,
  IDropdownOption, IDropdownStyles, DatePicker, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
  IDocumentCardPreviewProps, autobind, Pivot, PivotItem
} from 'office-ui-fabric-react';
import { ICreateLeadItemState } from './ICreateLeadState';
import { ICreateLeadProps } from './ICreateLeadProps';


import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemAddResult } from "@pnp/sp/items";

import { SideNav } from '../../Nav/Nav';

// const verticalStackProps: IStackProps = {  
//   styles: { root: { overflow: 'hidden', width: '100%' } },  
//   tokens: { childrenGap: 20 }  
// };  





const stackStyles: Partial<IStackStyles> = { root: { width: '100%' } }; //Stack cover
const stackTokens: IStackTokens = { childrenGap: 40 }; //Gap between form item i.e textbox
const columnProps: Partial<IStackProps> = { //inner stack property
  tokens: { childrenGap: 15 },
  styles: { root: { width: 420, margin: '0 2rem' } },
};


export class CreateLead extends React.Component<{}, {}> { //ICreateLeadProps, ICreateLeadItemState

  // constructor(props: ICreateLeadProps, state: ICreateLeadItemState) {  
  //   super(props);  
  //   this.state = {  
  //     title: '',  
  //     showMessageBar: false  
  //   };  

  //   sp.setup({
  //     spfxContext: this.props.spcontext
  //   });
  // } 

  public render(): React.ReactElement<{}> {

    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

    return (
      <div className={styles.createlead}>
        <SideNav />
        <div className={styles.createleadcont}>
          <h1>Create Lead</h1>
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
              <TextField label="First Name" />
              <TextField label="Last Name" />
              <TextField label="House number" />
              <TextField label="City" />
              <TextField label="State" />
            </Stack>
            <Stack {...columnProps}>
              <TextField label="First Name" />
              <TextField label="Last Name" />
              <TextField label="House number" />
              <TextField label="City" />
              <TextField label="State" />
            </Stack>
          </Stack>
          <br />
          <PrimaryButton text="Save" />

          {/* {  
            this.state.showMessageBar  
              ?  
              <div className="form-group">  
                <Stack {...verticalStackProps}>  
                  <MessageBar messageBarType={this.state.messageType}>{this.state.message}</MessageBar>  
                </Stack>  
              </div>  
              :  
              null  
          }  
          <div className={null}>  
            <div className="form-group">  
              <TextField label="Title" required onChanged={this.onchangedTitle} />  
            </div>  
            <div className={`${null} form-group`}>  
              <button type="button" className="btn btn-primary" onClick={this.createItem}>Submit</button>  
            </div>  
          </div>*/}

        </div>
      </div>
    );
  }

  // @autobind  
  // private onchangedTitle(title: any): void {  
  //   this.setState({ title: title });  
  // }  

  // @autobind  
  // private async createItem() {  
  //   try {  
  //     await sp.web.lists.getByTitle('Customer Tracking').items.add({  
  //       Title: this.state.title  
  //     });  
  //     this.setState({  
  //       message: "Item: " + this.state.title + " - created successfully!",  
  //       showMessageBar: true,  
  //       messageType: MessageBarType.success  
  //     });  
  //   }  
  //   catch (error) {  
  //     this.setState({  
  //       message: "Item " + this.state.title + " creation failed with error: " + error,  
  //       showMessageBar: true,  
  //       messageType: MessageBarType.error  
  //     });  
  //   }  
  // }
}
