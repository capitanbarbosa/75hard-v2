export default function Checkbox({ value, onChange = () => {} }) {
  return (
    <input
      type="checkbox"
      checked={Boolean(value)}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
}
