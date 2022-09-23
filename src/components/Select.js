
export default function Select({ options, changeEvent }) {
  return (
    <select onChange={(e) => changeEvent(e.target.value)}>
      <option value="all">All</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}