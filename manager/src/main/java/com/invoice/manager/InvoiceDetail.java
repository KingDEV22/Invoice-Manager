package com.invoice.manager;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class InvoiceDetail {
    @Id
    private Integer slNo;
    private Integer custNumber;
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
    private int buisnessYear;
    private Date postingDate;
    private Date documentCreateDate;
    private Date documentCreateDate1;
    private Date dueInDate;
    private Date baselineCreateDate;
    private Double totalOpenAmount;
    private Byte isOpen;
    private Byte isDeleted;
}
