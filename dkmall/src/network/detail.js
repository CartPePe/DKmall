import {request} from "@/network/request";
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.relPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.logo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods

    }
}
/**商品推荐信息 */
export function getRecommends(){
    return request({
        url:'/recommend'
    })
}


/**商品尺码信息 */
export class GoodParam{
    constructor(info,rule){
        this.info=info.set,
          this.rule=rule
    }
}

/**要加入购物车的信息 */
export class product{
    constructor(iid,itemInfo,skuInfo){
        this.iid=iid,
          this.img=itemInfo.topImages[0];
        this.priceRange=skuInfo.priceRange;//价格区间
        this.lowNowPrice=itemInfo.lowNowPrice;//价格
        this.title=itemInfo.title;
        this.rule=skuInfo.props[1];//尺码
        this.styleColor=skuInfo.props[0];//颜色
        this.totalStock=skuInfo.totalStock;
        this.count=1;//数量
    }
}

/**加入购物车的商品信息 */
export class cartProduct{
    constructor(iid,img,lowNowPrice,title,rule,styleColor,count){
        this.iid=iid,
          this.checked=true,
          this.img=img;
        this.lowNowPrice=lowNowPrice;//价格
        this.title=title;
        this.rule=rule;//尺码
        this.styleColor=styleColor;//颜色
        this.count=count;//数量
    }
}