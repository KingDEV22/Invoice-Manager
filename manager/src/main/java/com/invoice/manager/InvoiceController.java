package com.invoice.manager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "/invoice", produces = "application/json")
@AllArgsConstructor
public class InvoiceController {

    private final InvoiceJPA invoiceJPA;

    @PostMapping("/add")
    public void addInvoice(InvoiceDetail invoiceDetail) {
        invoiceJPA.save(invoiceDetail);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteInvoice(@PathVariable Integer invoice_id) {
        invoiceJPA.deleteById(invoice_id);
    }

    @PutMapping("/update")
    public void updateInvoice(InvoiceDetail invoiceDetail) {
        invoiceJPA.save(invoiceDetail);
    }

    @GetMapping("/list")
    public ResponseEntity<List<InvoiceDetail>> getInvoices() {
        return ResponseEntity.status(HttpStatus.OK).body(invoiceJPA.findAll());
    }

    @GetMapping("/{keyword}")
    public ResponseEntity<List<InvoiceDetail>> getInvoicesByKeyword(@PathVariable String keyword) {
        return ResponseEntity.status(HttpStatus.OK).body(invoiceJPA.findByKeyword(keyword));
    }

    @GetMapping("/search")
    public ResponseEntity<List<InvoiceDetail>> getInvoicesByAdvanceSearch(InvoiceRequest invoiceRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(invoiceJPA.findAllByDocIdAndInvoiceIdAndCustNumberAndBusinessYear(invoiceRequest.getDocId(),invoiceRequest.getInvoiceId(),invoiceRequest.getCustNumber(),invoiceRequest.getBusinessYear()));
    }

}
