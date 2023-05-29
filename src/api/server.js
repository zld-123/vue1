// 导入requery.js使用接口进行封装
import requry from "@/utils/requry";

//按需导出一个可复用的api接口
export const getArticleList = (_page, _limit) => {
    return requry.get('/articles', {
        params: {
            _page,
            _limit
        }
    })
}
