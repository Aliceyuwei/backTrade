import _ from 'lodash';
import config from '@/config/config';
// import sportConfig from '@/config/sportConfig';

export const getFoo = state => {
    return state.common.bar;
};
// 取得現在環境
export const getCurEnv = state => {
    try {
        return state.common.ajaxData.info.env;
    } catch (e) {
        return undefined;
    }
};
// 取得現在產品
export const getCurProduct = state => {
    try {
        const product = state.common.ajaxData.info.product;
        switch (product) {
            case 'asia365':
                return 'Asia365';
            case 'xbb':
                return 'XBB';
            default:
                return product;
        }
    } catch (e) {
        return undefined;
    }
};

// export const commonGetSportList = state => {
//     try {
//         const _outputList = [];
//         const _sportList = state.common.ajaxData.info.sports;
//         _.forEach(_sportList, (value) => {
//             _outputList.push(value);
//         });
//         const soccer = _outputList.filter(sport => +sport.id === 1);
//         const basketball = _outputList.filter(sport => +sport.id === 2);
//         const others = _outputList.filter(sport => +sport.id !== 1 && +sport.id !== 2 && sportConfig[+sport.id])
//         .sort((a, b) => (sportConfig[a.id].order > sportConfig[b.id].order ? 1 : -1));
//         return [...soccer, ...basketball, ...others];
//         // _outputList.sort((a, b) => {
//         //     return a.id - b.id;
//         // });
//         // return _outputList;
//     } catch (e) {
//         return [];
//     }
// };
export const commonGetSportMap = state => {
    try {
        const _sportList = state.common.ajaxData.info.sports;
        const _outputList = {};
        _.forEach(_sportList, value => {
            _outputList[value.id] = value;
        });
        return _outputList;
    } catch (e) {
        return {};
    }
};

// 根據權限過濾左側列表
export const commonGetNav = state => {
    const nav = config.nav;
    if (!state.common.ajaxData.info) return nav;
    const perNav = _.cloneDeep(nav);
    const permission = state.common.ajaxData.info.permission;
    Object.keys(nav).forEach(item => {
        if (nav[item].permissionKey) {
            if (permission[nav[item].permissionKey] === 'N') {
                delete perNav[item];
            }
        } else {
            if (nav[item].sub) {
                perNav[item].sub = nav[item].sub.filter(sItem => {
                    return permission[sItem.permissionKey] !== 'N';
                });
                if (perNav[item].sub.length === 0) delete perNav[item];
            }
        }
    });
    return perNav;
    /*
        return state.config.nav;
    */
};
export const commonGetFavoriteArray = state => {
    const favoriteObject = state.common.favoriteObject || {};
    return Object.keys(favoriteObject).map(item => item);
};