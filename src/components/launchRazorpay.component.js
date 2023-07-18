const launchRazorPay = () => {

        let options = {
                key: "rzp_test_1JAqo1dVhe7xTh",
                amount:30000,
                currency :"INR",
                name: "Book My Show clone",
                description: "Movie Purchase on Rental",
                image:"https://asset.brandfetch.io/id4J58sqa_/idaQ1GyW_d.svg?updated=1674733846500",
                handler: () => {
                    alert("Payment Done!!!!")    
                },
                theme: {color:"#c4242d"}
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
    };
    
export default launchRazorPay;