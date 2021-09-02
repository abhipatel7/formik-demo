import Select from 'react-select';

export const SelectField = ({ placeholder, options, field, form }) => {
  return (
    <>
      <Select
        className="w-50"
        options={options}
        name={field.name}
        placeholder={placeholder}
        value={
          options ? options.find((option) => option.value === field.value) : ''
        }
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
      />
    </>
  );
};
