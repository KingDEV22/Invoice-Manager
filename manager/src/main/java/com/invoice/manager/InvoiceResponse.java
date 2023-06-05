package com.invoice.manager;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class InvoiceResponse {
    List<InvoiceDetail> invoices;
    int totalPage;
    long totalElement;
}
