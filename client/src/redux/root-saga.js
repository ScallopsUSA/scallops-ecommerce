import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { siteSagas } from './site/site.sagas';

export default function* rootSaga() {
    yield all([
        call( cartSagas ),
        call( shopSagas ),
        call( siteSagas ),
        call( userSagas ),
    ]);
};