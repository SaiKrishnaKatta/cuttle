import { ReqMetadata } from "./metadata.model";

export class OTPRequest {
    phone: string = '';
    country?: string = 'IN';
    areaCode: string = '';
    destinationType?: string = '';
    metadata?: ReqMetadata = {};
    smsOtp: string = '';
    verificationType?: string = '';

    constructor(phone: string, areaCode: string, destinationType: string, smsOtp: string, verificationType: string) {
        this.phone = phone;
        this.areaCode = areaCode;
        this.destinationType = destinationType;
        this.smsOtp = smsOtp;
        this.verificationType = verificationType;
    }
} 