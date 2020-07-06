/*jshint esversion: 6 */
(function() {
    "use strict";
    let account = new Account(1);
    let savingsAccount = new SavingsAccount(2, 2.5);
    let checkingAccount = new CheckingAccount(3, 500);
    let bank = new Bank();

            describe ('test', function () {
                context("Account Test", function () {
                    it("account.GetNumber() should return 1", function () {
                        assert.equal(account.getNumber(), 1);
                    });
                    it("account.getBalance() should return 0.0", function () {
                        assert.equal(account.getBalance(), 0.0);
                    });
                    it("account.deposit(1000); account.getBalance() is 1000", function () {
                        account.deposit(1000);
                        assert.equal(account.getBalance(), 1000);
                    });
                    it("account.withdraw(300); account.getValance() is 700", function () {
                        account.withdraw(300);
                        assert.equal(account.getBalance(), 700);
                    });
                    it("account.toString() is \"Account 1: balance 700\"", function () {
                        assert.equal(account.toString(), "Account 1: balance 700");
                    });
                });
                context("Savings Account Test", function () {
                    it("savingsAccount.interest is 2.5", function () {
                        assert.equal(savingsAccount.interest, 2.5);
                    });
                    it("savingsAccount.deposit(100); savingsAccount.addInterest(); account.getBalance() is 102.5", function () {
                        savingsAccount.deposit(100);
                        savingsAccount.addInterest();
                        assert.equal(savingsAccount.getBalance(), 102.5);
                    });
                    it("savingsAccount.toString() is \"SavingsAccount 2: balance: 102.5 interest(%): 2.5%\"", function () {
                        assert.equal(savingsAccount.toString(), "SavingsAccount 2: balance: 102.5 interest(%): 2.5%");
                    });
                });
                context("checking Account Test", function () {
                    it("checkingAccount.overdraftLimit is 500", function () {
                        assert.equal(checkingAccount.overdraftLimit, 500);
                    });
                    it("checkingAccount.deposit(200); checkingAccount.toString() is \"CheckingAccount 3: balance: 200 overdraft limit: 500\"", function () {
                        checkingAccount.deposit(200);
                        assert.equal(checkingAccount.toString(), "CheckingAccount 3: balance: 200 overdraft limit: 500");
                    });
                    it("checkingAccount.withdraw(300); account.getBalance() is -100", function () {
                        checkingAccount.withdraw(300);
                        assert.equal(checkingAccount.getBalance(), -100);
                    });
                    it("checkingAccount.toString() is \"Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\"", function () {
                        assert.equal(checkingAccount.toString(), "Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500");
                    });
                });
                context("Bank Test", function () {
                    it("bank.addAccount() is 1", function () {
                        assert.equal(bank.addAccount(), 1);
                    });
                    it("bank.addSavingsAccount(2.5) is 2", function () {
                        assert.equal(bank.addSavingsAccount(2.5), 2);
                    });
                    it("bank.addCheckingAccount(600) is 3", function () {
                        assert.equal(bank.addCheckingAccount(600), 3);
                    });
                    it("bank.closeAccount(2); bank.accountReport() is Account 1: balance 0\nCheckingAccount 3: balance: 0 overdraft limit: 600\n", function () {
                        bank.closeAccount(2);
                        assert.equal(bank.accountReport(), "Account 1: balance 0\nCheckingAccount 3: balance: 0 overdraft limit: 600\n");
                    });
                });
        });
})();