import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filtersReducer } from '@entities/Filters';
import { giftReducer } from '@entities/Gift';
import { campaignReducer } from '@entities/Campaign';

const rootReducer = combineReducers({
  gifts: giftReducer,
  campaigns: campaignReducer,
  filters: filtersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
