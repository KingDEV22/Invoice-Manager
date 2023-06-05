package com.invoice.manager;

import lombok.Data;

@Data
public class EditInvoice {
    private String docId;
    private String invoice_currency;
    private String customer_payment_terms;
}
