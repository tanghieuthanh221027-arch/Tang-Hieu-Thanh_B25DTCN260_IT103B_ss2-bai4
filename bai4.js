const vehicleType = "CAR_4";
const distanceKm = 8;
const isPeakHour = true;

let openingFare = 0;
let pricePerAdditionalKm = 0;

switch (vehicleType) {
    case "BIKE":
        openingFare = 12000;
        pricePerAdditionalKm = 4500;
        break;

    case "CAR_4":
        openingFare = 20000;
        pricePerAdditionalKm = 9000;
        break;

    case "CAR_7":
        openingFare = 25000;
        pricePerAdditionalKm = 11000;
        break;

    case "DELIVERY":
        openingFare = 15000;
        pricePerAdditionalKm = 5000;
        break;

    default:
        console.log("Loại phương tiện không tồn tại.");
        break;
}

let initialFare = 0;

if (vehicleType === "DELIVERY") {
    if (distanceKm <= 3) {
        initialFare = openingFare;
    } else {
        const additionalDistance = distanceKm - 3;
        initialFare = openingFare + additionalDistance * pricePerAdditionalKm;
    }
} else {
    if (distanceKm <= 2) {
        initialFare = openingFare;
    } else {
        const additionalDistance = distanceKm - 2;
        initialFare = openingFare + additionalDistance * pricePerAdditionalKm;
    }
}

let finalFare = initialFare;

if (isPeakHour) {
    finalFare = initialFare * 1.2;
}

console.log("========== HÓA ĐƠN ==========");
console.log("Loại phương tiện:", vehicleType);
console.log("Khoảng cách:", distanceKm, "km");
console.log("Cước ban đầu:", initialFare, "VNĐ");
console.log("Phụ phí cao điểm:", isPeakHour ? "Có" : "Không");
console.log("Cước thanh toán:", finalFare, "VNĐ");
console.log("=============================");