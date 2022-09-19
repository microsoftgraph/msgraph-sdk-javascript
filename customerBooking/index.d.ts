import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation5968, operation5969, operation5970, operation5971, operation5972, operation5973, operation5974, operation5975, operation5976, operation5977, operation5978, operation5979, operation5980, operation5981, operation5982, operation5983, operation5984, operation5985, operation5986, operation5987, operation5988, operation5989, operation5990, operation5991, operation5992, operation5993, operation5994, operation5995, operation5996, operation5997 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api: "/solutions"): operation5968,
        (api: "/solutions/bookingBusinesses"): operation5969,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}", bookingBusinessid: string): operation5970,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/appointments", bookingBusinessid: string): operation5971,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}", bookingBusinessid: string, bookingAppointmentid: string): operation5972,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/microsoft.graph.cancel", bookingBusinessid: string, bookingAppointmentid: string): operation5973,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/$count", bookingBusinessid: string): operation5974,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView", bookingBusinessid: string): operation5975,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}", bookingBusinessid: string, bookingAppointmentid: string): operation5976,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/microsoft.graph.cancel", bookingBusinessid: string, bookingAppointmentid: string): operation5977,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/$count", bookingBusinessid: string): operation5978,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customers", bookingBusinessid: string): operation5979,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}", bookingBusinessid: string, bookingCustomerBaseid: string): operation5980,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customers/$count", bookingBusinessid: string): operation5981,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions", bookingBusinessid: string): operation5982,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}", bookingBusinessid: string, bookingCustomQuestionid: string): operation5983,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/$count", bookingBusinessid: string): operation5984,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/microsoft.graph.getStaffAvailability", bookingBusinessid: string): operation5985,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/microsoft.graph.publish", bookingBusinessid: string): operation5986,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/microsoft.graph.unpublish", bookingBusinessid: string): operation5987,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/services", bookingBusinessid: string): operation5988,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}", bookingBusinessid: string, bookingServiceid: string): operation5989,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/services/$count", bookingBusinessid: string): operation5990,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers", bookingBusinessid: string): operation5991,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}", bookingBusinessid: string, bookingStaffMemberBaseid: string): operation5992,
        (api: "/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/$count", bookingBusinessid: string): operation5993,
        (api: "/solutions/bookingBusinesses/$count"): operation5994,
        (api: "/solutions/bookingCurrencies"): operation5995,
        (api: "/solutions/bookingCurrencies/{bookingCurrency-id}", bookingCurrencyid: string): operation5996,
        (api: "/solutions/bookingCurrencies/$count"): operation5997,
    }
}

export { };