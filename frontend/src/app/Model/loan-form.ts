
export class LoanForm {
    applicant_name:String="";
    date_of_birth:String="";
    age:number=0;
    gender:String="";
    phone_number:number=0;
    landline:number=0;
    religion:String="";
    community:String="";
    nationality:String="";
    email_id:String="";
     martial_status:String="";
   education:String="";
    photo_upload: File | undefined;
    digital_sign: File | undefined;
    annual_income:number=0;
    purpose:String="";
    type_of_gold:String="";
    number_of_ornaments:number=0;
    tenure:number=0;
    loan_amount:number=0;
    account_holder_name:String="";
    account_number:number=0;
    branch_name:String="";
    ifsc_code:number=0;
    payment_mode:String="";
    mode_of_disbursal:String="";
    tAddr:String="";
    tpin:number=0;
    pAddr:String="";
    ppin:number=0;
    occupation:String="";
    deoccupation:String="";
    requiredLoan:String="";
    contact:String="";
    constructor(applicant_name:String,date_of_birth:String,age:number,gender:String,
        phone_number:number,landline:number,religion:String, community:String,nationality:String,email_id:String, martial_status:String,
        education:String,photo_upload: File,annual_income:number,purpose:String,
        type_of_gold:String,number_of_ornaments:number,tenure:number,loan_amount:number,account_holder_name:String,
        account_number:number,branch_name:String,ifsc_code:number,payment_mode:String,mode_of_disbursal:String, tAddr:String,
        tpin:number,
        pAddr:String,ppin:number,
        occupation:String,
        deoccupation:String,
        requiredLoan:String,
        contact:String
        )
        {
            this.applicant_name=applicant_name;
            this.date_of_birth=date_of_birth;
            this.age=age;
            this.gender=gender;
            this.phone_number=phone_number;
            this.landline=landline;
            this.religion=religion;
            this.community=community;
            this.nationality=nationality;
            this.email_id=email_id;
            this.martial_status=martial_status;
            this.education=education;
            this.photo_upload=photo_upload;
            this.annual_income=annual_income;
            this.purpose=purpose;
            this.type_of_gold=type_of_gold;
            this.number_of_ornaments=number_of_ornaments;
            this.tenure=tenure;
            this.loan_amount=loan_amount;
            this.account_holder_name=account_holder_name;
            this.account_number=account_number;
            this.branch_name=branch_name;
            this.ifsc_code=ifsc_code;
            this.payment_mode=payment_mode;
            this.mode_of_disbursal=mode_of_disbursal;
            this.tAddr=tAddr;
            this.tpin=tpin;
            this.pAddr=pAddr;
            this.ppin=ppin;
            this.occupation=occupation;
            this.deoccupation=deoccupation;
            this.requiredLoan=requiredLoan;
            this.contact=contact;

        }
}
