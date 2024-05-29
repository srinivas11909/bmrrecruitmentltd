import Select from 'react-select';

export default function MultiSelect({ options, onChange, value }){
    return <>
       <Select
        options={options}
        isMulti
        onChange={onChange}
        value={value}
        />
    );
    </>
}