package com.invoice.manager;

import lombok.Data;

@Data
public class InvoiceRequest {
    private String docId;
    private Integer invoiceId;
    private Integer custNumber;
    private String businessYear;
}
