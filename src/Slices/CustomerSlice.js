import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: "",
    lastName: "",
    customerAddress: "",
    customerPhone: "",
    vehicleType: "",
    service: "",
    appointmentTime: "",
    appointmentDate: "",
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        bookAppointment: (state, actions) => {
            state.firstName = actions.payload
            state.lastName = actions.payload
            state.customerAddress = actions.payload
            state.customerPhone = actions.payload
            state.appointmentTime = actions.payload
            state.appointmentDate = actions.payload
            state.vehicleType = actions.payload
            state.service = actions.payload

        },

    }
})


export const { bookAppointment } = customerSlice.actions

export default customerSlice.reducer