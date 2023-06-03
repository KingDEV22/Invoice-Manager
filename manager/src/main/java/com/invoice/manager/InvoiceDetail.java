package com.invoice.manager;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@Entity
public class InvoiceDetail {
    @Id
    private Integer slNo;
    private Integer custNumber;
    private String custName;
    private Integer postingId;
    private Integer invoiceId;
    private String businessCode;
    private String docId;
    private String invoiceCurrency;
    private String documentType;
    private String areaBusiness;
    private String custPaymentTerms;
    private String agingBucket;
    private String clearDate;
    private String businessYear;
    private String postingDate;
    private String documentCreateDate;
    private String documentCreateDate1;
    private String dueInDate;
    private String baselineCreateDate;
    private Double totalOpenAmount;
    private Byte isOpen;
    private Byte isDeleted;
    private String name;
    private int count;
}
