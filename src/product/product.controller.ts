import { Controller, Get, Post, Patch, Delete, Body, Headers, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";

@Controller('product')
export class ProductController{
  constructor(
    private readonly productService: ProductService
  ){}

 @Get('list')
 getAllProducts(){
  return this.productService.getAllProducts();
 }

 @Get(':id')
 getProducts(@Param('id') id: number){
  return this.productService.getProducts(id);
 }

 @Post('create')
 createProduct(@Body() product: Product){
  return this.productService.createProduct(product);
 }

 @Patch(':id')
 updatePatch(@Param('id') id: number, @Body() product: Product){
  return this.productService.updateProduct(+id, product);
 }

 @Delete(':id')
 removeProduct(@Param('id') id: number){
  return this.productService.removeProduct(id);
 }
}