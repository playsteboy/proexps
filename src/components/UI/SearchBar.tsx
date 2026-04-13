import ActivitySearchModel from "../../models/ActivitySearchModel";

export default function SearchBar({ 
  searchTerm, 
  setSearchTerm 
}: { 
  searchTerm: ActivitySearchModel, 
  setSearchTerm: (searchTerm: ActivitySearchModel) => void 
}) {

  const handleUpdate = (updater: (model: ActivitySearchModel) => void) => {
    const newModel = Object.assign(new ActivitySearchModel(), searchTerm);
    updater(newModel);
    setSearchTerm(newModel);
  };

  return (
    <div className="search-bar flex flex-row gap-[2%] w-full justify-center h-[1/6]">
        <input
            type="text"
            placeholder="Search for a name..."
            value={searchTerm.getName() || ''}
            onChange={(e) => handleUpdate(m => m.setName(e.target.value))}
            className="w-1/6 bg-gray-50 border border-gray-200 text-gray-800 p-[0.75%] rounded text-sm "
        />
        <input
            type="number"
            placeholder="Money In"
            value={searchTerm.getMoneyIn() ?? ''}
            onChange={(e) => {
    const val = e.target.value === "" ? undefined : Number(e.target.value);
    handleUpdate(m => m.setMoneyIn(val));
}}
            className="w-1/6 bg-gray-50 border border-gray-200 text-gray-800 p-[0.75%] rounded text-sm "
        />
        <input
            type="number"
            placeholder="Money Out"
            value={searchTerm.getMoneyOut() ?? ''}
            onChange={(e) => {
    const val = e.target.value === "" ? undefined : Number(e.target.value);
    handleUpdate(m => m.setMoneyIn(val));
}}
            className="w-1/6 bg-gray-50 border border-gray-200 text-gray-800 p-[0.75%] rounded text-sm"
        />
        <input
            type="date"
            placeholder="Date"
            value={searchTerm.getDate() ? searchTerm.getDate()!.toISOString().split('T')[0] : ''}
            onChange={(e) => {
    const val = e.target.value === "" ? undefined : new Date(e.target.value);
    handleUpdate(m => m.setDate(val));
}}
            className="w-1/6 bg-gray-50 border border-gray-200 text-gray-800 p-[0.75%] rounded text-sm"
        />
<select 
    name="currency" 
    aria-label="Select currency unit"
    value={searchTerm.getCurrency() || ""} 
    onChange={(e) => {
        const val = e.target.value;
        const cleanValue = (val === "" || val === "undefined") ? undefined : val;
        handleUpdate(m => m.setCurrency(cleanValue));
    }}
    className="p-[0.75%] text-sm bg-gray-50 border border-gray-200 text-gray-800 rounded"
>
    <option value="">None</option>
    <option value="MGA">Ar</option>
    <option value="MGF">Fmg</option>
    <option value="USD">$</option>
    <option value="EUR">€</option>
</select>

    </div>
  );
}