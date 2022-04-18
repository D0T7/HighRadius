import axios from 'axios';

export const getUsers = () => async dispatch => {
    const users = await axios.get(`http://localhost:8080/HR/FetchData`);

    dispatch({
        type: "GET_USERS",
        payload: users.data
    })
}

export const add = (user) => async dispatch => {
    console.log(user)
    const { businessCode,
        custNumber,
        clearDate,
        businessYear,
        docId,
        postingDate,
        documentCreateDate,
        dueInDate,
        invoiceCurrency,
        documentType,
        postingId,
        totalOpenAmount,
        baselineCreateDate,
        custPaymentTerms,
        invoiceId } = user;
    const addUser = await axios.get(`http://localhost:8080/HR/AddInvoice?businessCode=${businessCode}&custNumber=${custNumber}&clearDate=${clearDate}&businessYear=${businessYear}&docId=${docId}&postingDate=${postingDate}&documentCreateDate=${documentCreateDate}&dueInDate=${dueInDate}&invoiceCurrency=${invoiceCurrency}&documentType=${documentType}&postingId=${postingId}&totalOpenAmount=${totalOpenAmount}&baselineCreateDate=${baselineCreateDate}&custPaymentTerms=${custPaymentTerms}&invoiceId=${invoiceId}`);
    dispatch({
        type: "ADD",
        payload: user
    })
}


export const update = (user) => async dispatch => {
    const updatedData = axios.get(`http://localhost:8080/HR/EditInvoice?invoiceCurrency=${user.invoiceCurrency}&custPaymentTerms=${user.custPaymentTerms}&slNo=${user.slNo}`);
    dispatch({
        type: "UPDATE",
        payload: user
    })
}

export const removeUser = slNo => async dispatch => {
    const deleteUser = axios.get(`http://localhost:8080/HR//DeleteInvoice?slNo=${slNo}`);
    dispatch({
        type: "DELETE",
        payload: slNo
    })
}