export class Register {
    customer_name:string="";
    email:string="";
    phone_no:number=0;
    address:string="";
    constructor(customer_name:string,email:string,phone_no:number,address:string)
    {
        this.customer_name=customer_name;
        this.email=email;
        this.phone_no=phone_no;
        this.address=address;
    }
}
