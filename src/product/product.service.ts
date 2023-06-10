import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Product } from "./product.entity";

@Injectable()
export class ProductService{
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}

  getAllProducts(){
    return this.productRepository.find();
  }

  getProducts(id: number){
    return this.productRepository.findOneBy({ id: id});
  }

  createProduct(product: Product){
    return this.productRepository.save(product);
  }

  updateProduct(id: number, product: Product){
    return this.productRepository.update(id, product);
  }

  removeProduct(id: number){
    return this.productRepository.delete(id);
  }
}