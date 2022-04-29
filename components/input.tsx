const Input = ({
  id,
  name,
  placeholder,
  required,
  type,
  error,
  register,
  touched,
  ...rest
}: any) => {
  return (
    <>
        <input
        {...register(name)}
        id={id}
        data-testid="input-component"
        placeholder={placeholder}
        required={required}
        type={type}
        name={name}
        {...rest}
        />
        {error && (<p>{error}</p>)}
    </>
  );
};

export default Input;
