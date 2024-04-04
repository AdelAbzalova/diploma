import { Spin } from 'antd';

const Loader = () => (
  <Spin tip="Loading" size="large" style={{ marginTop: "60px" }}>
    <div className="content" />
  </Spin>
);

export default Loader;