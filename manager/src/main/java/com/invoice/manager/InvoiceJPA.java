package com.invoice.manager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

@Transactional
public interface InvoiceJPA extends PagingAndSortingRepository<InvoiceDetail, Integer> {

    @Query(value = "SELECT * FROM invoice_detail WHERE buisness_year LIKE %:keyword% OR cust_number LIKE %:keyword% OR invoice_id LIKE %:keyword% OR doc_id LIKE %:keyword%", nativeQuery = true)
    public Page<InvoiceDetail> findByKeyword(@Param("keyword") String keyword, Pageable pageable);

    public List<InvoiceDetail> findAllByDocIdAndInvoiceIdAndCustNumberAndBuisnessYear(String docId, Integer invoiceId,
            Integer custNumber, Byte businessYear);

    void deleteAllByDocIdIn(List<String> docIds);

    public InvoiceDetail findByDocId(String docId);
}
