export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeFeature = price => {
    // dispatch an action here to remove an item
    return{
      type: REMOVE_ITEM,
      payload: price
    }
  };

  export const buyItem = price => {
    // dipsatch an action here to add an item
    console.log("buyItem")
    return{
      type: BUY_ITEM,
      payload: price
    }
  };



