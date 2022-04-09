package com.highradius.pojo;

import java.sql.Date;

public class Invoice {
	private int slNo, custNumber, postingId, invoiceId, businessYear;

	private String businessCode, docId, invoiceCurrency,
			documentType, custPaymentTerms;

	private double totalOpenAmount;

	private Date clearDate, postingDate, documentCreateDate,
			dueInDate, baselineCreateDate;

	public Invoice() {
	}

	public Invoice(int slNo, String businessCode, int custNumber, Date clearDate, int businessYear,
			String docId, Date postingDate, Date documentCreateDate, Date dueInDate, String invoiceCurrency,
			String document_type, int posting_id, double total_open_amount, Date baseline_create_date,
			String custPaymentTerms, int invoiceId) {
		super();
		this.slNo = slNo;
		this.businessCode = businessCode;
		this.custNumber = custNumber;
		this.clearDate = clearDate;
		this.businessYear = businessYear;
		this.docId = docId;
		this.postingDate = postingDate;
		this.documentCreateDate = documentCreateDate;
		this.dueInDate = dueInDate;
		this.invoiceCurrency = invoiceCurrency;
		this.documentType = document_type;
		this.postingId = posting_id;
		this.totalOpenAmount = total_open_amount;
		this.baselineCreateDate = baseline_create_date;
		this.custPaymentTerms = custPaymentTerms;
		this.invoiceId = invoiceId;
	}

	public int getSlNo() {
		return slNo;
	}

	public void setSlNo(int slNo) {
		this.slNo = slNo;
	}

	public int getCustNumber() {
		return custNumber;
	}

	public void setCustNumber(int custNumber) {
		this.custNumber = custNumber;
	}

	public int getPostingId() {
		return postingId;
	}

	public void setPostingId(int postingId) {
		this.postingId = postingId;
	}

	public int getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getBusinessCode() {
		return businessCode;
	}

	public void setBusinessCode(String businessCode) {
		this.businessCode = businessCode;
	}

	public int getBusinessYear() {
		return businessYear;
	}

	public void setBusinessYear(int businessYear) {
		this.businessYear = businessYear;
	}

	public String getDocId() {
		return docId;
	}

	public void setDocId(String docId) {
		this.docId = docId;
	}

	public String getInvoiceCurrency() {
		return invoiceCurrency;
	}

	public void setInvoiceCurrency(String invoiceCurrency) {
		this.invoiceCurrency = invoiceCurrency;
	}

	public String getDocumentType() {
		return documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	public double getTotalOpenAmount() {
		return totalOpenAmount;
	}

	public void setTotalOpenAmount(double totalOpenAmount) {
		this.totalOpenAmount = totalOpenAmount;
	}

	public Date getClearDate() {
		return clearDate;
	}

	public void setClearDate(Date clearDate) {
		this.clearDate = clearDate;
	}

	public Date getPostingDate() {
		return postingDate;
	}

	public void setPostingDate(Date postingDate) {
		this.postingDate = postingDate;
	}

	public Date getDocumentCreateDate() {
		return documentCreateDate;
	}

	public void setDocumentCreateDate(Date documentCreateDate) {
		this.documentCreateDate = documentCreateDate;
	}

	public Date getDueInDate() {
		return dueInDate;
	}

	public void setDueInDate(Date dueInDate) {
		this.dueInDate = dueInDate;
	}

	public Date getBaselineCreateDate() {
		return baselineCreateDate;
	}

	public void setBaselineCreateDate(Date baselineCreateDate) {
		this.baselineCreateDate = baselineCreateDate;
	}

	public String getCustPaymentTerms() {
		return custPaymentTerms;
	}

	public void setCustPaymentTerms(String custPaymentTerms) {
		this.custPaymentTerms = custPaymentTerms;
	}

	@Override
	public String toString() {
		return " sl_no=" + slNo + "\n business_code=" + businessCode + "\n cust_number=" + custNumber
				+ "\n clear_date=" + clearDate + "\n business_year=" + businessYear + "\n doc_id=" + docId
				+ "\n posting_date=" + postingDate + "\n document_create_date=" + documentCreateDate
				+ "\n due_in_date="
				+ dueInDate + "\n invoice_currency=" + invoiceCurrency + "\n document_type=" + documentType
				+ "\n posting_id=" + postingId + "\n total_open_amount=" + totalOpenAmount
				+ "\n baseline_create_date="
				+ baselineCreateDate + "\n cust_payment_terms=" + custPaymentTerms + "\n invoice_id=" + invoiceId
				+ "\n\n";
	}

}
