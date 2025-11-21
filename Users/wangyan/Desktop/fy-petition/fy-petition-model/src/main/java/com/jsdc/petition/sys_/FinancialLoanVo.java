package com.jsdc.petition.sys_;

import com.jsdc.petition.sys_.FinancialLoan;
import lombok.Data;

@Data
public class FinancialLoanVo extends FinancialLoan {
    private Integer pageNo = 1;
    private Integer pageSize = 10;
}
