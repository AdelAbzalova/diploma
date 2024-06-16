import { Select } from "antd";
import { useDispatch } from "react-redux";

const Filter=(props)=> {
  const dispatch = useDispatch();
  const onChange = (value) => {
    dispatch(props.setFilter(value));
  };
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      onChange={onChange}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={props.options}
      value={props.value}
    />
  );
}

export default Filter;
