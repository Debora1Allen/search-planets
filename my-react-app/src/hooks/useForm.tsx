import { useCallback, useState } from 'react';

function useForm<T>(initialForm: T) {
  const [form, setForm] = useState(initialForm);

  const handleChangeOnForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = useCallback((newForm: T) => {
    setForm(newForm);
  }, []);

  return { form, handleChangeOnForm, resetForm };
}

export default useForm;