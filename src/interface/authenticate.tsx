export interface User {
    accessToken?: string;
    refreshToken?: number;
    id?: string;
    name: string;
    tel: string;
    job: string;
    currentAddress: string;
    email: string;
    passWord: string;
    citizenIdentificationInfo: {
        number: string;
        address: string;
        dateReceive: Date;
    };
    passportInfo: {
        number: string;
        address: string;
        dateReceive: Date;
    };
    drivingLicenseInfo: {
        number: string;
        dateReceive: Date;
    };
}
