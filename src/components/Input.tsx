type InputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({ value, onChange }: InputProps) {
  return (
    <input type="text" value={value} onChange={onChange} />
  )

}