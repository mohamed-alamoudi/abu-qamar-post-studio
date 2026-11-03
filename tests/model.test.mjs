import {test} from 'node:test';import assert from 'node:assert/strict';import {discount,caption,csv} from '../lib/model.mjs';
test('discount requires valid actual price reduction',()=>{assert.equal(discount('8','10'),20);for(const [a,b] of [['','10'],['10',''],['-1','10'],['12','10'],['x','10'],['0','0']])assert.equal(discount(a,b),null)});
test('caption includes only supplied product details and allowed hashtags',()=>{const c=caption([{name:'أرز',weight:'',price:''}],'عنوان المتجر');assert.ok(c.includes('أرز'));assert.ok(!c.includes('شيكل'));assert.ok(c.includes('#غزة'));assert.ok(!c.includes('#نابلس'))});
test('CSV escapes quotes and commas',()=>{assert.ok(csv([{name:'منتج "أ", ب',weight:'1',price:'5'}]).includes('"منتج ""أ"", ب"'))});
