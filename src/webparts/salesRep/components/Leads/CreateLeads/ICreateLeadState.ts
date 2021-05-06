import { MessageBarType } from 'office-ui-fabric-react'; 

export interface ICreateLeadItemState {  
    title: string;  
    showMessageBar: boolean;    
    messageType?: MessageBarType;    
    message?: string;  
}  