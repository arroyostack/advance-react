
import { RegularList } from "./components/list-layout/list-parent/RegularList";
import { SmallAuthorList } from "./components/list-layout/authors/SmallAuthorList";
import { LargeAuthorList } from "./components/list-layout/authors/LargeAuthorList";
import { SmallBookList } from "./components/list-layout/books/SmallBookList.jsx";
import { LargeBookList } from './components/list-layout/books/LargeBookList';

import { authors } from "./data/authors";
import { books } from './data/books.js';


const App = () => {

  return (
    <>
      <RegularList
        sourceName={ 'author' }
        ItemComponent={ LargeAuthorList }
        items={ authors } />
      <RegularList
        sourceName={ 'author' }
        ItemComponent={ SmallAuthorList }
        items={ authors } />
      <RegularList
        sourceName={ 'book' }
        ItemComponent={ SmallBookList }
        items={ books } />
      <RegularList
        sourceName={ 'book' }
        ItemComponent={ SmallBookList }
        items={ books } />
    </>
  );
};

export default App;
