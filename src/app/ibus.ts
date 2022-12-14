import { DatePipe } from "@angular/common"

export interface Ibus {
    busId: number
    busNo: string
    rows: number
    cols: number
    dtime:string
    atime: string
    pickup: string
    seatCost: number
    driverName: string
    driverContact: number
    typeOfBus: string
    source: string
    destination: string
    distance: number

}
