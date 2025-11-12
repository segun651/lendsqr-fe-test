
import UsersImage from "../../assets/images/Sidebar-Images/user-friends 1.png"
import GuaratorsImage from  "../../assets/images/Sidebar-Images/users 1.png"
import LoansImage from "../../assets/images/Sidebar-Images/sack 1.png"
import DecisionModelsImage from "../../assets/images/Sidebar-Images/handshake-regular 1.png"
import SavingsImage from "../../assets/images/Sidebar-Images/piggy-bank 1.png"
import LoanRequestImage from "../../assets/images/Sidebar-Images/Group 104.png"
import WhiteListImage from "../../assets/images/Sidebar-Images/user-check 1.png"
import karmaImage from "../../assets/images/Sidebar-Images/user-times 1.png"

import BusinessBriefCase  from "../../assets/images/Sidebar-Images/briefcase 1 (1).png"
import LoanProductsImage  from "../../assets/images/Sidebar-Images/Group 104.png"
import SavingsProductImage from "../../assets/images/Sidebar-Images/np_bank_148501_000000 1.png"
import FeesAndChargesImage from  "../../assets/images/Sidebar-Images/coins-solid 1.png"
import TransactionsImage from "../../assets/images/Sidebar-Images/icon.png"
import ServicesImage from  "../../assets/images/Sidebar-Images/galaxy 1.png"
import ServiceAccountImage from  "../../assets/images/Sidebar-Images/user-cog 1.png"
import SettlementsImage from "../../assets/images/Sidebar-Images/scroll 1.png"
import ReportsImage from  "../../assets/images/Sidebar-Images/chart-bar 2.png"


import PreferencesImage from  "../../assets/images/Sidebar-Images/sliders-h 1.png"
import FeesAndPrcingImage from  "../../assets/images/Sidebar-Images/badge-percent 1.png"
import AuditLogsImage from  "../../assets/images/Sidebar-Images/clipboard-list 1.png"

interface dataArray {
  img: string;   // or `StaticImageData`
  text: string;
  link: string;
}

 export const CustomersArray : dataArray[] = [
    {
        img : UsersImage,
        text : "Users",
        link: "/users"
    },
     {
        img : GuaratorsImage,
        text : "Guarantors",
        link: "/users"
    },
     {
        img : LoansImage,
        text : "Loans",
        link: "/users"
    },
     {
        img : DecisionModelsImage,
        text : "Decision Models",
        link: "/users"
    },
     {
        img : SavingsImage,
        text : "Savings",
        link: "/users"
    },
     {
        img : LoanRequestImage,
        text : "Loan Requests",
        link: "/users"
    },
     {
        img : WhiteListImage,
        text : "Whitelist",
        link: "/users"
    },
      {
        img : karmaImage,
        text : "Karma",
        link: "/users"
    }
  ]

  export const BusinessesArray : dataArray[] = [

 {
    img : BusinessBriefCase,
        text : "Organization",
        link: "/users"
 },

 {
    img : LoanProductsImage,
        text : "Loan Products",
        link: "/users"
 },
 {
    img : SavingsProductImage,
        text : "Savings Products",
        link: "/users"
 },

 {
    img : FeesAndChargesImage,
        text : "Fees and Charges",
        link: "/users"
 },

 {
    img : TransactionsImage,
        text : "Transactions",
        link: "/users"
 },
 {
    img : ServicesImage,
        text : "Services",
        link: "/users"
 },
 {
    img : ServiceAccountImage,
        text : "Service Account",
        link: "/users"
 },
 {
    img : SettlementsImage,
        text : "Settlements",
        link: "/users"
 },
 {
    img : ReportsImage,
        text : "Reports",
        link: "/users"
 },
  ]

  export const SettingsArray : dataArray[] = [

    {
    img : PreferencesImage,
        text : "Preferences",
        link: "/users"
 },

 {
    img : FeesAndPrcingImage,
        text : "Fees and Pricing",
        link: "/users"
 },

 {
    img :  AuditLogsImage,
        text : "Audit Logs",
        link: "/users"
 },

  ]