import { ReqMetadata } from "./metadata.model";

export class OTPRequest {
    mobile: string = '';
    country: string = 'IN';
    areaCode: string = '';
    destinationType: string = '';
    metadata: ReqMetadata = {};

    constructor(phone: string, areaCode: string, destinationType: string) {
        this.mobile = phone;
        this.areaCode = areaCode;
        this.destinationType = destinationType;
    }
} 