/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Account = {
  id?: string;
  availableBalance?: number;
  currentBalance?: number;
  officialName?: string;
  mask?: string;
  institutionId?: string;
  name?: string;
  type?: string;
  subtype?: string;
  appwriteItemId?: string;
  shareableId?: string;
};
// ========================================

declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address1?: string;
  // city: string;
  state?: string;
  postalCode?: string;
  dateOfBirth?: string;
  ssn?: string;
  email: string;
  password: string;
};

declare type signInProps ={
  email:string,password:string
}

// NEEDED 
declare type logIn={
name:string,
  email:string
}

//PROPS
declare type HeaderProps = {
  type: string;
  title: string;
  user: string;
  subTitle: string;
};

declare type TotalBalanceBoxProps={
  accounts: Account[];
  totalBank:number,
  totalCurrentBalance:number
}


declare type DonartChartProps ={
  accounts:Account[]
}

declare type RightSideBarProps ={
  user:logIn,
  transitions:[],
  banks:object[]
}

declare type BankCardProps ={
  account:Account,
  userName:string,
showBalance:boolean
}
