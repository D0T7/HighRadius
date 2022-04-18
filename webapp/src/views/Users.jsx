import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import User from '../components/User';
import AddUser from '../components/AddInvoice';
import DeleteUser from '../components/DeleteUser';
import EditInvoice from '../components/EditInvoice';
import {connect} from 'react-redux';
import { add, update, getUsers, removeUser } from '../services/userAction';
import AdvanceSearch from '../components/AdvancedSearch';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: false, deleteUser: false, editUser: false, businessCode: "", custNumber: "", clearDate: "", businessYear: "", docId: "", postingDate: "",
            documentCreateDate: "", dueInDate: "", invoiceCurrency: "", documentType: "", postingId: "", totalOpenAmount: "", baselineCreateDate: "",
            custPaymentTerms: "", invoiceId: "", userListToBeUpdate: [], searchTerm: "", isAdvanceSearch: false, filteredUser: [], searchDocumentID: "",
            searchInvoiceID: "", searchCustomerNumber: "", searchBusinessYear: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.validateUpdate = this.validateUpdate.bind(this);
        this.validateRemove = this.validateRemove.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        this.filterCriteria = this.filterCriteria.bind(this);
    }

    filterCriteria = () => {
        const { searchDocumentID, searchInvoiceID, searchCustomerNumber, searchBusinessYear, searchTerm } = this.state;
        let filteringData = this.props.users;
        if (searchDocumentID && searchDocumentID.toString().length > 0) {
            filteringData = filteringData.filter(({ docId }) => docId.toString().indexOf(searchDocumentID) >= 0);
        }
        if (searchInvoiceID && searchInvoiceID.toString().length > 0) {
            filteringData = filteringData.filter(({ invoiceId }) => invoiceId.toString().indexOf(searchInvoiceID) >= 0);
        }
        if (searchCustomerNumber !== "" || searchTerm.toString().length >= 0) {
            let data = "";
            console.log(searchTerm);
            if (searchCustomerNumber.toString().length > 0)
                data = searchCustomerNumber;
            else
                data = searchTerm;
            filteringData = filteringData.filter(({ custNumber }) => custNumber.toString().indexOf(data) >= 0);
        }
        if (searchBusinessYear && searchBusinessYear.toString().length > 0) {
            filteringData = filteringData.filter(({ buisnessYear: buisnessYear }) => buisnessYear.toString().indexOf(searchDocumentID) >= 0);
        }
        this.setState({
            filteredUser: filteringData
        });
        this.handleClick("isAdvanceSearch", false);
    }

    handleClick = (name, flag) => {
        this.setState({
            [name]: flag
        });
    }

    handleChange = (state, value) => {
        this.setState({
            [state]: value
        }, () => {
            if (state === "searchTerm") {
                this.filterCriteria();
            }
        });
    }

    validateUser = () => {
        const {
            businessCode, custNumber, clearDate, businessYear, docId, postingDate, documentCreateDate, dueInDate, invoiceCurrency, documentType,
            postingId, totalOpenAmount, baselineCreateDate, custPaymentTerms, invoiceId } = this.state;
        const user = {
            businessCode, custNumber, clearDate, businessYear, docId, postingDate, documentCreateDate, dueInDate, invoiceCurrency, documentType,
            postingId, totalOpenAmount, baselineCreateDate, custPaymentTerms, invoiceId
        };
        user.slNo = this.props.users.length + 1;
        this.props.add(user);
        this.setState({
            businessCode: "", custNumber: "", clearDate: "", businessYear: "", docId: "", postingDate: "", documentCreateDate: "", dueInDate: "",
            invoiceCurrency: "", documentType: "", postingId: "", totalOpenAmount: "", baselineCreateDate: "", custPaymentTerms: "", invoiceId: "",
        });
        this.handleClick("addUser", false);
    }

    handleSelect = (user) => {
        this.setState({
            userListToBeUpdate: user
        });
    }

    async componentDidMount() {
        await this.props.getUsers();
        const { users } = this.props;
        this.setState({
            filteredUser: users
        });
    }

    validateUpdate = () => {
        const { users } = this.props;
        const { invoiceCurrency, custPaymentTerms } = this.state;
        if (this.state.userListToBeUpdate.length === 0)
            return;

        const user = users.find(user => user.slNo === this.state.userListToBeUpdate[0]);
        user.invoiceCurrency = invoiceCurrency;
        user.custPaymentTerms = custPaymentTerms;
        this.props.update(user);
        this.setState({
            invoiceCurrency: "",
            custPaymentTerms: ""
        });
        this.handleClick("editUser", false);
    }

    validateRemove = () => {
        this.props.removeUser(this.state.userListToBeUpdate[0]);
        this.handleClick("deleteUser", false);
    }

    refreshPage = () => {
        this.props.getUsers();
    }

    render() {
        const {
            addUser, deleteUser, editUser, businessCode, custNumber, clearDate, businessYear, docId, postingDate, documentCreateDate, dueInDate, invoiceCurrency,
            documentType, postingId, totalOpenAmount, baselineCreateDate, custPaymentTerms, invoiceId, searchTerm, isAdvanceSearch, searchDocumentID,
            searchInvoiceID, searchCustomerNumber, searchBusinessYear, filteredUser } = this.state;
        return (
            <>
                <Buttons
                    onclick={this.handleClick}
                    addUser={addUser}
                    deleteUser={deleteUser}
                    editUser={editUser}
                    onchange={this.handleChange}
                    searchTerm={searchTerm}
                    refreshPage={this.refreshPage}
                    isAdvanceSearch={isAdvanceSearch}
                />
                <User users={filteredUser} handleSelect={this.handleSelect} />
                {addUser ?
                    <AddUser
                        onclick={this.handleClick}
                        addUser={addUser}
                        onchange={this.handleChange}
                        businessCode={businessCode}
                        custNumber={custNumber}
                        clearDate={clearDate}
                        businessYear={businessYear}
                        docId={docId}
                        postingDate={postingDate}
                        documentCreateDate={documentCreateDate}
                        dueInDate={dueInDate}
                        invoiceCurrency={invoiceCurrency}
                        documentType={documentType}
                        postingId={postingId}
                        totalOpenAmount={totalOpenAmount}
                        baselineCreateDate={baselineCreateDate}
                        custPaymentTerms={custPaymentTerms}
                        invoiceId={invoiceId}
                        validateUser={this.validateUser}
                    />
                    : null}
                {deleteUser ? <DeleteUser
                    onclick={this.handleClick}
                    deleteUser={deleteUser}
                    validateRemove={this.validateRemove}
                /> : null}
                {editUser ? <EditInvoice
                    onclick={this.handleClick}
                    editUser={editUser}
                    onchange={this.handleChange}
                    invoiceCurrency={invoiceCurrency}
                    custPaymentTerms={custPaymentTerms}
                    validateUpdate={this.validateUpdate}
                /> : null}
                {isAdvanceSearch ?
                    <AdvanceSearch
                        onclick={this.handleClick}
                        isAdvanceSearch={isAdvanceSearch}
                        searchDocumentID={searchDocumentID}
                        searchInvoiceID={searchInvoiceID}
                        searchCustomerNumber={searchCustomerNumber}
                        searchBusinessYear={searchBusinessYear}
                        filterCriteria={this.filterCriteria}
                        onchange={this.handleChange}
                    />
                    : null}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.reducer.users
    }
}

export default connect(mapStateToProps, { add, update, getUsers, removeUser })(Users);
