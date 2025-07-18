const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type TipPercentageFormProps = {
   setTip: React.Dispatch<React.SetStateAction<number>>,
   tip: number,
}
function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOption => (
          <div className="flex gap-2" key={tipOption.id}>
            <label  className="cursor-pointer" 
              htmlFor={tipOption.id}>{tipOption.label}</label>
            <input type="radio" className="cursor-pointer"
              id={tipOption.id}
              name="tipOption"
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)}
              checked={tipOption.value === tip}
              />
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentageForm