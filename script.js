"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cars, _i, cars_1, car, createdCar, _a, _b, feature;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cars = [
                        {
                            id: "1",
                            name: "2023 Model X",
                            price: 9910.99,
                            summary: "Electric SUV with sleek design and cutting-edge features",
                            overview: "The 2023 Model X is designed for safety and speed, with cutting-edge features and a sleek, aerodynamic exterior. This electric SUV offers a spacious and luxurious interior, making it the perfect choice for family road trips or daily commutes.",
                            features: [
                                "Advanced Autopilot with Full Self-Driving Capability",
                                "Falcon Wing doors for easy access",
                                "Dual-zone climate control with HEPA air filtration",
                                "17-inch infotainment touchscreen with navigation and entertainment options",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "2",
                            name: "2022 Toyota Camry",
                            price: 5910.99,
                            summary: "Reliable and fuel-efficient mid-size sedan",
                            overview: "The 2022 Toyota Camry is a reliable and comfortable mid-size sedan that offers excellent fuel efficiency and a spacious interior. With its sleek design and modern features, its a great choice for daily commutes or road trips.",
                            features: [
                                "Adaptive Cruise Control",
                                "Lane Departure Warning with Steering Assist",
                                "Rear Cross-Traffic Alert",
                                "Apple CarPlay and Android Auto compatibility",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "3",
                            name: "2021 Ford F-150",
                            price: 7910.99,
                            summary: "Powerful and versatile full-size pickup truck",
                            overview: "The 2021 Ford F-150 is a powerful and versatile full-size pickup truck that combines impressive towing and hauling capabilities with a comfortable and feature-packed interior.",
                            features: [
                                "Available EcoBoost engines for improved fuel efficiency",
                                "Pro Trailer Backup Assist for easier trailer maneuverability",
                                "FordPass Connect with Wi-Fi hotspot",
                                "Integrated blind spot information system",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "4",
                            name: "2023 Honda Civic",
                            price: 4910.99,
                            summary: "Stylish and fuel-efficient compact car",
                            overview: "The 2023 Honda Civic is a stylish and fuel-efficient compact car that offers a comfortable ride, responsive handling, and a well-appointed interior.",
                            features: [
                                "Available turbocharged engine for increased performance",
                                "Honda Sensing suite of safety and driver-assistance features",
                                "Apple CarPlay and Android Auto integration",
                                "Spacious trunk and folding rear seats for added cargo space",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "5",
                            name: "2022 Jeep Wrangler",
                            price: 8910.99,
                            summary: "Iconic off-road SUV with open-air adventure",
                            overview: "The 2022 Jeep Wrangler is an iconic off-road SUV that combines rugged capability with modern amenities and a removable top for open-air adventures.",
                            features: [
                                "Available four-wheel drive systems for superior off-road performance",
                                "Removable doors and folding windshield for an open-air experience",
                                "Uconnect infotainment system with off-road pages",
                                "Available safety features like blind-spot monitoring",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "6",
                            name: "2021 BMW 3 Series",
                            price: 7910.99,
                            summary: "Luxurious and sporty compact sedan",
                            overview: "The 2021 BMW 3 Series is a luxurious and sporty compact sedan that offers a perfect blend of performance, style, and premium features.",
                            features: [
                                "Available turbocharged and high-performance engines",
                                "Advanced driver assistance systems like lane departure warning",
                                "Intuitive iDrive infotainment system with touchscreen display",
                                "Comfortable and well-appointed interior with ample passenger space",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "7",
                            name: "2023 Subaru Outback",
                            price: 6910.99,
                            summary: "Rugged and capable all-weather wagon",
                            overview: "The 2023 Subaru Outback is a rugged and capable wagon that offers excellent all-weather performance, ample cargo space, and a comfortable ride.",
                            features: [
                                "Standard Symmetrical All-Wheel Drive for superior traction",
                                "Raised ground clearance for off-road capability",
                                "EyeSight Driver Assist Technology for advanced safety features",
                                "Spacious interior with fold-flat rear seats for increased cargo space",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "8",
                            name: "2022 Kia Sorento",
                            price: 7410.99,
                            summary: "Stylish and versatile mid-size SUV for families",
                            overview: "The 2022 Kia Sorento is a stylish and versatile mid-size SUV that offers a comfortable ride, advanced safety features, and a well-appointed interior.",
                            features: [
                                "Available V6 engine or hybrid powertrain options",
                                "Advanced safety features like forward collision avoidance assist",
                                "Intuitive infotainment system with Apple CarPlay and Android Auto",
                                "Spacious seating for up to seven passengers",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "9",
                            name: "2021 Chevrolet Silverado 1500",
                            price: 8910.99,
                            summary: "Powerful and capable full-size pickup truck",
                            overview: "The 2021 Chevrolet Silverado 1500 is a powerful and capable full-size pickup truck that offers impressive towing and hauling capabilities, as well as a comfortable and tech-savvy interior.",
                            features: [
                                "Available V8 engines for superior towing and hauling performance",
                                "Advanced trailering technology like Trailer Sway Control",
                                "Available 4G LTE Wi-Fi hotspot and infotainment system",
                                "Durable and versatile cargo bed with available features like a power-up/down tailgate",
                            ],
                            imageUrl: "/car.jpg",
                        },
                        {
                            id: "10",
                            name: "2022 Hyundai Santa Fe",
                            price: 6410.99,
                            summary: "Stylish and well-equipped mid-size SUV",
                            overview: "The 2022 Hyundai Santa Fe is a stylish and well-equipped mid-size SUV that offers a comfortable ride, advanced safety features, and a spacious interior.",
                            features: [
                                "Available turbocharged engines for increased performance",
                                "Hyundai SmartSense suite of advanced safety features",
                                "Intuitive infotainment system with Apple CarPlay and Android Auto",
                                "Roomy interior with ample cargo space and available third-row seating",
                            ],
                            imageUrl: "/car.jpg",
                        },
                    ];
                    _i = 0, cars_1 = cars;
                    _c.label = 1;
                case 1:
                    if (!(_i < cars_1.length)) return [3 /*break*/, 7];
                    car = cars_1[_i];
                    return [4 /*yield*/, prisma.car.create({
                            data: {
                                id: car.id,
                                name: car.name,
                                price: car.price,
                                summary: car.summary,
                                overview: car.overview,
                                imageUrl: car.imageUrl,
                            },
                        })];
                case 2:
                    createdCar = _c.sent();
                    _a = 0, _b = car.features;
                    _c.label = 3;
                case 3:
                    if (!(_a < _b.length)) return [3 /*break*/, 6];
                    feature = _b[_a];
                    return [4 /*yield*/, prisma.feature.create({
                            data: {
                                name: feature,
                                carId: createdCar.id,
                            },
                        })];
                case 4:
                    _c.sent();
                    _c.label = 5;
                case 5:
                    _a++;
                    return [3 /*break*/, 3];
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
