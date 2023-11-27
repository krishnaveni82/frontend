import { SET_SNACKBAR, SET_USER } from "./action-types";

export const setSnackbar = ({status,message,open}) => (
    {
        type:SET_SNACKBAR,
        payload: {status,message,open},
    })