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
  module.create = (userAgent, customerToken, campaignToken = undefined) => {
    url += `create?token=${customerToken}`;
    if (campaignToken) {
      url += `&campaignToken=${campaignToken}`;
    }
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.update = (userAgent, customerToken, cartId, cartItem) => {
    url += `update?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { cartItem: cartItem }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.applyCoupon = (userAgent, customerToken, cartId, coupon) => {
    url += `applyCoupon?token=${customerToken}&cartId=${cartId}&coupon=${coupon}`;
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.deleteCoupon = (userAgent, customerToken, cartId) => {
    url += `deleteCoupon?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.delete = (userAgent, customerToken, cartId, cartItem) => {
    url += `delete?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { cartItem: cartItem }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.pull = (userAgent, customerToken, cartId) => {
    url += `pull?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.totals = (userAgent, customerToken, cartId) => {
    url += `totals?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.shippingInformation = (userAgent, customerToken, cartId, body) => {
    url += `totals?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, body, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.shippingMethods = (userAgent, customerToken, cartId, address) => {
    url += `shippingMethods?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, { address: address }, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.paymentMethods = (userAgent, customerToken, cartId) => {
    url += `paymentMethods?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.getCoupon = (userAgent, customerToken, cartId) => {
    url += `coupon?token=${customerToken}&cartId=${cartId}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  return module;
}
