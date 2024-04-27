import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './components/CustomHooks/UseLocalStorage/Page';
import UseDebouncePage from './components/CustomHooks/useDebounce/UseDebouncePage';
import UseThrottlePage from './components/CustomHooks/useThrottle/UseThrottlePage';
import HOCMain from './components/HOC/HOCMain';
import UseCallbackComp from './components/UseCallback/UseCallbackComp';
import UseMemoComp from './components/UseMemo/UseMemoComp';
import UseRef1 from './components/UseRef/UseRef1';
import UseRef2 from './components/UseRef/UseRef2';
import UseRef3 from './components/UseRef/UseRef3';
import UserReducerComp from './components/UserReducer/UserReducerComp';
import DebouncePolyfill from './debouncePolyfill/DebouncePolyfill';
import ThrottlePolyfill from './throttlePolyfill/ThrottlePolyfill';

function App() {
  return (
    <Routes>
      <Route element={<UseMemoComp />} path='/UseMemoComp' />
      <Route element={<UseCallbackComp />} path='/UseCallbackComp' />
      <Route element={<UseRef1 />} path='/UseRef1' />
      <Route element={<UseRef2 />} path='/UseRef2' />
      <Route element={<UseRef3 />} path='/UseRef3' />
      <Route element={<Page />} path='/Page' />
      <Route element={<HOCMain />} path='/HOCMain' />
      <Route element={<UserReducerComp />} path='/UserReducerComp' />
      <Route element={<DebouncePolyfill />} path='/DebouncePolyfill' />
      <Route element={<ThrottlePolyfill />} path='/ThrottlePolyfill' />
      <Route element={<UseDebouncePage />} path='/UseDebouncePage' />
      <Route element={<UseThrottlePage />} path='/UseThrottlePage' />
    </Routes>
  );
}

export default App;
