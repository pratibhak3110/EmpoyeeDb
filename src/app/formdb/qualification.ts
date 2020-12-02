export class BasicInfo{
  public constructor(
    public Id: number,
    public EmpNo: string,
    public Title : string,
    public Initial: string,
    public FirstName: string,
    public  MiddleName: string,
    public LastName: string,
    public  Gender: string,
    public DOB: string,
    public EmpAge: number,
    public  OPhone: string,
    public PMobile : string,
    public OMail: string,
    public  PMail: string,
    public PMail2: string,
    public PMail3: string,
    public  Photo: string,
    public  Birth: string,
    public Domicile: string,
    public  Religion: string,
    public  Caste: string,
    public  Nationality: string,
    public  Voter: string,
    public PanNo: string,
    public  Adhar: string,
    public  Status: string,
    public  Child: string,
    public  MDate: string,
    public  SName: string,
    public  BankName: string,
    public  AccntType: string,
    public  Payment: string,
    public  AccntNo: string,
    public  BankDetail: string,
    public  IFSC: string,
    public  RBankNm: string,
    public  RAccntNo: string
  ){}
}


export class PermanantAdd{
  public  constructor(
    public emp_id: number,
    public permanantadd: string,
    public city: string,
    public country: string,
    public  state: string,
    public  district: string,
    public  pincode: string,
    public  phone1: string,
    public phone2: string,
    public  fax: string,
    public mobile: string,
    public sameaddress: string,
    public presentadd: string,
    public pcity: string,
    public pcountry: string,
    public  pstate: string,
    public  pdistrict: string,
    public  ppincode: string,
    public  pphone1: string,
    public pphone2: string,
    public  pfax: string,
    public pmobile: string
   ){}
   }


   export class PresentAdd{
    public  constructor(
      public emp_id: number,

     ){}
     }


export class Qualification{
  public  constructor(
    public emp_id: number,
    public degree: string,
     public institute: string,
     public pyear:string,
     public score:string,
     public area:string,
   ){}

   }

   export class Employee{
     public  constructor(
      public emp_id: number,
       public fdate: string,
       public tdate: string,
       public companynm: string,
       public designation: string,
       public rexp: string,
       public nrexp: string,
      ){}

      }

      export class Skill{
       public  constructor(
        public emp_id: number,
         public category: string,
         public skill: string,
         public level: string,
         public current: string,
         public experience: string,
        ){}

        }


