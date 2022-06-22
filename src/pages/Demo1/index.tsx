import React from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import { Access } from '@@/exports';
import { Button } from 'antd';

export default function Page() {
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例2',
      }}
    >
      <Button>只有 Admin 可以看到这个按钮</Button>
    </PageContainer>
  );
}
