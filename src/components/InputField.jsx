import { CFormInput } from '@coreui/react';

export const InputField = ({ placeholder, field }) => {
  return (
    <CFormInput className="w-50 mb-3" {...field} placeholder={placeholder} />
  );
};
