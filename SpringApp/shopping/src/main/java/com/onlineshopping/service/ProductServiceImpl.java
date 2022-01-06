package com.onlineshopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlineshopping.dao.ProductDAO;
import com.onlineshopping.entity.Product;
import com.onlineshopping.exception.NoProductFoundException;

@Component
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDAO productDao;

	@Override
	public Product addProduct(Product product) {

		return productDao.save(product);

	}

	@Override
	public void deleteProduct(Integer prodId) {

		productDao.deleteById(prodId);
	}

	@Override
	public Product getProdById(Integer prodId) {

		return productDao.findById(prodId).orElseThrow(NoProductFoundException::new);
	}

	@Override
	public List<Product> getAllProduct() {

		return productDao.findAll();

	}

	@Override
	public Product updateProduct(Product product) {

		Integer productId = product.getProdId();
		Product pd = productDao.findById(productId).get();

		pd.setProdPrice(product.getProdPrice());
		pd.setProdQuantity(product.getProdQuantity());

		return productDao.save(pd);

	}

	@Override
	public List<Product> findByName(String prodName) {
		if (prodName != null) {

			return productDao.searchByName(prodName);
		}
		return productDao.findAll();

	}

}
