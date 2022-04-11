import { LightningElement, wire, track } from 'lwc';
import getAccountsForPagination from '@salesforce/apex/classForPagination.getAccountsForPagination'

// Datatable columns
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'currency', cellAttributes: { alignment: 'center' } },
    { label: 'Industry', fieldName: 'Industry' }
];

export default class PaginationInLWC extends LightningElement {
    // Storing records info using wire and apex call
    @wire(getAccountsForPagination)
    allAccounts;

    columns = columns;

    @track pageNum = 1;
    @track maxPage = 1;
    @track rowOffset = 0;

    // getter to return the accounts info acording to page number
    get accountsData(){
        if(this.allAccounts.data){
            var returnData = [...this.allAccounts.data];
            // Assigning row offset to the datatable for indexing according to the page
            this.rowOffset = (this.pageNum - 1) * 10;
            // Returning 10 records per page
            return returnData.splice((this.pageNum - 1) * 10, 10);
        }
    }


    get returnPageInfo() {
        return `${this.pageNum} / ${this.maxPage}`
    }

    get receivedResponse(){
        if(this.allAccounts.data){ 
            // Creating number of pages
            this.maxPage = Math.ceil(this.allAccounts.data.length / 10);        
            return true;
        }
        return false;
    }

    //Button handlers
    firstPageHandler(){
        this.pageNum = 1;
    }

    previousHandler(){
        this.pageNum = Math.max(this.pageNum - 1, 1)
    }

    nextHandler(){
        this.pageNum = Math.min(this.pageNum + 1, this.maxPage);
    }

    lastPageHandler(){
        this.pageNum = this.maxPage;
    }
}