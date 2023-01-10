module.exports = function (restClient) {
  let module = {};
  const urlPrefix = 'wishlist/';
  let url = urlPrefix;
  function getResponse(data){
    if(data.code === 200){
      return data.result;
    }
    return false;
  }
  module.pull = (customerToken, userAgent) => {
    url += `pull?token=${customerToken}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.update = (customerToken, wishListItem, userAgent) => {
    url += `update?token=${customerToken}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.delete = (customerToken, wishListItem, userAgent) => {
    url += `delete?token=${customerToken}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.moveToCart = (customerToken, cartId, wishListItem, userAgent) => {
    url += `moveToCart?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  return module;
};
