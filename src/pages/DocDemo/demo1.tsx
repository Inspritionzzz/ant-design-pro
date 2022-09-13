// @ts-ignore
import { createRoot } from 'react-dom/client';

// @ts-ignore
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
