import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchData} from "./redux/thunks";
import Select from "./components/Select";
import MultiSelect from "./components/MultiSelect";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data when the component mounts
    // @ts-ignore
      dispatch(fetchData());
  }, [dispatch]);

  return (
      <div>
        <Select />
        <MultiSelect />
      </div>
  );
};

export default App;