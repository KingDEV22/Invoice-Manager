package com.invoice.manager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface InvoiceJPA extends JpaRepository<InvoiceDetail, Integer> {

    @Query(value = "SELECT * FROM invoice_detail WHERE buisness_year = ?1 or cust_number = ?1 or invoice_id = ?1 or doc_id LIKE % ?1 %", nativeQuery = true)
    public List<InvoiceDetail> findByKeyword(String keyword);

    public List<InvoiceDetail> findAllByDocIdAndInvoiceIdAndCustNumberAndBusinessYear(String docId, Integer invoiceId,
            Integer custNumber, String businessYear);
}
