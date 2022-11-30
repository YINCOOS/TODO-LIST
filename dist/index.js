"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log("Database connected successfully");
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/', todoRoutes_1.default);
// app.use('/',)
const Port = 4000;
app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
});
