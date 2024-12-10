import { ReqMetadata } from "./metadata.model";

export class OTPRequest {
    phone: string = '';
    areaCode: string = '';
    smsOtp: string = '';
    destinationType?: string = '';
    verificationType?: string = '';
    country?: string = 'IN';
    metadata?: ReqMetadata = {};

    constructor(phone: string, areaCode: string, smsOtp: string, destinationType: string, verificationType: string ) {
        this.phone = phone;
        this.areaCode = areaCode;
        this.destinationType = destinationType;
        this.smsOtp = smsOtp;
        this.verificationType = verificationType;
    }
} 