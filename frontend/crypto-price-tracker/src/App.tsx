import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, AppDispatch, RootState } from "./app/store";
import CryptoTable from "./components/CryptoTable";
import { startMockUpdates } from "./utils/mockWebSocket";

const AppContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoList = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    startMockUpdates(dispatch, cryptoList);
  }, [dispatch, cryptoList]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 text-center text-2xl font-bold text-gray-800">
        Crypto Price Tracker
      </header>
      <main className="px-4">
        <CryptoTable />
      </main>
    </div>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
