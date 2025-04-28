import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState('');
  const [editIdx, setEditIdx] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const updated = [...ingredients];
    editIdx !== null ? updated.splice(editIdx, 1, input.trim()) : updated.push(input.trim());
    setIngredients(updated);
    setInput('');
    setEditIdx(null);
  };

  const handleEdit = (i) => {
    setInput(ingredients[i]);
    setEditIdx(i);
  };

  const handleRemove = (i) => setIngredients(ingredients.filter((_, idx) => idx !== i));

  return (
    <div style={{ padding: 20 }}>
      <h2>Recipe Ingredients Manager</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ingredient" />
        <button type="submit">{editIdx !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {ingredients.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
