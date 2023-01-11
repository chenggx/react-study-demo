import React, { Component } from 'react'
import { ConfigProvider, Button } from 'antd';

export default class App extends Component {
  render() {
    return (
      <ConfigProvider
    theme={{
      token:{
        colorPrimary:'#00b96b'
      }
    }}
  >
    <Button type="primary">按钮1</Button>
  </ConfigProvider>
    )
  }
}
