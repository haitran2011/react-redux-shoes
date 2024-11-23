import Cart from "./components/Cart";
import Shop from "./components/Shop";

/* share state between component each other
- pass props drilling
- context api
- state management redux
*/

export default function App() {
  return (
    <div className="mainContent">
      <Shop />

      <Cart />
    </div>
  );
}
