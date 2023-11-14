import "./App.css";
import Homepage from "./Pages/Homepage";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/", element: <Homepage /> },
    ],
  },
]);
//return <RouterProvider router={router} />;
*/
function App() {
  //return <RouterProvider router={router} />;
  
  return (
    <div className="App">
      <Homepage></Homepage>
    </div>
  );
  
}

export default App;
