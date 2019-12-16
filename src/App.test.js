import React from 'react';
import { render } from '@testing-library/react';

import ContactUtil from "./ContactUtil";

describe('ContactUtils', () => {
  describe('getFirstName', () => {
  	describe('When object is undefined', () => {
  		it("returns empty string", () => {
  			expect(ContactUtil.getFirstName(undefined)).toEqual('')
  		})
  	})
  	describe('When object is defined', () => {
  		it("returns firstName", () => {
  			expect(ContactUtil.getFirstName({firstName: 'test'})).toEqual('test')
  		})
  	})
  })

  describe('getLastName', () => {
  	describe('When object is undefined', () => {
  		it("returns empty string", () => {
  			expect(ContactUtil.getLastName(undefined)).toEqual('')
  		})
  	})
  	describe('When object is defined', () => {
  		it("returns lastName", () => {
  			expect(ContactUtil.getLastName({lastName: 'test'})).toEqual('test')
  		})
  	})
  })

  describe('getEmail', () => {
  	describe('When object is undefined', () => {
  		it("returns empty string", () => {
  			expect(ContactUtil.getEmail(undefined)).toEqual('')
  		})
  	})
  	describe('When object is defined', () => {
  		it("returns email", () => {
  			expect(ContactUtil.getEmail({email: 'test@test.com'})).toEqual('test@test.com')
  		})
  	})
  })

  describe('getPhoneNo', () => {
  	describe('When object is undefined', () => {
  		it("returns empty string", () => {
  			expect(ContactUtil.getPhoneNo(undefined)).toEqual('')
  		})
  	})
  	describe('When object is defined', () => {
  		it("returns phoneNo", () => {
  			expect(ContactUtil.getPhoneNo({phoneNo: '8899889988'})).toEqual('8899889988')
  		})
  	})
  })

  describe('getId', () => {
  	describe('When object is undefined', () => {
  		it("returns empty string", () => {
  			expect(ContactUtil.getId(undefined)).toEqual('')
  		})
  	})
  	describe('When object is defined', () => {
  		it("returns id", () => {
  			expect(ContactUtil.getId({id: 10})).toEqual(10)
  		})
  	})
  })

  describe('showCreateBtn', () => {
  	describe('when all data is empty', () => {
  		it("returns false", () => {
  			expect(ContactUtil.showCreateBtn(undefined, undefined, undefined, undefined)).toEqual(false)
  		})
  	})
  	describe('when some data is empty', () => {
  		it("returns false", () => {
  			expect(ContactUtil.showCreateBtn("test", "testtest", undefined, undefined)).toEqual(false)
  		})
  	})
  	describe('When all is defined', () => {
  		it("returns true", () => {
  			expect(ContactUtil.showCreateBtn("test", "testtest", "test@test.com", "9988776677")).toEqual(true)
  		})
  	})
  })
})

