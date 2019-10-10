import React from 'react';
import 'components/App.css';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

function App() {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
