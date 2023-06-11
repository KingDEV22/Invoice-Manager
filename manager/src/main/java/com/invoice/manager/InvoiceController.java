package com.invoice.manager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "/invoice", produces = "application/json")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class InvoiceController {

    private final InvoiceJPA invoiceJPA;

    @PostMapping("/add")
    public void addInvoice(@RequestBody InvoiceDetail invoiceDetail) {
        invoiceJPA.save(invoiceDetail);
    }

    @Transactional
    @DeleteMapping("/delete")
    public void deleteInvoice(@RequestBody DeleteRequest deleteRequest) {
        invoiceJPA.deleteAllByDocIdIn(deleteRequest.getAlterInvoice());
    }

    @PutMapping("/update")
    public void updateInvoice(@RequestBody EditInvoice editInvoice) {
        System.out.println(editInvoice);
        InvoiceDetail invoiceDetail = invoiceJPA.findByDocId(editInvoice.getDocId());
        if (editInvoice.getCustomer_payment_terms() != null && !editInvoice.getCustomer_payment_terms().equals(null)) {
            invoiceDetail.setCustPaymentTerms(editInvoice.getCustomer_payment_terms());
        }
        if (editInvoice.getInvoice_currency() != null && !editInvoice.getInvoice_currency().equals(null)) {
            invoiceDetail.setInvoiceCurrency(editInvoice.getInvoice_currency());
        }

        invoiceJPA.save(invoiceDetail);
    }

    @GetMapping("/list")
    public ResponseEntity<?> getInvoices(@RequestParam int page, @RequestParam int pagesize,
            @RequestParam String query) {
        Pageable pageholder = PageRequest.of(page, pagesize);
        Page<InvoiceDetail> invoices = query != "null" && !query.equals("null")
                ? invoiceJPA.findByKeyword(query, pageholder)
                : invoiceJPA.findAll(pageholder);
        System.out.println(invoices.getContent() + query);
        invoices.forEach(invoiceDetail -> {
            invoiceDetail.setClearDate(
                    invoiceDetail.getClearDate().equals("0000-00-00") ? "N/A" : invoiceDetail.getClearDate());
            invoiceDetail.setAgingBucket(
                    !invoiceDetail.getClearDate().equals("N/A") ? "N/A" : "");
        });

        return ResponseEntity.status(HttpStatus.OK).body(
                new InvoiceResponse(invoices.getContent(), invoices.getTotalPages(), invoices.getTotalElements()));
    }

    @GetMapping("/search")
    public ResponseEntity<List<InvoiceDetail>> getInvoicesByAdvanceSearch(InvoiceRequest invoiceRequest) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(invoiceJPA.findAllByDocIdAndInvoiceIdAndCustNumberAndBuisnessYear(invoiceRequest.getDocId(),
                        invoiceRequest.getInvoiceId(), invoiceRequest.getCustNumber(),
                        invoiceRequest.getBusinessYear()));
    }

}
