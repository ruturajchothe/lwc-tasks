public class classForPagination {
	@auraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Name, Industry, AnnualRevenue FROM Account];
    }
}