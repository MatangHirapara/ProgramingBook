import DataTables from './pages/PrimeReactTable/DataTable';
import React, { Component } from "react";
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RelatedBook from './pages/RelatedBook';

function App() {
  // const withHigherOrderProp = (WrappedComponent) => {
  //   return class WithHigherOrderProp extends Component {
  //     render() {
  //       return <WrappedComponent {...this.props} isHighOrder={true} />;
  //     }
  //   };
  // };

  // const DisplayComponent = (props) => {
  //   return (
  //     <div>
  //       <p>This is the wrapped component.</p>
  //       <p>isHighOrder Prop: {props.isHighOrder ? "true" : "false"}</p>
  //     </div>
  //   );
  // };

  // const ComponentWithHigherOrderProp = withHigherOrderProp(DisplayComponent);
  // Using the HOC to enhance the DisplayComponent
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DataTables />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/:id" element={<RelatedBook />} />
        </Routes>
      </Router>

      {/* <ComponentWithHigherOrderProp />; */}
    </div>

  )

}

export default App;
