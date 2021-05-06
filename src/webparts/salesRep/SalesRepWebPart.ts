import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import * as strings from 'SalesRepWebPartStrings';
import SalesRep from './components/SalesRep';
import { ISalesRepProps } from './components/ISalesRepProps';

export interface ISalesRepWebPartProps {
  description: string;
}

export default class SalesRepWebPart extends BaseClientSideWebPart<ISalesRepWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISalesRepProps> = React.createElement(
      SalesRep,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  public onInit(): Promise<void> {  
    return super.onInit().then(_ => {    
      sp.setup({  
        spfxContext: this.context  
      });  
    });  
  }   
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
