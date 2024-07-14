export default function Dropdown({items}) {
    return <>
       <select className="border border-gray-400 outline-none rounded-md py-2 px-3 bg-gray-100 text-base mr-4">
          {items.map((opt, index) => <option value={opt.val} key={index}>{opt.name}</option>)}
       </select>
    </>
}