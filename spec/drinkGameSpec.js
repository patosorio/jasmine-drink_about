describe("whatCanIDrink", function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    });

    describe("Checking Ages", function(){
        it("Defined Function", function(){
            expect(whatCanIDrink).toBeDefined();
        });

        it("Should return Drink Toddy when whatCanIdrink(5)", function(){
            var answer = whatCanIDrink(5);
            expect(answer).toBe("Drink Toddy");
        });

        it("Should return Drink Beer when whatCanIdrink(18)", function(){
            var answer = whatCanIDrink(18);
            expect(answer).toBe("Drink Beer");
        });

        it("Should return Drink Beer when whatCanIdrink(20)", function(){
            var answer = whatCanIDrink(20);
            expect(answer).toBe("Drink Beer");
        });

        it("Should return Drink Whisky when whatCanIdrink(21)", function(){
            var answer = whatCanIDrink(21);
            expect(answer).toBe("Drink Whisky");
        });

        it("Should return Drink Whisky when whatCanIdrink(60)", function(){
            var answer = whatCanIDrink(60);
            expect(answer).toBe("Drink Whisky");
        });

        it("Should return unable to return a drink type when whatCanIdrink(200)", function(){
            var answer = whatCanIDrink(200);
            expect(answer).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("Should return unable to return a drink type when whatCanIdrink(-3)", function(){
            var answer = whatCanIDrink(-3);
            expect(answer).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});