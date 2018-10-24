import React from 'react';
import CharacterList from './CharacterList';
import Search from './Search';
import Filters from './Filters';



const DashboardPage = () =>
(
    <div>
      <Search />
      <Filters />
      <CharacterList />
    </div>
);

export default DashboardPage;