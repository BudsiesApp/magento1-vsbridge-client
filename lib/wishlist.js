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
  module.pull = (userAgent, customerToken) => {
    url += `pull?token=${customerToken}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.update = (userAgent, customerToken, wishListItem) => {
    url += `update?token=${customerToken}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.delete = (userAgent, customerToken, wishListItem) => {
    url += `delete?token=${customerToken}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.moveToCart = (userAgent, customerToken, cartId, wishListItem) => {
    url += `moveToCart?token=${customerToken}&cartId=${cartId}`;
    return restClient.post(url, {wishListItem: wishListItem}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  return module;
};
