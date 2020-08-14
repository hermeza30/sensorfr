import { PagesComponent } from './pages.component';
import { Routes,RouterModule } from '@angular/router';
import { SensorComponent } from './sensor/sensor.component';
import { VerSensorComponent } from './sensor/ver-sensor.component';
import { ModificarSensorComponent } from './sensor/modificar-sensor.component';
import { EventComponent } from './sensor/event.component';
import { LoginGuard } from './guard/login.guard';
const pagesRoutes:Routes=[
    {path:'',component:PagesComponent,canActivate:[LoginGuard],children:[
        {path:'sensor',component:SensorComponent,data:{titulo:"Sensor"}},
        {path:'ver',component:VerSensorComponent,data:{titulo:"Ver"}},
        {path:'modificar/:id',component:ModificarSensorComponent,data:{titulo:"Modificar"}},
        {path:'evento/:id',component:EventComponent,data:{titulo:"Eventos"}},
        {path:'',redirectTo:'/sensor',pathMatch:'full'}
    ]},
];
export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);