export const actionTypes = {
    setData:'movies/setData'
}

export function setData(datas){
    return {type:actionTypes.setData, payload:datas}
}