
    document.addEventListener("DOMContentLoaded", function () {
        const calculateButton = document.getElementById("calculate-button");
        const pickupDateInput = document.getElementById("pickup-date");
        const returnDateInput = document.getElementById("return-date");
        const totalPriceInput = document.getElementById("total-price");

        calculateButton.addEventListener("click", function () {
            const pickupDate = new Date(pickupDateInput.value);
            const returnDate = new Date(returnDateInput.value);
            
            // Calculate the time difference in milliseconds
            const timeDifference = returnDate - pickupDate;
            
            // Convert milliseconds to hours
            const hours = Math.ceil(timeDifference / (1000 * 60 * 60));

            const ratePerHour = 100; // Replace this with your actual rate per hour

            const totalRate = hours * ratePerHour;

            totalPriceInput.value = `₹${totalRate}`;
        });
    });

