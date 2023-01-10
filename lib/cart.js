function isNumeric(val) {
  return Number(parseFloat(val)).toString() === val;
}

module.exports = function (restClient) {
  let module = {};
  const urlPrefix = 'cart/';
  let url = urlPrefix;
  function getResponse(data){
    if(data.code === 200){
      return data.result;
    }
    return false;
  }
  module.create = (customerToken, userAgent, campaignToken = undefined) => {
    url += `create?token=${customerToken}`;
    if (campaignToken) {
      url += `&campaignToken=${campaignToken}`;
    }
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.update = (customerToken, cartId, cartItem, userAgent) => {
    url += `update?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { cartItem: cartItem }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.applyCoupon = (customerToken, cartId, coupon, userAgent) => {
    url += `applyCoupon?token=${customerToken}&cartId=${cartId}&coupon=${coupon}`;
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.deleteCoupon = (customerToken, cartId, userAgent) => {
    url += `deleteCoupon?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.delete = (customerToken, cartId, cartItem, userAgent) => {
    url += `delete?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { cartItem: cartItem }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.pull = (customerToken, cartId, userAgent) => {
    url += `pull?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.totals = (customerToken, cartId, userAgent) => {
    url += `totals?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.shippingInformation = (customerToken, cartId, body, userAgent) => {
    url += `totals?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, body, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.shippingMethods = (customerToken, cartId, address, userAgent) => {
    url += `shippingMethods?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { address: address }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.paymentMethods = (customerToken, cartId, userAgent) => {
    url += `paymentMethods?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.getCoupon = (customerToken, cartId, userAgent) => {
    url += `coupon?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  return module;
}
