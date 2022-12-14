import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { ListbusComponent } from './listbus/listbus.component';
import { FindbusComponent } from './findbus/findbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { RemovebusComponent } from './removebus/removebus.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SidebarcustomerComponent } from './sidebarcustomer/sidebarcustomer.component';
import { SeatbookComponent } from './seatbook/seatbook.component';
import { BookingsComponent } from './bookings/bookings.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SummaryComponent } from './summary/summary.component';
import { PassbookedComponent } from './passbooked/passbooked.component';
import { BookingcancelComponent } from './bookingcancel/bookingcancel.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';


//import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {
    path:'app',component:AppComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'Adminlogin',component:AdminloginComponent
  },
  {
    path:'nav',component:NavadminComponent
  },
  {
    path:'add', component:AddbusComponent
  },
  {
    path:'edit/:busId', component:EditbusComponent
  },
  {
    path:'remove/:busId', component:RemovebusComponent
  },
  {
    path:'find/:busId', component:FindbusComponent
  },
  {
    path: 'list', component:ListbusComponent
  },
  {
    path: 'searchbus', component:SearchbusComponent
  },
  {
    path: 'cregister', component:CustomerRegistrationComponent
  },
  {
    path: 'clogin', component:LogincustomerComponent
  },{
    path:'bookings',component:BookingsComponent
  },
  {
    path:'wallet',component:WalletComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'changepass',component:ChangepasswordComponent
  },
  {
    path:'sbook/:busId',component:SeatbookComponent
  },
  {
    path:'sidebarcust',component:SidebarcustomerComponent
  },
  {
    path: 'passdetails',component:PassengerComponent
  },
  {
    path: 'transaction/:cId',component:TransactionComponent
  },
  {
    path:'card',component:CarddetailsComponent
  },
  {
    path:'feedback' ,component:FeedbackComponent
  },
  {
    path:'summary' ,component:SummaryComponent
  },
  {
    path:'passbook/:tId' ,component:PassbookedComponent
  },
  {
    path:'bookingcancel/:tId' ,component:BookingcancelComponent
  },
  {
    path:'editcust/:customerId' ,component:EditcustomerComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
