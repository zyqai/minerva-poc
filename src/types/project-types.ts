export interface File {
    fileId: number;
    name: string;
    lender: string;
    fileOwner: string;
    loanAmount: number;
    phase: string;
    probabilityToFund: number;
    date: string;
    progress: number;
    durationOfProcess?: string;
    people?: People[];
    businesses?: Business[];
    lenders?: Lender[];
    tags?: string[];
  };
  
  export interface People {
    peopleId: number;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    imageUrl?: string;
    activeFile?: boolean;
    martialStatus?: string;
    ssn?: string;
    dob?: string
    role?: string[];
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  }
  
  export interface Business {
    name: string;
    email?: string;
    phone?: string;
    imageUrl?: string;
  }
  
  export interface Lender {
    name: string;
    email?: string;
    phone?: string;
    imageUrl?: string;
  }