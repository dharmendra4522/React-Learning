const useToggle = (initalValue = false) => {
    const [value, setValue] = useState(initalValue);

    const toggle = () => setValue((v) => !v);

    return [value, toggle];
};

export default useToggle;