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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategorySevice = exports.getCategoriesService = exports.updateCategoryService = exports.createCategoryService = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const createCategoryService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    //check if category already exists
    const existCategory = yield category_model_1.default.findOne({ name });
    if (existCategory) {
        throw new errorHandler_1.default(400, "Category already exists");
    }
    //create category
    const category = yield category_model_1.default.create({ name });
    return category;
});
exports.createCategoryService = createCategoryService;
const updateCategoryService = (id, isActive) => __awaiter(void 0, void 0, void 0, function* () {
    //check if category exists
    const category = yield category_model_1.default.findById(id);
    if (!category) {
        throw new errorHandler_1.default(400, "Category not found");
    }
    //update category
    category.isActive = isActive;
    yield category.save();
    return category;
});
exports.updateCategoryService = updateCategoryService;
const getCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_model_1.default.find();
    return categories;
});
exports.getCategoriesService = getCategoriesService;
const deleteCategorySevice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.findByIdAndDelete(id);
});
exports.deleteCategorySevice = deleteCategorySevice;
