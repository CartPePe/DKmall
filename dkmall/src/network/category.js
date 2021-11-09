import {request} from "./request"

export function _getCateGory(){
  return request({
    url:'/category'
  })
}

export function _getSubCategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}